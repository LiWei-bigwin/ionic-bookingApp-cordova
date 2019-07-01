import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { PopoverController, Platform, NavParams, ViewController, Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ParseDbBookProvider } from '../../providers/parse-db-book/parse-db-book';
import { DbServiceProvider } from '../../providers/db-service/db-service';

import { SettingsPage } from '../settings/settings';
import { TableOfContentsPage } from '../table-of-contents/table-of-contents';
import { BookmarksPage } from '../bookmarks/bookmarks';
import { BookMark, BooksService, Highlight, LastLocation, Book } from '../../providers/books-service/books-service';
import { EventListener } from './event-listener';
import { DECELERATION_FRICTION } from 'ionic-angular/components/picker/picker-options';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { HomePage } from '../home-pages/home/home';
import { SettingPage } from '../setting/setting';
import { BookDetailsModalPage } from '../book-details-modal/book-details-modal';


declare var ePub: any;
declare var window: any;

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})

export class BookPage {
  eventListener: EventListener;
  rendition: any;
  book: any;
  bookParam: Book;
  bookmarks: BookMark[] = [];
  highlights: Highlight[] = [];
  params: any = { bookmarked: false, excerpt: "", position: undefined, showToolbars: true };
  toc: any = [];
  lastlocation: LastLocation;

  constructor(
    public popoverCtrl: PopoverController,
    public modalbook: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public events: Events,
    public navParams: NavParams,
    private dbService: DbServiceProvider,
    public alertCtrl: AlertController,
    private ref: ChangeDetectorRef
  ) {

    this.bookParam = this.navParams.get('book');
    this.platform.ready().then(() => {
      this.book = ePub(this.bookParam.file);

      this.book.ready.then(() => {
        this.book.locations.generate(1500).then((locations) => {
          const currentLocation = this.rendition.currentLocation();
          this.params.position = currentLocation.start ? this.book.locations.percentageFromCfi(currentLocation.start.cfi) : 0.001;
          // console.log("locations", locations);
          // this.ref.detectChanges();
        });
      });
      this.rendition = this.book.renderTo("book", {
        spread: "always"
      });

      this.dbService.getlastLocationByBookId(this.bookParam.id).then((location) => {
        this.lastlocation = location || {
          bookid: this.bookParam.id
        };

        this.rendition.display(this.lastlocation.location).then(() => {
          this.dbService.updateOpenedBook(this.bookParam.id);
          this._applyStyle();
          this._appendDbHighlights();
        });
      });

      this._registerThemes();
      this.book.loaded.navigation.then((navigation) => {
        this.toc = navigation.toc;
      });

      this.rendition.on('relocated', (location) => {
        this.lastlocation.location = this.rendition.location.start.cfi;
        this._addlastLocation();
        const currentLocation = this.rendition.currentLocation();
        this.params.position = this.params.position != undefined ? this.book.locations.percentageFromCfi(currentLocation.start.cfi) : undefined;
        this._getCurrentLocationExcerpt(location);
        this._checkIfBookmarked(location);
        // console.log(this.rendition.manager.container.firstChild.firstChild.contentDocument);

        this._addSwipeEvents(this.rendition.manager.container.firstChild.firstChild.contentDocument);
        this.ref.detectChanges();
      });

      // Apply a class to selected text
      this.rendition.on("selected", (cfiRange, contents) => {
        this.addHighlight(cfiRange, contents);
      });
    });
    this._subscribeToEvents();
  }

  private _applyStyle() {
    this.dbService.getAll(['theme', 'font-size', 'font-family']).then((keysVals) => {
      if (keysVals != undefined) {
        keysVals.theme && this.rendition.themes.select(keysVals.theme);
        keysVals['font-family'] && this.rendition.themes.override("font-family", keysVals['font-family']);
        keysVals['font-size'] && this.rendition.themes.override("font-size", keysVals['font-size']);
      }
    });
  }

  ionViewWillEnter() {
    this.dbService.getBookmarksByBookId(this.bookParam.id).then((bookmarks) => {
      this.bookmarks = bookmarks || [];
      console.log(this.bookmarks);
    });
  }

  private _appendDbHighlights() {
    this.dbService.getHighlightsByBookId(this.bookParam.id).then((highlights) => {
      this.highlights = highlights;
      highlights.forEach((highlight) => {
        this.rendition.annotations.highlight(highlight.cfiRange, { text: highlight.text }, (e) => {
          this.highlightPopup(e);
        });
      });
    });
  }

  private _addlastLocation() {
    this.dbService.addlastLocation(this.lastlocation);
  }

  private addHighlight(cfiRange: any, contents: any) {
    this.rendition.annotations.highlight(cfiRange, { text: contents.window.getSelection().toString() }, (e) => {
      this.highlightPopup(e);
      console.log(e);
    });
    let ranges = cfiRange.split(',/');
    let highlight: Highlight = {
      bookid: this.bookParam.id,
      text: contents.window.getSelection().toString(),
      location: ranges[0] + "/" + ranges[1] + ")",
      position: this.params.position,
      cfiRange: cfiRange
    };
    this.highlights.push(highlight);
    this.dbService.addHighlight(highlight);
    contents.window.getSelection().removeAllRanges();
  }

