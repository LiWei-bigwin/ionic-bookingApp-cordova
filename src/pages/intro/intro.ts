// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home-pages/home/home';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  public slides = [
    { image: "assets/intro/1.gif", title: "Home Page", icon: "home", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/2.gif", title: "Category Page", icon: "cart", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/3.gif", title: "Shop Page", icon: "share", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/4.gif", title: "Cart Page", icon: "md-list-box", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/5.gif", title: "Order Page", icon: "calendar", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." }
  ];

  constructor(
    public navCtrl: NavController,
    public shared: SharedDataProvider,
    public config: ConfigProvider,) {
    this.slides
  }
  openHomePage() {
    if (this.config.homePage == 1) { this.navCtrl.setRoot(HomePage); }

  }
}
