import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { DbServiceProvider } from '../../providers/db-service/db-service';
import { Highlight } from '../../providers/books-service/books-service';



@Component({
  selector: 'page-highlights',
  templateUrl: 'highlights.html',
})
export class HighlightsPage {
 highlights: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbService: DbServiceProvider, public events: Events, private alertController: AlertController) {
    this.highlights = navParams.data;
  }

  select(highlight: Highlight) {
    const confirm = this.alertController.create({
      title: 'Highlight',
      message: highlight.text,
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
            this.events.publish('select:location', highlight.location);
            this.events.publish('booksDetailsModalShow', false);
          }
        }

      ]
    });
    confirm.present();
  }


  delete(highlight: Highlight) {
    const confirm = this.alertController.create({
      title: 'Confirmation',
      message: " A you sure to delete this highlight?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: 'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: "Delete",
          cssClass: 'icon-delete',
          handler: data => {
            this.events.publish('delete:highlight',highlight)
          }
        }
      ]
    });
    confirm.present();
  }
}