  private highlightPopup(e: any) {
    const confirm = this.alertCtrl.create({
      title: 'Highlight',
      message: e.target.dataset.text,
      buttons: [
        {
          text: "Close",
          role: "cancel",
          handler: data => {
            console.log('Cancel clicked');
          },
        },
        {
          text: "Delete",
          handler: () => {
            let highlight = new Highlight();
            highlight.bookid = this.bookParam.id;
            highlight.cfiRange = e.target.dataset.epubcfi;
            highlight.text = e.target.dataset.text;
            this.events.publish('delete:highlight', highlight);
            console.log('Delete clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  goToLocation() {
    const prompt = this.alertCtrl.create({
      title: 'Go To Location',
      message: "Enter a location in % in order to navigate to",
      inputs: [
        {
          name: 'location',
          placeholder: 'Location in %'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Go To',
          handler: data => {
            this.rendition.display(this.book.locations.cfiFromPercentage(data.location / 100));
          }
        }
      ]
    });
    prompt.present();
  }

  _registerThemes(): any {
    this.rendition.themes.register("white", { "body": { "background-color": 'rgb(255, 255, 255)', "color": "rgb(0,0,0)" } })
    this.rendition.themes.register("tan", { "body": { "background-color": "rgb(249,241,228)", "color": "rgb(0,0,0)" } })
    this.rendition.themes.register("grey", { "body": { "background-color": "rgb(76,75,80)", "color": "rgb(255,255,255)" } })
    this.rendition.themes.register("black", { "body": { "background-color": "rgb(0,0,0)", "color": "rgb(255,255,255)" } })
  }

  private _getCurrentLocationExcerpt(location: any) {
    let startCfi = new ePub.CFI(location.start.cfi);
    let endCfi = new ePub.CFI(location.end.cfi);
    let startRange = startCfi.toRange(this.rendition.manager.container.children[0].children[0].contentDocument);
    let endRange = endCfi.toRange(this.rendition.manager.container.children[0].children[0].contentDocument);

    let fullRange = document.createRange();
    if (startRange) {
      fullRange.setStart(startRange.startContainer, startRange.startOffset);
    }
    if (endRange) {
      fullRange.setEnd(endRange.startContainer, endRange.startOffset);
    }
    this.params.excerpt = fullRange.toString();
  }

  private _addSwipeEvents(renderer) {
    this.eventListener = new EventListener(renderer);
    // this.eventListener.removeContextMenu();
    this.eventListener.onLeft = () => { this.prev(); };
    this.eventListener.onRight = () => { this.next(); };
    this.eventListener.onCenter = () => { return this.toggleToolbars(); };
    this.eventListener.run();
  }

  _subscribeToEvents() {
    this.events.subscribe('select:location', (location) => {
      this.rendition.display(location);
    });

    this.events.subscribe('delete:highlight', (highlight) => {
      this.dbService.deleteHighlight(highlight);
      this.rendition.annotations.remove(highlight.cfiRange);
      let index = this.highlights.map(highlights => highlights.cfiRange).indexOf(highlight.cfiRange);
      this.highlights.splice(index, 1);
    });

    this.events.subscribe('delete:bookmark', (bookmark) => {
      let curentLocation = this.rendition.location.start.cfi;
      if (curentLocation == bookmark.location) {
        this.params.bookmarked = !this.params.bookmarked
      }
      this.removeBookmark(bookmark);
    });

    // settings: change style
    this.events.subscribe('select:theme', (theme) => {
      this.rendition.themes.select(theme);
      this.dbService.set('theme', theme);
    });

    this.events.subscribe('select:font-family', (family) => {
      this.rendition.themes.override("font-family", family);
      this.dbService.set('font-family', family);
    });

    this.events.subscribe('select:font-size', (size) => {
      this.rendition.themes.override("font-size", size);
      this.dbService.set('font-size', size);
    });
  }

  _checkIfBookmarked(location) {
    let locations = this.bookmarks.map(bookmark => bookmark.location);
    this.params.bookmarked = locations.indexOf(location.start.cfi) > -1;
  }

  prev() {
    this.rendition.prev();
  }

  next() {
    this.rendition.next();
  }

  changePage(event) {
    if (event.velocityX < 0) {
      this.next();
    }
    else {
      this.prev();
    }
  }

  settings(ev) {
    let popover = this.popoverCtrl.create(SettingPage, {
    });
    popover.present({ ev });
  }

  toggleToolbars() {
    this.params.showToolbars = !this.params.showToolbars;
    this.ref.detectChanges();
  }

  backToBookList() {
    this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: "back" });
  }

  openModalBookDetails() {
    const myModalBook = this.modalbook.create(BookDetailsModalPage, {
      toc: this.toc,
      bookmarks: this.bookmarks,
      highlights: this.highlights
    });
    myModalBook.onDidDismiss(() => {
      this.ionViewWillEnter();
    });
    myModalBook.present();
  }

  bookmarking() {
    let curentLocation = this.rendition.location.start.cfi;
    let bookmark: BookMark = {
      bookid: this.bookParam.id,
      location: curentLocation,
      position: this.params.position,
      excerpt: this.params.excerpt
    }
    if (!this.params.bookmarked) {
      this.bookmarks.push(bookmark);
      this.dbService.addBookMark(bookmark);
    } else {
      this.removeBookmark(bookmark);
    }
    this.params.bookmarked = !this.params.bookmarked

    const toast = this.toastCtrl.create({
      duration: 1000,
      position: 'middle',
      cssClass: this.params.bookmarked ? 'addBookmark' : 'removeBookmark'
    });
    toast.present();
  }

  private removeBookmark(bookmark: BookMark) {
    let index = this.bookmarks.map(bookmark => bookmark.location).indexOf(bookmark.location);
    this.bookmarks.splice(index, 1);
    this.dbService.deleteBookmark(bookmark);
  }
}


