// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ConfigProvider } from '../../../providers/config/config';
import { Http } from '@angular/http';
import { LoadingProvider } from '../../../providers/loading/loading';
import { SharedDataProvider } from '../../../providers/shared-data/shared-data';
import { SelectCountryPage } from '../../select-country/select-country';
import { SelectZonesPage } from '../../select-zones/select-zones';
import { BillingAddressPage } from '../billing-address/billing-address';
import { LocationDataProvider } from '../../../providers/location-data/location-data';


@Component({
  selector: 'page-shipping-address',
  templateUrl: 'shipping-address.html',
})
export class ShippingAddressPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public config: ConfigProvider,
    public http: Http,
    public shared: SharedDataProvider,
    public modalCtrl: ModalController,
    public loading: LoadingProvider,
    public location: LocationDataProvider) {

    if (this.shared.customerData.id != null) {
      this.shared.shipping = this.shared.customerData.shipping;
      this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
      this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
    }
    if (this.shared.shippingCountryName == "" || this.shared.shippingCountryName == null) this.shared.shippingStateName = "";
  }
  disableButton() {

    if (
      this.shared.shipping.first_name == ""
      || this.shared.shipping.last_name == ""
      || this.shared.shipping.city == ""
      || this.shared.shipping.postcode == ""
      || this.shared.shipping.state == ""
      || this.shared.shipping.country == ""
      || this.shared.shipping.address_1 == ""
      || this.shared.shipping.state == null
      || this.shared.shipping.city == null
      || this.shared.shipping.postcode == null
    ) {
      return true;
    }
    else
      return false;
  }
  submit() {
    this.navCtrl.push(BillingAddressPage);
  }
  selectCountryPage() {
    let modal = this.modalCtrl.create(SelectCountryPage, { page: 'shipping' });
    modal.present();
  }
  selectZonePage() {
    let modal = this.modalCtrl.create(SelectZonesPage, { page: 'shipping' });
    modal.present();
  }
}
