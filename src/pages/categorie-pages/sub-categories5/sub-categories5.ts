// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from '../../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../../providers/config/config';
import { ProductsPage } from '../../products/products';
import { CartPage } from '../../cart/cart';
import { SearchPage } from '../../search/search';

@Component({
  selector: 'page-sub-categories5',
  templateUrl: 'sub-categories5.html',
})
export class SubCategories5Page {
  parent;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public shared: SharedDataProvider,
    public config: ConfigProvider) {
    this.parent = navParams.get("parent");
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
      this.navCtrl.push(SubCategories5Page, { 'parent': id });

  }
  openCart() {
    this.navCtrl.push(CartPage);
}
openSearch() {
    this.navCtrl.push(SearchPage);
}
}
