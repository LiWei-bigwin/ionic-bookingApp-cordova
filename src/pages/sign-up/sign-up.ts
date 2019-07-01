// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';
import { LoadingProvider } from '../../providers/loading/loading';
import { ConfigProvider } from '../../providers/config/config';
import { Http } from '@angular/http';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { TermServicesPage } from '../term-services/term-services';
import { RefundPolicyPage } from '../refund-policy/refund-policy';
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  formData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    wpgdprc: 1,
    register: 'Register'
  };
  image;
  errorMessage = '';
  constructor(
    public http: Http,
    public config: ConfigProvider,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
    public platform: Platform,

  ) {
    // /api/appusers/register/?insecure=cool&username=abcd&password=123456&email=abcdxyz@gmail.com&display_name=aopi&nonce=6ad2605198
  }
  createAccount() {
    this.loading.show();
    this.http.get(this.config.url + '/api/get_nonce/?controller=appusers&method=register').map(res => res.json()).subscribe(data => {
      this.signUp(data.nonce);
    });
  }
  signUp(nonce) {
    console.log(nonce);
    this.errorMessage = '';
    var formData = new FormData();
    formData.append("username", this.formData.username);
    formData.append("email", this.formData.email);
    formData.append("display_name", this.formData.first_name + " " + this.formData.last_name);
    formData.append("nonce", nonce);
    formData.append("password", this.formData.password);
    formData.append("first_name", this.formData.first_name);
    formData.append("last_name", this.formData.last_name);
    this.http.post(this.config.url + '/api/appusers/register/?insecure=cool', formData).map(res => res.json()).subscribe(data => {
      //this.config.Woocommerce.postAsync("customers", this.formData).then((data) => {
      this.loading.hide();
      if (data.status == "ok") {
        this.shared.toast("User Created. Login Using your Username & Password");
        this.viewCtrl.dismiss();
      }
      else {
        this.errorMessage = data.error;
      }

    }, err => {
      this.loading.hide();
      if (err.ok == false) {
        console.log(err)
        let result = JSON.parse(err._body);
        this.errorMessage = result.error;
      }
    });
  }

  openPrivacyPolicyPage() {
    let modal = this.modalCtrl.create(PrivacyPolicyPage);
    modal.present();
  }
  openTermServicesPage() {
    let modal = this.modalCtrl.create(TermServicesPage);
    modal.present();
  }
  openRefundPolicyPage() {
    let modal = this.modalCtrl.create(RefundPolicyPage);
    modal.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(LoginPage, { hideGuestLogin: true });// <!-- 2.0 updates -->
    modal.present();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SignUpPage');
  // }
}
