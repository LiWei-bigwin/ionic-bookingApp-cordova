import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { LoadingProvider } from '../../providers/loading/loading';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';
import { CartPage } from '../cart/cart';
import { ProductsPage } from '../products/products';
import { ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions } from '@ionic-native/themeable-browser';
import { HomePage } from '../home-pages/home/home';

/**
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
})
export class DownloadsPage {
  downloads = [];
  httpLoading = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
    public config: ConfigProvider,
    private themeableBrowser: ThemeableBrowser,
    translate: TranslateService) {
    this.getDownloads();
  }
  getDownloads() {
    this.httpLoading = true;
    this.loading.show();
    this.config.Woocommerce.getAsync("customers/" + this.shared.customerData.id + "/downloads" + "?" + this.config.productsArguments).then((data) => {
      this.httpLoading = false;
      this.loading.hide();
      let dat = JSON.parse(data.body);
      this.downloads = dat;
      console.log(dat);
    });
  }

  downloadFile(value) {
    let options: ThemeableBrowserOptions = {};
    this.themeableBrowser.create(value.download_url, '_system', options);
    this.loading.autoHide(1000);
    this.navCtrl.setRoot(HomePage);
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openShop() {
    this.navCtrl.push(ProductsPage);
  }
  refreshPage() {
    this.getDownloads();
  }
}
