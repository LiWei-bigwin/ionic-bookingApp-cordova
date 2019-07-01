// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';


@Component({
  selector: 'page-term-services',
  templateUrl: 'term-services.html',
})
export class TermServicesPage {

  constructor(
    public viewCtrl: ViewController,
    public config: ConfigProvider,
    public sharedData: SharedDataProvider,
    translate: TranslateService, ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
