import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { LoadingProvider } from '../../../providers/loading/loading';
import { ConfigProvider } from '../../../providers/config/config';
import { SharedDataProvider } from '../../../providers/shared-data/shared-data';
import { LocationDataProvider } from '../../../providers/location-data/location-data';
import { Storage } from '@ionic/storage';
import { SelectCountryPage } from '../../select-country/select-country';
import { SelectZonesPage } from '../../select-zones/select-zones';
import { CartPage } from '../../cart/cart';

/**
 * Generated class for the AddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addresses',
  templateUrl: 'addresses.html',
})
export class AddressesPage {
  billing = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  };
  billingCountryName = "";
  billingStateName = "";
  shipping = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: ''
  };
  shippingCountryName = "";
  shippingStateName = "";
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataProvider,
    public modalCtrl: ModalController,
    public config: ConfigProvider,
    public navParams: NavParams,
    public storage: Storage,
    public events: Events,
    public loading: LoadingProvider,
    public location: LocationDataProvider,
    translate: TranslateService) {

    //when country is selected
    events.subscribe('countryChange', (page, value) => {
      if (page == "shippingUpdate") {
        this.shippingCountryName = value.name;
        this.shipping.country = value.value;
        this.shipping.state = null;
        this.shipping.city = null;
        this.shipping.postcode = null;
        this.shippingStateName = "";

      }
      if (page == "billingUpdate") {
        this.billingCountryName = value.name;
        this.billing.country = value.value;
        this.billing.state = null;
        this.billing.city = null;
        this.billing.postcode = null;
        this.billingStateName = "";
      }
    });

    //state is selected

    events.subscribe('stateChange', (page, value) => {

      if (page == "shippingUpdate") {
        if (value == 'other') {
          console.log(page + value);
          this.shipping.state = 'other';
          this.shippingStateName = "other";
        }

        else {
          this.shipping.state = value.value;
          this.shippingStateName = value.name
        }

      }
      if (page == "billingUpdate") {
        if (value == 'other') {
          this.billing.state = 'other';
          this.billingStateName = "other";
        }

        else {
          this.billing.state = value.value;
          this.billingStateName = value.name;
        }
      }
    });
  }

  updateBillingAddress() {
    this.loading.show();
    var d = {
      billing: this.billing
    };
    this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, d).then((data) => {
      this.loading.hide();
      let dat = JSON.parse(data.body);
      this.shared.customerData.billing = dat.billing;
      this.storage.set('customerData', this.shared.customerData);
      this.shared.toast("Billing Address Updated");
    });
  }
  updateShippingAddress() {
    this.loading.show();
    var d = {
      shipping: this.shipping
    };
    console.log(d);
    this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, d).then((data) => {
      this.loading.hide();
      let dat = JSON.parse(data.body);

      this.shared.customerData.shipping = dat.shipping;
      console.log("customer data");
      console.log(this.shared.customerData);
      this.storage.set('customerData', this.shared.customerData);
      this.shared.toast("Shipping Address Updated");
    });
  }
  selectCountryPage(value) {
    let modal = this.modalCtrl.create(SelectCountryPage, { page: value });
    modal.present();
  }
  selectZonePage(value) {
    let id = (value == "shippingUpdate") ? this.shipping.country : this.billing.country;
    let modal = this.modalCtrl.create(SelectZonesPage, { page: value, id: id });
    modal.present();
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  ionViewWillEnter() {

    if (this.shared.customerData.id != null) {
      this.shipping = this.shared.customerData.shipping;
      this.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
      this.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);

      this.billing = this.shared.customerData.billing;
      this.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
      this.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
    }
  }
}
