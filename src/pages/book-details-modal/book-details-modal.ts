import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { BookmarksPage} from '../bookmarks/bookmarks';
import { HighlightsPage } from '../highlights/highlights';
import { TableOfContentsPage } from '../table-of-contents/table-of-contents';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-book-details-modal',
  templateUrl: 'book-details-modal.html',
})
export class BookDetailsModalPage {
  private toc: any;
  private bookmarks: any;
  private highlights: any;
  private curentLocations: any;
  private modbookid: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private events: Events, private storage: Storage) {
    this.toc = navParams.data.toc;
    this.bookmarks = navParams.data.bookmarks;
    this.highlights = navParams.data.highlights;

    this.events.subscribe("booksDetailsModalShow", (content) => {
      if (!content) {
        this.closeModalBook();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailsModalPage');
  }
  closeModalBook() {
    this.view.dismiss();
  }

 
  tab1root = TableOfContentsPage;
  tab2root = BookmarksPage;
  tab3root = HighlightsPage;

}
