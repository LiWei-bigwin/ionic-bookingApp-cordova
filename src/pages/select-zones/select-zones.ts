// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, Events } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { Http } from '@angular/http';
import { LoadingProvider } from '../../providers/loading/loading';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { LocationDataProvider } from '../../providers/location-data/location-data';


@Component({
  selector: 'page-select-zones',
  templateUrl: 'select-zones.html',
})
export class SelectZonesPage {

  searchQuery: string = '';
  public items = [];
  public zones = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public events: Events,
    public config: ConfigProvider,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
    public location: LocationDataProvider) {
    let page = this.navParams.get('page');
    let id = this.navParams.get('id');
    if (page == 'shipping') {
      this.items = this.zones = this.location.data.states[this.shared.shipping.country];
    }
    else { this.items = this.zones = this.location.data.states[this.shared.billing.country]; }

    if (page == 'shippingUpdate' || page == 'billingUpdate') {
      console.log(id);
      this.items = this.zones = this.location.data.states[id];
      if (this.items == undefined) this.items = this.zones = [];
      console.log(this.items);
    }
  }

  initializeItems() {
    this.items = this.zones
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  //close modal
  dismiss() {
    this.viewCtrl.dismiss();
  }

  selectZone(c) {

    let page = this.navParams.get('page');

    this.events.publish("stateChange", page, c);

    if (page == 'shipping') {
      if (c == 'other') {
        this.shared.shipping.state = 'other';
        this.shared.shippingStateName = "other";
      }

      else {
        this.shared.shipping.state = c.value;
        this.shared.shippingStateName = c.name
        // this.shared.orderDetails.tax_zone_id = c.zone_id;
      }
    }
    else {
      if (c == 'other') {
        this.shared.billing.state = 'other';
        this.shared.billingStateName = "other";
      }

      else {
        this.shared.billing.state = c.value;
        this.shared.billingStateName = c.name;
      }
    }
    this.dismiss();
  }
  hideOther() {
    if (this.zones == undefined) this.zones = [];
    if (this.zones.length == 0) return true;
    else return false;
  }
}
