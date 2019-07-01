// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
import { LoadingProvider } from '../../providers/loading/loading';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { AlertProvider } from '../../providers/alert/alert';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';

declare var google;

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  contact = {
    name: '',
    email: '',
    message: ''
  };
  errorMessage = '';

  constructor(
    public http: Http,
    public config: ConfigProvider,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
    public navCtrl: NavController,
    public alert: AlertProvider,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    if (this.config.googleMapId != "")
      this.loadMap();
  }
  // <!-- 2.0 updates -->
  submit() {
    this.loading.autoHide(2000);
    var data = {};
    data = this.contact;
    this.http.get(this.config.url + '/api/appusers/send_mail/?insecure=cool&email=' + this.contact.email + '&name=' + this.contact.name + '&message=' + this.contact.message).map(res => res.json()).subscribe(data => {
      console.log(data);

      this.contact.name = '';
      this.contact.email = '';
      this.contact.message = '';
      this.errorMessage = data;
    }, error => {
      this.errorMessage = JSON.parse(error._body).error;
      console.log(this.errorMessage);
    });


  };
  loadMap() {
    const myApiKey = this.config.googleMapId;
    const lat = parseFloat(this.config.latitude);
    const lng = parseFloat(this.config.longitude);
    let content = this.config.address;
    const parentElement = this.mapElement.nativeElement;
    const script = document.createElement('script');

    try {
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + myApiKey;
      script.async = true;
      script.defer = true;
      script.onload = function () {

        let map = new google.maps.Map(parentElement, {
          center: { lat, lng },
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        let marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          position: map.getCenter()
        });

        let infoWindow = new google.maps.InfoWindow({
          content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(map, marker);
        });
      };
      this.mapElement.nativeElement.insertBefore(script, null);
    } catch (error) {

    }
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }

}
