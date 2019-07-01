// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from '../../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../../providers/config/config';
import { ProductsPage } from '../../products/products';
import { trigger, style, animate, transition } from '@angular/animations';
import { CartPage } from '../../cart/cart';
import { SearchPage } from '../../search/search';

@Component({
  selector: 'page-sub-categories',
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
  templateUrl: 'sub-categories.html',
})
export class SubCategoriesPage {
  subcategories = [];
  parent;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public shared: SharedDataProvider,
    public config: ConfigProvider) {
    this.parent = navParams.get("parent");

    for (let value of this.shared.allCategories) {
      if (value.parent == this.parent) { this.subcategories.push(value); }
    }

  }

  openProducts(id, name) {
    let count = 0;
    for (let val of this.shared.allCategories) {
      if (val.parent == id) {
        count++;
        //console.log(val.parent + "   " + id);
      }
    }
    console.log(count);
    if (count == 0)
      this.navCtrl.push(ProductsPage, { id: id, name: name, sortOrder: 'newest' });
    else
      this.navCtrl.push(SubCategoriesPage, { 'parent': id });

  }

  openParentProducts() {
    this.navCtrl.push(ProductsPage, { id: this.parent, name: name, sortOrder: 'newest' });
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }
}
