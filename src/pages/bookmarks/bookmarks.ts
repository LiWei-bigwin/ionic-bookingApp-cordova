import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { DbServiceProvider } from '../../providers/db-service/db-service';
import { BookMark } from '../../providers/books-service/books-service';



@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
  bookmarks: BookMark[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbService: DbServiceProvider, public events: Events, private alertController: AlertController) {
    this.bookmarks = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
  }

 
  select(bookmark: BookMark) {
    debugger
    const confirm = this.alertController.create({
      title: 'Bookamrk',
      message: bookmark.excerpt,
      buttons: [
        {
          text: "Close",
          role: "cancel",
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: "Locate",
          handler: data => {
            this.events.publish('select:location', bookmark.location);
            this.events.publish('booksDetailsModalShow', false);
          }
        }

      ]
    });
    confirm.present();
  }


  delete(bookmark) {

    const confirm = this.alertController.create({
      title: 'Confirm',
      message: " A you sure to delete this bookmark",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: "Delete",
          handler: data => {
            this.events.publish('delete:bookmark',bookmark)
          }
        }
      ]
    });
    confirm.present();
  }


}
