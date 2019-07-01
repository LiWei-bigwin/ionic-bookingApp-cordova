// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { TranslateService } from '@ngx-translate/core';
import { ConfigProvider } from '../../providers/config/config';



@Component({
  selector: 'page-refund-policy',
  templateUrl: 'refund-policy.html',
})
export class RefundPolicyPage {

  constructor(
    public viewCtrl: ViewController,
    public config: ConfigProvider,
    public sharedData: SharedDataProvider,
    translate: TranslateService,) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
