// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component, ViewChild, ApplicationRef } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Content } from 'ionic-angular';
import { Http } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { TranslateService } from '@ngx-translate/core';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { CouponProvider } from '../../providers/coupon/coupon';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';



@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  @ViewChild(Content) content: Content;

  customerNotes;
  discount = 0;
  productsTotal = 0;
  totalAmountWithDisocunt = 0;
  paymentMethods = [];
  selectedPaymentMethod = '';
  selectedPaymentMethodTitle = '';
  order = {};
  tax = 0;
  loaderTaxCalculating: boolean = true;
  loaderPaymentMethods: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    public loading: LoadingProvider,
    public alert: AlertProvider,
    public spinnerDialog: SpinnerDialog,
    public couponProvider: CouponProvider,
    public translate: TranslateService,
    public actionSheetCtrl: ActionSheetController,
    public iab: InAppBrowser,
    public applicationRef: ApplicationRef, ) {
    this.order = {
      token: this.shared.customerData.cookie,
      payment_method: this.selectedPaymentMethod,
      payment_method_title: this.selectedPaymentMethodTitle,
      billing: this.shared.billing,
      shipping: this.shared.shipping,
      line_items: this.shared.cartProducts,
      shipping_lines: this.shared.shipping_lines,
      coupon_lines: this.shared.couponArray,
      customer_note: this.customerNotes,
      customer_id: this.shared.customerData.id,
    };
    //this.productsTotal = this.shared.productsTotal();
    this.calculateDiscount();
    this.calculateTotal();

    // if (this.shared.shipping_lines[0].method_id != "local_pickup")
    this.calculateTax();
  }

  //============================================================================================  
  //placing order
  addOrder = function (nonce) {

    let customer_id = 0;
    if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
    let token = null;
    if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
    let onePage = this.config.checkOutPage;

    //this.loading.auto();
    var data = {
      token: token,
      payment_method: this.selectedPaymentMethod,
      payment_method_title: this.selectedPaymentMethodTitle,
      billing_info: this.shared.billing,
      shipping_info: this.shared.shipping,
      products: this.getProducts(),
      shipping_ids: this.shared.shipping_lines,
      coupons: this.getCoupons(),
      customer_note: this.customerNotes,
      customer_id: customer_id,
      one_page: onePage,
      platform: this.shared.device,
    };
    console.log(this.shared.customerData);
    this.shared.openCheckoutWebview(data);
  };

  getProducts() {
    var data = [];
    for (let v of this.shared.cartProducts) {
      var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString(), price: v.price.toString() };
      if (v.variation_id) Object.assign(obj, { variation_id: v.variation_id })
      //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
      data.push(obj);
    }
    return data;
  }
  //Object.assign(c, JSON.parse(data.body)
  getCoupons() {
    var data = [];
    for (let v of this.shared.couponArray) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
  getShippingLines() {
    var data = [];
    for (let v of this.shared.shipping_lines) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }

  //============================================================================================  
  //CAlculate Discount total
  calculateDiscount = function () {
    let total = 0;
    for (let value of this.shared.cartProducts) {
      total = total + parseFloat(value.subtotal);
    }
    this.productsTotal = total;
    this.discount = parseFloat(this.shared.productsTotal()) - total;
  };

  //============================================================================================  
  //CAlculate all total
  calculateTotal = function () {
    this.totalAmountWithDisocunt = (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax);
  };

  selectPayment(p) {
    this.selectedPaymentMethod = p.id;
    this.selectedPaymentMethodTitle = p.title;
    this.scrollToBottom();
  }

  //========================================================================================
  scrollToBottom() {

    setTimeout(() => {
      this.content.scrollToBottom();
      console.log("botton");
    }, 300);

  }
  ngOnInit() {
    //this.loading.show();

    this.config.Woocommerce.getAsync("payment_gateways" + "?" + this.config.productsArguments).then((data) => {
      this.loaderPaymentMethods = false;
      this.paymentMethods = JSON.parse(data.body);
      this.applicationRef.tick();
    });


  }
  openHomePage() {
    this.navCtrl.popToRoot();
  }

  calculateTax() {
    var data = {

      billing_info: this.shared.billing,
      shipping_info: this.shared.shipping,
      products: this.getProducts(),
      shipping_ids: this.shared.shipping_lines,

    };

    this.http.get(this.config.url + '/api/appsettings/ionic_get_tax/?insecure=cool&order=' + encodeURIComponent(JSON.stringify(data))).map(res => res.json()).subscribe(data => {
      this.loaderTaxCalculating = false;

      let res = parseFloat(JSON.stringify(data));
      if (res) { console.log("tax " + res); }
      else { console.log("tax err " + res); res = 0; }

      this.tax = res;
      this.calculateTotal();
      this.applicationRef.tick();
      
    });
  }


}
