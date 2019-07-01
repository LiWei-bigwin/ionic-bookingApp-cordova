import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LoadingProvider } from '../../providers/loading/loading';
import { ConfigProvider } from '../../providers/config/config';
import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';



@Component({
  selector: 'page-currency-list',
  templateUrl: 'currency-list.html',
})
export class CurrencyListPage {
  currency: any;
  currencyList = [];
  currentCurrencySymbol = localStorage.currency;
  constructor(
    public navCtrl: NavController,
    public loading: LoadingProvider,
    public viewCtrl: ViewController,
    public config: ConfigProvider,
    public navParams: NavParams,
    public shared: SharedDataProvider,
    public http: Http,
    translate: TranslateService) {
    this.getListOfCurrency();
  }
  getListOfCurrency() {
    this.loading.show();
    this.http.get(this.config.url + "/api/appsettings/get_all_currencies/?insecure=cool").map(res => res.json()).subscribe(data => {
      this.loading.hide();
      this.currencyList = data.data;
      this.currencyList.forEach(val => {
        if (val.symbol == this.currentCurrencySymbol)
          this.currency = val;
      });
    });
  }
  updateCurrency() {
    if (this.currentCurrencySymbol != this.currency.code) {
      this.loading.autoHide(1000);
      localStorage.currency = this.currency.symbol;
      localStorage.currencyCode = this.currency.name;
      localStorage.currencyPos = this.currency.position;
      localStorage.decimals = this.currency.decimals;
      this.shared.emptyCart();
      this.shared.emptyRecentViewed();
      
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  }
  //close modal
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
