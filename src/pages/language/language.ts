import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { LoadingProvider } from '../../providers/loading/loading';
import { TranslateService } from '@ngx-translate/core';
import { ConfigProvider } from '../../providers/config/config';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';

@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {
  language: any;

  currentLanguageCode = localStorage.languageCode;
  languageList = [
    { "name": "English", "code": "en", "image": "assets/flags/english.jpg", "direction": "ltr" },
    { "name": "Arabic", "code": "ar", "image": "assets/flags/uae.jpg", "direction": "rtl" }]
  constructor(
    public loading: LoadingProvider,
    public viewCtrl: ViewController,
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    translate: TranslateService) {

    this.languageList.forEach(val => {
      if (val.code == this.currentLanguageCode)
        this.language = val;
    });
  }

  updateLanguage() {
    if (this.currentLanguageCode != this.language.code) {
      this.loading.autoHide(1000);
      localStorage.languageCode = this.language.code;
      localStorage.languageDirection = this.language.direction;
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
