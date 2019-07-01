import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-table-of-contents',
  templateUrl: 'table-of-contents.html',
})
export class TableOfContentsPage {
  private toc: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, public events: Events) {
    this.toc = navParams.data;
  }

  selectToc(content) {
    this.events.publish('select:location', content.href);
    this.events.publish('booksDetailsModalShow', false);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TableOfContentsPage');
  }


}
