import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';
import { LoadingProvider } from '../../providers/loading/loading';
import { TranslateService } from '@ngx-translate/core';
import { Http } from '@angular/http';
import { ProductsPage } from '../products/products';



@Component({
  selector: 'page-reward-points',
  templateUrl: 'reward-points.html',
})
export class RewardPointsPage {
  rewards = [];
  httpLoading = true;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
    public config: ConfigProvider,
    public translate: TranslateService) {
    this.getRewards();
  }
  getRewards() {
    this.httpLoading = true;
    this.loading.show();
    this.http.get(this.config.url + '/api/appusers/ionic_reward_points/?insecure=cool&user_id=' + this.shared.customerData.id).map(res => res.json()).subscribe(data => {
      this.httpLoading = false;
      this.loading.hide();
      let dat = data.data;
      this.rewards = dat;
      console.log(dat);
    });
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }
  openShop() {
    this.navCtrl.push(ProductsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardPointsPage');
  }
  refreshPage() {
    this.getRewards();
  }
  totalPoints() {
    let t = 0;
    for (let v of this.rewards) {
      t = t + parseInt(v.points);
    }
    return t;
  }
}

