// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedDataProvider } from '../../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../../providers/config/config';
import { SubCategories3Page } from '../sub-categories3/sub-categories3';
import { trigger, style, animate, transition } from '@angular/animations';
import { CartPage } from '../../cart/cart';
import { SearchPage } from '../../search/search';
import { ProductsPage } from '../../products/products';



@Component({
  selector: 'page-categories3',
  animations: [
    trigger(
      'animate', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('700ms', style({ opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: 'categories3.html',
})
export class Categories3Page {

  constructor(
    public navCtrl: NavController,
    public shared: SharedDataProvider,
    public config: ConfigProvider
  ) {

  }
  openSubCategories(parent) {
    let count = 0;
    for (let val of this.shared.allCategories) {
      if (val.parent == parent) count++;
      console.log(val.parent + "   " + parent);
    }
    if (count == 0)
      this.navCtrl.push(ProductsPage, { id: parent, name: "", sortOrder: 'newest' });
    else
    this.navCtrl.push(SubCategories3Page, { 'parent': parent });
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

