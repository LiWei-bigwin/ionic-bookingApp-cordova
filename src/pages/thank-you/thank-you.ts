// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home-pages/home/home';
import { MyOrdersPage } from '../my-orders/my-orders';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';




@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html',
})
export class ThankYouPage {
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataProvider,
    public config: ConfigProvider,
    public navParams: NavParams) {

  }
  openHome() {
    if (this.config.homePage == 1) { this.navCtrl.setRoot(HomePage); }

  }
  openOrders() { this.navCtrl.setRoot(MyOrdersPage); }

  ionViewDidLoad() {
    this.shared.orderComplete();
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }
  ionViewWillEnter() {
    if (this.config.admob == 1) this.shared.showAd();
  }
}
