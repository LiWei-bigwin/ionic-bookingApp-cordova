webpackJsonp([3],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/


var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingProvider.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            duration: 20000
        });
        this.loading.present();
    };
    LoadingProvider.prototype.hide = function () {
        try {
            this.loading.dismiss();
        }
        catch (error) { }
    };
    LoadingProvider.prototype.autoHide = function (time) {
        this.loading = this.loadingCtrl.create({
            duration: time
        });
        this.loading.present();
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/











var HomePage = /** @class */ (function () {
    function HomePage(http, config, shared, navCtrl, events, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.events = events;
        this.scrollTopButton = false;
        this.segments = 'topSeller';
    }
    HomePage.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    HomePage.prototype.onScroll = function (e) {
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //   console.log(e);
    };
    HomePage.prototype.openProducts = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { type: value });
    };
    HomePage.prototype.ngAfterContentChecked = function () {
        this.content.resize();
    };
    HomePage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\home-pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      <!-- <img src="assets/logo_header.png" alt="logo"> -->\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="custom-search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-home" (ionScroll)="onScroll($event)">\n  <!-- top banners -->\n  <banners></banners>\n\n  <!-- top Segments  -->\n  <ion-segment [(ngModel)]="segments" color="primary">\n    <ion-segment-button value="topSeller">{{ \'Latest\' | translate }}</ion-segment-button>\n    <ion-segment-button value="deals">{{ \'On Sale\' | translate }} </ion-segment-button>\n    <ion-segment-button value="mostLiked"> {{ \'Featured\' | translate }}</ion-segment-button>\n  </ion-segment>\n\n  <!-- top segments products -->\n  <div class="module" [ngSwitch]="segments">\n    <ion-slides slidesPerView=2.2 spaceBetween=10 *ngSwitchCase="\'topSeller\'" class="animate-product"\n      dir="{{shared.dir}}">\n      <ion-slide *ngFor="let p of shared.tab1">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'latest\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-slides slidesPerView=2.2 spaceBetween=10 *ngSwitchCase="\'deals\'" dir="{{shared.dir}}" class="animate-product">\n      <ion-slide *ngFor="let p of shared.tab2">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'sale\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-slides slidesPerView=2.2 spaceBetween=10 *ngSwitchCase="\'mostLiked\'" dir="{{shared.dir}}"\n      class="animate-product">\n      <ion-slide *ngFor="let p of shared.tab3">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'featured\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n  <!-- Recent Viewed items products -->\n  <div class="module recent-module" *ngIf="shared.recentViewedProducts.length!=0" [@animate]>\n    <h5>{{\'Recently Viewed\'|translate}}</h5>\n    <ion-slides slidesPerView=2.2 spaceBetween=0 dir="{{shared.dir}}">\n      <ion-slide *ngFor="let p of shared.recentViewedProducts" [@animate]>\n        <product [data]="p" [type]="\'recent\'"></product>\n      </ion-slide>\n      <!-- <ion-slide class="swiper-slide-last"></ion-slide> -->\n    </ion-slides>\n  </div>\n\n  <sliding-tabs></sliding-tabs>\n  <ion-fab bottom right *ngIf="scrollTopButton">\n    <button ion-fab (click)="scrollToTop()">\n      <ion-icon name="arrow-round-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\home-pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationDataProvider = /** @class */ (function () {
    function LocationDataProvider() {
        this.data = {
            "countries": [
                {
                    "value": "AF",
                    "name": "Afghanistan"
                },
                {
                    "value": "AL",
                    "name": "Albania"
                },
                {
                    "value": "DZ",
                    "name": "Algeria"
                },
                {
                    "value": "AS",
                    "name": "American Samoa"
                },
                {
                    "value": "AD",
                    "name": "Andorra"
                },
                {
                    "value": "AO",
                    "name": "Angola"
                },
                {
                    "value": "AI",
                    "name": "Anguilla"
                },
                {
                    "value": "AQ",
                    "name": "Antarctica"
                },
                {
                    "value": "AG",
                    "name": "Antigua and Barbuda"
                },
                {
                    "value": "AR",
                    "name": "Argentina"
                },
                {
                    "value": "AM",
                    "name": "Armenia"
                },
                {
                    "value": "AW",
                    "name": "Aruba"
                },
                {
                    "value": "AU",
                    "name": "Australia"
                },
                {
                    "value": "AT",
                    "name": "Austria"
                },
                {
                    "value": "AZ",
                    "name": "Azerbaijan"
                },
                {
                    "value": "BS",
                    "name": "Bahamas"
                },
                {
                    "value": "BH",
                    "name": "Bahrain"
                },
                {
                    "value": "BD",
                    "name": "Bangladesh"
                },
                {
                    "value": "BB",
                    "name": "Barbados"
                },
                {
                    "value": "BY",
                    "name": "Belarus"
                },
                {
                    "value": "PW",
                    "name": "Belau"
                },
                {
                    "value": "BE",
                    "name": "Belgium"
                },
                {
                    "value": "BZ",
                    "name": "Belize"
                },
                {
                    "value": "BJ",
                    "name": "Benin"
                },
                {
                    "value": "BM",
                    "name": "Bermuda"
                },
                {
                    "value": "BT",
                    "name": "Bhutan"
                },
                {
                    "value": "BO",
                    "name": "Bolivia"
                },
                {
                    "value": "BQ",
                    "name": "Bonaire, Saint Eustatius and Saba"
                },
                {
                    "value": "BA",
                    "name": "Bosnia and Herzegovina"
                },
                {
                    "value": "BW",
                    "name": "Botswana"
                },
                {
                    "value": "BV",
                    "name": "Bouvet Island"
                },
                {
                    "value": "BR",
                    "name": "Brazil"
                },
                {
                    "value": "IO",
                    "name": "British Indian Ocean Territory"
                },
                {
                    "value": "VG",
                    "name": "British Virgin Islands"
                },
                {
                    "value": "BN",
                    "name": "Brunei"
                },
                {
                    "value": "BG",
                    "name": "Bulgaria"
                },
                {
                    "value": "BF",
                    "name": "Burkina Faso"
                },
                {
                    "value": "BI",
                    "name": "Burundi"
                },
                {
                    "value": "KH",
                    "name": "Cambodia"
                },
                {
                    "value": "CM",
                    "name": "Cameroon"
                },
                {
                    "value": "CA",
                    "name": "Canada"
                },
                {
                    "value": "CV",
                    "name": "Cape Verde"
                },
                {
                    "value": "KY",
                    "name": "Cayman Islands"
                },
                {
                    "value": "CF",
                    "name": "Central African Republic"
                },
                {
                    "value": "TD",
                    "name": "Chad"
                },
                {
                    "value": "CL",
                    "name": "Chile"
                },
                {
                    "value": "CN",
                    "name": "China"
                },
                {
                    "value": "CX",
                    "name": "Christmas Island"
                },
                {
                    "value": "CC",
                    "name": "Cocos (Keeling) Islands"
                },
                {
                    "value": "CO",
                    "name": "Colombia"
                },
                {
                    "value": "KM",
                    "name": "Comoros"
                },
                {
                    "value": "CG",
                    "name": "Congo (Brazzaville)"
                },
                {
                    "value": "CD",
                    "name": "Congo (Kinshasa)"
                },
                {
                    "value": "CK",
                    "name": "Cook Islands"
                },
                {
                    "value": "CR",
                    "name": "Costa Rica"
                },
                {
                    "value": "HR",
                    "name": "Croatia"
                },
                {
                    "value": "CU",
                    "name": "Cuba"
                },
                {
                    "value": "CW",
                    "name": "Cura&ccedil;ao"
                },
                {
                    "value": "CY",
                    "name": "Cyprus"
                },
                {
                    "value": "CZ",
                    "name": "Czech Republic"
                },
                {
                    "value": "DK",
                    "name": "Denmark"
                },
                {
                    "value": "DJ",
                    "name": "Djibouti"
                },
                {
                    "value": "DM",
                    "name": "Dominica"
                },
                {
                    "value": "DO",
                    "name": "Dominican Republic"
                },
                {
                    "value": "EC",
                    "name": "Ecuador"
                },
                {
                    "value": "EG",
                    "name": "Egypt"
                },
                {
                    "value": "SV",
                    "name": "El Salvador"
                },
                {
                    "value": "GQ",
                    "name": "Equatorial Guinea"
                },
                {
                    "value": "ER",
                    "name": "Eritrea"
                },
                {
                    "value": "EE",
                    "name": "Estonia"
                },
                {
                    "value": "ET",
                    "name": "Ethiopia"
                },
                {
                    "value": "FK",
                    "name": "Falkland Islands"
                },
                {
                    "value": "FO",
                    "name": "Faroe Islands"
                },
                {
                    "value": "FJ",
                    "name": "Fiji"
                },
                {
                    "value": "FI",
                    "name": "Finland"
                },
                {
                    "value": "FR",
                    "name": "France"
                },
                {
                    "value": "GF",
                    "name": "French Guiana"
                },
                {
                    "value": "PF",
                    "name": "French Polynesia"
                },
                {
                    "value": "TF",
                    "name": "French Southern Territories"
                },
                {
                    "value": "GA",
                    "name": "Gabon"
                },
                {
                    "value": "GM",
                    "name": "Gambia"
                },
                {
                    "value": "GE",
                    "name": "Georgia"
                },
                {
                    "value": "DE",
                    "name": "Germany"
                },
                {
                    "value": "GH",
                    "name": "Ghana"
                },
                {
                    "value": "GI",
                    "name": "Gibraltar"
                },
                {
                    "value": "GR",
                    "name": "Greece"
                },
                {
                    "value": "GL",
                    "name": "Greenland"
                },
                {
                    "value": "GD",
                    "name": "Grenada"
                },
                {
                    "value": "GP",
                    "name": "Guadeloupe"
                },
                {
                    "value": "GU",
                    "name": "Guam"
                },
                {
                    "value": "GT",
                    "name": "Guatemala"
                },
                {
                    "value": "GG",
                    "name": "Guernsey"
                },
                {
                    "value": "GN",
                    "name": "Guinea"
                },
                {
                    "value": "GW",
                    "name": "Guinea-Bissau"
                },
                {
                    "value": "GY",
                    "name": "Guyana"
                },
                {
                    "value": "HT",
                    "name": "Haiti"
                },
                {
                    "value": "HM",
                    "name": "Heard Island and McDonald Islands"
                },
                {
                    "value": "HN",
                    "name": "Honduras"
                },
                {
                    "value": "HK",
                    "name": "Hong Kong"
                },
                {
                    "value": "HU",
                    "name": "Hungary"
                },
                {
                    "value": "IS",
                    "name": "Iceland"
                },
                {
                    "value": "IN",
                    "name": "India"
                },
                {
                    "value": "ID",
                    "name": "Indonesia"
                },
                {
                    "value": "IR",
                    "name": "Iran"
                },
                {
                    "value": "IQ",
                    "name": "Iraq"
                },
                {
                    "value": "IE",
                    "name": "Ireland"
                },
                {
                    "value": "IM",
                    "name": "Isle of Man"
                },
                {
                    "value": "IL",
                    "name": "Israel"
                },
                {
                    "value": "IT",
                    "name": "Italy"
                },
                {
                    "value": "CI",
                    "name": "Ivory Coast"
                },
                {
                    "value": "JM",
                    "name": "Jamaica"
                },
                {
                    "value": "JP",
                    "name": "Japan"
                },
                {
                    "value": "JE",
                    "name": "Jersey"
                },
                {
                    "value": "JO",
                    "name": "Jordan"
                },
                {
                    "value": "KZ",
                    "name": "Kazakhstan"
                },
                {
                    "value": "KE",
                    "name": "Kenya"
                },
                {
                    "value": "KI",
                    "name": "Kiribati"
                },
                {
                    "value": "KW",
                    "name": "Kuwait"
                },
                {
                    "value": "KG",
                    "name": "Kyrgyzstan"
                },
                {
                    "value": "LA",
                    "name": "Laos"
                },
                {
                    "value": "LV",
                    "name": "Latvia"
                },
                {
                    "value": "LB",
                    "name": "Lebanon"
                },
                {
                    "value": "LS",
                    "name": "Lesotho"
                },
                {
                    "value": "LR",
                    "name": "Liberia"
                },
                {
                    "value": "LY",
                    "name": "Libya"
                },
                {
                    "value": "LI",
                    "name": "Liechtenstein"
                },
                {
                    "value": "LT",
                    "name": "Lithuania"
                },
                {
                    "value": "LU",
                    "name": "Luxembourg"
                },
                {
                    "value": "MO",
                    "name": "Macao S.A.R., China"
                },
                {
                    "value": "MK",
                    "name": "Macedonia"
                },
                {
                    "value": "MG",
                    "name": "Madagascar"
                },
                {
                    "value": "MW",
                    "name": "Malawi"
                },
                {
                    "value": "MY",
                    "name": "Malaysia"
                },
                {
                    "value": "MV",
                    "name": "Maldives"
                },
                {
                    "value": "ML",
                    "name": "Mali"
                },
                {
                    "value": "MT",
                    "name": "Malta"
                },
                {
                    "value": "MH",
                    "name": "Marshall Islands"
                },
                {
                    "value": "MQ",
                    "name": "Martinique"
                },
                {
                    "value": "MR",
                    "name": "Mauritania"
                },
                {
                    "value": "MU",
                    "name": "Mauritius"
                },
                {
                    "value": "YT",
                    "name": "Mayotte"
                },
                {
                    "value": "MX",
                    "name": "Mexico"
                },
                {
                    "value": "FM",
                    "name": "Micronesia"
                },
                {
                    "value": "MD",
                    "name": "Moldova"
                },
                {
                    "value": "MC",
                    "name": "Monaco"
                },
                {
                    "value": "MN",
                    "name": "Mongolia"
                },
                {
                    "value": "ME",
                    "name": "Montenegro"
                },
                {
                    "value": "MS",
                    "name": "Montserrat"
                },
                {
                    "value": "MA",
                    "name": "Morocco"
                },
                {
                    "value": "MZ",
                    "name": "Mozambique"
                },
                {
                    "value": "MM",
                    "name": "Myanmar"
                },
                {
                    "value": "NA",
                    "name": "Namibia"
                },
                {
                    "value": "NR",
                    "name": "Nauru"
                },
                {
                    "value": "NP",
                    "name": "Nepal"
                },
                {
                    "value": "NL",
                    "name": "Netherlands"
                },
                {
                    "value": "NC",
                    "name": "New Caledonia"
                },
                {
                    "value": "NZ",
                    "name": "New Zealand"
                },
                {
                    "value": "NI",
                    "name": "Nicaragua"
                },
                {
                    "value": "NE",
                    "name": "Niger"
                },
                {
                    "value": "NG",
                    "name": "Nigeria"
                },
                {
                    "value": "NU",
                    "name": "Niue"
                },
                {
                    "value": "NF",
                    "name": "Norfolk Island"
                },
                {
                    "value": "KP",
                    "name": "North Korea"
                },
                {
                    "value": "MP",
                    "name": "Northern Mariana Islands"
                },
                {
                    "value": "NO",
                    "name": "Norway"
                },
                {
                    "value": "OM",
                    "name": "Oman"
                },
                {
                    "value": "PK",
                    "name": "Pakistan"
                },
                {
                    "value": "PS",
                    "name": "Palestinian Territory"
                },
                {
                    "value": "PA",
                    "name": "Panama"
                },
                {
                    "value": "PG",
                    "name": "Papua New Guinea"
                },
                {
                    "value": "PY",
                    "name": "Paraguay"
                },
                {
                    "value": "PE",
                    "name": "Peru"
                },
                {
                    "value": "PH",
                    "name": "Philippines"
                },
                {
                    "value": "PN",
                    "name": "Pitcairn"
                },
                {
                    "value": "PL",
                    "name": "Poland"
                },
                {
                    "value": "PT",
                    "name": "Portugal"
                },
                {
                    "value": "PR",
                    "name": "Puerto Rico"
                },
                {
                    "value": "QA",
                    "name": "Qatar"
                },
                {
                    "value": "RE",
                    "name": "Reunion"
                },
                {
                    "value": "RO",
                    "name": "Romania"
                },
                {
                    "value": "RU",
                    "name": "Russia"
                },
                {
                    "value": "RW",
                    "name": "Rwanda"
                },
                {
                    "value": "ST",
                    "name": "S&atilde;o Tom&eacute; and Pr&iacute;ncipe"
                },
                {
                    "value": "BL",
                    "name": "Saint Barth&eacute;lemy"
                },
                {
                    "value": "SH",
                    "name": "Saint Helena"
                },
                {
                    "value": "KN",
                    "name": "Saint Kitts and Nevis"
                },
                {
                    "value": "LC",
                    "name": "Saint Lucia"
                },
                {
                    "value": "SX",
                    "name": "Saint Martin (Dutch part)"
                },
                {
                    "value": "MF",
                    "name": "Saint Martin (French part)"
                },
                {
                    "value": "PM",
                    "name": "Saint Pierre and Miquelon"
                },
                {
                    "value": "VC",
                    "name": "Saint Vincent and the Grenadines"
                },
                {
                    "value": "WS",
                    "name": "Samoa"
                },
                {
                    "value": "SM",
                    "name": "San Marino"
                },
                {
                    "value": "SA",
                    "name": "Saudi Arabia"
                },
                {
                    "value": "SN",
                    "name": "Senegal"
                },
                {
                    "value": "RS",
                    "name": "Serbia"
                },
                {
                    "value": "SC",
                    "name": "Seychelles"
                },
                {
                    "value": "SL",
                    "name": "Sierra Leone"
                },
                {
                    "value": "SG",
                    "name": "Singapore"
                },
                {
                    "value": "SK",
                    "name": "Slovakia"
                },
                {
                    "value": "SI",
                    "name": "Slovenia"
                },
                {
                    "value": "SB",
                    "name": "Solomon Islands"
                },
                {
                    "value": "SO",
                    "name": "Somalia"
                },
                {
                    "value": "ZA",
                    "name": "South Africa"
                },
                {
                    "value": "GS",
                    "name": "South Georgia/Sandwich Islands"
                },
                {
                    "value": "KR",
                    "name": "South Korea"
                },
                {
                    "value": "SS",
                    "name": "South Sudan"
                },
                {
                    "value": "ES",
                    "name": "Spain"
                },
                {
                    "value": "LK",
                    "name": "Sri Lanka"
                },
                {
                    "value": "SD",
                    "name": "Sudan"
                },
                {
                    "value": "SR",
                    "name": "Suriname"
                },
                {
                    "value": "SJ",
                    "name": "Svalbard and Jan Mayen"
                },
                {
                    "value": "SZ",
                    "name": "Swaziland"
                },
                {
                    "value": "SE",
                    "name": "Sweden"
                },
                {
                    "value": "CH",
                    "name": "Switzerland"
                },
                {
                    "value": "SY",
                    "name": "Syria"
                },
                {
                    "value": "TW",
                    "name": "Taiwan"
                },
                {
                    "value": "TJ",
                    "name": "Tajikistan"
                },
                {
                    "value": "TZ",
                    "name": "Tanzania"
                },
                {
                    "value": "TH",
                    "name": "Thailand"
                },
                {
                    "value": "TL",
                    "name": "Timor-Leste"
                },
                {
                    "value": "TG",
                    "name": "Togo"
                },
                {
                    "value": "TK",
                    "name": "Tokelau"
                },
                {
                    "value": "TO",
                    "name": "Tonga"
                },
                {
                    "value": "TT",
                    "name": "Trinidad and Tobago"
                },
                {
                    "value": "TN",
                    "name": "Tunisia"
                },
                {
                    "value": "TR",
                    "name": "Turkey"
                },
                {
                    "value": "TM",
                    "name": "Turkmenistan"
                },
                {
                    "value": "TC",
                    "name": "Turks and Caicos Islands"
                },
                {
                    "value": "TV",
                    "name": "Tuvalu"
                },
                {
                    "value": "UG",
                    "name": "Uganda"
                },
                {
                    "value": "UA",
                    "name": "Ukraine"
                },
                {
                    "value": "AE",
                    "name": "United Arab Emirates"
                },
                {
                    "value": "GB",
                    "name": "United Kingdom (UK)"
                },
                {
                    "value": "US",
                    "name": "United States (US)"
                },
                {
                    "value": "UM",
                    "name": "United States (US) Minor Outlying Islands"
                },
                {
                    "value": "VI",
                    "name": "United States (US) Virgin Islands"
                },
                {
                    "value": "UY",
                    "name": "Uruguay"
                },
                {
                    "value": "UZ",
                    "name": "Uzbekistan"
                },
                {
                    "value": "VU",
                    "name": "Vanuatu"
                },
                {
                    "value": "VA",
                    "name": "Vatican"
                },
                {
                    "value": "VE",
                    "name": "Venezuela"
                },
                {
                    "value": "VN",
                    "name": "Vietnam"
                },
                {
                    "value": "WF",
                    "name": "Wallis and Futuna"
                },
                {
                    "value": "EH",
                    "name": "Western Sahara"
                },
                {
                    "value": "YE",
                    "name": "Yemen"
                },
                {
                    "value": "ZM",
                    "name": "Zambia"
                },
                {
                    "value": "ZW",
                    "name": "Zimbabwe"
                }
            ],
            "states": {
                "AR": [
                    {
                        "value": "C",
                        "name": "Ciudad Aut&oacute;noma de Buenos Aires"
                    },
                    {
                        "value": "B",
                        "name": "Buenos Aires"
                    },
                    {
                        "value": "K",
                        "name": "Catamarca"
                    },
                    {
                        "value": "H",
                        "name": "Chaco"
                    },
                    {
                        "value": "U",
                        "name": "Chubut"
                    },
                    {
                        "value": "X",
                        "name": "C&oacute;rdoba"
                    },
                    {
                        "value": "W",
                        "name": "Corrientes"
                    },
                    {
                        "value": "E",
                        "name": "Entre R&iacute;os"
                    },
                    {
                        "value": "P",
                        "name": "Formosa"
                    },
                    {
                        "value": "Y",
                        "name": "Jujuy"
                    },
                    {
                        "value": "L",
                        "name": "La Pampa"
                    },
                    {
                        "value": "F",
                        "name": "La Rioja"
                    },
                    {
                        "value": "M",
                        "name": "Mendoza"
                    },
                    {
                        "value": "N",
                        "name": "Misiones"
                    },
                    {
                        "value": "Q",
                        "name": "Neuqu&eacute;n"
                    },
                    {
                        "value": "R",
                        "name": "R&iacute;o Negro"
                    },
                    {
                        "value": "A",
                        "name": "Salta"
                    },
                    {
                        "value": "J",
                        "name": "San Juan"
                    },
                    {
                        "value": "D",
                        "name": "San Luis"
                    },
                    {
                        "value": "Z",
                        "name": "Santa Cruz"
                    },
                    {
                        "value": "S",
                        "name": "Santa Fe"
                    },
                    {
                        "value": "G",
                        "name": "Santiago del Estero"
                    },
                    {
                        "value": "V",
                        "name": "Tierra del Fuego"
                    },
                    {
                        "value": "T",
                        "name": "Tucum&aacute;n"
                    }
                ],
                "AU": [
                    {
                        "value": "ACT",
                        "name": "Australian Capital Territory"
                    },
                    {
                        "value": "NSW",
                        "name": "New South Wales"
                    },
                    {
                        "value": "NT",
                        "name": "Northern Territory"
                    },
                    {
                        "value": "QLD",
                        "name": "Queensland"
                    },
                    {
                        "value": "SA",
                        "name": "South Australia"
                    },
                    {
                        "value": "TAS",
                        "name": "Tasmania"
                    },
                    {
                        "value": "VIC",
                        "name": "Victoria"
                    },
                    {
                        "value": "WA",
                        "name": "Western Australia"
                    }
                ],
                "BD": [
                    {
                        "value": "BAG",
                        "name": "Bagerhat"
                    },
                    {
                        "value": "BAN",
                        "name": "Bandarban"
                    },
                    {
                        "value": "BAR",
                        "name": "Barguna"
                    },
                    {
                        "value": "BARI",
                        "name": "Barisal"
                    },
                    {
                        "value": "BHO",
                        "name": "Bhola"
                    },
                    {
                        "value": "BOG",
                        "name": "Bogra"
                    },
                    {
                        "value": "BRA",
                        "name": "Brahmanbaria"
                    },
                    {
                        "value": "CHA",
                        "name": "Chandpur"
                    },
                    {
                        "value": "CHI",
                        "name": "Chittagong"
                    },
                    {
                        "value": "CHU",
                        "name": "Chuadanga"
                    },
                    {
                        "value": "COM",
                        "name": "Comilla"
                    },
                    {
                        "value": "COX",
                        "name": "Cox's Bazar"
                    },
                    {
                        "value": "DHA",
                        "name": "Dhaka"
                    },
                    {
                        "value": "DIN",
                        "name": "Dinajpur"
                    },
                    {
                        "value": "FAR",
                        "name": "Faridpur "
                    },
                    {
                        "value": "FEN",
                        "name": "Feni"
                    },
                    {
                        "value": "GAI",
                        "name": "Gaibandha"
                    },
                    {
                        "value": "GAZI",
                        "name": "Gazipur"
                    },
                    {
                        "value": "GOP",
                        "name": "Gopalganj"
                    },
                    {
                        "value": "HAB",
                        "name": "Habiganj"
                    },
                    {
                        "value": "JAM",
                        "name": "Jamalpur"
                    },
                    {
                        "value": "JES",
                        "name": "Jessore"
                    },
                    {
                        "value": "JHA",
                        "name": "Jhalokati"
                    },
                    {
                        "value": "JHE",
                        "name": "Jhenaidah"
                    },
                    {
                        "value": "JOY",
                        "name": "Joypurhat"
                    },
                    {
                        "value": "KHA",
                        "name": "Khagrachhari"
                    },
                    {
                        "value": "KHU",
                        "name": "Khulna"
                    },
                    {
                        "value": "KIS",
                        "name": "Kishoreganj"
                    },
                    {
                        "value": "KUR",
                        "name": "Kurigram"
                    },
                    {
                        "value": "KUS",
                        "name": "Kushtia"
                    },
                    {
                        "value": "LAK",
                        "name": "Lakshmipur"
                    },
                    {
                        "value": "LAL",
                        "name": "Lalmonirhat"
                    },
                    {
                        "value": "MAD",
                        "name": "Madaripur"
                    },
                    {
                        "value": "MAG",
                        "name": "Magura"
                    },
                    {
                        "value": "MAN",
                        "name": "Manikganj "
                    },
                    {
                        "value": "MEH",
                        "name": "Meherpur"
                    },
                    {
                        "value": "MOU",
                        "name": "Moulvibazar"
                    },
                    {
                        "value": "MUN",
                        "name": "Munshiganj"
                    },
                    {
                        "value": "MYM",
                        "name": "Mymensingh"
                    },
                    {
                        "value": "NAO",
                        "name": "Naogaon"
                    },
                    {
                        "value": "NAR",
                        "name": "Narail"
                    },
                    {
                        "value": "NARG",
                        "name": "Narayanganj"
                    },
                    {
                        "value": "NARD",
                        "name": "Narsingdi"
                    },
                    {
                        "value": "NAT",
                        "name": "Natore"
                    },
                    {
                        "value": "NAW",
                        "name": "Nawabganj"
                    },
                    {
                        "value": "NET",
                        "name": "Netrakona"
                    },
                    {
                        "value": "NIL",
                        "name": "Nilphamari"
                    },
                    {
                        "value": "NOA",
                        "name": "Noakhali"
                    },
                    {
                        "value": "PAB",
                        "name": "Pabna"
                    },
                    {
                        "value": "PAN",
                        "name": "Panchagarh"
                    },
                    {
                        "value": "PAT",
                        "name": "Patuakhali"
                    },
                    {
                        "value": "PIR",
                        "name": "Pirojpur"
                    },
                    {
                        "value": "RAJB",
                        "name": "Rajbari"
                    },
                    {
                        "value": "RAJ",
                        "name": "Rajshahi"
                    },
                    {
                        "value": "RAN",
                        "name": "Rangamati"
                    },
                    {
                        "value": "RANP",
                        "name": "Rangpur"
                    },
                    {
                        "value": "SAT",
                        "name": "Satkhira"
                    },
                    {
                        "value": "SHA",
                        "name": "Shariatpur"
                    },
                    {
                        "value": "SHE",
                        "name": "Sherpur"
                    },
                    {
                        "value": "SIR",
                        "name": "Sirajganj"
                    },
                    {
                        "value": "SUN",
                        "name": "Sunamganj"
                    },
                    {
                        "value": "SYL",
                        "name": "Sylhet"
                    },
                    {
                        "value": "TAN",
                        "name": "Tangail"
                    },
                    {
                        "value": "THA",
                        "name": "Thakurgaon"
                    }
                ],
                "BO": [
                    {
                        "value": "B",
                        "name": "Chuquisaca"
                    },
                    {
                        "value": "H",
                        "name": "Beni"
                    },
                    {
                        "value": "C",
                        "name": "Cochabamba"
                    },
                    {
                        "value": "L",
                        "name": "La Paz"
                    },
                    {
                        "value": "O",
                        "name": "Oruro"
                    },
                    {
                        "value": "N",
                        "name": "Pando"
                    },
                    {
                        "value": "P",
                        "name": "Potosí"
                    },
                    {
                        "value": "S",
                        "name": "Santa Cruz"
                    },
                    {
                        "value": "T",
                        "name": "Tarija"
                    }
                ],
                "BR": [
                    {
                        "value": "AC",
                        "name": "Acre"
                    },
                    {
                        "value": "AL",
                        "name": "Alagoas"
                    },
                    {
                        "value": "AP",
                        "name": "Amap&aacute;"
                    },
                    {
                        "value": "AM",
                        "name": "Amazonas"
                    },
                    {
                        "value": "BA",
                        "name": "Bahia"
                    },
                    {
                        "value": "CE",
                        "name": "Cear&aacute;"
                    },
                    {
                        "value": "DF",
                        "name": "Distrito Federal"
                    },
                    {
                        "value": "ES",
                        "name": "Esp&iacute;rito Santo"
                    },
                    {
                        "value": "GO",
                        "name": "Goi&aacute;s"
                    },
                    {
                        "value": "MA",
                        "name": "Maranh&atilde;o"
                    },
                    {
                        "value": "MT",
                        "name": "Mato Grosso"
                    },
                    {
                        "value": "MS",
                        "name": "Mato Grosso do Sul"
                    },
                    {
                        "value": "MG",
                        "name": "Minas Gerais"
                    },
                    {
                        "value": "PA",
                        "name": "Par&aacute;"
                    },
                    {
                        "value": "PB",
                        "name": "Para&iacute;ba"
                    },
                    {
                        "value": "PR",
                        "name": "Paran&aacute;"
                    },
                    {
                        "value": "PE",
                        "name": "Pernambuco"
                    },
                    {
                        "value": "PI",
                        "name": "Piau&iacute;"
                    },
                    {
                        "value": "RJ",
                        "name": "Rio de Janeiro"
                    },
                    {
                        "value": "RN",
                        "name": "Rio Grande do Norte"
                    },
                    {
                        "value": "RS",
                        "name": "Rio Grande do Sul"
                    },
                    {
                        "value": "RO",
                        "name": "Rond&ocirc;nia"
                    },
                    {
                        "value": "RR",
                        "name": "Roraima"
                    },
                    {
                        "value": "SC",
                        "name": "Santa Catarina"
                    },
                    {
                        "value": "SP",
                        "name": "S&atilde;o Paulo"
                    },
                    {
                        "value": "SE",
                        "name": "Sergipe"
                    },
                    {
                        "value": "TO",
                        "name": "Tocantins"
                    }
                ],
                "BG": [
                    {
                        "value": "BG-01",
                        "name": "Blagoevgrad"
                    },
                    {
                        "value": "BG-02",
                        "name": "Burgas"
                    },
                    {
                        "value": "BG-08",
                        "name": "Dobrich"
                    },
                    {
                        "value": "BG-07",
                        "name": "Gabrovo"
                    },
                    {
                        "value": "BG-26",
                        "name": "Haskovo"
                    },
                    {
                        "value": "BG-09",
                        "name": "Kardzhali"
                    },
                    {
                        "value": "BG-10",
                        "name": "Kyustendil"
                    },
                    {
                        "value": "BG-11",
                        "name": "Lovech"
                    },
                    {
                        "value": "BG-12",
                        "name": "Montana"
                    },
                    {
                        "value": "BG-13",
                        "name": "Pazardzhik"
                    },
                    {
                        "value": "BG-14",
                        "name": "Pernik"
                    },
                    {
                        "value": "BG-15",
                        "name": "Pleven"
                    },
                    {
                        "value": "BG-16",
                        "name": "Plovdiv"
                    },
                    {
                        "value": "BG-17",
                        "name": "Razgrad"
                    },
                    {
                        "value": "BG-18",
                        "name": "Ruse"
                    },
                    {
                        "value": "BG-27",
                        "name": "Shumen"
                    },
                    {
                        "value": "BG-19",
                        "name": "Silistra"
                    },
                    {
                        "value": "BG-20",
                        "name": "Sliven"
                    },
                    {
                        "value": "BG-21",
                        "name": "Smolyan"
                    },
                    {
                        "value": "BG-23",
                        "name": "Sofia"
                    },
                    {
                        "value": "BG-22",
                        "name": "Sofia-Grad"
                    },
                    {
                        "value": "BG-24",
                        "name": "Stara Zagora"
                    },
                    {
                        "value": "BG-25",
                        "name": "Targovishte"
                    },
                    {
                        "value": "BG-03",
                        "name": "Varna"
                    },
                    {
                        "value": "BG-04",
                        "name": "Veliko Tarnovo"
                    },
                    {
                        "value": "BG-05",
                        "name": "Vidin"
                    },
                    {
                        "value": "BG-06",
                        "name": "Vratsa"
                    },
                    {
                        "value": "BG-28",
                        "name": "Yambol"
                    }
                ],
                "CA": [
                    {
                        "value": "AB",
                        "name": "Alberta"
                    },
                    {
                        "value": "BC",
                        "name": "British Columbia"
                    },
                    {
                        "value": "MB",
                        "name": "Manitoba"
                    },
                    {
                        "value": "NB",
                        "name": "New Brunswick"
                    },
                    {
                        "value": "NL",
                        "name": "Newfoundland and Labrador"
                    },
                    {
                        "value": "NT",
                        "name": "Northwest Territories"
                    },
                    {
                        "value": "NS",
                        "name": "Nova Scotia"
                    },
                    {
                        "value": "NU",
                        "name": "Nunavut"
                    },
                    {
                        "value": "ON",
                        "name": "Ontario"
                    },
                    {
                        "value": "PE",
                        "name": "Prince Edward Island"
                    },
                    {
                        "value": "QC",
                        "name": "Quebec"
                    },
                    {
                        "value": "SK",
                        "name": "Saskatchewan"
                    },
                    {
                        "value": "YT",
                        "name": "Yukon Territory"
                    }
                ],
                "CN": [
                    {
                        "value": "CN1",
                        "name": "Yunnan / &#20113;&#21335;"
                    },
                    {
                        "value": "CN2",
                        "name": "Beijing / &#21271;&#20140;"
                    },
                    {
                        "value": "CN3",
                        "name": "Tianjin / &#22825;&#27941;"
                    },
                    {
                        "value": "CN4",
                        "name": "Hebei / &#27827;&#21271;"
                    },
                    {
                        "value": "CN5",
                        "name": "Shanxi / &#23665;&#35199;"
                    },
                    {
                        "value": "CN6",
                        "name": "Inner Mongolia / &#20839;&#33945;&#21476;"
                    },
                    {
                        "value": "CN7",
                        "name": "Liaoning / &#36797;&#23425;"
                    },
                    {
                        "value": "CN8",
                        "name": "Jilin / &#21513;&#26519;"
                    },
                    {
                        "value": "CN9",
                        "name": "Heilongjiang / &#40657;&#40857;&#27743;"
                    },
                    {
                        "value": "CN10",
                        "name": "Shanghai / &#19978;&#28023;"
                    },
                    {
                        "value": "CN11",
                        "name": "Jiangsu / &#27743;&#33487;"
                    },
                    {
                        "value": "CN12",
                        "name": "Zhejiang / &#27993;&#27743;"
                    },
                    {
                        "value": "CN13",
                        "name": "Anhui / &#23433;&#24509;"
                    },
                    {
                        "value": "CN14",
                        "name": "Fujian / &#31119;&#24314;"
                    },
                    {
                        "value": "CN15",
                        "name": "Jiangxi / &#27743;&#35199;"
                    },
                    {
                        "value": "CN16",
                        "name": "Shandong / &#23665;&#19996;"
                    },
                    {
                        "value": "CN17",
                        "name": "Henan / &#27827;&#21335;"
                    },
                    {
                        "value": "CN18",
                        "name": "Hubei / &#28246;&#21271;"
                    },
                    {
                        "value": "CN19",
                        "name": "Hunan / &#28246;&#21335;"
                    },
                    {
                        "value": "CN20",
                        "name": "Guangdong / &#24191;&#19996;"
                    },
                    {
                        "value": "CN21",
                        "name": "Guangxi Zhuang / &#24191;&#35199;&#22766;&#26063;"
                    },
                    {
                        "value": "CN22",
                        "name": "Hainan / &#28023;&#21335;"
                    },
                    {
                        "value": "CN23",
                        "name": "Chongqing / &#37325;&#24198;"
                    },
                    {
                        "value": "CN24",
                        "name": "Sichuan / &#22235;&#24029;"
                    },
                    {
                        "value": "CN25",
                        "name": "Guizhou / &#36149;&#24030;"
                    },
                    {
                        "value": "CN26",
                        "name": "Shaanxi / &#38485;&#35199;"
                    },
                    {
                        "value": "CN27",
                        "name": "Gansu / &#29976;&#32899;"
                    },
                    {
                        "value": "CN28",
                        "name": "Qinghai / &#38738;&#28023;"
                    },
                    {
                        "value": "CN29",
                        "name": "Ningxia Hui / &#23425;&#22799;"
                    },
                    {
                        "value": "CN30",
                        "name": "Macau / &#28595;&#38376;"
                    },
                    {
                        "value": "CN31",
                        "name": "Tibet / &#35199;&#34255;"
                    },
                    {
                        "value": "CN32",
                        "name": "Xinjiang / &#26032;&#30086;"
                    }
                ],
                "GR": [
                    {
                        "value": "I",
                        "name": "Αττική"
                    },
                    {
                        "value": "A",
                        "name": "Ανατολική Μακεδονία και Θράκη"
                    },
                    {
                        "value": "B",
                        "name": "Κεντρική Μακεδονία"
                    },
                    {
                        "value": "C",
                        "name": "Δυτική Μακεδονία"
                    },
                    {
                        "value": "D",
                        "name": "Ήπειρος"
                    },
                    {
                        "value": "E",
                        "name": "Θεσσαλία"
                    },
                    {
                        "value": "F",
                        "name": "Ιόνιοι Νήσοι"
                    },
                    {
                        "value": "G",
                        "name": "Δυτική Ελλάδα"
                    },
                    {
                        "value": "H",
                        "name": "Στερεά Ελλάδα"
                    },
                    {
                        "value": "J",
                        "name": "Πελοπόννησος"
                    },
                    {
                        "value": "K",
                        "name": "Βόρειο Αιγαίο"
                    },
                    {
                        "value": "L",
                        "name": "Νότιο Αιγαίο"
                    },
                    {
                        "value": "M",
                        "name": "Κρήτη"
                    }
                ],
                "HK": [
                    {
                        "value": "HONG KONG",
                        "name": "Hong Kong Island"
                    },
                    {
                        "value": "KOWLOON",
                        "name": "Kowloon"
                    },
                    {
                        "value": "NEW TERRITORIES",
                        "name": "New Territories"
                    }
                ],
                "HU": [
                    {
                        "value": "BK",
                        "name": "Bács-Kiskun"
                    },
                    {
                        "value": "BE",
                        "name": "Békés"
                    },
                    {
                        "value": "BA",
                        "name": "Baranya"
                    },
                    {
                        "value": "BZ",
                        "name": "Borsod-Abaúj-Zemplén"
                    },
                    {
                        "value": "BU",
                        "name": "Budapest"
                    },
                    {
                        "value": "CS",
                        "name": "Csongrád"
                    },
                    {
                        "value": "FE",
                        "name": "Fejér"
                    },
                    {
                        "value": "GS",
                        "name": "Győr-Moson-Sopron"
                    },
                    {
                        "value": "HB",
                        "name": "Hajdú-Bihar"
                    },
                    {
                        "value": "HE",
                        "name": "Heves"
                    },
                    {
                        "value": "JN",
                        "name": "Jász-Nagykun-Szolnok"
                    },
                    {
                        "value": "KE",
                        "name": "Komárom-Esztergom"
                    },
                    {
                        "value": "NO",
                        "name": "Nógrád"
                    },
                    {
                        "value": "PE",
                        "name": "Pest"
                    },
                    {
                        "value": "SO",
                        "name": "Somogy"
                    },
                    {
                        "value": "SZ",
                        "name": "Szabolcs-Szatmár-Bereg"
                    },
                    {
                        "value": "TO",
                        "name": "Tolna"
                    },
                    {
                        "value": "VA",
                        "name": "Vas"
                    },
                    {
                        "value": "VE",
                        "name": "Veszprém"
                    },
                    {
                        "value": "ZA",
                        "name": "Zala"
                    }
                ],
                "IN": [
                    {
                        "value": "AP",
                        "name": "Andhra Pradesh"
                    },
                    {
                        "value": "AR",
                        "name": "Arunachal Pradesh"
                    },
                    {
                        "value": "AS",
                        "name": "Assam"
                    },
                    {
                        "value": "BR",
                        "name": "Bihar"
                    },
                    {
                        "value": "CT",
                        "name": "Chhattisgarh"
                    },
                    {
                        "value": "GA",
                        "name": "Goa"
                    },
                    {
                        "value": "GJ",
                        "name": "Gujarat"
                    },
                    {
                        "value": "HR",
                        "name": "Haryana"
                    },
                    {
                        "value": "HP",
                        "name": "Himachal Pradesh"
                    },
                    {
                        "value": "JK",
                        "name": "Jammu and Kashmir"
                    },
                    {
                        "value": "JH",
                        "name": "Jharkhand"
                    },
                    {
                        "value": "KA",
                        "name": "Karnataka"
                    },
                    {
                        "value": "KL",
                        "name": "Kerala"
                    },
                    {
                        "value": "MP",
                        "name": "Madhya Pradesh"
                    },
                    {
                        "value": "MH",
                        "name": "Maharashtra"
                    },
                    {
                        "value": "MN",
                        "name": "Manipur"
                    },
                    {
                        "value": "ML",
                        "name": "Meghalaya"
                    },
                    {
                        "value": "MZ",
                        "name": "Mizoram"
                    },
                    {
                        "value": "NL",
                        "name": "Nagaland"
                    },
                    {
                        "value": "OR",
                        "name": "Orissa"
                    },
                    {
                        "value": "PB",
                        "name": "Punjab"
                    },
                    {
                        "value": "RJ",
                        "name": "Rajasthan"
                    },
                    {
                        "value": "SK",
                        "name": "Sikkim"
                    },
                    {
                        "value": "TN",
                        "name": "Tamil Nadu"
                    },
                    {
                        "value": "TS",
                        "name": "Telangana"
                    },
                    {
                        "value": "TR",
                        "name": "Tripura"
                    },
                    {
                        "value": "UK",
                        "name": "Uttarakhand"
                    },
                    {
                        "value": "UP",
                        "name": "Uttar Pradesh"
                    },
                    {
                        "value": "WB",
                        "name": "West Bengal"
                    },
                    {
                        "value": "AN",
                        "name": "Andaman and Nicobar Islands"
                    },
                    {
                        "value": "CH",
                        "name": "Chandigarh"
                    },
                    {
                        "value": "DN",
                        "name": "Dadra and Nagar Haveli"
                    },
                    {
                        "value": "DD",
                        "name": "Daman and Diu"
                    },
                    {
                        "value": "DL",
                        "name": "Delhi"
                    },
                    {
                        "value": "LD",
                        "name": "Lakshadeep"
                    },
                    {
                        "value": "PY",
                        "name": "Pondicherry (Puducherry)"
                    }
                ],
                "ID": [
                    {
                        "value": "AC",
                        "name": "Daerah Istimewa Aceh"
                    },
                    {
                        "value": "SU",
                        "name": "Sumatera Utara"
                    },
                    {
                        "value": "SB",
                        "name": "Sumatera Barat"
                    },
                    {
                        "value": "RI",
                        "name": "Riau"
                    },
                    {
                        "value": "KR",
                        "name": "Kepulauan Riau"
                    },
                    {
                        "value": "JA",
                        "name": "Jambi"
                    },
                    {
                        "value": "SS",
                        "name": "Sumatera Selatan"
                    },
                    {
                        "value": "BB",
                        "name": "Bangka Belitung"
                    },
                    {
                        "value": "BE",
                        "name": "Bengkulu"
                    },
                    {
                        "value": "LA",
                        "name": "Lampung"
                    },
                    {
                        "value": "JK",
                        "name": "DKI Jakarta"
                    },
                    {
                        "value": "JB",
                        "name": "Jawa Barat"
                    },
                    {
                        "value": "BT",
                        "name": "Banten"
                    },
                    {
                        "value": "JT",
                        "name": "Jawa Tengah"
                    },
                    {
                        "value": "JI",
                        "name": "Jawa Timur"
                    },
                    {
                        "value": "YO",
                        "name": "Daerah Istimewa Yogyakarta"
                    },
                    {
                        "value": "BA",
                        "name": "Bali"
                    },
                    {
                        "value": "NB",
                        "name": "Nusa Tenggara Barat"
                    },
                    {
                        "value": "NT",
                        "name": "Nusa Tenggara Timur"
                    },
                    {
                        "value": "KB",
                        "name": "Kalimantan Barat"
                    },
                    {
                        "value": "KT",
                        "name": "Kalimantan Tengah"
                    },
                    {
                        "value": "KI",
                        "name": "Kalimantan Timur"
                    },
                    {
                        "value": "KS",
                        "name": "Kalimantan Selatan"
                    },
                    {
                        "value": "KU",
                        "name": "Kalimantan Utara"
                    },
                    {
                        "value": "SA",
                        "name": "Sulawesi Utara"
                    },
                    {
                        "value": "ST",
                        "name": "Sulawesi Tengah"
                    },
                    {
                        "value": "SG",
                        "name": "Sulawesi Tenggara"
                    },
                    {
                        "value": "SR",
                        "name": "Sulawesi Barat"
                    },
                    {
                        "value": "SN",
                        "name": "Sulawesi Selatan"
                    },
                    {
                        "value": "GO",
                        "name": "Gorontalo"
                    },
                    {
                        "value": "MA",
                        "name": "Maluku"
                    },
                    {
                        "value": "MU",
                        "name": "Maluku Utara"
                    },
                    {
                        "value": "PA",
                        "name": "Papua"
                    },
                    {
                        "value": "PB",
                        "name": "Papua Barat"
                    }
                ],
                "IR": [
                    {
                        "value": "KHZ",
                        "name": "Khuzestan  (خوزستان)"
                    },
                    {
                        "value": "THR",
                        "name": "Tehran  (تهران)"
                    },
                    {
                        "value": "ILM",
                        "name": "Ilaam (ایلام)"
                    },
                    {
                        "value": "BHR",
                        "name": "Bushehr (بوشهر)"
                    },
                    {
                        "value": "ADL",
                        "name": "Ardabil (اردبیل)"
                    },
                    {
                        "value": "ESF",
                        "name": "Isfahan (اصفهان)"
                    },
                    {
                        "value": "YZD",
                        "name": "Yazd (یزد)"
                    },
                    {
                        "value": "KRH",
                        "name": "Kermanshah (کرمانشاه)"
                    },
                    {
                        "value": "KRN",
                        "name": "Kerman (کرمان)"
                    },
                    {
                        "value": "HDN",
                        "name": "Hamadan (همدان)"
                    },
                    {
                        "value": "GZN",
                        "name": "Ghazvin (قزوین)"
                    },
                    {
                        "value": "ZJN",
                        "name": "Zanjan (زنجان)"
                    },
                    {
                        "value": "LRS",
                        "name": "Luristan (لرستان)"
                    },
                    {
                        "value": "ABZ",
                        "name": "Alborz (البرز)"
                    },
                    {
                        "value": "EAZ",
                        "name": "East Azarbaijan (آذربایجان شرقی)"
                    },
                    {
                        "value": "WAZ",
                        "name": "West Azarbaijan (آذربایجان غربی)"
                    },
                    {
                        "value": "CHB",
                        "name": "Chaharmahal and Bakhtiari (چهارمحال و بختیاری)"
                    },
                    {
                        "value": "SKH",
                        "name": "South Khorasan (خراسان جنوبی)"
                    },
                    {
                        "value": "RKH",
                        "name": "Razavi Khorasan (خراسان رضوی)"
                    },
                    {
                        "value": "NKH",
                        "name": "North Khorasan (خراسان جنوبی)"
                    },
                    {
                        "value": "SMN",
                        "name": "Semnan (سمنان)"
                    },
                    {
                        "value": "FRS",
                        "name": "Fars (فارس)"
                    },
                    {
                        "value": "QHM",
                        "name": "Qom (قم)"
                    },
                    {
                        "value": "KRD",
                        "name": "Kurdistan / کردستان)"
                    },
                    {
                        "value": "KBD",
                        "name": "Kohgiluyeh and BoyerAhmad (کهگیلوییه و بویراحمد)"
                    },
                    {
                        "value": "GLS",
                        "name": "Golestan (گلستان)"
                    },
                    {
                        "value": "GIL",
                        "name": "Gilan (گیلان)"
                    },
                    {
                        "value": "MZN",
                        "name": "Mazandaran (مازندران)"
                    },
                    {
                        "value": "MKZ",
                        "name": "Markazi (مرکزی)"
                    },
                    {
                        "value": "HRZ",
                        "name": "Hormozgan (هرمزگان)"
                    },
                    {
                        "value": "SBN",
                        "name": "Sistan and Baluchestan (سیستان و بلوچستان)"
                    }
                ],
                "IE": [
                    {
                        "value": "CE",
                        "name": "Clare"
                    },
                    {
                        "value": "CK",
                        "name": "Cork"
                    },
                    {
                        "value": "CN",
                        "name": "Cavan"
                    },
                    {
                        "value": "CW",
                        "name": "Carlow"
                    },
                    {
                        "value": "DL",
                        "name": "Donegal"
                    },
                    {
                        "value": "DN",
                        "name": "Dublin"
                    },
                    {
                        "value": "GY",
                        "name": "Galway"
                    },
                    {
                        "value": "KE",
                        "name": "Kildare"
                    },
                    {
                        "value": "KK",
                        "name": "Kilkenny"
                    },
                    {
                        "value": "KY",
                        "name": "Kerry"
                    },
                    {
                        "value": "LD",
                        "name": "Longford"
                    },
                    {
                        "value": "LH",
                        "name": "Louth"
                    },
                    {
                        "value": "LK",
                        "name": "Limerick"
                    },
                    {
                        "value": "LM",
                        "name": "Leitrim"
                    },
                    {
                        "value": "LS",
                        "name": "Laois"
                    },
                    {
                        "value": "MH",
                        "name": "Meath"
                    },
                    {
                        "value": "MN",
                        "name": "Monaghan"
                    },
                    {
                        "value": "MO",
                        "name": "Mayo"
                    },
                    {
                        "value": "OY",
                        "name": "Offaly"
                    },
                    {
                        "value": "RN",
                        "name": "Roscommon"
                    },
                    {
                        "value": "SO",
                        "name": "Sligo"
                    },
                    {
                        "value": "TY",
                        "name": "Tipperary"
                    },
                    {
                        "value": "WD",
                        "name": "Waterford"
                    },
                    {
                        "value": "WH",
                        "name": "Westmeath"
                    },
                    {
                        "value": "WW",
                        "name": "Wicklow"
                    },
                    {
                        "value": "WX",
                        "name": "Wexford"
                    }
                ],
                "IT": [
                    {
                        "value": "AG",
                        "name": "Agrigento"
                    },
                    {
                        "value": "AL",
                        "name": "Alessandria"
                    },
                    {
                        "value": "AN",
                        "name": "Ancona"
                    },
                    {
                        "value": "AO",
                        "name": "Aosta"
                    },
                    {
                        "value": "AR",
                        "name": "Arezzo"
                    },
                    {
                        "value": "AP",
                        "name": "Ascoli Piceno"
                    },
                    {
                        "value": "AT",
                        "name": "Asti"
                    },
                    {
                        "value": "AV",
                        "name": "Avellino"
                    },
                    {
                        "value": "BA",
                        "name": "Bari"
                    },
                    {
                        "value": "BT",
                        "name": "Barletta-Andria-Trani"
                    },
                    {
                        "value": "BL",
                        "name": "Belluno"
                    },
                    {
                        "value": "BN",
                        "name": "Benevento"
                    },
                    {
                        "value": "BG",
                        "name": "Bergamo"
                    },
                    {
                        "value": "BI",
                        "name": "Biella"
                    },
                    {
                        "value": "BO",
                        "name": "Bologna"
                    },
                    {
                        "value": "BZ",
                        "name": "Bolzano"
                    },
                    {
                        "value": "BS",
                        "name": "Brescia"
                    },
                    {
                        "value": "BR",
                        "name": "Brindisi"
                    },
                    {
                        "value": "CA",
                        "name": "Cagliari"
                    },
                    {
                        "value": "CL",
                        "name": "Caltanissetta"
                    },
                    {
                        "value": "CB",
                        "name": "Campobasso"
                    },
                    {
                        "value": "CI",
                        "name": "Carbonia-Iglesias"
                    },
                    {
                        "value": "CE",
                        "name": "Caserta"
                    },
                    {
                        "value": "CT",
                        "name": "Catania"
                    },
                    {
                        "value": "CZ",
                        "name": "Catanzaro"
                    },
                    {
                        "value": "CH",
                        "name": "Chieti"
                    },
                    {
                        "value": "CO",
                        "name": "Como"
                    },
                    {
                        "value": "CS",
                        "name": "Cosenza"
                    },
                    {
                        "value": "CR",
                        "name": "Cremona"
                    },
                    {
                        "value": "KR",
                        "name": "Crotone"
                    },
                    {
                        "value": "CN",
                        "name": "Cuneo"
                    },
                    {
                        "value": "EN",
                        "name": "Enna"
                    },
                    {
                        "value": "FM",
                        "name": "Fermo"
                    },
                    {
                        "value": "FE",
                        "name": "Ferrara"
                    },
                    {
                        "value": "FI",
                        "name": "Firenze"
                    },
                    {
                        "value": "FG",
                        "name": "Foggia"
                    },
                    {
                        "value": "FC",
                        "name": "Forlì-Cesena"
                    },
                    {
                        "value": "FR",
                        "name": "Frosinone"
                    },
                    {
                        "value": "GE",
                        "name": "Genova"
                    },
                    {
                        "value": "GO",
                        "name": "Gorizia"
                    },
                    {
                        "value": "GR",
                        "name": "Grosseto"
                    },
                    {
                        "value": "IM",
                        "name": "Imperia"
                    },
                    {
                        "value": "IS",
                        "name": "Isernia"
                    },
                    {
                        "value": "SP",
                        "name": "La Spezia"
                    },
                    {
                        "value": "AQ",
                        "name": "L'Aquila"
                    },
                    {
                        "value": "LT",
                        "name": "Latina"
                    },
                    {
                        "value": "LE",
                        "name": "Lecce"
                    },
                    {
                        "value": "LC",
                        "name": "Lecco"
                    },
                    {
                        "value": "LI",
                        "name": "Livorno"
                    },
                    {
                        "value": "LO",
                        "name": "Lodi"
                    },
                    {
                        "value": "LU",
                        "name": "Lucca"
                    },
                    {
                        "value": "MC",
                        "name": "Macerata"
                    },
                    {
                        "value": "MN",
                        "name": "Mantova"
                    },
                    {
                        "value": "MS",
                        "name": "Massa-Carrara"
                    },
                    {
                        "value": "MT",
                        "name": "Matera"
                    },
                    {
                        "value": "ME",
                        "name": "Messina"
                    },
                    {
                        "value": "MI",
                        "name": "Milano"
                    },
                    {
                        "value": "MO",
                        "name": "Modena"
                    },
                    {
                        "value": "MB",
                        "name": "Monza e della Brianza"
                    },
                    {
                        "value": "NA",
                        "name": "Napoli"
                    },
                    {
                        "value": "NO",
                        "name": "Novara"
                    },
                    {
                        "value": "NU",
                        "name": "Nuoro"
                    },
                    {
                        "value": "OT",
                        "name": "Olbia-Tempio"
                    },
                    {
                        "value": "OR",
                        "name": "Oristano"
                    },
                    {
                        "value": "PD",
                        "name": "Padova"
                    },
                    {
                        "value": "PA",
                        "name": "Palermo"
                    },
                    {
                        "value": "PR",
                        "name": "Parma"
                    },
                    {
                        "value": "PV",
                        "name": "Pavia"
                    },
                    {
                        "value": "PG",
                        "name": "Perugia"
                    },
                    {
                        "value": "PU",
                        "name": "Pesaro e Urbino"
                    },
                    {
                        "value": "PE",
                        "name": "Pescara"
                    },
                    {
                        "value": "PC",
                        "name": "Piacenza"
                    },
                    {
                        "value": "PI",
                        "name": "Pisa"
                    },
                    {
                        "value": "PT",
                        "name": "Pistoia"
                    },
                    {
                        "value": "PN",
                        "name": "Pordenone"
                    },
                    {
                        "value": "PZ",
                        "name": "Potenza"
                    },
                    {
                        "value": "PO",
                        "name": "Prato"
                    },
                    {
                        "value": "RG",
                        "name": "Ragusa"
                    },
                    {
                        "value": "RA",
                        "name": "Ravenna"
                    },
                    {
                        "value": "RC",
                        "name": "Reggio Calabria"
                    },
                    {
                        "value": "RE",
                        "name": "Reggio Emilia"
                    },
                    {
                        "value": "RI",
                        "name": "Rieti"
                    },
                    {
                        "value": "RN",
                        "name": "Rimini"
                    },
                    {
                        "value": "RM",
                        "name": "Roma"
                    },
                    {
                        "value": "RO",
                        "name": "Rovigo"
                    },
                    {
                        "value": "SA",
                        "name": "Salerno"
                    },
                    {
                        "value": "VS",
                        "name": "Medio Campidano"
                    },
                    {
                        "value": "SS",
                        "name": "Sassari"
                    },
                    {
                        "value": "SV",
                        "name": "Savona"
                    },
                    {
                        "value": "SI",
                        "name": "Siena"
                    },
                    {
                        "value": "SR",
                        "name": "Siracusa"
                    },
                    {
                        "value": "SO",
                        "name": "Sondrio"
                    },
                    {
                        "value": "TA",
                        "name": "Taranto"
                    },
                    {
                        "value": "TE",
                        "name": "Teramo"
                    },
                    {
                        "value": "TR",
                        "name": "Terni"
                    },
                    {
                        "value": "TO",
                        "name": "Torino"
                    },
                    {
                        "value": "OG",
                        "name": "Ogliastra"
                    },
                    {
                        "value": "TP",
                        "name": "Trapani"
                    },
                    {
                        "value": "TN",
                        "name": "Trento"
                    },
                    {
                        "value": "TV",
                        "name": "Treviso"
                    },
                    {
                        "value": "TS",
                        "name": "Trieste"
                    },
                    {
                        "value": "UD",
                        "name": "Udine"
                    },
                    {
                        "value": "VA",
                        "name": "Varese"
                    },
                    {
                        "value": "VE",
                        "name": "Venezia"
                    },
                    {
                        "value": "VB",
                        "name": "Verbano-Cusio-Ossola"
                    },
                    {
                        "value": "VC",
                        "name": "Vercelli"
                    },
                    {
                        "value": "VR",
                        "name": "Verona"
                    },
                    {
                        "value": "VV",
                        "name": "Vibo Valentia"
                    },
                    {
                        "value": "VI",
                        "name": "Vicenza"
                    },
                    {
                        "value": "VT",
                        "name": "Viterbo"
                    }
                ],
                "JP": [
                    {
                        "value": "JP01",
                        "name": "Hokkaido"
                    },
                    {
                        "value": "JP02",
                        "name": "Aomori"
                    },
                    {
                        "value": "JP03",
                        "name": "Iwate"
                    },
                    {
                        "value": "JP04",
                        "name": "Miyagi"
                    },
                    {
                        "value": "JP05",
                        "name": "Akita"
                    },
                    {
                        "value": "JP06",
                        "name": "Yamagata"
                    },
                    {
                        "value": "JP07",
                        "name": "Fukushima"
                    },
                    {
                        "value": "JP08",
                        "name": "Ibaraki"
                    },
                    {
                        "value": "JP09",
                        "name": "Tochigi"
                    },
                    {
                        "value": "JP10",
                        "name": "Gunma"
                    },
                    {
                        "value": "JP11",
                        "name": "Saitama"
                    },
                    {
                        "value": "JP12",
                        "name": "Chiba"
                    },
                    {
                        "value": "JP13",
                        "name": "Tokyo"
                    },
                    {
                        "value": "JP14",
                        "name": "Kanagawa"
                    },
                    {
                        "value": "JP15",
                        "name": "Niigata"
                    },
                    {
                        "value": "JP16",
                        "name": "Toyama"
                    },
                    {
                        "value": "JP17",
                        "name": "Ishikawa"
                    },
                    {
                        "value": "JP18",
                        "name": "Fukui"
                    },
                    {
                        "value": "JP19",
                        "name": "Yamanashi"
                    },
                    {
                        "value": "JP20",
                        "name": "Nagano"
                    },
                    {
                        "value": "JP21",
                        "name": "Gifu"
                    },
                    {
                        "value": "JP22",
                        "name": "Shizuoka"
                    },
                    {
                        "value": "JP23",
                        "name": "Aichi"
                    },
                    {
                        "value": "JP24",
                        "name": "Mie"
                    },
                    {
                        "value": "JP25",
                        "name": "Shiga"
                    },
                    {
                        "value": "JP26",
                        "name": "Kyoto"
                    },
                    {
                        "value": "JP27",
                        "name": "Osaka"
                    },
                    {
                        "value": "JP28",
                        "name": "Hyogo"
                    },
                    {
                        "value": "JP29",
                        "name": "Nara"
                    },
                    {
                        "value": "JP30",
                        "name": "Wakayama"
                    },
                    {
                        "value": "JP31",
                        "name": "Tottori"
                    },
                    {
                        "value": "JP32",
                        "name": "Shimane"
                    },
                    {
                        "value": "JP33",
                        "name": "Okayama"
                    },
                    {
                        "value": "JP34",
                        "name": "Hiroshima"
                    },
                    {
                        "value": "JP35",
                        "name": "Yamaguchi"
                    },
                    {
                        "value": "JP36",
                        "name": "Tokushima"
                    },
                    {
                        "value": "JP37",
                        "name": "Kagawa"
                    },
                    {
                        "value": "JP38",
                        "name": "Ehime"
                    },
                    {
                        "value": "JP39",
                        "name": "Kochi"
                    },
                    {
                        "value": "JP40",
                        "name": "Fukuoka"
                    },
                    {
                        "value": "JP41",
                        "name": "Saga"
                    },
                    {
                        "value": "JP42",
                        "name": "Nagasaki"
                    },
                    {
                        "value": "JP43",
                        "name": "Kumamoto"
                    },
                    {
                        "value": "JP44",
                        "name": "Oita"
                    },
                    {
                        "value": "JP45",
                        "name": "Miyazaki"
                    },
                    {
                        "value": "JP46",
                        "name": "Kagoshima"
                    },
                    {
                        "value": "JP47",
                        "name": "Okinawa"
                    }
                ],
                "MY": [
                    {
                        "value": "JHR",
                        "name": "Johor"
                    },
                    {
                        "value": "KDH",
                        "name": "Kedah"
                    },
                    {
                        "value": "KTN",
                        "name": "Kelantan"
                    },
                    {
                        "value": "LBN",
                        "name": "Labuan"
                    },
                    {
                        "value": "MLK",
                        "name": "Malacca (Melaka)"
                    },
                    {
                        "value": "NSN",
                        "name": "Negeri Sembilan"
                    },
                    {
                        "value": "PHG",
                        "name": "Pahang"
                    },
                    {
                        "value": "PNG",
                        "name": "Penang (Pulau Pinang)"
                    },
                    {
                        "value": "PRK",
                        "name": "Perak"
                    },
                    {
                        "value": "PLS",
                        "name": "Perlis"
                    },
                    {
                        "value": "SBH",
                        "name": "Sabah"
                    },
                    {
                        "value": "SWK",
                        "name": "Sarawak"
                    },
                    {
                        "value": "SGR",
                        "name": "Selangor"
                    },
                    {
                        "value": "TRG",
                        "name": "Terengganu"
                    },
                    {
                        "value": "PJY",
                        "name": "Putrajaya"
                    },
                    {
                        "value": "KUL",
                        "name": "Kuala Lumpur"
                    }
                ],
                "MX": [
                    {
                        "value": "Distrito Federal",
                        "name": "Distrito Federal"
                    },
                    {
                        "value": "Jalisco",
                        "name": "Jalisco"
                    },
                    {
                        "value": "Nuevo Leon",
                        "name": "Nuevo León"
                    },
                    {
                        "value": "Aguascalientes",
                        "name": "Aguascalientes"
                    },
                    {
                        "value": "Baja California",
                        "name": "Baja California"
                    },
                    {
                        "value": "Baja California Sur",
                        "name": "Baja California Sur"
                    },
                    {
                        "value": "Campeche",
                        "name": "Campeche"
                    },
                    {
                        "value": "Chiapas",
                        "name": "Chiapas"
                    },
                    {
                        "value": "Chihuahua",
                        "name": "Chihuahua"
                    },
                    {
                        "value": "Coahuila",
                        "name": "Coahuila"
                    },
                    {
                        "value": "Colima",
                        "name": "Colima"
                    },
                    {
                        "value": "Durango",
                        "name": "Durango"
                    },
                    {
                        "value": "Guanajuato",
                        "name": "Guanajuato"
                    },
                    {
                        "value": "Guerrero",
                        "name": "Guerrero"
                    },
                    {
                        "value": "Hidalgo",
                        "name": "Hidalgo"
                    },
                    {
                        "value": "Estado de Mexico",
                        "name": "Edo. de México"
                    },
                    {
                        "value": "Michoacan",
                        "name": "Michoacán"
                    },
                    {
                        "value": "Morelos",
                        "name": "Morelos"
                    },
                    {
                        "value": "Nayarit",
                        "name": "Nayarit"
                    },
                    {
                        "value": "Oaxaca",
                        "name": "Oaxaca"
                    },
                    {
                        "value": "Puebla",
                        "name": "Puebla"
                    },
                    {
                        "value": "Queretaro",
                        "name": "Querétaro"
                    },
                    {
                        "value": "Quintana Roo",
                        "name": "Quintana Roo"
                    },
                    {
                        "value": "San Luis Potosi",
                        "name": "San Luis Potosí"
                    },
                    {
                        "value": "Sinaloa",
                        "name": "Sinaloa"
                    },
                    {
                        "value": "Sonora",
                        "name": "Sonora"
                    },
                    {
                        "value": "Tabasco",
                        "name": "Tabasco"
                    },
                    {
                        "value": "Tamaulipas",
                        "name": "Tamaulipas"
                    },
                    {
                        "value": "Tlaxcala",
                        "name": "Tlaxcala"
                    },
                    {
                        "value": "Veracruz",
                        "name": "Veracruz"
                    },
                    {
                        "value": "Yucatan",
                        "name": "Yucatán"
                    },
                    {
                        "value": "Zacatecas",
                        "name": "Zacatecas"
                    }
                ],
                "NP": [
                    {
                        "value": "BAG",
                        "name": "Bagmati"
                    },
                    {
                        "value": "BHE",
                        "name": "Bheri"
                    },
                    {
                        "value": "DHA",
                        "name": "Dhaulagiri"
                    },
                    {
                        "value": "GAN",
                        "name": "Gandaki"
                    },
                    {
                        "value": "JAN",
                        "name": "Janakpur"
                    },
                    {
                        "value": "KAR",
                        "name": "Karnali"
                    },
                    {
                        "value": "KOS",
                        "name": "Koshi"
                    },
                    {
                        "value": "LUM",
                        "name": "Lumbini"
                    },
                    {
                        "value": "MAH",
                        "name": "Mahakali"
                    },
                    {
                        "value": "MEC",
                        "name": "Mechi"
                    },
                    {
                        "value": "NAR",
                        "name": "Narayani"
                    },
                    {
                        "value": "RAP",
                        "name": "Rapti"
                    },
                    {
                        "value": "SAG",
                        "name": "Sagarmatha"
                    },
                    {
                        "value": "SET",
                        "name": "Seti"
                    }
                ],
                "NZ": [
                    {
                        "value": "NL",
                        "name": "Northland"
                    },
                    {
                        "value": "AK",
                        "name": "Auckland"
                    },
                    {
                        "value": "WA",
                        "name": "Waikato"
                    },
                    {
                        "value": "BP",
                        "name": "Bay of Plenty"
                    },
                    {
                        "value": "TK",
                        "name": "Taranaki"
                    },
                    {
                        "value": "GI",
                        "name": "Gisborne"
                    },
                    {
                        "value": "HB",
                        "name": "Hawke&rsquo;s Bay"
                    },
                    {
                        "value": "MW",
                        "name": "Manawatu-Wanganui"
                    },
                    {
                        "value": "WE",
                        "name": "Wellington"
                    },
                    {
                        "value": "NS",
                        "name": "Nelson"
                    },
                    {
                        "value": "MB",
                        "name": "Marlborough"
                    },
                    {
                        "value": "TM",
                        "name": "Tasman"
                    },
                    {
                        "value": "WC",
                        "name": "West Coast"
                    },
                    {
                        "value": "CT",
                        "name": "Canterbury"
                    },
                    {
                        "value": "OT",
                        "name": "Otago"
                    },
                    {
                        "value": "SL",
                        "name": "Southland"
                    }
                ],
                "NG": [
                    {
                        "value": "AB",
                        "name": "Abia"
                    },
                    {
                        "value": "FC",
                        "name": "Abuja"
                    },
                    {
                        "value": "AD",
                        "name": "Adamawa"
                    },
                    {
                        "value": "AK",
                        "name": "Akwa Ibom"
                    },
                    {
                        "value": "AN",
                        "name": "Anambra"
                    },
                    {
                        "value": "BA",
                        "name": "Bauchi"
                    },
                    {
                        "value": "BY",
                        "name": "Bayelsa"
                    },
                    {
                        "value": "BE",
                        "name": "Benue"
                    },
                    {
                        "value": "BO",
                        "name": "Borno"
                    },
                    {
                        "value": "CR",
                        "name": "Cross River"
                    },
                    {
                        "value": "DE",
                        "name": "Delta"
                    },
                    {
                        "value": "EB",
                        "name": "Ebonyi"
                    },
                    {
                        "value": "ED",
                        "name": "Edo"
                    },
                    {
                        "value": "EK",
                        "name": "Ekiti"
                    },
                    {
                        "value": "EN",
                        "name": "Enugu"
                    },
                    {
                        "value": "GO",
                        "name": "Gombe"
                    },
                    {
                        "value": "IM",
                        "name": "Imo"
                    },
                    {
                        "value": "JI",
                        "name": "Jigawa"
                    },
                    {
                        "value": "KD",
                        "name": "Kaduna"
                    },
                    {
                        "value": "KN",
                        "name": "Kano"
                    },
                    {
                        "value": "KT",
                        "name": "Katsina"
                    },
                    {
                        "value": "KE",
                        "name": "Kebbi"
                    },
                    {
                        "value": "KO",
                        "name": "Kogi"
                    },
                    {
                        "value": "KW",
                        "name": "Kwara"
                    },
                    {
                        "value": "LA",
                        "name": "Lagos"
                    },
                    {
                        "value": "NA",
                        "name": "Nasarawa"
                    },
                    {
                        "value": "NI",
                        "name": "Niger"
                    },
                    {
                        "value": "OG",
                        "name": "Ogun"
                    },
                    {
                        "value": "ON",
                        "name": "Ondo"
                    },
                    {
                        "value": "OS",
                        "name": "Osun"
                    },
                    {
                        "value": "OY",
                        "name": "Oyo"
                    },
                    {
                        "value": "PL",
                        "name": "Plateau"
                    },
                    {
                        "value": "RI",
                        "name": "Rivers"
                    },
                    {
                        "value": "SO",
                        "name": "Sokoto"
                    },
                    {
                        "value": "TA",
                        "name": "Taraba"
                    },
                    {
                        "value": "YO",
                        "name": "Yobe"
                    },
                    {
                        "value": "ZA",
                        "name": "Zamfara"
                    }
                ],
                "PK": [
                    {
                        "value": "JK",
                        "name": "Azad Kashmir"
                    },
                    {
                        "value": "BA",
                        "name": "Balochistan"
                    },
                    {
                        "value": "TA",
                        "name": "FATA"
                    },
                    {
                        "value": "GB",
                        "name": "Gilgit Baltistan"
                    },
                    {
                        "value": "IS",
                        "name": "Islamabad Capital Territory"
                    },
                    {
                        "value": "KP",
                        "name": "Khyber Pakhtunkhwa"
                    },
                    {
                        "value": "PB",
                        "name": "Punjab"
                    },
                    {
                        "value": "SD",
                        "name": "Sindh"
                    }
                ],
                "PE": [
                    {
                        "value": "CAL",
                        "name": "El Callao"
                    },
                    {
                        "value": "LMA",
                        "name": "Municipalidad Metropolitana de Lima"
                    },
                    {
                        "value": "AMA",
                        "name": "Amazonas"
                    },
                    {
                        "value": "ANC",
                        "name": "Ancash"
                    },
                    {
                        "value": "APU",
                        "name": "Apur&iacute;mac"
                    },
                    {
                        "value": "ARE",
                        "name": "Arequipa"
                    },
                    {
                        "value": "AYA",
                        "name": "Ayacucho"
                    },
                    {
                        "value": "CAJ",
                        "name": "Cajamarca"
                    },
                    {
                        "value": "CUS",
                        "name": "Cusco"
                    },
                    {
                        "value": "HUV",
                        "name": "Huancavelica"
                    },
                    {
                        "value": "HUC",
                        "name": "Hu&aacute;nuco"
                    },
                    {
                        "value": "ICA",
                        "name": "Ica"
                    },
                    {
                        "value": "JUN",
                        "name": "Jun&iacute;n"
                    },
                    {
                        "value": "LAL",
                        "name": "La Libertad"
                    },
                    {
                        "value": "LAM",
                        "name": "Lambayeque"
                    },
                    {
                        "value": "LIM",
                        "name": "Lima"
                    },
                    {
                        "value": "LOR",
                        "name": "Loreto"
                    },
                    {
                        "value": "MDD",
                        "name": "Madre de Dios"
                    },
                    {
                        "value": "MOQ",
                        "name": "Moquegua"
                    },
                    {
                        "value": "PAS",
                        "name": "Pasco"
                    },
                    {
                        "value": "PIU",
                        "name": "Piura"
                    },
                    {
                        "value": "PUN",
                        "name": "Puno"
                    },
                    {
                        "value": "SAM",
                        "name": "San Mart&iacute;n"
                    },
                    {
                        "value": "TAC",
                        "name": "Tacna"
                    },
                    {
                        "value": "TUM",
                        "name": "Tumbes"
                    },
                    {
                        "value": "UCA",
                        "name": "Ucayali"
                    }
                ],
                "PH": [
                    {
                        "value": "ABR",
                        "name": "Abra"
                    },
                    {
                        "value": "AGN",
                        "name": "Agusan del Norte"
                    },
                    {
                        "value": "AGS",
                        "name": "Agusan del Sur"
                    },
                    {
                        "value": "AKL",
                        "name": "Aklan"
                    },
                    {
                        "value": "ALB",
                        "name": "Albay"
                    },
                    {
                        "value": "ANT",
                        "name": "Antique"
                    },
                    {
                        "value": "APA",
                        "name": "Apayao"
                    },
                    {
                        "value": "AUR",
                        "name": "Aurora"
                    },
                    {
                        "value": "BAS",
                        "name": "Basilan"
                    },
                    {
                        "value": "BAN",
                        "name": "Bataan"
                    },
                    {
                        "value": "BTN",
                        "name": "Batanes"
                    },
                    {
                        "value": "BTG",
                        "name": "Batangas"
                    },
                    {
                        "value": "BEN",
                        "name": "Benguet"
                    },
                    {
                        "value": "BIL",
                        "name": "Biliran"
                    },
                    {
                        "value": "BOH",
                        "name": "Bohol"
                    },
                    {
                        "value": "BUK",
                        "name": "Bukidnon"
                    },
                    {
                        "value": "BUL",
                        "name": "Bulacan"
                    },
                    {
                        "value": "CAG",
                        "name": "Cagayan"
                    },
                    {
                        "value": "CAN",
                        "name": "Camarines Norte"
                    },
                    {
                        "value": "CAS",
                        "name": "Camarines Sur"
                    },
                    {
                        "value": "CAM",
                        "name": "Camiguin"
                    },
                    {
                        "value": "CAP",
                        "name": "Capiz"
                    },
                    {
                        "value": "CAT",
                        "name": "Catanduanes"
                    },
                    {
                        "value": "CAV",
                        "name": "Cavite"
                    },
                    {
                        "value": "CEB",
                        "name": "Cebu"
                    },
                    {
                        "value": "COM",
                        "name": "Compostela Valley"
                    },
                    {
                        "value": "NCO",
                        "name": "Cotabato"
                    },
                    {
                        "value": "DAV",
                        "name": "Davao del Norte"
                    },
                    {
                        "value": "DAS",
                        "name": "Davao del Sur"
                    },
                    {
                        "value": "DAC",
                        "name": "Davao Occidental"
                    },
                    {
                        "value": "DAO",
                        "name": "Davao Oriental"
                    },
                    {
                        "value": "DIN",
                        "name": "Dinagat Islands"
                    },
                    {
                        "value": "EAS",
                        "name": "Eastern Samar"
                    },
                    {
                        "value": "GUI",
                        "name": "Guimaras"
                    },
                    {
                        "value": "IFU",
                        "name": "Ifugao"
                    },
                    {
                        "value": "ILN",
                        "name": "Ilocos Norte"
                    },
                    {
                        "value": "ILS",
                        "name": "Ilocos Sur"
                    },
                    {
                        "value": "ILI",
                        "name": "Iloilo"
                    },
                    {
                        "value": "ISA",
                        "name": "Isabela"
                    },
                    {
                        "value": "KAL",
                        "name": "Kalinga"
                    },
                    {
                        "value": "LUN",
                        "name": "La Union"
                    },
                    {
                        "value": "LAG",
                        "name": "Laguna"
                    },
                    {
                        "value": "LAN",
                        "name": "Lanao del Norte"
                    },
                    {
                        "value": "LAS",
                        "name": "Lanao del Sur"
                    },
                    {
                        "value": "LEY",
                        "name": "Leyte"
                    },
                    {
                        "value": "MAG",
                        "name": "Maguindanao"
                    },
                    {
                        "value": "MAD",
                        "name": "Marinduque"
                    },
                    {
                        "value": "MAS",
                        "name": "Masbate"
                    },
                    {
                        "value": "MSC",
                        "name": "Misamis Occidental"
                    },
                    {
                        "value": "MSR",
                        "name": "Misamis Oriental"
                    },
                    {
                        "value": "MOU",
                        "name": "Mountain Province"
                    },
                    {
                        "value": "NEC",
                        "name": "Negros Occidental"
                    },
                    {
                        "value": "NER",
                        "name": "Negros Oriental"
                    },
                    {
                        "value": "NSA",
                        "name": "Northern Samar"
                    },
                    {
                        "value": "NUE",
                        "name": "Nueva Ecija"
                    },
                    {
                        "value": "NUV",
                        "name": "Nueva Vizcaya"
                    },
                    {
                        "value": "MDC",
                        "name": "Occidental Mindoro"
                    },
                    {
                        "value": "MDR",
                        "name": "Oriental Mindoro"
                    },
                    {
                        "value": "PLW",
                        "name": "Palawan"
                    },
                    {
                        "value": "PAM",
                        "name": "Pampanga"
                    },
                    {
                        "value": "PAN",
                        "name": "Pangasinan"
                    },
                    {
                        "value": "QUE",
                        "name": "Quezon"
                    },
                    {
                        "value": "QUI",
                        "name": "Quirino"
                    },
                    {
                        "value": "RIZ",
                        "name": "Rizal"
                    },
                    {
                        "value": "ROM",
                        "name": "Romblon"
                    },
                    {
                        "value": "WSA",
                        "name": "Samar"
                    },
                    {
                        "value": "SAR",
                        "name": "Sarangani"
                    },
                    {
                        "value": "SIQ",
                        "name": "Siquijor"
                    },
                    {
                        "value": "SOR",
                        "name": "Sorsogon"
                    },
                    {
                        "value": "SCO",
                        "name": "South Cotabato"
                    },
                    {
                        "value": "SLE",
                        "name": "Southern Leyte"
                    },
                    {
                        "value": "SUK",
                        "name": "Sultan Kudarat"
                    },
                    {
                        "value": "SLU",
                        "name": "Sulu"
                    },
                    {
                        "value": "SUN",
                        "name": "Surigao del Norte"
                    },
                    {
                        "value": "SUR",
                        "name": "Surigao del Sur"
                    },
                    {
                        "value": "TAR",
                        "name": "Tarlac"
                    },
                    {
                        "value": "TAW",
                        "name": "Tawi-Tawi"
                    },
                    {
                        "value": "ZMB",
                        "name": "Zambales"
                    },
                    {
                        "value": "ZAN",
                        "name": "Zamboanga del Norte"
                    },
                    {
                        "value": "ZAS",
                        "name": "Zamboanga del Sur"
                    },
                    {
                        "value": "ZSI",
                        "name": "Zamboanga Sibugay"
                    },
                    {
                        "value": "00",
                        "name": "Metro Manila"
                    }
                ],
                "RO": [
                    {
                        "value": "AB",
                        "name": "Alba"
                    },
                    {
                        "value": "AR",
                        "name": "Arad"
                    },
                    {
                        "value": "AG",
                        "name": "Arges"
                    },
                    {
                        "value": "BC",
                        "name": "Bacau"
                    },
                    {
                        "value": "BH",
                        "name": "Bihor"
                    },
                    {
                        "value": "BN",
                        "name": "Bistrita-Nasaud"
                    },
                    {
                        "value": "BT",
                        "name": "Botosani"
                    },
                    {
                        "value": "BR",
                        "name": "Braila"
                    },
                    {
                        "value": "BV",
                        "name": "Brasov"
                    },
                    {
                        "value": "B",
                        "name": "Bucuresti"
                    },
                    {
                        "value": "BZ",
                        "name": "Buzau"
                    },
                    {
                        "value": "CL",
                        "name": "Calarasi"
                    },
                    {
                        "value": "CS",
                        "name": "Caras-Severin"
                    },
                    {
                        "value": "CJ",
                        "name": "Cluj"
                    },
                    {
                        "value": "CT",
                        "name": "Constanta"
                    },
                    {
                        "value": "CV",
                        "name": "Covasna"
                    },
                    {
                        "value": "DB",
                        "name": "Dambovita"
                    },
                    {
                        "value": "DJ",
                        "name": "Dolj"
                    },
                    {
                        "value": "GL",
                        "name": "Galati"
                    },
                    {
                        "value": "GR",
                        "name": "Giurgiu"
                    },
                    {
                        "value": "GJ",
                        "name": "Gorj"
                    },
                    {
                        "value": "HR",
                        "name": "Harghita"
                    },
                    {
                        "value": "HD",
                        "name": "Hunedoara"
                    },
                    {
                        "value": "IL",
                        "name": "Ialomita"
                    },
                    {
                        "value": "IS",
                        "name": "Iasi"
                    },
                    {
                        "value": "IF",
                        "name": "Ilfov"
                    },
                    {
                        "value": "MM",
                        "name": "Maramures"
                    },
                    {
                        "value": "MH",
                        "name": "Mehedinti"
                    },
                    {
                        "value": "MS",
                        "name": "Mures"
                    },
                    {
                        "value": "NT",
                        "name": "Neamt"
                    },
                    {
                        "value": "OT",
                        "name": "Olt"
                    },
                    {
                        "value": "PH",
                        "name": "Prahova"
                    },
                    {
                        "value": "SJ",
                        "name": "Salaj"
                    },
                    {
                        "value": "SM",
                        "name": "Satu Mare"
                    },
                    {
                        "value": "SB",
                        "name": "Sibiu"
                    },
                    {
                        "value": "SV",
                        "name": "Suceava"
                    },
                    {
                        "value": "TR",
                        "name": "Teleorman"
                    },
                    {
                        "value": "TM",
                        "name": "Timis"
                    },
                    {
                        "value": "TL",
                        "name": "Tulcea"
                    },
                    {
                        "value": "VL",
                        "name": "Valcea"
                    },
                    {
                        "value": "VS",
                        "name": "Vaslui"
                    },
                    {
                        "value": "VN",
                        "name": "Vrancea"
                    }
                ],
                "ZA": [
                    {
                        "value": "EC",
                        "name": "Eastern Cape"
                    },
                    {
                        "value": "FS",
                        "name": "Free State"
                    },
                    {
                        "value": "GP",
                        "name": "Gauteng"
                    },
                    {
                        "value": "KZN",
                        "name": "KwaZulu-Natal"
                    },
                    {
                        "value": "LP",
                        "name": "Limpopo"
                    },
                    {
                        "value": "MP",
                        "name": "Mpumalanga"
                    },
                    {
                        "value": "NC",
                        "name": "Northern Cape"
                    },
                    {
                        "value": "NW",
                        "name": "North West"
                    },
                    {
                        "value": "WC",
                        "name": "Western Cape"
                    }
                ],
                "ES": [
                    {
                        "value": "C",
                        "name": "A Coru&ntilde;a"
                    },
                    {
                        "value": "VI",
                        "name": "Araba/&Aacute;lava"
                    },
                    {
                        "value": "AB",
                        "name": "Albacete"
                    },
                    {
                        "value": "A",
                        "name": "Alicante"
                    },
                    {
                        "value": "AL",
                        "name": "Almer&iacute;a"
                    },
                    {
                        "value": "O",
                        "name": "Asturias"
                    },
                    {
                        "value": "AV",
                        "name": "&Aacute;vila"
                    },
                    {
                        "value": "BA",
                        "name": "Badajoz"
                    },
                    {
                        "value": "PM",
                        "name": "Baleares"
                    },
                    {
                        "value": "B",
                        "name": "Barcelona"
                    },
                    {
                        "value": "BU",
                        "name": "Burgos"
                    },
                    {
                        "value": "CC",
                        "name": "C&aacute;ceres"
                    },
                    {
                        "value": "CA",
                        "name": "C&aacute;diz"
                    },
                    {
                        "value": "S",
                        "name": "Cantabria"
                    },
                    {
                        "value": "CS",
                        "name": "Castell&oacute;n"
                    },
                    {
                        "value": "CE",
                        "name": "Ceuta"
                    },
                    {
                        "value": "CR",
                        "name": "Ciudad Real"
                    },
                    {
                        "value": "CO",
                        "name": "C&oacute;rdoba"
                    },
                    {
                        "value": "CU",
                        "name": "Cuenca"
                    },
                    {
                        "value": "GI",
                        "name": "Girona"
                    },
                    {
                        "value": "GR",
                        "name": "Granada"
                    },
                    {
                        "value": "GU",
                        "name": "Guadalajara"
                    },
                    {
                        "value": "SS",
                        "name": "Gipuzkoa"
                    },
                    {
                        "value": "H",
                        "name": "Huelva"
                    },
                    {
                        "value": "HU",
                        "name": "Huesca"
                    },
                    {
                        "value": "J",
                        "name": "Ja&eacute;n"
                    },
                    {
                        "value": "LO",
                        "name": "La Rioja"
                    },
                    {
                        "value": "GC",
                        "name": "Las Palmas"
                    },
                    {
                        "value": "LE",
                        "name": "Le&oacute;n"
                    },
                    {
                        "value": "L",
                        "name": "Lleida"
                    },
                    {
                        "value": "LU",
                        "name": "Lugo"
                    },
                    {
                        "value": "M",
                        "name": "Madrid"
                    },
                    {
                        "value": "MA",
                        "name": "M&aacute;laga"
                    },
                    {
                        "value": "ML",
                        "name": "Melilla"
                    },
                    {
                        "value": "MU",
                        "name": "Murcia"
                    },
                    {
                        "value": "NA",
                        "name": "Navarra"
                    },
                    {
                        "value": "OR",
                        "name": "Ourense"
                    },
                    {
                        "value": "P",
                        "name": "Palencia"
                    },
                    {
                        "value": "PO",
                        "name": "Pontevedra"
                    },
                    {
                        "value": "SA",
                        "name": "Salamanca"
                    },
                    {
                        "value": "TF",
                        "name": "Santa Cruz de Tenerife"
                    },
                    {
                        "value": "SG",
                        "name": "Segovia"
                    },
                    {
                        "value": "SE",
                        "name": "Sevilla"
                    },
                    {
                        "value": "SO",
                        "name": "Soria"
                    },
                    {
                        "value": "T",
                        "name": "Tarragona"
                    },
                    {
                        "value": "TE",
                        "name": "Teruel"
                    },
                    {
                        "value": "TO",
                        "name": "Toledo"
                    },
                    {
                        "value": "V",
                        "name": "Valencia"
                    },
                    {
                        "value": "VA",
                        "name": "Valladolid"
                    },
                    {
                        "value": "BI",
                        "name": "Bizkaia"
                    },
                    {
                        "value": "ZA",
                        "name": "Zamora"
                    },
                    {
                        "value": "Z",
                        "name": "Zaragoza"
                    }
                ],
                "TH": [
                    {
                        "value": "TH-37",
                        "name": "Amnat Charoen (&#3629;&#3635;&#3609;&#3634;&#3592;&#3648;&#3592;&#3619;&#3636;&#3597;)"
                    },
                    {
                        "value": "TH-15",
                        "name": "Ang Thong (&#3629;&#3656;&#3634;&#3591;&#3607;&#3629;&#3591;)"
                    },
                    {
                        "value": "TH-14",
                        "name": "Ayutthaya (&#3614;&#3619;&#3632;&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3629;&#3618;&#3640;&#3608;&#3618;&#3634;)"
                    },
                    {
                        "value": "TH-10",
                        "name": "Bangkok (&#3585;&#3619;&#3640;&#3591;&#3648;&#3607;&#3614;&#3617;&#3627;&#3634;&#3609;&#3588;&#3619;)"
                    },
                    {
                        "value": "TH-38",
                        "name": "Bueng Kan (&#3610;&#3638;&#3591;&#3585;&#3634;&#3628;)"
                    },
                    {
                        "value": "TH-31",
                        "name": "Buri Ram (&#3610;&#3640;&#3619;&#3637;&#3619;&#3633;&#3617;&#3618;&#3660;)"
                    },
                    {
                        "value": "TH-24",
                        "name": "Chachoengsao (&#3593;&#3632;&#3648;&#3594;&#3636;&#3591;&#3648;&#3607;&#3619;&#3634;)"
                    },
                    {
                        "value": "TH-18",
                        "name": "Chai Nat (&#3594;&#3633;&#3618;&#3609;&#3634;&#3607;)"
                    },
                    {
                        "value": "TH-36",
                        "name": "Chaiyaphum (&#3594;&#3633;&#3618;&#3616;&#3641;&#3617;&#3636;)"
                    },
                    {
                        "value": "TH-22",
                        "name": "Chanthaburi (&#3592;&#3633;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-50",
                        "name": "Chiang Mai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3651;&#3627;&#3617;&#3656;)"
                    },
                    {
                        "value": "TH-57",
                        "name": "Chiang Rai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3619;&#3634;&#3618;)"
                    },
                    {
                        "value": "TH-20",
                        "name": "Chonburi (&#3594;&#3621;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-86",
                        "name": "Chumphon (&#3594;&#3640;&#3617;&#3614;&#3619;)"
                    },
                    {
                        "value": "TH-46",
                        "name": "Kalasin (&#3585;&#3634;&#3628;&#3626;&#3636;&#3609;&#3608;&#3640;&#3660;)"
                    },
                    {
                        "value": "TH-62",
                        "name": "Kamphaeng Phet (&#3585;&#3635;&#3649;&#3614;&#3591;&#3648;&#3614;&#3594;&#3619;)"
                    },
                    {
                        "value": "TH-71",
                        "name": "Kanchanaburi (&#3585;&#3634;&#3597;&#3592;&#3609;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-40",
                        "name": "Khon Kaen (&#3586;&#3629;&#3609;&#3649;&#3585;&#3656;&#3609;)"
                    },
                    {
                        "value": "TH-81",
                        "name": "Krabi (&#3585;&#3619;&#3632;&#3610;&#3637;&#3656;)"
                    },
                    {
                        "value": "TH-52",
                        "name": "Lampang (&#3621;&#3635;&#3611;&#3634;&#3591;)"
                    },
                    {
                        "value": "TH-51",
                        "name": "Lamphun (&#3621;&#3635;&#3614;&#3641;&#3609;)"
                    },
                    {
                        "value": "TH-42",
                        "name": "Loei (&#3648;&#3621;&#3618;)"
                    },
                    {
                        "value": "TH-16",
                        "name": "Lopburi (&#3621;&#3614;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-58",
                        "name": "Mae Hong Son (&#3649;&#3617;&#3656;&#3630;&#3656;&#3629;&#3591;&#3626;&#3629;&#3609;)"
                    },
                    {
                        "value": "TH-44",
                        "name": "Maha Sarakham (&#3617;&#3627;&#3634;&#3626;&#3634;&#3619;&#3588;&#3634;&#3617;)"
                    },
                    {
                        "value": "TH-49",
                        "name": "Mukdahan (&#3617;&#3640;&#3585;&#3604;&#3634;&#3627;&#3634;&#3619;)"
                    },
                    {
                        "value": "TH-26",
                        "name": "Nakhon Nayok (&#3609;&#3588;&#3619;&#3609;&#3634;&#3618;&#3585;)"
                    },
                    {
                        "value": "TH-73",
                        "name": "Nakhon Pathom (&#3609;&#3588;&#3619;&#3611;&#3600;&#3617;)"
                    },
                    {
                        "value": "TH-48",
                        "name": "Nakhon Phanom (&#3609;&#3588;&#3619;&#3614;&#3609;&#3617;)"
                    },
                    {
                        "value": "TH-30",
                        "name": "Nakhon Ratchasima (&#3609;&#3588;&#3619;&#3619;&#3634;&#3594;&#3626;&#3637;&#3617;&#3634;)"
                    },
                    {
                        "value": "TH-60",
                        "name": "Nakhon Sawan (&#3609;&#3588;&#3619;&#3626;&#3623;&#3619;&#3619;&#3588;&#3660;)"
                    },
                    {
                        "value": "TH-80",
                        "name": "Nakhon Si Thammarat (&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3608;&#3619;&#3619;&#3617;&#3619;&#3634;&#3594;)"
                    },
                    {
                        "value": "TH-55",
                        "name": "Nan (&#3609;&#3656;&#3634;&#3609;)"
                    },
                    {
                        "value": "TH-96",
                        "name": "Narathiwat (&#3609;&#3619;&#3634;&#3608;&#3636;&#3623;&#3634;&#3626;)"
                    },
                    {
                        "value": "TH-39",
                        "name": "Nong Bua Lam Phu (&#3627;&#3609;&#3629;&#3591;&#3610;&#3633;&#3623;&#3621;&#3635;&#3616;&#3641;)"
                    },
                    {
                        "value": "TH-43",
                        "name": "Nong Khai (&#3627;&#3609;&#3629;&#3591;&#3588;&#3634;&#3618;)"
                    },
                    {
                        "value": "TH-12",
                        "name": "Nonthaburi (&#3609;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-13",
                        "name": "Pathum Thani (&#3611;&#3607;&#3640;&#3617;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-94",
                        "name": "Pattani (&#3611;&#3633;&#3605;&#3605;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-82",
                        "name": "Phang Nga (&#3614;&#3633;&#3591;&#3591;&#3634;)"
                    },
                    {
                        "value": "TH-93",
                        "name": "Phatthalung (&#3614;&#3633;&#3607;&#3621;&#3640;&#3591;)"
                    },
                    {
                        "value": "TH-56",
                        "name": "Phayao (&#3614;&#3632;&#3648;&#3618;&#3634;)"
                    },
                    {
                        "value": "TH-67",
                        "name": "Phetchabun (&#3648;&#3614;&#3594;&#3619;&#3610;&#3641;&#3619;&#3603;&#3660;)"
                    },
                    {
                        "value": "TH-76",
                        "name": "Phetchaburi (&#3648;&#3614;&#3594;&#3619;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-66",
                        "name": "Phichit (&#3614;&#3636;&#3592;&#3636;&#3605;&#3619;)"
                    },
                    {
                        "value": "TH-65",
                        "name": "Phitsanulok (&#3614;&#3636;&#3625;&#3603;&#3640;&#3650;&#3621;&#3585;)"
                    },
                    {
                        "value": "TH-54",
                        "name": "Phrae (&#3649;&#3614;&#3619;&#3656;)"
                    },
                    {
                        "value": "TH-83",
                        "name": "Phuket (&#3616;&#3641;&#3648;&#3585;&#3655;&#3605;)"
                    },
                    {
                        "value": "TH-25",
                        "name": "Prachin Buri (&#3611;&#3619;&#3634;&#3592;&#3637;&#3609;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-77",
                        "name": "Prachuap Khiri Khan (&#3611;&#3619;&#3632;&#3592;&#3623;&#3610;&#3588;&#3637;&#3619;&#3637;&#3586;&#3633;&#3609;&#3608;&#3660;)"
                    },
                    {
                        "value": "TH-85",
                        "name": "Ranong (&#3619;&#3632;&#3609;&#3629;&#3591;)"
                    },
                    {
                        "value": "TH-70",
                        "name": "Ratchaburi (&#3619;&#3634;&#3594;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-21",
                        "name": "Rayong (&#3619;&#3632;&#3618;&#3629;&#3591;)"
                    },
                    {
                        "value": "TH-45",
                        "name": "Roi Et (&#3619;&#3657;&#3629;&#3618;&#3648;&#3629;&#3655;&#3604;)"
                    },
                    {
                        "value": "TH-27",
                        "name": "Sa Kaeo (&#3626;&#3619;&#3632;&#3649;&#3585;&#3657;&#3623;)"
                    },
                    {
                        "value": "TH-47",
                        "name": "Sakon Nakhon (&#3626;&#3585;&#3621;&#3609;&#3588;&#3619;)"
                    },
                    {
                        "value": "TH-11",
                        "name": "Samut Prakan (&#3626;&#3617;&#3640;&#3607;&#3619;&#3611;&#3619;&#3634;&#3585;&#3634;&#3619;)"
                    },
                    {
                        "value": "TH-74",
                        "name": "Samut Sakhon (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3634;&#3588;&#3619;)"
                    },
                    {
                        "value": "TH-75",
                        "name": "Samut Songkhram (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3591;&#3588;&#3619;&#3634;&#3617;)"
                    },
                    {
                        "value": "TH-19",
                        "name": "Saraburi (&#3626;&#3619;&#3632;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-91",
                        "name": "Satun (&#3626;&#3605;&#3641;&#3621;)"
                    },
                    {
                        "value": "TH-17",
                        "name": "Sing Buri (&#3626;&#3636;&#3591;&#3627;&#3660;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-33",
                        "name": "Sisaket (&#3624;&#3619;&#3637;&#3626;&#3632;&#3648;&#3585;&#3625;)"
                    },
                    {
                        "value": "TH-90",
                        "name": "Songkhla (&#3626;&#3591;&#3586;&#3621;&#3634;)"
                    },
                    {
                        "value": "TH-64",
                        "name": "Sukhothai (&#3626;&#3640;&#3650;&#3586;&#3607;&#3633;&#3618;)"
                    },
                    {
                        "value": "TH-72",
                        "name": "Suphan Buri (&#3626;&#3640;&#3614;&#3619;&#3619;&#3603;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-84",
                        "name": "Surat Thani (&#3626;&#3640;&#3619;&#3634;&#3625;&#3598;&#3619;&#3660;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-32",
                        "name": "Surin (&#3626;&#3640;&#3619;&#3636;&#3609;&#3607;&#3619;&#3660;)"
                    },
                    {
                        "value": "TH-63",
                        "name": "Tak (&#3605;&#3634;&#3585;)"
                    },
                    {
                        "value": "TH-92",
                        "name": "Trang (&#3605;&#3619;&#3633;&#3591;)"
                    },
                    {
                        "value": "TH-23",
                        "name": "Trat (&#3605;&#3619;&#3634;&#3604;)"
                    },
                    {
                        "value": "TH-34",
                        "name": "Ubon Ratchathani (&#3629;&#3640;&#3610;&#3621;&#3619;&#3634;&#3594;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-41",
                        "name": "Udon Thani (&#3629;&#3640;&#3604;&#3619;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-61",
                        "name": "Uthai Thani (&#3629;&#3640;&#3607;&#3633;&#3618;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-53",
                        "name": "Uttaradit (&#3629;&#3640;&#3605;&#3619;&#3604;&#3636;&#3605;&#3606;&#3660;)"
                    },
                    {
                        "value": "TH-95",
                        "name": "Yala (&#3618;&#3632;&#3621;&#3634;)"
                    },
                    {
                        "value": "TH-35",
                        "name": "Yasothon (&#3618;&#3650;&#3626;&#3608;&#3619;)"
                    }
                ],
                "TR": [
                    {
                        "value": "TR01",
                        "name": "Adana"
                    },
                    {
                        "value": "TR02",
                        "name": "Ad&#305;yaman"
                    },
                    {
                        "value": "TR03",
                        "name": "Afyon"
                    },
                    {
                        "value": "TR04",
                        "name": "A&#287;r&#305;"
                    },
                    {
                        "value": "TR05",
                        "name": "Amasya"
                    },
                    {
                        "value": "TR06",
                        "name": "Ankara"
                    },
                    {
                        "value": "TR07",
                        "name": "Antalya"
                    },
                    {
                        "value": "TR08",
                        "name": "Artvin"
                    },
                    {
                        "value": "TR09",
                        "name": "Ayd&#305;n"
                    },
                    {
                        "value": "TR10",
                        "name": "Bal&#305;kesir"
                    },
                    {
                        "value": "TR11",
                        "name": "Bilecik"
                    },
                    {
                        "value": "TR12",
                        "name": "Bing&#246;l"
                    },
                    {
                        "value": "TR13",
                        "name": "Bitlis"
                    },
                    {
                        "value": "TR14",
                        "name": "Bolu"
                    },
                    {
                        "value": "TR15",
                        "name": "Burdur"
                    },
                    {
                        "value": "TR16",
                        "name": "Bursa"
                    },
                    {
                        "value": "TR17",
                        "name": "&#199;anakkale"
                    },
                    {
                        "value": "TR18",
                        "name": "&#199;ank&#305;r&#305;"
                    },
                    {
                        "value": "TR19",
                        "name": "&#199;orum"
                    },
                    {
                        "value": "TR20",
                        "name": "Denizli"
                    },
                    {
                        "value": "TR21",
                        "name": "Diyarbak&#305;r"
                    },
                    {
                        "value": "TR22",
                        "name": "Edirne"
                    },
                    {
                        "value": "TR23",
                        "name": "Elaz&#305;&#287;"
                    },
                    {
                        "value": "TR24",
                        "name": "Erzincan"
                    },
                    {
                        "value": "TR25",
                        "name": "Erzurum"
                    },
                    {
                        "value": "TR26",
                        "name": "Eski&#351;ehir"
                    },
                    {
                        "value": "TR27",
                        "name": "Gaziantep"
                    },
                    {
                        "value": "TR28",
                        "name": "Giresun"
                    },
                    {
                        "value": "TR29",
                        "name": "G&#252;m&#252;&#351;hane"
                    },
                    {
                        "value": "TR30",
                        "name": "Hakkari"
                    },
                    {
                        "value": "TR31",
                        "name": "Hatay"
                    },
                    {
                        "value": "TR32",
                        "name": "Isparta"
                    },
                    {
                        "value": "TR33",
                        "name": "&#304;&#231;el"
                    },
                    {
                        "value": "TR34",
                        "name": "&#304;stanbul"
                    },
                    {
                        "value": "TR35",
                        "name": "&#304;zmir"
                    },
                    {
                        "value": "TR36",
                        "name": "Kars"
                    },
                    {
                        "value": "TR37",
                        "name": "Kastamonu"
                    },
                    {
                        "value": "TR38",
                        "name": "Kayseri"
                    },
                    {
                        "value": "TR39",
                        "name": "K&#305;rklareli"
                    },
                    {
                        "value": "TR40",
                        "name": "K&#305;r&#351;ehir"
                    },
                    {
                        "value": "TR41",
                        "name": "Kocaeli"
                    },
                    {
                        "value": "TR42",
                        "name": "Konya"
                    },
                    {
                        "value": "TR43",
                        "name": "K&#252;tahya"
                    },
                    {
                        "value": "TR44",
                        "name": "Malatya"
                    },
                    {
                        "value": "TR45",
                        "name": "Manisa"
                    },
                    {
                        "value": "TR46",
                        "name": "Kahramanmara&#351;"
                    },
                    {
                        "value": "TR47",
                        "name": "Mardin"
                    },
                    {
                        "value": "TR48",
                        "name": "Mu&#287;la"
                    },
                    {
                        "value": "TR49",
                        "name": "Mu&#351;"
                    },
                    {
                        "value": "TR50",
                        "name": "Nev&#351;ehir"
                    },
                    {
                        "value": "TR51",
                        "name": "Ni&#287;de"
                    },
                    {
                        "value": "TR52",
                        "name": "Ordu"
                    },
                    {
                        "value": "TR53",
                        "name": "Rize"
                    },
                    {
                        "value": "TR54",
                        "name": "Sakarya"
                    },
                    {
                        "value": "TR55",
                        "name": "Samsun"
                    },
                    {
                        "value": "TR56",
                        "name": "Siirt"
                    },
                    {
                        "value": "TR57",
                        "name": "Sinop"
                    },
                    {
                        "value": "TR58",
                        "name": "Sivas"
                    },
                    {
                        "value": "TR59",
                        "name": "Tekirda&#287;"
                    },
                    {
                        "value": "TR60",
                        "name": "Tokat"
                    },
                    {
                        "value": "TR61",
                        "name": "Trabzon"
                    },
                    {
                        "value": "TR62",
                        "name": "Tunceli"
                    },
                    {
                        "value": "TR63",
                        "name": "&#350;anl&#305;urfa"
                    },
                    {
                        "value": "TR64",
                        "name": "U&#351;ak"
                    },
                    {
                        "value": "TR65",
                        "name": "Van"
                    },
                    {
                        "value": "TR66",
                        "name": "Yozgat"
                    },
                    {
                        "value": "TR67",
                        "name": "Zonguldak"
                    },
                    {
                        "value": "TR68",
                        "name": "Aksaray"
                    },
                    {
                        "value": "TR69",
                        "name": "Bayburt"
                    },
                    {
                        "value": "TR70",
                        "name": "Karaman"
                    },
                    {
                        "value": "TR71",
                        "name": "K&#305;r&#305;kkale"
                    },
                    {
                        "value": "TR72",
                        "name": "Batman"
                    },
                    {
                        "value": "TR73",
                        "name": "&#350;&#305;rnak"
                    },
                    {
                        "value": "TR74",
                        "name": "Bart&#305;n"
                    },
                    {
                        "value": "TR75",
                        "name": "Ardahan"
                    },
                    {
                        "value": "TR76",
                        "name": "I&#287;d&#305;r"
                    },
                    {
                        "value": "TR77",
                        "name": "Yalova"
                    },
                    {
                        "value": "TR78",
                        "name": "Karab&#252;k"
                    },
                    {
                        "value": "TR79",
                        "name": "Kilis"
                    },
                    {
                        "value": "TR80",
                        "name": "Osmaniye"
                    },
                    {
                        "value": "TR81",
                        "name": "D&#252;zce"
                    }
                ],
                "US": [
                    {
                        "value": "AL",
                        "name": "Alabama"
                    },
                    {
                        "value": "AK",
                        "name": "Alaska"
                    },
                    {
                        "value": "AZ",
                        "name": "Arizona"
                    },
                    {
                        "value": "AR",
                        "name": "Arkansas"
                    },
                    {
                        "value": "CA",
                        "name": "California"
                    },
                    {
                        "value": "CO",
                        "name": "Colorado"
                    },
                    {
                        "value": "CT",
                        "name": "Connecticut"
                    },
                    {
                        "value": "DE",
                        "name": "Delaware"
                    },
                    {
                        "value": "DC",
                        "name": "District Of Columbia"
                    },
                    {
                        "value": "FL",
                        "name": "Florida"
                    },
                    {
                        "value": "GA",
                        "name": "Georgia"
                    },
                    {
                        "value": "HI",
                        "name": "Hawaii"
                    },
                    {
                        "value": "ID",
                        "name": "Idaho"
                    },
                    {
                        "value": "IL",
                        "name": "Illinois"
                    },
                    {
                        "value": "IN",
                        "name": "Indiana"
                    },
                    {
                        "value": "IA",
                        "name": "Iowa"
                    },
                    {
                        "value": "KS",
                        "name": "Kansas"
                    },
                    {
                        "value": "KY",
                        "name": "Kentucky"
                    },
                    {
                        "value": "LA",
                        "name": "Louisiana"
                    },
                    {
                        "value": "ME",
                        "name": "Maine"
                    },
                    {
                        "value": "MD",
                        "name": "Maryland"
                    },
                    {
                        "value": "MA",
                        "name": "Massachusetts"
                    },
                    {
                        "value": "MI",
                        "name": "Michigan"
                    },
                    {
                        "value": "MN",
                        "name": "Minnesota"
                    },
                    {
                        "value": "MS",
                        "name": "Mississippi"
                    },
                    {
                        "value": "MO",
                        "name": "Missouri"
                    },
                    {
                        "value": "MT",
                        "name": "Montana"
                    },
                    {
                        "value": "NE",
                        "name": "Nebraska"
                    },
                    {
                        "value": "NV",
                        "name": "Nevada"
                    },
                    {
                        "value": "NH",
                        "name": "New Hampshire"
                    },
                    {
                        "value": "NJ",
                        "name": "New Jersey"
                    },
                    {
                        "value": "NM",
                        "name": "New Mexico"
                    },
                    {
                        "value": "NY",
                        "name": "New York"
                    },
                    {
                        "value": "NC",
                        "name": "North Carolina"
                    },
                    {
                        "value": "ND",
                        "name": "North Dakota"
                    },
                    {
                        "value": "OH",
                        "name": "Ohio"
                    },
                    {
                        "value": "OK",
                        "name": "Oklahoma"
                    },
                    {
                        "value": "OR",
                        "name": "Oregon"
                    },
                    {
                        "value": "PA",
                        "name": "Pennsylvania"
                    },
                    {
                        "value": "RI",
                        "name": "Rhode Island"
                    },
                    {
                        "value": "SC",
                        "name": "South Carolina"
                    },
                    {
                        "value": "SD",
                        "name": "South Dakota"
                    },
                    {
                        "value": "TN",
                        "name": "Tennessee"
                    },
                    {
                        "value": "TX",
                        "name": "Texas"
                    },
                    {
                        "value": "UT",
                        "name": "Utah"
                    },
                    {
                        "value": "VT",
                        "name": "Vermont"
                    },
                    {
                        "value": "VA",
                        "name": "Virginia"
                    },
                    {
                        "value": "WA",
                        "name": "Washington"
                    },
                    {
                        "value": "WV",
                        "name": "West Virginia"
                    },
                    {
                        "value": "WI",
                        "name": "Wisconsin"
                    },
                    {
                        "value": "WY",
                        "name": "Wyoming"
                    },
                    {
                        "value": "AA",
                        "name": "Armed Forces (AA)"
                    },
                    {
                        "value": "AE",
                        "name": "Armed Forces (AE)"
                    },
                    {
                        "value": "AP",
                        "name": "Armed Forces (AP)"
                    }
                ]
            },
            "continent": { "BD": "AS", "BE": "EU", "BF": "AF", "BG": "EU", "BA": "EU", "BB": "NA", "WF": "OC", "BL": "NA", "BM": "NA", "BN": "AS", "BO": "SA", "BH": "AS", "BI": "AF", "BJ": "AF", "BT": "AS", "JM": "NA", "BV": "AN", "BW": "AF", "WS": "OC", "BQ": "NA", "BR": "SA", "BS": "NA", "JE": "EU", "BY": "EU", "BZ": "NA", "RU": "EU", "RW": "AF", "RS": "EU", "TL": "OC", "RE": "AF", "TM": "AS", "TJ": "AS", "RO": "EU", "TK": "OC", "GW": "AF", "GU": "OC", "GT": "NA", "GS": "AN", "GR": "EU", "GQ": "AF", "GP": "NA", "JP": "AS", "GY": "SA", "GG": "EU", "GF": "SA", "GE": "AS", "GD": "NA", "GB": "EU", "GA": "AF", "SV": "NA", "GN": "AF", "GM": "AF", "GL": "NA", "GI": "EU", "GH": "AF", "OM": "AS", "TN": "AF", "JO": "AS", "HR": "EU", "HT": "NA", "HU": "EU", "HK": "AS", "HN": "NA", "HM": "AN", "VE": "SA", "PR": "NA", "PS": "AS", "PW": "OC", "PT": "EU", "SJ": "EU", "PY": "SA", "IQ": "AS", "PA": "NA", "PF": "OC", "PG": "OC", "PE": "SA", "PK": "AS", "PH": "AS", "PN": "OC", "PL": "EU", "PM": "NA", "ZM": "AF", "EH": "AF", "EE": "EU", "EG": "AF", "ZA": "AF", "EC": "SA", "IT": "EU", "VN": "AS", "SB": "OC", "ET": "AF", "SO": "AF", "ZW": "AF", "SA": "AS", "ES": "EU", "ER": "AF", "ME": "EU", "MD": "EU", "MG": "AF", "MF": "NA", "MA": "AF", "MC": "EU", "UZ": "AS", "MM": "AS", "ML": "AF", "MO": "AS", "MN": "AS", "MH": "OC", "MK": "EU", "MU": "AF", "MT": "EU", "MW": "AF", "MV": "AS", "MQ": "NA", "MP": "OC", "MS": "NA", "MR": "AF", "IM": "EU", "UG": "AF", "TZ": "AF", "MY": "AS", "MX": "NA", "IL": "AS", "FR": "EU", "IO": "AS", "SH": "AF", "FI": "EU", "FJ": "OC", "FK": "SA", "FM": "OC", "FO": "EU", "NI": "NA", "NL": "EU", "NO": "EU", "NA": "AF", "VU": "OC", "NC": "OC", "NE": "AF", "NF": "OC", "NG": "AF", "NZ": "OC", "NP": "AS", "NR": "OC", "NU": "OC", "CK": "OC", "XK": "EU", "CI": "AF", "CH": "EU", "CO": "SA", "CN": "AS", "CM": "AF", "CL": "SA", "CC": "AS", "CA": "NA", "CG": "AF", "CF": "AF", "CD": "AF", "CZ": "EU", "CY": "EU", "CX": "AS", "CR": "NA", "CW": "NA", "CV": "AF", "CU": "NA", "SZ": "AF", "SY": "AS", "SX": "NA", "KG": "AS", "KE": "AF", "SS": "AF", "SR": "SA", "KI": "OC", "KH": "AS", "KN": "NA", "KM": "AF", "ST": "AF", "SK": "EU", "KR": "AS", "SI": "EU", "KP": "AS", "KW": "AS", "SN": "AF", "SM": "EU", "SL": "AF", "SC": "AF", "KZ": "AS", "KY": "NA", "SG": "AS", "SE": "EU", "SD": "AF", "DO": "NA", "DM": "NA", "DJ": "AF", "DK": "EU", "VG": "NA", "DE": "EU", "YE": "AS", "DZ": "AF", "US": "NA", "UY": "SA", "YT": "AF", "UM": "OC", "LB": "AS", "LC": "NA", "LA": "AS", "TV": "OC", "TW": "AS", "TT": "NA", "TR": "AS", "LK": "AS", "LI": "EU", "LV": "EU", "TO": "OC", "LT": "EU", "LU": "EU", "LR": "AF", "LS": "AF", "TH": "AS", "TF": "AN", "TG": "AF", "TD": "AF", "TC": "NA", "LY": "AF", "VA": "EU", "VC": "NA", "AE": "AS", "AD": "EU", "AG": "NA", "AF": "AS", "AI": "NA", "VI": "NA", "IS": "EU", "IR": "AS", "AM": "AS", "AL": "EU", "AO": "AF", "AQ": "AN", "AS": "OC", "AR": "SA", "AU": "OC", "AT": "EU", "AW": "NA", "IN": "AS", "AX": "EU", "AZ": "AS", "IE": "EU", "ID": "AS", "UA": "EU", "QA": "AS", "MZ": "AF" }
        };
    }
    LocationDataProvider.prototype.getCountryName = function (val) {
        var name = '';
        for (var _i = 0, _a = this.data.countries; _i < _a.length; _i++) {
            var v = _a[_i];
            if (val == v.value)
                name = v.name;
        }
        return name;
    };
    LocationDataProvider.prototype.getStateName = function (val, val2) {
        var name = "";
        if (this.data.states[val]) {
            for (var _i = 0, _a = this.data.states[val]; _i < _a.length; _i++) {
                var v = _a[_i];
                if (val2 == v.value)
                    name = v.name;
            }
        }
        else
            name = "other";
        return name;
    };
    LocationDataProvider.prototype.getContientCode = function (con) {
        return this.data.continent[con];
    };
    LocationDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocationDataProvider);
    return LocationDataProvider;
}());

//# sourceMappingURL=location-data.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_app_config__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service_books_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parse_db_book_parse_db_book__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var win = window;
var DbServiceProvider = /** @class */ (function () {
    function DbServiceProvider(events, sqlite) {
        this.events = events;
        this.sqlite = sqlite;
    }
    DbServiceProvider.prototype.init = function () {
        var _this = this;
        this.sqlite.create({
            name: __WEBPACK_IMPORTED_MODULE_1__app_config_app_config__["a" /* CONFIG */].DB_NAME,
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            _this.initTables();
        }).catch(function (err) {
            console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
            _this.db = win.openDatabase(__WEBPACK_IMPORTED_MODULE_1__app_config_app_config__["a" /* CONFIG */].DB_NAME, '1.0', 'database1', 5 * 1024 * 1024);
            _this.initTables();
        });
    };
    DbServiceProvider.prototype.initTables = function () {
        var _this = this;
        this.createBooksTable().then(function () {
            switch (__WEBPACK_IMPORTED_MODULE_1__app_config_app_config__["a" /* CONFIG */].appMode) {
                case 'offline': {
                    new __WEBPACK_IMPORTED_MODULE_2__books_service_books_service__["b" /* BooksService */]().getAll().then(function (books) {
                        _this.events.publish("booksRetrieved", books);
                        books.forEach(function (book) {
                            _this.populateBooks(book);
                        });
                    });
                    break;
                }
                case 'online': {
                    __WEBPACK_IMPORTED_MODULE_4_parse___default.a.serverURL = __WEBPACK_IMPORTED_MODULE_1__app_config_app_config__["a" /* CONFIG */].PARSE_SERVER_URL;
                    __WEBPACK_IMPORTED_MODULE_4_parse___default.a.initialize(__WEBPACK_IMPORTED_MODULE_1__app_config_app_config__["a" /* CONFIG */].PARSE_APP_ID);
                    __WEBPACK_IMPORTED_MODULE_5__parse_db_book_parse_db_book__["a" /* ParseDbBookProvider */].load().then(function (books) {
                        _this.events.publish("booksRetrieved", books);
                        books.forEach(function (book) {
                            _this.populateBooks(book);
                        });
                    });
                    break;
                }
            }
        });
        this.createKVTable();
        this.createBookmarkTable();
        this.createHighlightTable();
        this.createLastLocationTable();
    };
    DbServiceProvider.prototype.createKVTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "CREATE TABLE 'kv' ('key'	TEXT, 'value' TEXT, PRIMARY KEY('key'))").then(function (data) {
            console.log("kv table created");
        }, function (error) {
            console.log("Error: createdkvTable -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.createLastLocationTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "CREATE TABLE 'lastLocation' ('location'	Text, 'bookid' TEXT UNIQUE, FOREIGN KEY('bookid') REFERENCES 'books'('id'))").then(function (data) {
            console.log("Location table created");
        }, function (error) {
            console.log("Error: createdBookmarksTable -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.addlastLocation = function (lastlocation) {
        var _this = this;
        var querys = "insert or replace into lastLocation(location,bookid) values (?,?) ";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, querys, [lastlocation.location, lastlocation.bookid]).then(function (data) {
            console.log("Inserted:", data);
            querys = null;
        }, function (error) {
            console.log("ERROR: addLastlocation -> " + JSON.stringify(error.err));
        })); });
    };
    DbServiceProvider.prototype.getlastLocationByBookId = function (bookId) {
        var _this = this;
        var lastLocation;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT location, bookid FROM lastLocation where bookid=?", [bookId]).then(function (data) {
            for (var i = 0; i < data.res.rows.length; i++) {
                var ll = data.res.rows.item(i);
                lastLocation = ll;
            }
            return lastLocation;
        }, function (error) {
            console.log("ERROR: getAllBooks -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.createBooksTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "CREATE TABLE 'books' ( 'label' TEXT, 'metadata' TEXT, 'cover' TEXT, 'file' TEXT, opened_at DATETIME, 'id' TEXT, PRIMARY KEY('id'))").then(function (data) {
            console.log("books table created");
        }, function (error) {
            console.log("ERROR: createBooksTable -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.populateBooks = function (book) {
        var _this = this;
        var querys = "insert or replace into books(id,cover,label,file,metadata) values (?,?,?,?,?)";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, querys, [book.id, book.cover, book.label, book.file, book.metadata ? JSON.stringify(book.metadata) : ""]).then(function (data) {
            console.log("Inserted:", data);
            querys = null;
        }, function (error) {
            console.log("ERROR: populateBooks -> " + JSON.stringify(error.err));
        })); });
    };
    DbServiceProvider.prototype.updateOpenedBook = function (id) {
        var _this = this;
        var querys = "UPDATE books SET opened_at = datetime() WHERE id = ?";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, querys, [id]).then(function (data) {
            console.log("Updated:", data);
            querys = null;
        }, function (error) {
            console.log("ERROR: updateOpenedBook -> " + JSON.stringify(error.err));
        })); });
    };
    DbServiceProvider.prototype.getAllBooks = function () {
        var _this = this;
        var books = [];
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM books order by datetime(opened_at) DESC").then(function (data) {
            for (var i = 0; i < data.res.rows.length; i++) {
                var book = data.res.rows.item(i);
                book.metadata = book.metadata ? JSON.parse(book.metadata) : "";
                books.push(book);
            }
            return books;
        }, function (error) {
            console.log("ERROR: getAllBooks -> " + JSON.stringify(error));
        })); });
    };
    //bookmarkTable
    DbServiceProvider.prototype.createBookmarkTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "CREATE TABLE 'bookmarks' ('excerpt'	Text, 'location'	Text, 'position' Text, 'id'	INTEGER PRIMARY KEY AUTOINCREMENT, 'bookid' 	TEXT, FOREIGN KEY('bookid') REFERENCES 'books'('id'))").then(function (data) {
            console.log("bookmarks table created");
        }, function (error) {
            console.log("Error: createdBookmarksTable -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.addBookMark = function (bookmark) {
        var _this = this;
        var querys = "insert or replace into bookmarks(excerpt,location,position,bookid) values (?,?,?,?)";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, querys, [bookmark.excerpt, bookmark.location, bookmark.position, bookmark.bookid]).then(function (data) {
            console.log("Inserted:", data);
            querys = null;
        }, function (error) {
            console.log("ERROR: addBookMark -> " + JSON.stringify(error.err));
        })); });
    };
    DbServiceProvider.prototype.getBookmarksByBookId = function (bookId) {
        var _this = this;
        var bookmarks = [];
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM bookmarks where bookid=?", [bookId]).then(function (data) {
            for (var i = 0; i < data.res.rows.length; i++) {
                var bookmark = data.res.rows.item(i);
                bookmarks.push(bookmark);
            }
            return bookmarks;
        }, function (error) {
            console.log("ERROR: getAllBooks -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.deleteBookmark = function (bookmark) {
        var _this = this;
        var querys = " delete  from bookmarks where location=? and bookid =? ";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, querys, [bookmark.location, bookmark.bookid]).then(function (data) {
            querys = null;
            console.log("deleted:", data);
        }, function (error) {
            console.log("ERROR: deleteBookmark -> " + JSON.stringify(error.err));
        })); });
    };
    DbServiceProvider.prototype.createHighlightTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "CREATE TABLE 'highlights' ('text'	Text, 'location'	Text,'position'	Text,'cfiRange' Text UNIQUE, 'id'	INTEGER PRIMARY KEY AUTOINCREMENT, 'bookid' 	TEXT, FOREIGN KEY('bookid') REFERENCES 'books'('id'))").then(function (data) {
            console.log("highlights table created");
        }, function (error) {
            console.log("Error: createdhighlightsTable -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.addHighlight = function (highlight) {
        var _this = this;
        var querys = "insert or replace into highlights(text,location,position,cfiRange,bookid) values (?,?,?,?,?)";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, querys, [highlight.text, highlight.location, highlight.position, highlight.cfiRange, highlight.bookid]).then(function (data) {
            console.log("Inserted Highlight:", data);
            querys = null;
        }, function (error) {
            console.log("ERROR: addHighlight -> " + JSON.stringify(error.err));
        })); });
    };
    DbServiceProvider.prototype.getHighlightsByBookId = function (bookId) {
        var _this = this;
        var highlights = [];
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, "SELECT * FROM highlights where bookid=?", [bookId]).then(function (data) {
            for (var i = 0; i < data.res.rows.length; i++) {
                var highlight = data.res.rows.item(i);
                highlights.push(highlight);
            }
            return highlights;
        }, function (error) {
            console.log("ERROR: getHighlightsByBookId -> " + JSON.stringify(error));
        })); });
    };
    DbServiceProvider.prototype.deleteHighlight = function (highlight) {
        var _this = this;
        var querys = " delete  from highlights where text=? and bookid =? ";
        return new Promise(function (resolve, reject) { return resolve(_this.query(_this.db, querys, [highlight.text, highlight.bookid]).then(function (data) {
            querys = null;
            console.log("deleted:", data);
        }, function (error) {
            console.log("ERROR: deleteHighlight -> " + JSON.stringify(error.err));
        })); });
    };
    DbServiceProvider.prototype.query = function (dbase, querys, params) {
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                dbase.transaction(function (tx) {
                    tx.executeSql(querys, params, function (tx, res) {
                        resolve({ tx: tx, res: res });
                    }, function (tx, err) { return reject({ tx: tx, err: err }); });
                }, function (err) { return reject({ err: err }); });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    DbServiceProvider.prototype.get = function (key) {
        return this.query(this.db, 'select key, value from kv where key = ? limit 1', [key]).then(function (data) {
            if (data.res.rows.length) {
                return data.res.rows.item(0).value;
            }
        });
    };
    DbServiceProvider.prototype.getAll = function (keys) {
        // return this.query(this.db, `select key, value from kv where key in ('${key.reduce((acc, cval,ci,arr,iv="") => acc + '\'' + cval + '\',').slice(0, -1)})`, [key]).then(data => {
        return this.query(this.db, "select key, value from kv where key in (" + keys.map(function (_) { return '?'; }) + ")", keys).then(function (data) {
            var kvs = {};
            if (data.res.rows.length > 0) {
                for (var i = 0; i < data.res.rows.length; i++) {
                    var tkv = data.res.rows.item(i);
                    kvs[tkv.key] = tkv.value;
                }
                return kvs;
            }
        });
    };
    DbServiceProvider.prototype.set = function (key, value) {
        return this.query(this.db, 'insert or replace into kv(key, value) values (?, ?)', [key, value]);
    };
    DbServiceProvider.prototype.remove = function (key) {
        return this.query(this.db, 'delete from kv where key = ?', [key]);
    };
    DbServiceProvider.prototype.clear = function () {
        return this.query(this.db, 'delete from kv');
    };
    DbServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */]])
    ], DbServiceProvider);
    return DbServiceProvider;
}());

//# sourceMappingURL=db-service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/











var LoginPage = /** @class */ (function () {
    function LoginPage(http, config, viewCtrl, modalCtrl, loading, shared, fb, alert, googlePlus, applicationRef, navCtrl, events, navParams) {
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.fb = fb;
        this.alert = alert;
        this.googlePlus = googlePlus;
        this.applicationRef = applicationRef;
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.hideGuestLogin = false;
        this.formData = { username: '', password: '' };
        this.errorMessage = '';
        this.hideGuestLogin = navParams.get('hideGuestLogin');
    }
    // <!-- 2.0 updates -->
    LoginPage.prototype.guestLogin = function () {
        if (this.config.checkOutPage == 1)
            this.shared.onePageCheckOut();
        else
            this.events.publish('openShippingAddressPage');
        this.dismiss();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        var formData = new FormData();
        formData.append("username", this.formData.username);
        formData.append("password", this.formData.password);
        this.http.post(this.config.url + '/api/appusers/generate_cookie/?insecure=cool', formData).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.status == "ok")
                _this.getUserData(data, "simple");
            else {
                _this.errorMessage = data.error;
                _this.loading.hide();
            }
        }, function (err) {
            _this.loading.hide();
            if (err.ok == false) {
                _this.errorMessage = "Invalid Username or Password";
            }
        });
        // this.config.Woocommerce.getAsync("customers/" + 118 + "?" + this.config.productsArguments).then((data) => {
        //   this.loading.hide();
        //   this.shared.login(JSON.parse(data.body));
        //   //console.log(this.shared.customerData);
        //   this.dismiss();
        //   this.applicationRef.tick();
        // });
    };
    LoginPage.prototype.getUserData = function (c, type) {
        var _this = this;
        var id;
        if (type == "simple")
            id = c.user.id;
        if (type == "fb")
            id = c.id;
        //alert(c.user.id + " -- " + c.id + " --- " + id);
        this.config.Woocommerce.getAsync("customers/" + id + "?" + this.config.productsArguments).then(function (data) {
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            //alert(JSON.stringify(dat));
            _this.shared.login(Object.assign({ cookie: c.cookie }, dat));
            // alert(JSON.stringify(Object.assign({ cookie: c.cookie }, dat)));
            _this.dismiss();
            _this.applicationRef.tick();
        });
    };
    LoginPage.prototype.openSignUpPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
        modal.present();
        this.dismiss();
    };
    LoginPage.prototype.openForgetPasswordPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
        modal.present();
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (res) {
            if (res.status == 'connected') {
                console.log("user connected already" + res.authResponse.accessToken);
                _this.createAccount(res.authResponse.accessToken, 'fb');
            }
            else {
                console.log("USer Not login ");
                _this.fb.login(['public_profile', 'user_friends', 'email'])
                    .then(function (res) {
                    // this.alert.show('Logged into Facebook!' + JSON.stringify(res));
                    console.log("successfully login ");
                    _this.createAccount(res.authResponse.accessToken, 'fb');
                })
                    .catch(function (e) { return _this.alert.show('Error logging into Facebook' + JSON.stringify(e)); });
            }
        }).catch(function (e) { return _this.alert.show('Error Check Login Status Facebook' + JSON.stringify(e)); });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.loading.autoHide(500);
        this.googlePlus.login({})
            .then(function (res) {
            //  alert(JSON.stringify(res))
            _this.createAccount(res, 'google');
        })
            .catch(function (err) { return _this.alert.show(JSON.stringify(err)); });
    };
    //============================================================================================  
    //creating new account using function facebook or google details 
    LoginPage.prototype.createAccount = function (info, type) {
        var _this = this;
        //this.formData.username = info;
        // alert(info);
        this.loading.show();
        var url = '';
        url = '/api/appusers/fb_connect/?insecure=cool&access_token=' + info;
        this.http.get(this.config.url + url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            //alert(JSON.stringify(data));
            _this.getUserData(data, "fb");
        }, function (error) {
            _this.loading.hide();
            //this.alert.show("error " + JSON.stringify(error));
        });
    };
    ;
    //close modal
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\app5\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Login\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-login" padding>\n  <ion-row class="grid-t">\n    <ion-col>\n      <div class="logo">\n        <img class="image" src="assets/BopLogo.svg" />\n      </div>\n    </ion-col>\n  </ion-row>\n  <form #loginForm="ngForm" class="form" (ngSubmit)="login()">\n    <ion-row class="grid-b">\n      <ion-col col-12>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>{{\'Email or Username\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="email" [(ngModel)]="formData.username" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'Password\'|translate}}</ion-label>\n            <ion-input type="password" placeholder="" name="password" [(ngModel)]="formData.password" required>\n            </ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label class="red-color" *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage| translate}}</span>\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <button ion-button block color="secondary" type="submit"\n          [disabled]="!loginForm.form.valid">{{ \'Login\' | translate }}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button block clear color="dark" text-capitalize\n        (click)="openForgetPasswordPage()">{{ "I forgot my password?" | translate }}</button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="grid-b">\n    <ion-col col-12 *ngIf="config.fbButton==1">\n      <button ion-button block color="facebook" (click)="facebookLogin()">{{ \'Login with\' | translate }}\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n    </ion-col>\n    <!-- <ion-col col-12 *ngIf="config.googleButton==1">\n      <button ion-button block color="google" (click)="googleLogin()">{{ \'Login with\' | translate }}\n        <ion-icon name="logo-google"></ion-icon>\n      </button>\n    </ion-col> -->\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button block outline (click)="openSignUpPage()">{{ \'Register\' | translate }}</button>\n    </ion-col>\n\n    <ion-col col-12 *ngIf="!hideGuestLogin">\n      <button ion-button block color="secondary" [disabled]="shared.cartProducts.length==0"\n        *ngIf="config.guestCheckOut " (click)="guestLogin()">{{\'Continue as a Guest\'|translate}}</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n<!-- 2.0 updates -->'/*ion-inline-end:"E:\app5\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reviews_reviews__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_store__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/













var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, config, shared, modalCtrl, loading, iab, events, storage, http, alert, translate, applicationRef, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.iab = iab;
        this.events = events;
        this.storage = storage;
        this.http = http;
        this.alert = alert;
        this.translate = translate;
        this.applicationRef = applicationRef;
        this.socialSharing = socialSharing;
        this.selectAttributes = new Array;
        this.selectedVariation = null;
        this.quantity = 1;
        this.releatedItems = []; // <!-- 2.0 updates -->
        this.reviews = []; // <!-- 2.0 updates -->
        this.ratingStarsValue = null; // <!-- 2.0 updates -->
        this.allVariableAttributes = [];
        this.tempAllVariableAttributes = [];
        this.attributes = [];
        this.isLiked = 0;
        this.wishArray = [];
        this.disableCartButton = false;
        this.variations = new Array;
        this.groupProducts = new Array;
        this.variationPrice = null;
        this.loaderWcVendorInfo = true;
        this.wcVendorInfo = {};
        //===============================================================================================================================
        //function adding attibute into array
        this.fillAttributes = function (val, key, position) {
            var _this = this;
            console.log(key + "  " + val);
            var count = 0;
            this.selectAttributes.forEach(function (value, index) {
                if (value.position == position) {
                    value.value = val;
                    count++;
                }
                if (val == 'choose' && value.position == position) {
                    _this.selectAttributes.splice(index, 1);
                    console.log("splice " + value.key + "  " + value.value);
                }
            });
            if (count == 0 && val != "choose")
                this.selectAttributes.push({ key: key, value: val, position: position });
            this.sortAttributes();
            if (this.getAttributesLength() == this.selectAttributes.length)
                this.selectVariation();
            if (this.selectAttributes.length != this.getAttributesLength()) {
                this.updateProductDetail(JSON.parse(JSON.stringify(this.navParams.get('data'))));
                this.variationPrice = null;
            }
            console.log(this.selectAttributes);
            this.enableDisbaleCartButton();
        };
        //==============================================================================================================================================  
        //calculating total price  
        this.calculatingTotalPrice = function () {
            var price = parseFloat(this.product.products_price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                price = this.product.discount_price;
            var totalPrice = this.shared.calculateFinalPriceService(this.attributes) + parseFloat(price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                this.discount_price = totalPrice;
            else
                this.product_price = totalPrice;
            //  console.log(totalPrice);
        };
        //===============================================================================================================================
        this.qunatityGroupPlus = function (p) {
            var _this = this;
            //console.log(p.quantity);
            if (p.stock_quantity == null || p.stock_quantity > p.quantity)
                p.quantity++;
            else if (p.stock_quantity == p.quantity)
                this.translate.get("Product Quantity is Limited!").subscribe(function (res) { _this.alert.show(res); });
            this.applicationRef.tick();
            // console.log(p);
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityGroupMinus = function (p) {
            if (p.quantity != 0) {
                p.quantity--;
            }
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        this.qunatityPlus = function () {
            var _this = this;
            if (this.product.stock_quantity == null || this.product.stock_quantity > this.quantity)
                this.quantity++;
            else if (this.product.stock_quantity == this.quantity)
                this.translate.get("Product Quantity is Limited!").subscribe(function (res) { _this.alert.show(res); });
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityMinus = function () {
            if (this.quantity != 1) {
                this.quantity--;
            }
            this.applicationRef.tick();
        };
        this.product = (JSON.parse(JSON.stringify(navParams.get('data'))));
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        events.subscribe('wishListUpdate', function (id, value) {
            if (id == _this.product.id)
                _this.isLiked = value;
        });
        this.storage.get('wishListProducts').then(function (val) {
            _this.wishArray = val;
            _this.checkWishList();
        });
        this.enableDisbaleCartButton();
        if (this.product.type == 'variable') {
            this.getVariations();
        }
        if (this.product.type == 'grouped') {
            this.getGroupProducts();
        }
        this.getRelatedItems();
        this.getProductReviews();
        if (this.config.showWcVendorInfo)
            this.getWcVendorInfo();
    }
    ProductDetailPage_1 = ProductDetailPage;
    //=================================================================================================================================================================================
    ProductDetailPage.prototype.getGroupProducts = function () {
        var _this = this;
        this.loading.show();
        var count = 0;
        for (var _i = 0, _a = this.product.grouped_products; _i < _a.length; _i++) {
            var value = _a[_i];
            count++;
            this.config.Woocommerce.getAsync("products/" + value + "?" + this.config.productsArguments).then(function (data) {
                _this.groupProducts.push(Object.assign(JSON.parse(data.body), { quantity: 0 }));
                _this.applicationRef.tick();
            });
            if (count == this.product.grouped_products.length)
                this.loading.hide();
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.getVariations = function () {
        var _this = this;
        var count = 0;
        this.loading.show();
        for (var _i = 0, _a = this.product.variations; _i < _a.length; _i++) {
            var value = _a[_i];
            this.config.Woocommerce.getAsync("products/" + value + "?" + this.config.productsArguments).then(function (data) {
                count++;
                var d = JSON.parse(data.body);
                _this.variations.push(d);
                _this.initializeAllVariationAttributes(d);
                //console.log(count);
                if (count == _this.product.variations.length) {
                    _this.loading.hide();
                    _this.applicationRef.tick();
                    //console.log(this.variations); 
                }
            });
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.initializeAllVariationAttributes = function (p) {
        var ob = {};
        ob.id = p.id;
        ob.select = false;
        for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.variation == false)
                continue;
            ob[val.name] = 'any';
            for (var _b = 0, _c = p.attributes; _b < _c.length; _b++) {
                var v2 = _c[_b];
                if (val.name.toUpperCase() == v2.name.toUpperCase())
                    ob[val.name] = v2.option;
            }
        }
        this.allVariableAttributes.push(ob);
        if (this.allVariableAttributes.length == this.product.variations.length)
            this.sortAllVariationAttributes();
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.sortAllVariationAttributes = function () {
        var array = [];
        for (var _i = 0, _a = this.product.variations; _i < _a.length; _i++) {
            var val = _a[_i];
            for (var _b = 0, _c = this.allVariableAttributes; _b < _c.length; _b++) {
                var v2 = _c[_b];
                if (val == v2.id)
                    array.push(v2);
            }
        }
        this.allVariableAttributes = array;
        console.log(this.allVariableAttributes);
    };
    ProductDetailPage.prototype.availableOption = function (name, val) {
        if (this.selectAttributes.length == 0)
            return true;
        for (var _i = 0, _a = this.tempAllVariableAttributes; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.select == true) {
                if (value[name] == 'any')
                    return true;
                if (value[name] == val)
                    return true;
            }
        }
    };
    //checking avalability of option in all variations
    ProductDetailPage.prototype.sortAttributes = function () {
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        var count = 0;
        for (var _i = 0, _a = this.selectAttributes; _i < _a.length; _i++) {
            var x = _a[_i];
            for (var _b = 0, _c = this.tempAllVariableAttributes; _b < _c.length; _b++) {
                var y = _c[_b];
                if (y[x.key] == x.value || y[x.key] == 'any') {
                    if (count == 0) {
                        y.select = true;
                    }
                    else {
                        if (y.select == true)
                            y.select = true;
                        else
                            y.select = false;
                    }
                    //console.log(y[x.key] + "   ---  " + x.value);
                }
                else
                    y.select = false;
            }
            count++;
        }
        console.log("attributes after select");
        console.log(this.tempAllVariableAttributes);
    };
    // reset attributes and selection
    ProductDetailPage.prototype.resetAttributes = function () {
        console.log("reset att");
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        this.selectAttributes = [];
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        this.selectedVariation = null;
        this.enableDisbaleCartButton();
        this.product = JSON.parse(JSON.stringify(this.navParams.get('data')));
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.getAttributesLength = function () {
        var count = 0;
        for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.variation)
                count++;
        }
        return count;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.enableDisbaleCartButton = function () {
        // if (this.product.type == 'external') this.disableCartButton = true;
        // else
        if (this.product.type != 'variable' && this.product.in_stock)
            this.disableCartButton = false;
        else if (this.selectAttributes.length == this.getAttributesLength() && this.product.in_stock)
            this.disableCartButton = false;
        else
            this.disableCartButton = true;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.checkWishList = function () {
        //getting wishList items from local storage
        var count = 0;
        if (this.wishArray != null)
            for (var _i = 0, _a = this.wishArray; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.id == this.product.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.openProduct = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.product.external_url, "blank");
    };
    ProductDetailPage.prototype.addToCartProduct = function () {
        var _this = this;
        var total = 0;
        this.loading.autoHide(500);
        console.log(this.selectAttributes);
        if (this.product.type == 'variable') {
            this.shared.addToCart(this.product, this.selectedVariation, this.quantity, this.selectAttributes);
            this.navCtrl.pop();
            //this.navCtrl.push(CartPage);
        }
        if (this.product.type == 'simple') {
            this.shared.addToCart(this.product, null, this.quantity, null);
            this.navCtrl.pop();
            //this.navCtrl.push(CartPage);
        }
        if (this.product.type == 'grouped') {
            for (var _i = 0, _a = this.groupProducts; _i < _a.length; _i++) {
                var a = _a[_i];
                total = total + a.quantity;
            }
            if (total == 0)
                this.translate.get("Please Add Quantity").subscribe(function (res) { _this.alert.show(res); });
            else
                for (var _b = 0, _c = this.groupProducts; _b < _c.length; _b++) {
                    var value = _c[_b];
                    if (value.quantity != 0)
                        this.shared.addToCart(value, null, value.quantity, null);
                }
            if (total != 0) {
                this.navCtrl.pop();
                //this.navCtrl.push(CartPage);
            }
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.selectVariation = function () {
        var pId = null;
        for (var _i = 0, _a = this.tempAllVariableAttributes; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.select == true) {
                pId = i.id;
                break;
            }
        }
        for (var _b = 0, _c = this.variations; _b < _c.length; _b++) {
            var i = _c[_b];
            if (i.id == pId) {
                this.selectedVariation = i;
                break;
            }
        }
        if (this.selectAttributes != null)
            this.updateProductDetail(this.selectedVariation);
        console.log(this.product);
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.updateProductDetail = function (p) {
        // console.log(p);
        var oldProduct = JSON.parse(JSON.stringify(this.navParams.get('data')));
        this.product.name = p.name;
        this.product.price_html = p.price_html;
        if (p.images[0].src.indexOf('placeholder') == -1) {
            this.product.images = this.removeDuplication(p.images.concat(oldProduct.images));
        }
    };
    ProductDetailPage.prototype.removeDuplication = function (array) {
        var a = array.concat();
        console.log(a);
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i].src === a[j].src)
                    a.splice(j--, 1);
            }
        }
        console.log(a);
        return a;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.checkProductNew = function () {
        var pDate = new Date(this.product.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    };
    ProductDetailPage.prototype.quantityChange = function () {
        var _this = this;
        if (this.product.stock_quantity == null || this.product.stock_quantity > this.quantity) { }
        else if (this.product.stock_quantity < this.quantity) {
            this.translate.get("Product Quantity is Limited!").subscribe(function (res) { _this.quantity = 1; _this.alert.show(res); });
        }
        if (this.quantity == null || this.quantity == 0) {
            this.quantity = 1;
        }
        this.applicationRef.tick();
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.showProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            //this.alert.show("loaded");
            _this.loading.hide();
            _this.navCtrl.push(ProductDetailPage_1, { data: JSON.parse(data.body) });
        }, function (err) {
            _this.loading.hide();
            console.log(err);
        });
        this.shared.addToRecent(this.product);
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.share = function () {
        this.loading.autoHide(1000);
        // Share via email
        this.socialSharing.share(this.product.name, this.product.name, this.product.images[0].src, this.product.permalink).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.clickWishList = function () {
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.addWishList = function () {
        this.shared.addWishList(this.product);
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.removeWishList = function () {
        this.shared.removeWishList(this.product);
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.getRelatedItems = function () {
        var _this = this;
        this.config.Woocommerce.getAsync("products/?include=" + this.product.related_ids + "&" + this.config.productsArguments).then(function (data) {
            _this.releatedItems = JSON.parse(data.body);
            _this.applicationRef.tick();
        });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.getProductReviews = function () {
        var _this = this;
        this.config.Woocommerce.getAsync("products/" + this.product.id + "/reviews" + "?" + this.config.productsArguments).then(function (data) {
            _this.reviews = JSON.parse(data.body);
            _this.applicationRef.tick();
            _this.totalRating();
        });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.openReviewsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__reviews_reviews__["a" /* ReviewsPage */], { id: this.product.id });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.totalRating = function () {
        var total = 0;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var value = _a[_i];
            total = total + value.rating;
        }
        var result = (total / this.reviews.length) * 20;
        if (total == 0)
            result = 0;
        this.ratingStarsValue = result;
        this.applicationRef.tick();
        //return result;
    };
    //==============================================================
    ProductDetailPage.prototype.openStore = function (value) {
        var _this = this;
        if (this.config.showWcVendorInfo) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__store_store__["a" /* StorePage */], { data: value });
        }
        else {
            this.loading.show();
            this.http.get(this.config.url + "/wp-json/dokan/v1/stores/" + this.product.store.id).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading.hide();
                var d = data;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__store_store__["a" /* StorePage */], { data: d });
                _this.applicationRef.tick();
            });
        }
    };
    ProductDetailPage.prototype.getWcVendorInfo = function () {
        var _this = this;
        this.loaderWcVendorInfo = true;
        this.http.get(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + this.product.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loaderWcVendorInfo = false;
            var d = data;
            _this.wcVendorInfo = data.data;
            _this.applicationRef.tick();
        });
    };
    ProductDetailPage = ProductDetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"E:\app5\src\pages\product-detail\product-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Product Details\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-product-detail">\n\n  <div class="product-tags-top">\n\n    <div class="product-tag-new" *ngIf="checkProductNew()">{{\'New\'|translate}}</div>\n\n    <div class="product-tag-featured" *ngIf="product.featured">{{\'Featured\'|translate}}</div>\n\n  </div>\n\n\n\n  <div class="icons">\n\n    <ion-icon name="share" (click)="share()"></ion-icon>\n\n    <ion-icon [name]="isLiked==0 ? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n\n  </div>\n\n  <!-- 2.0 updates start -->\n\n  <ion-slides class="product-slides" pager="true" dir="{{shared.dir}}">\n\n    <ion-slide *ngFor="let b of product.images">\n\n      <div>\n\n        <img src="{{b.src}}" imageViewer>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <!-- 2.0 updates end -->\n\n\n\n  <ion-grid class="product-detail-title">\n\n    <ion-row>\n\n\n\n      <div class="product-tags">\n\n        <div class="product-tag-off" *ngIf="product.on_sale">{{\'SALE\'|translate}}</div>\n\n\n\n      </div>\n\n      <!-- 2.0 updates -->\n\n\n\n      <ion-col class="woo-price-group" col-12>\n\n        <span class="woo-price" [innerHTML]="product.price_html"></span>\n\n        <span class="woo-price" *ngIf="variationPrice!=null">{{\'Your Price\'|translate}} &nbsp;\n\n          {{variationPrice|curency}}</span>\n\n\n\n\n\n        <span class="product-outstock" *ngIf="!product.in_stock">{{\'Out of Stock\'|translate}}</span>\n\n        <span class="product-instock" *ngIf="product.in_stock">{{\'In Stock\'|translate}}&nbsp;\n\n          <span *ngIf="product.stock_quantity!=null">({{product.stock_quantity}})</span>\n\n        </span>\n\n      </ion-col>\n\n\n\n      <ion-col class="product-title" col-12>\n\n        <h3>{{product.name}}\n\n          <br>\n\n          <small *ngFor="let b of product.categories">{{b.name}}&nbsp;</small>\n\n        </h3>\n\n\n\n        <div class="product-ratings">\n\n          <ion-spinner *ngIf="ratingStarsValue==null"></ion-spinner>\n\n          <div class="product-rating animate" *ngIf="product.reviews_allowed && ratingStarsValue!=null"\n\n            (click)="openReviewsPage()">\n\n            <div class="stars-outer">\n\n              <div class="stars-inner" [style.width]="ratingStarsValue+\'%\'"></div>\n\n            </div>\n\n            <h6>{{reviews.length}}&nbsp;{{\'ratings and reviews\'|translate}}</h6>\n\n          </div>\n\n        </div>\n\n        <!-- <p style="display:none;">{{\'Total Sales\'|translate}}&nbsp;({{product.total_sales}})</p> -->\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="product-detail-header" *ngIf="product.type!=\'grouped\'">\n\n    <ion-row>\n\n      <ion-col class="left" col-6>\n\n        <ion-row>\n\n          <ion-col class="qty-name" col-12>{{\'Quantity\' |translate}}</ion-col>\n\n          <ion-col class="qty-vlue" col-12>\n\n            <button ion-button small outline (click)="qunatityMinus(product,quantity);"\n\n              *ngIf="!product.sold_individually">\n\n              <ion-icon name="remove"></ion-icon>\n\n            </button>\n\n            <!-- <ion-input class="dgi" type="number" name="q" [(ngModel)]="quantity" required (ionChange)="quantityChange()"\n\n              max="100" min="1"> </ion-input>-->\n\n            <span class="dgi">{{quantity}}</span>\n\n            <button ion-button small outline (click)="qunatityPlus(product,quantity);"\n\n              *ngIf="!product.sold_individually">\n\n              <ion-icon name="add"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col class="right" col-6 *ngIf="selectedVariation!=null && !disableCartButton">\n\n        <ion-row>\n\n          <ion-col class="ttl-name" col-12>{{\'Total\' |translate}}&nbsp;{{\'Price\' |translate}}</ion-col>\n\n          <ion-col class="ttl-vlue" col-12>{{ quantity*selectedVariation.price|curency}}</ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col class="right" col-6 *ngIf="product.type!=\'variable\'">\n\n        <ion-row>\n\n          <ion-col class="ttl-name" col-12>{{\'Total\' |translate}}&nbsp;{{\'Price\' |translate}}</ion-col>\n\n          <ion-col class="ttl-vlue" col-12>{{ quantity*product.price|curency}}</ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <!-- <button ion-button block color="danger" *ngIf="!product.in_stock">{{\'OUT OF STOCK\'|translate}}</button> -->\n\n      <!-- <ion-col col-12>{{\'Please select all product options before adding this product to your cart\'|translate}}\n\n      </ion-col> -->\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="product-detail-content" *ngIf="product.sku!=null && product.sku!=\'\'">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <h4>{{\'SKU\'|translate}}</h4>\n\n        <div class="product-describtion">{{product.sku}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list class="group-product" *ngIf="groupProducts.length!=0">\n\n    <ion-item *ngFor="let g of groupProducts">\n\n      <ion-thumbnail item-start>\n\n        <img src="{{g.images[0].src}}">\n\n      </ion-thumbnail>\n\n      <h3>{{g.name}}</h3>\n\n      <span class="woo-price" [innerHTML]="g.price_html"></span>\n\n\n\n      <ion-row class="qty-box-total">\n\n        <ion-col class="left" col-6>\n\n          <ion-row>\n\n            <ion-col class="qty-name" col-12>{{\'Quantity\' |translate}}</ion-col>\n\n            <ion-col class="qty-vlue" col-12>\n\n              <button ion-button small outline (click)="qunatityGroupMinus(g)">\n\n                <ion-icon name="remove"></ion-icon>\n\n              </button>\n\n              <span class="dgi">{{g.quantity}}</span>\n\n              <button ion-button small outline (click)="qunatityGroupPlus(g)">\n\n                <ion-icon name="add"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col class="right" col-6>\n\n          <ion-row>\n\n            <ion-col class="ttl-name" col-12>{{\'Total\' |translate}}&nbsp;{{\'Price\' |translate}}</ion-col>\n\n            <ion-col class="ttl-vlue" col-12>{{ g.quantity*g.price|curency}}</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid class="product-detail-content product-tags" *ngIf="product.type!=\'variable\' && attributes.length!=0">\n\n    <ion-row>\n\n      <ion-col>\n\n        <h4>{{\'Tags\'|translate}}</h4>\n\n        <span *ngFor=" let att of attributes">\n\n          <span *ngIf="product.type!=\'variable\'">\n\n            <span *ngIf="att.visible">\n\n              <h6>{{att.name}}</h6>\n\n              <ion-badge *ngFor=" let val of att.options">{{val}} </ion-badge>\n\n            </span>\n\n          </span>\n\n        </span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid *ngIf="product.type==\'variable\'">\n\n    <ion-list>\n\n      <div *ngFor=" let att of attributes; let ind = index">\n\n        <ion-item *ngIf="att.variation">\n\n          <ion-label>{{att.name}}</ion-label>\n\n          <ion-select [(ngModel)]="att.value" (ionChange)="fillAttributes(att.value,att.name,ind)"\n\n            okText="{{\'Ok\'|translate}}" cancelText="{{\'Cancel\'|translate}}">\n\n            <span *ngFor=" let val of att.options; let i = index">\n\n              <ion-option value="choose" selected *ngIf="i==0">{{\'Select\'|translate}}</ion-option>\n\n              <ion-option [value]="val" *ngIf="availableOption(att.name,val)">{{val}}</ion-option>\n\n            </span>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <span *ngFor=" let att of attributes">\n\n          <span *ngIf="!att.variation">\n\n            <span *ngIf="att.visible">\n\n              <h6>{{att.name}}</h6>\n\n              <ion-badge *ngFor=" let val of att.options">{{val}} </ion-badge>\n\n            </span>\n\n          </span>\n\n        </span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="product-detail-content bing-fo" *ngIf="config.showVendorInfo && product.store">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <h4>{{\'Seller Information\'|translate}}<br><small>{{\'Sold by\'|translate}}{{\' \'+product.store.name}}</small></h4>\n\n        <button ion-button block color="primary-light" (click)="openStore(product.store)">\n\n          {{\'View Store\'|translate}}</button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="product-detail-content bing-fo" *ngIf="config.showWcVendorInfo">\n\n    <ion-spinner *ngIf="loaderWcVendorInfo"></ion-spinner>\n\n    <ion-row *ngIf="!loaderWcVendorInfo">\n\n      <ion-col col-12>\n\n        <h4>\n\n          {{\'Seller Information\'|translate}}<br><small>{{\'Sold by\'|translate}}{{\' \'+wcVendorInfo.display_name}}</small>\n\n        </h4>\n\n        <button ion-button block color="primary-light" (click)="openStore(wcVendorInfo)">\n\n          {{\'View Store\'|translate}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n  <ion-grid class="product-detail-content" *ngIf="product.description!=null && product.description!=\'\'">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <h4>{{\'Product Description\'|translate}}</h4>\n\n        <div class="product-describtion" [innerHTML]="product.description"></div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- 2.0 updates start -->\n\n\n\n  <ion-grid class="product-detail-content animate-product">\n\n    <ion-spinner *ngIf="releatedItems.length==0" class="spinner-related-items"></ion-spinner>\n\n    <ion-row *ngIf="releatedItems.length!=0">\n\n\n\n      <ion-col col-12>\n\n        <h4>{{\'Releated Items\'|translate}}</h4>\n\n        <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product" dir="{{shared.dir}}">\n\n          <ion-slide *ngFor="let p of releatedItems">\n\n            <product [data]="p" [type]="\'normal\'"></product>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- 2.0 updates end -->\n\n  <ion-fab right bottom *ngIf="selectAttributes.length!=0">\n\n    <button color="danger" ion-fab (click)="resetAttributes()">{{\'Clear\'|translate}}</button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block color="secondary" [disabled]="disableCartButton" *ngIf="product.type!=\'external\'"\n\n    (click)="addToCartProduct()">\n\n    {{\'Add to Cart\'|translate}}</button>\n\n\n\n  <button ion-button block color="secondary" [disabled]="disableCartButton" *ngIf="product.type==\'external\'"\n\n    (click)="openProduct()">\n\n    Ï{{product.button_text|translate}}</button>\n\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\product-detail\product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ProductDetailPage);
    return ProductDetailPage;
    var ProductDetailPage_1;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* unused harmony export LastLocation */
/* unused harmony export BookMark */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Highlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BooksService; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());

var LastLocation = /** @class */ (function () {
    function LastLocation() {
    }
    return LastLocation;
}());

var BookMark = /** @class */ (function () {
    function BookMark() {
    }
    return BookMark;
}());

var Highlight = /** @class */ (function () {
    function Highlight() {
    }
    return Highlight;
}());

var BooksService = /** @class */ (function () {
    function BooksService() {
        this.offlineBooks = [
            {
                id: "1",
                cover: "assets/imgs/cover.png",
                label: "Moby Dick (unpacked)",
                file: "assets/Jars-of-Clay.epub"
            },
        ];
    }
    BooksService.prototype.getAll = function () {
        var promises = this.offlineBooks.map(function (book) {
            return book;
        });
        return Promise.all(promises);
    };
    return BooksService;
}());

//# sourceMappingURL=books-service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_coupon_coupon__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__address_pages_shipping_address_shipping_address__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
















var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, shared, config, http, loading, alert, storage, translate, events, modalCtrl, applicationRef, couponProvider, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.storage = storage;
        this.translate = translate;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.applicationRef = applicationRef;
        this.couponProvider = couponProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.c = '';
        this.couponArray = [];
        this.products = [];
        this.loadingServerData = true;
        //============================================================================================  
        this.qunatityPlus = function (p) {
            var _this = this;
            if (p.stock_quantity == p.quantity)
                this.translate.get("Product Quantity is Limited!").subscribe(function (res) { _this.alert.show(res); });
            else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
                p.quantity++;
                p.subtotal = p.subtotal + parseFloat(p.price);
                p.total = p.total + parseFloat(p.price);
                this.updateCart();
            }
        };
        //============================================================================================  
        //function decreasing the quantity
        this.qunatityMinus = function (p) {
            if (p.quantity != 1) {
                p.quantity--;
                p.subtotal = parseFloat(p.price) * p.quantity;
                p.total = parseFloat(p.price) * p.quantity;
                this.updateCart();
            }
        };
        //============================================================================================   
        //getting getMostLikedProducts from the server
        this.getCoupon = function (code) {
            var _this = this;
            this.loading.show();
            this.config.Woocommerce.getAsync("coupons?code=" + code).then(function (data) {
                _this.loading.hide();
                var d = JSON.parse(data.body);
                var coupon = d[0];
                if (d.length == 0)
                    _this.translate.get("Invalid Coupon Code!").subscribe(function (res) { _this.alert.show(res); });
                else
                    _this.applyCouponCart(coupon);
            }, function (error) {
                _this.loading.hide();
                console.log(error);
            });
        };
        //============================================================================================  
        //applying coupon on the cart
        this.applyCouponCart = function (coupon) {
            //checking the coupon is valid or not
            if (this.couponProvider.validateCouponService(coupon, this.products, this.shared.couponArray) == false) {
                return 0;
            }
            else {
                if (coupon.individual_use == 1) {
                    this.products = (JSON.parse(JSON.stringify(this.shared.cartProducts)));
                    this.shared.couponArray = [];
                    console.log('individual_use');
                }
                var v = {};
                v.code = coupon.code;
                v.amount = coupon.amount;
                v.product_ids = coupon.product_ids;
                v.excluded_product_ids = coupon.exclude_product_ids;
                v.product_categories = coupon.product_categories;
                v.excluded_product_categories = coupon.excluded_product_categories;
                v.discount = coupon.amount;
                v.individual_use = coupon.individual_use;
                v.free_shipping = coupon.free_shipping;
                v.discount_type = coupon.discount_type;
                // v.limit_usage_to_x_items = coupon.limit_usage_to_x_items;
                // v.usage_limit = coupon.usage_limit;
                // v.used_by = coupon.used_by ;
                // v.usage_limit_per_user = coupon.usage_limit_per_user ;
                // v.exclude_sale_items = coupon.exclude_sale_items;
                this.shared.couponArray.push(coupon);
            }
            //applying coupon service
            this.products = this.couponProvider.apply(coupon, this.products);
            this.updateCart();
        };
        //============================================================================================  
        //delete Coupon
        this.deleteCoupon = function (code) {
            var _this = this;
            this.shared.couponArray.forEach(function (value, index) {
                if (value.code == code) {
                    _this.shared.couponArray.splice(index, 1);
                    return true;
                }
            });
            this.updateCart();
            console.log(this.shared.couponArray);
        };
    }
    //============================================================================================  
    CartPage.prototype.totalPrice = function () {
        var price = 0;
        var subPrice = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var value = _a[_i];
            subPrice = subPrice + value.subtotal;
            price = price + value.total;
        }
        this.subtotal = subPrice;
        this.total = price;
        // console.log(price);
    };
    ;
    //============================================================================================  
    CartPage.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            _this.loading.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail__["a" /* ProductDetailPage */], { data: JSON.parse(data.body) });
        }, function (err) {
            _this.loading.hide();
            console.log(err);
        });
    };
    //============================================================================================  
    CartPage.prototype.removeCart = function (id) {
        var _this = this;
        this.products.forEach(function (value, index) {
            if (value.cart_id == id) {
                _this.products.splice(index, 1);
                console.log("removing" + id);
            }
        });
        this.shared.removeCart(this.products);
        this.updateCart();
    };
    //============================================================================================  
    CartPage.prototype.proceedToCheckOut = function () {
        if (this.shared.customerData.id == null || this.shared.customerData.id == undefined) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
            modal.present();
        }
        else {
            // <!-- 2.0 updates -->
            if (this.config.checkOutPage == 1)
                this.shared.onePageCheckOut();
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__address_pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */]);
        }
    };
    //============================================================================================  
    CartPage.prototype.openProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], { sortOrder: 'newest' });
    };
    //============================================================================================  
    CartPage.prototype.ionViewWillEnter = function () {
        //if (this.config.admob == 1) this.shared.showAd();
        this.updateCart();
    };
    //============================================================================================  
    CartPage.prototype.updateCart = function () {
        var _this = this;
        if (this.shared.cartProducts.length != 0) {
            this.loading.show();
            this.loadingServerData = false;
        }
        var count = 0;
        this.shared.cartProducts.forEach(function (value, index) {
            var id = value.product_id;
            if (value.variation_id != undefined)
                id = value.variation_id;
            _this.config.Woocommerce.getAsync("products/" + id + "?" + _this.config.productsArguments).then(function (data) {
                count++;
                var p = JSON.parse(data.body);
                if (p.id == undefined) {
                    _this.shared.cartProducts.splice(index, 1);
                }
                else if (p.status == 'trash') {
                    _this.shared.cartProducts.splice(index, 1);
                }
                else {
                    value.price = p.price;
                    value.name = p.name;
                    value.stock_quantity = p.stock_quantity;
                    value.tax_status = p.tax_status;
                    //value.image = p.images[0].src;
                    value.tax_class = p.tax_class;
                    value.tax_status = p.tax_status;
                    value.on_sale = p.on_sale;
                    value.categories = p.categories;
                    if (p.stock_quantity == null) { }
                    else if (p.stock_quantity < value.quantity)
                        value.quantity = p.stock_quantity;
                    else if (p.in_stock == false) {
                        _this.shared.cartProducts.splice(index, 1);
                    }
                    value.subtotal = parseFloat(value.price) * value.quantity;
                    value.total = parseFloat(value.price) * value.quantity;
                }
                _this.applicationRef.tick();
                if (count == _this.shared.cartProducts.length) {
                    _this.changingCart();
                    _this.loading.hide();
                    _this.loadingServerData = true;
                }
            });
        });
    };
    //==========================================================================
    CartPage.prototype.changingCart = function () {
        var _this = this;
        this.products = this.shared.cartProducts;
        this.storage.set('cartProducts', this.shared.cartProducts);
        this.shared.cartTotalItems();
        this.shared.couponArray.forEach(function (value) {
            _this.products = _this.couponProvider.apply(value, _this.shared.cartProducts);
        });
        this.totalPrice();
    };
    CartPage.prototype.couponslist = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Demo Coupons',
            buttons: [
                {
                    icon: 'arrow-round-forward',
                    text: 'Product Fixed (fp). A fixed total discount for selected products only',
                    handler: function () {
                        _this.c = 'fp';
                    }
                },
                {
                    icon: 'arrow-round-forward',
                    text: 'Cart Fixed (fc). A fixed total discount for the entire cart',
                    handler: function () {
                        _this.c = 'fc';
                    }
                },
                {
                    icon: 'arrow-round-forward',
                    text: 'Product Percentage (percentage). A percentage discount for selected products only',
                    handler: function () {
                        _this.c = 'percentage';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_10__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\cart\cart.html"*/'<ion-header #myElement>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'My Cart\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="page-cart">\n\n  <ion-grid class="page-empty" *ngIf="products.length==0 && loadingServerData" [@animate]>\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="cart"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'Your cart is empty\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button color="secondary" (click)="openProductsPage()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class="card-product animated flipInX" *ngFor="let product of products" [@animate]>\n    <ion-card-header>\n      <h3>{{product.name}}\n        <br>\n        <small>{{product.categories_name}}</small>\n      </h3>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{product.image}}">\n        </ion-thumbnail>\n\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6 [innerHTML]="product.price_html"></ion-col>\n        </ion-row>\n\n        <!-- <ion-row *ngFor="let att of product.meta_data">\n          <ion-col col-6>{{att.key}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.value}}</ion-col>\n        </ion-row> -->\n\n        <ion-row align-items-center>\n          <ion-col col-6>{{\'Quantity\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <button ion-button small outline (click)="qunatityMinus(product);" *ngIf="!product.sold_individually">\n              <ion-icon name="remove"></ion-icon>\n            </button>\n            <span class="dgi">{{product.quantity}}</span>\n            <button ion-button small outline (click)="qunatityPlus(product);" *ngIf="!product.sold_individually">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Sub Total\' |translate}}&nbsp;:&nbsp;</strong>\n          </ion-col>\n          <ion-col col-6>\n            <strong>{{product.subtotal | curency}}</strong>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Total\' |translate}}&nbsp;:&nbsp;</strong>\n          </ion-col>\n          <ion-col col-6>\n            <strong>{{product.total | curency}}</strong>\n          </ion-col>\n        </ion-row> -->\n      </ion-item>\n      <button ion-button small color="secondary" (click)="getSingleProductDetail(product.product_id)">{{\'View\' | translate}}</button>\n      <button ion-button small clear color="danger" (click)="removeCart(product.cart_id);">{{\'Remove\' | translate}}</button>\n    </ion-card-content>\n\n  </ion-card>\n\n\n  <div *ngIf="products.length!=0">\n    <ion-card class="card-product" *ngFor="let coupon of shared.couponArray">\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n            {{\'Coupon Code\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{coupon.code}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            {{\'Coupon Amount\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{coupon.amount| curency}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'percent\'">\n            {{\'A percentage discount for the entire cart\'|translate}}\n          </ion-col>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'fixed_cart\'">\n            {{\'A fixed total discount for the entire cart\'|translate}}\n          </ion-col>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'fixed_product\'">\n            {{\'A fixed total discount for selected products only\'|translate}}\n          </ion-col>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'percent_product\'">\n            {{\'A percentage discount for selected products only\'|translate}}\n          </ion-col>\n          <ion-col col-12>\n            <button ion-button small color="secondary" (click)="deleteCoupon(coupon.code)">{{\'Remove\'|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="card-product">\n      <!-- <button ion-button small clear *ngIf="!config.appInProduction" (click)="couponslist()">{{\'List of coupon codes\'|translate}}</button> -->\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'coupon code\'|translate}}" [(ngModel)]="c"></ion-input>\n            <button ion-button item-end [disabled]="c==\'\'" (click)="getCoupon(c)">{{\'Apply\'|translate}}</button>\n          </ion-item>\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  <ion-card *ngIf="products.length!=0">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'SubTotal\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{subtotal| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Discount\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          - {{(subtotal-total)| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Total\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{total| curency}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <button [disabled]="products.length==0" ion-button solid block color="secondary" (click)="proceedToCheckOut()">\n    {{\'Proceed\'|translate}}\n  </button>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_14__providers_coupon_coupon__["a" /* CouponProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/





var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(viewCtrl, config, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.config = config;
        this.sharedData = sharedData;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy-policy',template:/*ion-inline-start:"E:\app5\src\pages\privacy-policy\privacy-policy.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{\'Privacy Policy\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <br/>\n\n    Last updated: April 18, 2019\n\n    <br/>\n\n    <br/>\n\n    Books of Prayer (“us”, “we”, or “our”) operates the Books of Prayer website (the “Service”).\n\n    \n\n    This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.\n\n    \n\n    We will not use or share your information with anyone except as described in this Privacy Policy.\n\n    \n\n    We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://www.booksofprayer.com\n\n    <br/>\n\n    <h3>Information Collection And Use</h3>\n\n  \n\n    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:\n\n   <ul>\n\n    <li>Name</li>\n\n    <li>Email address</li>\n\n    <li>Telephone number</li>\n\n    <li>Address</li>\n\n  </ul> \n\n   \n\n  <h3>Log Data</h3>\n\n  \n\n   We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.\n\n    \n\n    <h3>Cookies</h3>\n\n    Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.\n\n    \n\n    We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.\n\n    \n\n    <h3>Service Providers</h3>\n\n    We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.\n\n    \n\n    These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.\n\n    \n\n  <h3>Security</h3>\n\n    The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.\n\n    \n\n  <h3>Links To Other Sites</h3>\n\n    Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.\n\n    \n\n    We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.\n\n    \n\n  <h3>Children’s Privacy</h3>\n\n    Our Service does not address anyone under the age of 18 (“Children”).\n\n    \n\n    We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.\n\n    \n\n  <h3>Compliance With Laws</h3>\n\n    We will disclose your Personal Information where required to do so by law or subpoena.\n\n    \n\n  <h3>Changes To This Privacy Policy</h3>\n\n    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.\n\n    \n\n    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.\n\n    \n\n  <h3>Contact Us</h3>\n\n    If you have any questions about this Privacy Policy, please contact us.\n\n    \n\n  </ion-content>\n\n  \n\n  '/*ion-inline-end:"E:\app5\src\pages\privacy-policy\privacy-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/





var TermServicesPage = /** @class */ (function () {
    function TermServicesPage(viewCtrl, config, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.config = config;
        this.sharedData = sharedData;
    }
    TermServicesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TermServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-term-services',template:/*ion-inline-start:"E:\app5\src\pages\term-services\term-services.html"*/'\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n              <ion-icon name="close"></ion-icon>\n\n            </button>\n\n      </ion-buttons>\n\n      <ion-title translate> {{\'Term and Services\'| translate }}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<br/>\n\nLast updated: April 18, 2019\n\n  <br/>\n\n  <br/>\n\n  Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the https://www.booksofprayer.com website (the “Service”) operated by Books of Prayer (“us”, “we”, or “our”).\n\n\n\nYour access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.\n\n\n\nBy accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.\n\n  \n\n<br/>\n\n  <h3>Accounts</h3>\n\n\n\n  When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.\n\n\n\nYou are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.\n\n\n\nYou agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.\n\n \n\n<h3>Intellectual Property</h3>\n\n\n\nThe Service and its original content, features and functionality are and will remain the exclusive property of Books of Prayer and its licensors.\n\n  \n\n  <h3>Links To Other Web Sites</h3>\n\n  Our Service may contain links to third-party web sites or services that are not owned or controlled by Books of Prayer.\n\n\n\n  Books of Prayer has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Books of Prayer shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.\n\n  \n\n  We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.\n\n  \n\n  <h3>Service Providers</h3>\n\n  We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.\n\n  \n\n  These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.\n\n  \n\n<h3>Termination</h3>\n\nWe may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.\n\n\n\nAll provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.\n\n\n\nWe may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.\n\n\n\nUpon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.\n\n\n\nAll provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.  \n\n\n\n<h3>Disclaimer</h3>\n\nYour use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.\n\n\n\n<h3>Governing Law</h3>\n\nThese Terms shall be governed and construed in accordance with the laws of United States without regard to its conflict of law provisions.\n\n\n\nOur failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.\n\n\n\n<h3>Changes</h3>\n\nWe reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.\n\n\n\nBy continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.  \n\n\n\n<h3>Contact Us</h3>\n\n  If you have any questions about these Terms and Conditions, please contact us.\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\app5\src\pages\term-services\term-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TermServicesPage);
    return TermServicesPage;
}());

//# sourceMappingURL=term-services.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/





var RefundPolicyPage = /** @class */ (function () {
    function RefundPolicyPage(viewCtrl, config, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.config = config;
        this.sharedData = sharedData;
    }
    RefundPolicyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RefundPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refund-policy',template:/*ion-inline-start:"E:\app5\src\pages\refund-policy\refund-policy.html"*/'<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>{{\'Refund Policy\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    Books of Prayer strives to maintain excellent customer service and satisfaction, this includes the guarantee of each of our books as its described on our web sites. You will be eligible for a refund within 30 days if you\'re dissatisfied with your purchase due to an error on the our part or if the product doesn\'t arrive. Please note that our books have a \'Final Sale\' policy on ebooks only. If you are ordering an ebook, please review the seller\'s Terms of Sale carefully and order only if this policy is acceptable to you.\n\n  </ion-content>'/*ion-inline-end:"E:\app5\src\pages\refund-policy\refund-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], RefundPolicyPage);
    return RefundPolicyPage;
}());

//# sourceMappingURL=refund-policy.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/







var SelectCountryPage = /** @class */ (function () {
    function SelectCountryPage(navCtrl, navParams, http, events, config, viewCtrl, modalCtrl, loading, shared, location) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.location = location;
        this.searchQuery = '';
        this.countries = new Array;
        this.items = this.countries = this.location.data.countries;
        setTimeout(function () { _this.searchBar.setFocus(); }, 250);
    }
    SelectCountryPage.prototype.initializeItems = function () {
        this.items = this.countries;
    };
    SelectCountryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //close modal
    SelectCountryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectCountryPage.prototype.selectCountry = function (c) {
        var page = this.navParams.get('page');
        this.events.publish("countryChange", page, c);
        if (page == 'shipping') {
            this.shared.shippingCountryName = c.name;
            this.shared.shipping.country = c.value;
            this.shared.shipping.state = null;
            this.shared.shipping.city = null;
            this.shared.shipping.postcode = null;
            this.shared.shippingStateName = "";
        }
        else if (page == 'billing') {
            this.shared.billingCountryName = c.name;
            this.shared.billing.country = c.value;
            this.shared.billing.state = null;
            this.shared.billing.city = null;
            this.shared.billing.postcode = null;
            this.shared.billingStateName = "";
        }
        this.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('Searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Searchbar */])
    ], SelectCountryPage.prototype, "searchBar", void 0);
    SelectCountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-country',template:/*ion-inline-start:"E:\app5\src\pages\select-country\select-country.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Select Country\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-select-country">\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'Search\'|translate}}" #Searchbar></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="selectCountry(item)">\n      {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\select-country\select-country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */]])
    ], SelectCountryPage);
    return SelectCountryPage;
}());

//# sourceMappingURL=select-country.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectZonesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/







var SelectZonesPage = /** @class */ (function () {
    function SelectZonesPage(navCtrl, navParams, http, events, config, viewCtrl, modalCtrl, loading, shared, location) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.location = location;
        this.searchQuery = '';
        this.items = [];
        this.zones = [];
        var page = this.navParams.get('page');
        var id = this.navParams.get('id');
        if (page == 'shipping') {
            this.items = this.zones = this.location.data.states[this.shared.shipping.country];
        }
        else {
            this.items = this.zones = this.location.data.states[this.shared.billing.country];
        }
        if (page == 'shippingUpdate' || page == 'billingUpdate') {
            console.log(id);
            this.items = this.zones = this.location.data.states[id];
            if (this.items == undefined)
                this.items = this.zones = [];
            console.log(this.items);
        }
    }
    SelectZonesPage.prototype.initializeItems = function () {
        this.items = this.zones;
    };
    SelectZonesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //close modal
    SelectZonesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectZonesPage.prototype.selectZone = function (c) {
        var page = this.navParams.get('page');
        this.events.publish("stateChange", page, c);
        if (page == 'shipping') {
            if (c == 'other') {
                this.shared.shipping.state = 'other';
                this.shared.shippingStateName = "other";
            }
            else {
                this.shared.shipping.state = c.value;
                this.shared.shippingStateName = c.name;
                // this.shared.orderDetails.tax_zone_id = c.zone_id;
            }
        }
        else {
            if (c == 'other') {
                this.shared.billing.state = 'other';
                this.shared.billingStateName = "other";
            }
            else {
                this.shared.billing.state = c.value;
                this.shared.billingStateName = c.name;
            }
        }
        this.dismiss();
    };
    SelectZonesPage.prototype.hideOther = function () {
        if (this.zones == undefined)
            this.zones = [];
        if (this.zones.length == 0)
            return true;
        else
            return false;
    };
    SelectZonesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-zones',template:/*ion-inline-start:"E:\app5\src\pages\select-zones\select-zones.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Select Zone\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-select-zones">\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'Search\'|translate}}" autofocus></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="selectZone(item)">\n      {{ item.name }}\n    </ion-item>\n    <ion-item (click)="selectZone(\'other\')" *ngIf="hideOther()">\n      {{\'other\'|translate}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\select-zones\select-zones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */]])
    ], SelectZonesPage);
    return SelectZonesPage;
}());

//# sourceMappingURL=select-zones.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__privacy_policy_privacy_policy__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__term_services_term_services__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__refund_policy_refund_policy__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_account_my_account__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__ = __webpack_require__(195);
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, modalCtrl, config, storage, loading, http, localNotifications, events, shared, iab, socialSharing, plt, appVersion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.localNotifications = localNotifications;
        this.events = events;
        this.shared = shared;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.appVersion = appVersion;
        this.setting = {};
    }
    SettingsPage.prototype.turnOnOffNotification = function (value) {
        if (this.setting.localNotification == false) {
            this.localNotifications.cancel(1).then(function (result) {
            });
        }
        else {
            this.localNotifications.schedule({
                id: 1,
                title: this.config.notifTitle,
                text: this.config.notifText,
                every: this.config.notifDuration,
            });
        }
        this.updateSetting();
    };
    SettingsPage.prototype.updateSetting = function () {
        console.log(this.setting);
        this.storage.set('setting', this.setting);
    };
    SettingsPage.prototype.openLoginPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
        modal.present();
    };
    SettingsPage.prototype.logOut = function () {
        this.shared.logOut();
    };
    SettingsPage.prototype.openPage = function (page) {
        if (page == 'myAccount')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__my_account_my_account__["a" /* MyAccountPage */]);
    };
    SettingsPage.prototype.openSite = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    };
    //============================================================================================
    //turning on off local  notification
    SettingsPage.prototype.hideShowFooterMenu = function () {
        this.events.publish('setting', this.setting);
        this.updateSetting();
    };
    SettingsPage.prototype.hideShowCartButton = function () {
        this.events.publish('setting', this.setting);
        this.updateSetting();
    };
    SettingsPage.prototype.showModal = function (value) {
        this.loading.autoHide(1000);
        if (value == 'privacyPolicy') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
            modal.present();
        }
        else if (value == 'termServices') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__term_services_term_services__["a" /* TermServicesPage */]);
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
            modal.present();
        }
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('setting').then(function (val) {
            if (val != null || val != undefined) {
                _this.setting = val;
            }
            else {
                _this.setting.localNotification = true;
                _this.setting.notification = true;
                _this.setting.cartButton = true;
                _this.setting.footer = true;
            }
        });
    };
    SettingsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__cart_cart__["a" /* CartPage */]);
    };
    SettingsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__search_search__["a" /* SearchPage */]);
    };
    SettingsPage.prototype.rateUs = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    };
    SettingsPage.prototype.share = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString()).then(function () {
            }).catch(function () {
            });
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.socialSharing.share(_this.config.appName, _this.config.appName, "", "https://play.google.com/store/apps/details?id=" + val).then(function () {
                }).catch(function () {
                });
            });
        }
    };
    SettingsPage.prototype.showAd = function () {
        this.loading.autoHide(2000);
        this.events.publish('showAd');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\app5\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Settings\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-settings">\n\n  <ion-list class="list-avatar" padding>\n    <ion-item text-center *ngIf="shared.customerData.id==null" (click)="openLoginPage()">\n      <ion-avatar>\n        <ion-icon name="contact"></ion-icon>\n      </ion-avatar>\n      <h2>{{ \'Login & Register\' | translate }}</h2>\n      <p>{{ \'Please login or create an account for free\' | translate }}</p>\n    </ion-item>\n\n    <ion-item text-center *ngIf="shared.customerData.id!=null">\n      <ion-avatar>\n        <img src="{{shared.customerData.avatar_url}}">\n      </ion-avatar>\n      <h2>{{shared.customerData.first_name +"&nbsp;"+shared.customerData.last_name}}</h2>\n      <p>{{shared.customerData.email}}</p>\n      <button ion-button color="light" (click)="openPage(\'myAccount\')">\n        {{\'Edit Profile\' | translate }}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list padding>\n    <ion-item>\n      <ion-label>{{"Turn on/off Local Notifications"|translate}}</ion-label>\n      <ion-toggle [(ngModel)]="setting.localNotification" (ionChange)="turnOnOffNotification()"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{"Turn on/off Notifications"|translate}}</ion-label>\n      <ion-toggle [(ngModel)]="setting.notification" (ionChange)="onOffPushNotification(setting.notification)"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list padding>\n    <button ion-item (click)="openSite()">\n      {{"Official Website"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="showModal(\'privacyPolicy\')">\n      {{"Privacy Policy"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n    </button>\n    <button ion-item (click)="showModal(\'refundPolicy\')">\n      {{"Refund Policy"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="showModal(\'termServices\')">\n      {{"Term and Services"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="rateUs()">\n      {{"Rate Us"|translate}}\n      <ion-icon showWhen="android" name="star-half" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="share()">\n      {{"Share"|translate}}\n      <ion-icon showWhen="android" name="share" item-end></ion-icon>\n    </button>\n  </ion-list>\n  <ion-list *ngIf="shared.customerData.id!=null" padding>\n    <button ion-button block color="secondary" (click)="logOut()">\n      {{\'Log Out\' | translate }}\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__["a" /* AppVersion */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, config, shared, loading, translate, http, actionSheet, menuCtrl, applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.translate = translate;
        this.http = http;
        this.actionSheet = actionSheet;
        this.menuCtrl = menuCtrl;
        this.applicationRef = applicationRef;
        this.queryAttributes = "";
        this.attributes = [];
        this.tempAttributes = [];
        this.selectedAttributes = [];
        this.scrollTopButton = false;
        //@ViewChild(IonRange) priceRange: IonRange;
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selectedTab = '';
        this.categoryId = '';
        this.categoryName = '';
        this.sortOrder = 'Newest';
        this.sortArray = ['Newest', 'A - Z', 'Z - A'];
        //, 'A - Z Date', 'Z - A Date'
        //'Latest', 'On Sale', 'Featured'
        this.page = 1;
        this.applyFilter = false;
        this.filters = [];
        this.selectedFilters = [];
        this.maxAmount = 1000;
        this.minAmount = 0;
        this.price = { lower: 0, upper: this.maxAmount };
        this.side = "right";
        this.productView = 'grid';
        this.filterOnSale = false;
        this.filterFeatured = false;
        this.loadingServerData = true;
        this.type = "";
        this.listOfFilteredIdsFromCustom = [];
        //============================================================================================  
        // filling filter array for keyword search 
        this.fillFilterArray = function (value, option) {
            this.applyFilters();
        };
        if (shared.dir == "rtl")
            this.side = "left";
        if (this.navParams.get('id') != undefined)
            this.selectedTab = this.categoryId = this.navParams.get('id');
        if (this.navParams.get('name') != undefined)
            this.categoryName = this.navParams.get('name');
        if (this.navParams.get('type') != undefined)
            this.type = this.navParams.get('type');
        console.log(this.type);
        this.applicationRef.tick();
        this.getFilterdProducts();
    }
    ProductsPage.prototype.resetProducts = function () {
        var _this = this;
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        setTimeout(function () {
            _this.scrollToTop();
        }, 500);
    };
    ProductsPage.prototype.getFilterdProducts = function () {
        var _this = this;
        if (this.page == 1) {
            this.resetProducts();
            //this.loading.show();
            this.loadingServerData = false;
        }
        var query = '&page=' + this.page;
        if (this.sortOrder == "Newest")
            query = query + "&order=desc&orderby=date";
        else if (this.sortOrder == "A - Z")
            query = query + "&order=asc&orderby=title";
        else if (this.sortOrder == "Z - A")
            query = query + "&order=desc&orderby=title";
        if (this.type == "featured" || this.filterFeatured) {
            query = query + "&featured=true";
            this.filterFeatured = true;
        }
        if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) {
            query = query + "&on_sale=true";
            this.filterOnSale = true;
        }
        if (this.price.lower != this.minAmount && this.applyFilter == true)
            query = query + "&min_price=" + this.price.lower;
        if (this.price.upper != this.maxAmount && this.applyFilter == true)
            query = query + "&max_price=" + this.price.upper;
        if (this.selectedTab != '')
            query = query + '&cat_id=' + this.selectedTab;
        query = query + '&page=' + this.page;
        query = query + this.queryAttributes;
        console.log("custom Id = " + query);
        this.getAllAttributes();
        this.http.get(this.config.url + '/api/appsettings/ionic_filter_products/?insecure=cool' + query).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data)
                _this.listOfFilteredIdsFromCustom = data.data;
            _this.applicationRef.tick();
            _this.getFilterdProductsFromWoo();
        });
    };
    ProductsPage.prototype.getFilterdProductsFromWoo = function () {
        var _this = this;
        if (this.listOfFilteredIdsFromCustom.length == 0) {
            this.infinite.enable(false);
            this.loadingServerData = true;
            //this.emptyProductList();
            //this.loading.hide();
            return 0;
        }
        var q = 'products?include=' + this.listOfFilteredIdsFromCustom + "&status=publish";
        console.log(this.listOfFilteredIdsFromCustom);
        if (this.sortOrder == "Newest")
            q = q + "&order=desc&orderby=date";
        else if (this.sortOrder == "A - Z")
            q = q + "&order=asc&orderby=title";
        else if (this.sortOrder == "Z - A")
            q = q + "&order=desc&orderby=title";
        // if (this.type == "featured" || this.filterFeatured) { q = q + "&featured=true"; this.filterFeatured = true; }
        // if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) { q = q + "&on_sale=true"; this.filterOnSale = true; }
        console.log(q);
        this.config.Woocommerce.getAsync(q + "&" + this.config.productsArguments).then(function (dat) {
            //this.loading.hide();
            var data = JSON.parse(dat.body);
            _this.infinite.complete();
            if (_this.page == 1) {
                _this.emptyProductList();
                _this.scrollToTop();
                _this.infinite.enable(true);
            }
            if (data.length != 0) {
                _this.page++;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var value = data_1[_i];
                    _this.products.push(value);
                }
            }
            if (data.length == 0 || data.length < 10) {
                _this.infinite.enable(false);
            }
            _this.applicationRef.tick();
            _this.loadingServerData = true;
        });
    };
    ProductsPage.prototype.emptyProductList = function () {
        this.products = [];
    };
    ProductsPage.prototype.resetFilters = function () {
        this.reset();
    };
    ProductsPage.prototype.reset = function () {
        this.applyFilter = false;
        this.filterFeatured = false;
        this.type = "latest";
        this.sortOrder = "Newest";
        this.filterOnSale = false;
        this.page = 1;
        this.selectedAttributes = [];
        this.queryAttributes = "";
        this.getFilterdProducts();
    };
    //changing tab
    ProductsPage.prototype.changeTab = function (c) {
        if (c == '')
            this.selectedTab = c;
        else
            this.selectedTab = c.id;
        this.reset();
    };
    ProductsPage.prototype.applyFilters = function () {
        this.toggleMenu();
        //this.type = "latest";
        this.applyFilter = true;
        //this.infinite.enable(true);
        this.page = 1;
        //this.getProducts(null);
        this.getFilterdProducts();
    };
    ProductsPage.prototype.getSortProducts = function (value) {
        console.log(value);
        // if (value == this.sortOrder) return 0;
        // else {
        this.sortOrder = value;
        //this.infinite.enable(true);
        this.applyFilter = true;
        this.page = 1;
        this.type = "";
        this.getFilterdProducts();
        // }
    };
    ProductsPage.prototype.openSortBy = function () {
        var _this = this;
        var buttonArray = [];
        this.translate.get(this.sortArray).subscribe(function (res) {
            // console.log(res);
            var _loop_1 = function (key) {
                buttonArray.push({ text: res[key], handler: function () { _this.getSortProducts(key); } });
            };
            for (var key in res) {
                _loop_1(key);
            }
            _this.translate.get('Cancel').subscribe(function (res) {
                buttonArray.push({
                    text: res,
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                });
                var actionSheet = _this.actionSheet.create({
                    buttons: buttonArray
                });
                actionSheet.present();
            });
        });
    };
    ProductsPage.prototype.changeLayout = function () {
        if (this.productView == 'list')
            this.productView = "grid";
        else
            this.productView = "list";
        this.scrollToTop();
    };
    ProductsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    ProductsPage.prototype.onScroll = function (e) {
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //   console.log(e);
    };
    ProductsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.ionViewDidLoad = function () {
        // console.log("loaded");
        var _this = this;
        try {
            setTimeout(function () {
                var ind = 0;
                _this.shared.allCategories.forEach(function (value, index) {
                    if (_this.selectedTab == value.id) {
                        ind = index;
                        console.log("index to go " + ind);
                    }
                });
                _this.slides.slideTo(ind, 1000, true);
            }, 100);
        }
        catch (error) {
        }
    };
    ProductsPage.prototype.removeString = function (s) {
        //console.log(s.replace('pa_', ''));
        return s.replace('pa_', '');
    };
    //=======================================================================================
    ProductsPage.prototype.getAllAttributes = function () {
        var _this = this;
        // let cat = "&cat_id=" + this.selectedTab;
        // if (this.selectedTab == '') cat = '';
        var query = '';
        if (this.selectedTab != '')
            query = query + '&cat_id=' + this.selectedTab;
        query = query + this.queryAttributes;
        this.http.get(this.config.url + '/api/appsettings/ionic_get_attributes/?insecure=cool' + query).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.attributes) {
                _this.attributes = data.attributes;
            }
            else {
                _this.attributes = [];
            }
            if (_this.minAmount != data.min_price)
                _this.minAmount = data.min_price;
            if (_this.maxAmount != data.max_price)
                _this.maxAmount = data.max_price;
            if (_this.minAmount > _this.price.lower)
                _this.price.lower = _this.minAmount;
            if (_this.maxAmount < _this.price.upper)
                _this.price.upper = _this.maxAmount;
            if (_this.applyFilter == false) {
                _this.price.lower = _this.minAmount;
                _this.price.upper = _this.maxAmount;
            }
            _this.on_sale = data.on_sale;
            _this.featured = data.featured;
            _this.applicationRef.tick();
        });
    };
    //=======================================================================================
    ProductsPage.prototype.selectAttribute = function (a, v) {
        var _this = this;
        var found = false;
        this.selectedAttributes.forEach(function (x, index) {
            if (x.slug == a.attribute_slug) {
                found = true;
                if (v.value == false) {
                    x.list.forEach(function (y, ind) {
                        if (y == v.name) {
                            x.list.splice(ind, 1);
                        }
                    });
                }
                else {
                    var valueFound_1 = false;
                    x.list.forEach(function (y, ind) {
                        if (y == v.name) {
                            valueFound_1 = true;
                            x.list.splice(ind, 1);
                        }
                    });
                    if (valueFound_1 == false) {
                        x.list.push(v.name);
                    }
                }
            }
            if (x.list.length == 0) {
                _this.selectedAttributes.splice(index, 1);
            }
        });
        if (found == false)
            this.selectedAttributes.push({ slug: a.attribute_slug, list: [v.name] });
        console.log(this.selectedAttributes);
        this.applicationRef.tick();
        this.queryAttributes = "";
        for (var _i = 0, _a = this.selectedAttributes; _i < _a.length; _i++) {
            var x = _a[_i];
            this.queryAttributes = this.queryAttributes + "&" + x.slug + "=";
            for (var _b = 0, _c = x.list; _b < _c.length; _b++) {
                var y = _c[_b];
                this.queryAttributes = this.queryAttributes + y + ",";
            }
        }
        this.queryAttributes;
        console.log(this.queryAttributes);
        this.applyFilters();
    };
    //=======================================================================================
    ProductsPage.prototype.toggleMenu = function () {
        console.log("called toggle");
        if (this.config.appDirection == "ltr")
            this.menuCtrl.toggle("right");
        else
            this.menuCtrl.toggle("left");
    };
    //=======================================================================================
    ProductsPage.prototype.checkAttributeSelected = function (a, v) {
        var v1 = this.queryAttributes.indexOf(a.attribute_slug);
        var v2 = this.queryAttributes.indexOf(v.name);
        if (v1 != -1 && v2 != -1) {
            v.value = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ProductsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Slides */])
    ], ProductsPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], ProductsPage.prototype, "infinite", void 0);
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"E:\app5\src\pages\products\products.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Shop\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar class="toolbar-secondary" [class.disable]="products[0]==1">\n\n    <ion-slides slidesPerView="auto" dir="{{shared.dir}}">\n\n      <ion-slide [class.selected]="selectedTab==\'\'" *ngIf="shared.allCategories!=null" (click)="changeTab(\'\')">\n\n        {{\'All\'|translate}}</ion-slide>\n\n\n\n      <ion-slide [class.selected]="selectedTab==c.id" *ngFor="let c of shared.allCategories" (click)="changeTab(c)">\n\n        {{c.name}}\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="page-products" (ionScroll)="onScroll($event)">\n\n\n\n  <ion-grid *ngIf="productView==\'grid\'">\n\n    <ion-col *ngFor="let p of products" col-6>\n\n      <product [data]="p" [type]="\'normal\'"></product>\n\n    </ion-col>\n\n  </ion-grid>\n\n\n\n  <ion-list class="list-view" *ngIf="productView==\'list\'">\n\n    <span *ngFor="let p of products">\n\n      <product [data]="p" [type]="\'list\'"></product>\n\n    </span>\n\n  </ion-list>\n\n  <ion-col *ngIf="products.length==0 && loadingServerData" col-12 class="animated fadeIn">\n\n    <h6 text-center>{{\'No Products Found!\'|translate}}</h6>\n\n  </ion-col>\n\n\n\n  <ion-infinite-scroll #infinite (ionInfinite)="getFilterdProducts()">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n  <ion-fab bottom right *ngIf="scrollTopButton">\n\n    <button ion-fab (click)="scrollToTop()">\n\n      <ion-icon name="arrow-round-up"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="light">\n\n    <ion-buttons left>\n\n      <small>{{"Sort Products"|translate}}\n\n      </small>\n\n\n\n      <button small ion-button clear color="secondary" (click)="openSortBy()">\n\n        {{sortOrder| translate}}\n\n        <ion-icon name="arrow-up"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="changeLayout()">\n\n        <ion-icon name="list" [name]="productView==\'grid\'? \'list\' : \'apps\'"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="resetFilters()" *ngIf="applyFilter">\n\n        <ion-icon name="refresh"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only *ngIf="shared.dir==\'ltr\'" menuToggle="right">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only *ngIf="shared.dir==\'rtl\'" menuToggle="left">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<ion-menu [content]="content" side="{{side}}" id="menu2">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only *ngIf="shared.dir==\'ltr\'" menuToggle="right">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only *ngIf="shared.dir==\'rtl\'" menuToggle="left">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>{{"Filters"|translate}}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content class="side-menu">\n\n    <h3 style="margin-bottom:0;">{{\'by\'| translate}}&nbsp;{{\'Price\'| translate}}</h3>\n\n    <ion-item dir="ltr">\n\n      <ion-range dualKnobs="true" pin="true" (ionBlur)="applyFilters()" [(ngModel)]="price" [min]="minAmount"\n\n        [max]="maxAmount">\n\n        <ion-label range-left>{{price.lower}}</ion-label>\n\n        <ion-label range-right>{{price.upper}}</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <div *ngIf="on_sale==\'True\' || featured==\'True\'">\n\n      <ion-list>\n\n        <h3>{{\'by\'| translate}}&nbsp;{{\'SALE\'| translate}}/{{\'Featured\'| translate}}</h3>\n\n        <ion-item *ngIf="on_sale==\'True\'">\n\n          <ion-label>{{\'SALE\'| translate}}</ion-label>\n\n          <ion-checkbox [(ngModel)]="filterOnSale" (click)="fillFilterArray($event,\'sale\')"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item *ngIf="featured==\'True\'">\n\n          <ion-label>{{\'Featured\'| translate}}</ion-label>\n\n          <ion-checkbox [(ngModel)]="filterFeatured" (click)="fillFilterArray($event,\'featured\')"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngIf="attributes.length!=0;">\n\n      <!-- <h3>{{\'Filter by attributes\'| translate}}</h3> -->\n\n      <ion-list>\n\n        <div *ngFor="let a of attributes">\n\n          <h3 class="capital">{{\'by\'| translate}}&nbsp;{{a.attribute_name}}</h3>\n\n          <ion-item *ngFor="let v of a.attribute_terms">\n\n            <ion-label>{{v.name}}</ion-label>\n\n            <ion-checkbox [(ngModel)]="v.value" [checked]="checkAttributeSelected(a,v)"\n\n              (ionChange)="selectAttribute(a,v)"></ion-checkbox>\n\n          </ion-item>\n\n        </div>\n\n      </ion-list>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- <ion-nav #content></ion-nav> -->'/*ion-inline-end:"E:\app5\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, config, http, alert, loading, shared, applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.alert = alert;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.searchResult = [];
        this.showCategories = true;
        this.onChangeKeyword = function (e) {
            //console.log(this.search);
            // if (search != undefined) {
            //rchResult = [];
            //  }
        };
        this.getSearchData = function () {
            var _this = this;
            if (this.search != undefined) {
                if (this.search == null || this.search == '') {
                    this.shared.toast("Please enter something");
                    return 0;
                }
            }
            else {
                this.shared.toast("Please enter something");
                return 0;
            }
            this.loading.show();
            this.config.Woocommerce.getAsync("products?status=publish&per_page=100&search=" + this.search + "&" + this.config.productsArguments).then(function (data) {
                _this.loading.hide();
                _this.searchResult = JSON.parse(data.body);
                _this.showCategories = false;
                if (_this.searchResult.length == 0) {
                    _this.shared.toast("No Product found!");
                }
                _this.applicationRef.tick();
            });
        };
    }
    SearchPage.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { id: id, name: name });
    };
    SearchPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\app5\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Search\'| translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form #loginForm="ngForm" (ngSubmit)="getSearchData()">\n    <ion-searchbar [(ngModel)]="search" name="search" placeholder="{{\'Search\'|translate}}" [showCancelButton]="shouldShowCancel"\n      (ionInput)="onChangeKeyword($event)">\n    </ion-searchbar>\n  </form>\n\n  <div class="list" *ngFor="let p of searchResult">\n    <product [data]="p" [type]="\'list\'"></product>\n  </div>\n\n  <ion-list >\n    <ion-item *ngFor="let c of shared.allCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-avatar item-start>\n        <img src="{{c.image.src}}" *ngIf="c.image">\n      </ion-avatar>\n      <h2>{{c.name}}</h2>\n      <p>{{c.count}} {{\'Products\'| translate }} </p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__term_services_term_services__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__refund_policy_refund_policy__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/











var SignUpPage = /** @class */ (function () {
    function SignUpPage(http, config, viewCtrl, modalCtrl, loading, shared, platform) {
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.platform = platform;
        this.formData = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            username: '',
            wpgdprc: 1,
            register: 'Register'
        };
        this.errorMessage = '';
        // /api/appusers/register/?insecure=cool&username=abcd&password=123456&email=abcdxyz@gmail.com&display_name=aopi&nonce=6ad2605198
    }
    SignUpPage.prototype.createAccount = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + '/api/get_nonce/?controller=appusers&method=register').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.signUp(data.nonce);
        });
    };
    SignUpPage.prototype.signUp = function (nonce) {
        var _this = this;
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
        this.http.post(this.config.url + '/api/appusers/register/?insecure=cool', formData).map(function (res) { return res.json(); }).subscribe(function (data) {
            //this.config.Woocommerce.postAsync("customers", this.formData).then((data) => {
            _this.loading.hide();
            if (data.status == "ok") {
                _this.shared.toast("User Created. Login Using your Username & Password");
                _this.viewCtrl.dismiss();
            }
            else {
                _this.errorMessage = data.error;
            }
        }, function (err) {
            _this.loading.hide();
            if (err.ok == false) {
                console.log(err);
                var result = JSON.parse(err._body);
                _this.errorMessage = result.error;
            }
        });
    };
    SignUpPage.prototype.openPrivacyPolicyPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    SignUpPage.prototype.openTermServicesPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__term_services_term_services__["a" /* TermServicesPage */]);
        modal.present();
    };
    SignUpPage.prototype.openRefundPolicyPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
        modal.present();
    };
    SignUpPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
        modal.present();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"E:\app5\src\pages\sign-up\sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Create an Account\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-sign-up" padding>\n  <ion-row>\n    <ion-col col-12>\n      <div class="photo">\n        <div class="image">\n          <img class="avatar" src="assets/avatar.png" *ngIf="image==null">\n          <img class="avatar" src="{{image}}" *ngIf="image!=null">\n        </div>\n        <!-- <div class="upload">\n          <ion-icon name="camera" (click)=\'openCamera()\'></ion-icon>\n        </div> -->\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #loginForm="ngForm" class="form" (ngSubmit)="createAccount()">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>{{\'First Name\'|translate}}</ion-label>\n            <ion-input type="text" name="customers_firstname" [(ngModel)]="formData.first_name" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n            <ion-input type="text" name="customers_lastname" [(ngModel)]="formData.last_name" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'Username\'|translate}}</ion-label>\n            <ion-input type="text" name="username" [(ngModel)]="formData.username" required>\n            </ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label floating>{{\'Email\'|translate}}</ion-label>\n            <ion-input type="email" email name="email" [(ngModel)]="formData.email" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'Password\'|translate}}</ion-label>\n            <ion-input type="password" name="c_d" [(ngModel)]="formData.password" required>\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label class="red-color" *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage|translate}}</span>\n        </label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{"Creating an account means you’re okay with our"|translate}}\n          <a (click)="openTermServicesPage()">{{\'Term and Services\'|translate}}</a>,\n          <a (click)="openPrivacyPolicyPage()">{{\'Privacy Policy\'|translate}}</a> {{\'and\'|translate}}\n          <a (click)="openRefundPolicyPage()">{{\'Refund Policy\'|translate}}</a>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit"\n          [disabled]="!loginForm.form.valid">{{\'Register\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/



var CouponProvider = /** @class */ (function () {
    function CouponProvider(shared, alert) {
        this.shared = shared;
        this.alert = alert;
        // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All below services are used for coupon >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.lineItemTotalService = function (lineItems) {
            var total = 0;
            for (var _i = 0, lineItems_1 = lineItems; _i < lineItems_1.length; _i++) {
                var value = lineItems_1[_i];
                // console.log(value);
                var subtotal = parseFloat(value.total);
                total = total + subtotal;
            }
            return total;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkOnSaleService = function (lineItems, coupon) {
            if (coupon.exclude_sale_items == false)
                return false;
            var found = false;
            lineItems.some(function (value, index) {
                if (value.on_sale == true)
                    found = true;
            });
            if (found && coupon.discount_type == 'fixed_cart')
                return true;
            else if (found && coupon.discount_type == 'percent')
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.emailCheckService = function (emailList) {
            if (emailList.length == 0)
                return false;
            var found = false;
            for (var _i = 0, emailList_1 = emailList; _i < emailList_1.length; _i++) {
                var value = emailList_1[_i];
                if (value == this.shared.customerData.email) {
                    found = true;
                    return true;
                }
            }
            return found;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkCategoriesService = function (value, coupon) {
            // console.log(value);
            // console.log(coupon.product_categories);
            if (coupon.product_categories.length == 0 && coupon.excluded_product_categories.length == 0)
                return true;
            var found = 0;
            for (var _i = 0, _a = coupon.product_categories; _i < _a.length; _i++) {
                var y = _a[_i];
                for (var _b = 0, _c = value.categories; _b < _c.length; _b++) {
                    var z = _c[_b];
                    console.log("product_categories x = " + z.id + " y=" + y);
                    if (z.id == y) {
                        found++;
                    }
                }
            }
            if (coupon.product_categories.length == 0) {
                found++;
            }
            var found2 = 0;
            //for excluded categries
            for (var _d = 0, _e = coupon.excluded_product_categories; _d < _e.length; _d++) {
                var y = _e[_d];
                for (var _f = 0, _g = value.categories; _f < _g.length; _f++) {
                    var z = _g[_f];
                    console.log("excluded_product_categories x = " + z.id + " y=" + y);
                    if (z.id == y) {
                        found2++;
                    }
                }
            }
            //  console.log('found ' + found + ' found2 ' + found2);
            if (found != 0 && found2 == 0)
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.couponApplyOnProductService = function (value, coupon) {
            if (coupon.product_ids.length == 0 && coupon.excluded_product_ids.length == 0)
                return true;
            var id = value.product_id;
            var found = 0;
            //checking in allowed products
            for (var _i = 0, _a = coupon.product_ids; _i < _a.length; _i++) {
                var value_1 = _a[_i];
                //  console.log("id = " + id + "vid" + vId + " value =" + value);
                if (id == value_1) {
                    found++;
                    return true;
                }
            }
            if (coupon.product_ids.length == 0) {
                found++;
            }
            var found2 = 0;
            //checking in excluded products
            for (var _b = 0, _c = coupon.excluded_product_ids; _b < _c.length; _b++) {
                var value_2 = _c[_b];
                if (id == value_2) {
                    found2++;
                    return true;
                }
            }
            // console.log('found ' + found + ' found2 ' + found2);
            if (found != 0 && found2 == 0) {
                return true;
            }
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkAlreadyAppliedService = function (coupon, couponLines) {
            if (couponLines.length == 0)
                return false;
            var found = false;
            for (var _i = 0, couponLines_1 = couponLines; _i < couponLines_1.length; _i++) {
                var value = couponLines_1[_i];
                if (value.code == coupon.code)
                    found = true;
            }
            return found;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkUserUsageService = function (coupon) {
            if (coupon.used_by.length == 0)
                return false;
            if (coupon.usage_limit == null && coupon.usage_limit_per_user == null)
                return false;
            if (coupon.usage_limit == null) { }
            else if (coupon.usage_count >= coupon.usage_limit)
                return true;
            //console.log($rootScope.customerData);
            var id = this.shared.customerData.customers_email_address;
            if (this.shared.customerData != null)
                var id2 = this.shared.customerData.customers_id;
            var count = 0;
            for (var _i = 0, _a = coupon.used_by; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value == id || value == id2)
                    count++;
            }
            if (count >= coupon.usage_limit_per_user)
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to check ==============================
        this.checkNoItemInCartService = function (lineItems, coupon) {
            var productIds = coupon.product_ids;
            var ExProductIds = coupon.excluded_product_ids;
            var pCategory = coupon.product_categories;
            var ExPCategory = coupon.excluded_product_categories;
            if (productIds.length == 0 && ExProductIds.length == 0 && pCategory.length == 0 && ExPCategory.length == 0)
                return true;
            // var pFound = 0;
            // var ExPfound = 0;
            var result = false;
            //checking in products ids
            if (productIds.length != 0) {
                for (var _i = 0, lineItems_2 = lineItems; _i < lineItems_2.length; _i++) {
                    var x = lineItems_2[_i];
                    var id = x.product_id;
                    var vId = -1;
                    if (x.variation_id != undefined)
                        vId = x.variation_id;
                    for (var _a = 0, productIds_1 = productIds; _a < productIds_1.length; _a++) {
                        var y = productIds_1[_a];
                        if (id == y || vId == y) {
                            result = true;
                        }
                    }
                }
            }
            else {
                result = true;
            }
            //checking in excluded products ids
            if (ExProductIds.length != 0) {
                for (var _b = 0, lineItems_3 = lineItems; _b < lineItems_3.length; _b++) {
                    var x = lineItems_3[_b];
                    var id_1 = x.product_id;
                    var vId_1 = -1;
                    if (x.variation_id != undefined)
                        vId_1 = x.variation_id;
                    for (var _c = 0, ExProductIds_1 = ExProductIds; _c < ExProductIds_1.length; _c++) {
                        var y = ExProductIds_1[_c];
                        if (id_1 == y || vId_1 == y) {
                            result = false;
                        }
                    }
                }
            }
            var result2 = false;
            //checking in products categories
            if (pCategory.length != 0) {
                for (var _d = 0, lineItems_4 = lineItems; _d < lineItems_4.length; _d++) {
                    var w = lineItems_4[_d];
                    for (var _e = 0, _f = w.categories; _e < _f.length; _e++) {
                        var x = _f[_e];
                        for (var _g = 0, pCategory_1 = pCategory; _g < pCategory_1.length; _g++) {
                            var y = pCategory_1[_g];
                            // console.log("x " + x.id + " y " + y);
                            if (x.id == y) {
                                result2 = true;
                            }
                        }
                    }
                }
            }
            else {
                result2 = true;
            }
            if (ExPCategory.length != 0) {
                for (var _h = 0, lineItems_5 = lineItems; _h < lineItems_5.length; _h++) {
                    var w = lineItems_5[_h];
                    for (var _j = 0, _k = w.categories; _j < _k.length; _j++) {
                        var x = _k[_j];
                        for (var _l = 0, pCategory_2 = pCategory; _l < pCategory_2.length; _l++) {
                            var y = pCategory_2[_l];
                            // console.log("x " + x.id + " y " + y);
                            if (x.id == y) {
                                result2 = false;
                            }
                        }
                    }
                }
            }
            //console.log("result " + result + " result2 " + result2);
            if (result == true && result2 == true && coupon.discount_type != 'fixed_cart')
                return true;
            else if (result == true && result2 == true && coupon.discount_type != 'percent')
                return true;
            else if (result == true && result2 == false && coupon.discount_type == 'fixed_product')
                return true;
            else if (result == true && result2 == false && coupon.discount_type == 'percent_product')
                return true;
            else if (result == false && result2 == true && coupon.discount_type == 'percent_product')
                return true;
            else if (result == false && result2 == true && coupon.discount_type == 'fixed_product')
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to check the validity of coupon  ==============================
        this.validateCouponService = function (coupon, lineItems, couponLines) {
            var expDate = new Date(coupon.date_expires);
            var todayDate = new Date();
            //checking coupon expire or not
            if (expDate <= todayDate && coupon.date_expires != null) {
                this.alert.show("Sorry Coupon is Expired");
                return false;
            }
            // if cart amount is lower than the coupon minimum limit
            else if (this.lineItemTotalService(lineItems) <= coupon.minimum_amount) {
                this.alert.show("Sorry your Cart total is low than coupon min limit!");
                return false;
            }
            // if cart amount is higher than the coupon minimum limit
            else if (this.lineItemTotalService(lineItems) >= coupon.maximum_amount && coupon.maximum_amount != 0) {
                this.alert.show("Sorry your Cart total is Higher than coupon Max limit!");
                return false;
            }
            else if (this.emailCheckService(coupon.email_restrictions) == true) {
                this.alert.show("Sorry, this coupon is not valid for this email address!");
                return false;
            }
            //============================================================== further checking
            else if (this.checkOnSaleService(lineItems, coupon) == true) {
                this.alert.show("Sorry, this coupon is not valid for sale items.");
                return false;
            }
            else if (this.checkAlreadyAppliedService(coupon, couponLines) == true) {
                this.alert.show("Coupon code already applied!");
                return false;
            }
            else if (couponLines != 0 && couponLines[0].individual_use == true) {
                this.alert.show('Sorry Individual Use Coupon is already applied any other coupon cannot be applied with it !');
                return false;
            }
            else if (this.checkUserUsageService(coupon) == true) {
                this.alert.show('Coupon usage limit has been reached.');
                return false;
            }
            else if (this.checkCouponApplyOrNotOnCurrentProducts(coupon, lineItems) == false) {
                this.alert.show('Sorry Coupon Cannot be Applied on these Products!');
                return false;
            }
            // else if (checkNoItemInCartService(lineItems, coupon) == false) {
            //   this.alert.show('Sorry, this coupon is not applicable to your cart contents.');
            //   return false;
            // }
            else
                return true;
        };
        //========================================================================================================
        //=============================== service to apply check coupon ==============================
        this.apply = function (coupon, lineItems) {
            var _this = this;
            console.log("apply coupon called");
            var productLimit = coupon.limit_usage_to_x_items;
            // if (productLimit == 0) productLimit = null;
            var product_qty_flag = 0;
            //fixed cart applying on line items
            if (coupon.discount_type == 'fixed_cart') {
                var cartTotal = parseFloat(this.lineItemTotalService(lineItems));
                var discount = parseFloat((coupon.amount / cartTotal).toString());
                //console.log("discount  " + discount + "   cartTotal  " + cartTotal);
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var result = value.total - parseFloat((discount * value.total).toString());
                        if (result < 0)
                            result = 0;
                        value.total = result;
                        // console.log("insdir coupe== " + value.total);
                        // console.log(lineItems);
                    }
                });
                //console.log('fixed_cart'); //console.log(lineItems);
                return lineItems;
            }
            //percent cart applying on line items
            else if (coupon.discount_type == 'percent_old') {
                lineItems.forEach(function (value, index) {
                    var amount = parseFloat(coupon.amount);
                    var subtotal = parseFloat(value.subtotal);
                    var total = parseFloat(value.total);
                    var discount = (subtotal / 100) * amount;
                    value.total = parseFloat((total - discount).toString());
                    if (value.total < 0)
                        value.total = 0;
                });
                // console.log('percent'); console.log(lineItems);
                return lineItems;
            }
            //fixed product applying on specific line items
            else if (coupon.discount_type == 'fixed_product') {
                var amount = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var quantity = value.quantity;
                        var total = parseFloat(value.total);
                        if (productLimit > 0) {
                            for (var l = 1; l <= quantity; l++) {
                                if (product_qty_flag < productLimit) {
                                    total = parseFloat((total - amount).toString());
                                    product_qty_flag = product_qty_flag + 1;
                                }
                            }
                            value.total = total;
                        }
                        else {
                            value.total = parseFloat((total - (amount * quantity)).toString());
                        }
                        if (value.total < 0) {
                            value.total = 0;
                        }
                    }
                });
                // console.log('fixed_product');
                return lineItems;
            }
            //percent product applying on specific line items
            else if (coupon.discount_type == 'percent') {
                var amount_1 = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var total = parseFloat(value.total);
                        if (productLimit > 0) {
                            for (var l = 1; l <= value.quantity; l++) {
                                var discount = parseFloat(((value.price / 100) * amount_1).toString());
                                if (product_qty_flag < productLimit) {
                                    total = parseFloat((total - discount).toString());
                                    product_qty_flag = product_qty_flag + 1;
                                }
                            }
                            value.total = total;
                        }
                        else {
                            value.total = parseFloat((total - (total / 100) * amount_1).toString());
                        }
                        if (value.total < 0)
                            value.total = 0;
                    }
                });
                //console.log('percent_product');
                return lineItems;
            }
            // else return lineItems;
        };
    }
    //========================================================================================================
    //=============================== service to check coupon will apply on cart or not  ==============================
    CouponProvider.prototype.checkCouponApplyOrNotOnCurrentProducts = function (coupon, lineItems) {
        console.log(coupon.product_categories.length);
        var found = 0;
        if (coupon.product_categories.length == 0) {
            found++;
        }
        for (var _i = 0, _a = coupon.product_categories; _i < _a.length; _i++) {
            var y = _a[_i];
            for (var _b = 0, _c = lineItems.categories; _b < _c.length; _b++) {
                var z = _c[_b];
                console.log("product_categories x = " + z.id + " y=" + y);
                if (z.id == y) {
                    found++;
                }
            }
        }
        var found2 = 0;
        //for excluded categries
        for (var _d = 0, _e = coupon.excluded_product_categories; _d < _e.length; _d++) {
            var y = _e[_d];
            for (var _f = 0, _g = lineItems.categories; _f < _g.length; _f++) {
                var z = _g[_f];
                console.log("excluded_product_categories x = " + z.id + " y=" + y);
                if (z.id == y) {
                    found2++;
                }
            }
        }
        if (found2 != 0)
            return false;
        else if (found == 0)
            return false;
        else
            return true;
    };
    CouponProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertProvider */]])
    ], CouponProvider);
    return CouponProvider;
}());

//# sourceMappingURL=coupon.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_country_select_country__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__billing_address_billing_address__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_location_data_location_data__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/










var ShippingAddressPage = /** @class */ (function () {
    function ShippingAddressPage(navCtrl, navParams, config, http, shared, modalCtrl, loading, location) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.location = location;
        if (this.shared.customerData.id != null) {
            this.shared.shipping = this.shared.customerData.shipping;
            this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
        }
        if (this.shared.shippingCountryName == "" || this.shared.shippingCountryName == null)
            this.shared.shippingStateName = "";
    }
    ShippingAddressPage.prototype.disableButton = function () {
        if (this.shared.shipping.first_name == ""
            || this.shared.shipping.last_name == ""
            || this.shared.shipping.city == ""
            || this.shared.shipping.postcode == ""
            || this.shared.shipping.state == ""
            || this.shared.shipping.country == ""
            || this.shared.shipping.address_1 == ""
            || this.shared.shipping.state == null
            || this.shared.shipping.city == null
            || this.shared.shipping.postcode == null) {
            return true;
        }
        else
            return false;
    };
    ShippingAddressPage.prototype.submit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__billing_address_billing_address__["a" /* BillingAddressPage */]);
    };
    ShippingAddressPage.prototype.selectCountryPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__select_country_select_country__["a" /* SelectCountryPage */], { page: 'shipping' });
        modal.present();
    };
    ShippingAddressPage.prototype.selectZonePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__["a" /* SelectZonesPage */], { page: 'shipping' });
        modal.present();
    };
    ShippingAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shipping-address',template:/*ion-inline-start:"E:\app5\src\pages\address-pages\shipping-address\shipping-address.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Shipping Address\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-horizontal>\n\n  <form #loginForm="ngForm">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'First Name\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_firstname" [(ngModel)]="shared.shipping.first_name"\n\n              required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_lastname" [(ngModel)]="shared.shipping.last_name"\n\n              required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Company\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="company" [(ngModel)]="shared.shipping.company">\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Address\'|translate}} 1</ion-label>\n\n            <ion-input type="text" placeholder="" name="address" [(ngModel)]="shared.shipping.address_1" required>\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Address\'|translate}} 2</ion-label>\n\n            <ion-input type="text" placeholder="" name="address2" [(ngModel)]="shared.shipping.address_2"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Country\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_country" (tap)="selectCountryPage()" [readonly]="true"\n\n              [(ngModel)]="shared.shippingCountryName" required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'State\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" required name="shipping_zone" (tap)="selectZonePage()"\n\n              [readonly]="true" [(ngModel)]="shared.shippingStateName" [disabled]="shared.shippingCountryName==\'\'"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'City\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_city" [(ngModel)]="shared.shipping.city" required>\n\n            </ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Post code\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_postcode" [(ngModel)]="shared.shipping.postcode"\n\n              required></ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <label *ngIf="errorMessage!=\'\'">\n\n          <span>{{errorMessage}}</span>\n\n        </label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block color="secondary" (click)="submit()"\n\n    [disabled]="disableButton()">{{\'Next\'|translate}}</button>\n\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\address-pages\shipping-address\shipping-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_location_data_location_data__["a" /* LocationDataProvider */]])
    ], ShippingAddressPage);
    return ShippingAddressPage;
}());

//# sourceMappingURL=shipping-address.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories_sub_categories__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    CategoriesPage.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent) {
                count++;
                //console.log(val.parent + "   " + parent);
            }
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories_sub_categories__["a" /* SubCategoriesPage */], { 'parent': parent });
    };
    CategoriesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    CategoriesPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    CategoriesPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\categories\categories.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'Categories\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6 *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n\n        <ion-card>\n\n        	\n\n            <div class="category-icon"><img *ngIf="c.image" src="{{c.image.src}}" /></div>\n\n            <div class="cateogry-content">\n\n                <div class="categories-title">{{c.name}}</div>\n\n                <div class="categories-subtitle">{{c.count}} {{\'Products\'| translate }} </div>\n\n            </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n\n  <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_products__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/











var WishListPage = /** @class */ (function () {
    function WishListPage(navCtrl, navParams, http, config, shared, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.storage = storage;
        this.translate = translate;
    }
    // ngOnInit() {
    //   this.getProducts();
    // }
    WishListPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    WishListPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
    };
    WishListPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    WishListPage.prototype.openProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__products_products__["a" /* ProductsPage */], { sortOrder: 'newest' });
    };
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wish-list',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\wish-list\wish-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'Wish List\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="page-wish-list">\n\n	<ion-grid class="page-empty" *ngIf="shared.wishListProducts.length == 0" [@animate]>\n\n    <ion-row align-items-center>\n\n      <ion-col col-12>\n\n        <h3 text-center>\n\n          <ion-icon name="heart"></ion-icon>\n\n        </h3>\n\n        <h4 text-center>{{\'Your Wishlist is empty\'|translate}}</h4>\n\n\n\n        <p text-center>\n\n          <button ion-button color="secondary" (click)="openProductsPage()">{{\'Explore\'|translate}}</button>\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <ion-grid>\n\n    <ion-col col-6 *ngFor="let p of shared.wishListProducts" [@animate]>\n\n      <product [data]="p" [type]="\'wishList\'"></product>\n\n    </ion-col>\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\wish-list\wish-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/











var MyAccountPage = /** @class */ (function () {
    function MyAccountPage(http, config, shared, translate, platform, navCtrl, alert, applicationRef, loading) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.translate = translate;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.applicationRef = applicationRef;
        this.loading = loading;
        this.myAccountData = {};
        this.password = '';
        //============================================================================================  
        //function updating user information
        this.updateInfo = function () {
            var _this = this;
            this.loading.show();
            if (this.password != '')
                this.myAccountData.password = this.password;
            this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, this.myAccountData).then(function (data) {
                _this.loading.hide();
                _this.shared.login(JSON.parse(data.body));
                _this.applicationRef.tick();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__settings_settings__["a" /* SettingsPage */]);
                _this.shared.toast("Data Updated!");
            }, function (err) { _this.shared.toast("Error Updating Data!"); });
        };
    }
    MyAccountPage.prototype.ionViewWillEnter = function () {
        this.myAccountData.first_name = this.shared.customerData.first_name;
        this.myAccountData.last_name = this.shared.customerData.last_name;
    };
    MyAccountPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    MyAccountPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-account',template:/*ion-inline-start:"E:\app5\src\pages\my-account\my-account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Edit Profile\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="page-my-account" padding>\n  <ion-row>\n    <ion-col col-12>\n      <div class="photo">\n        <div class="image">\n          <img class="avatar" src="{{shared.customerData.avatar_url}}">\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #userForm="ngForm" (ngSubmit)="updateInfo()">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" [(ngModel)]="myAccountData.first_name" name="customers_firstname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" [(ngModel)]="myAccountData.last_name" name="customers_lastname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'New Password\'|translate}}" [(ngModel)]="password" name="password"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!userForm.form.valid">{{\'Update\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <!-- <form #passwordForm="ngForm" (ngSubmit)="updatePassword()">\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Current Password\'|translate}}" [(ngModel)]="passwordData.currentPassword" name="currentPassword"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder=" {{\'New Password\'|translate}}" [(ngModel)]="passwordData.customers_password" name="customers_password"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!passwordForm.form.valid">{{\'Change Password\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form> -->\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\my-account\my-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_book__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_db_service_db_service__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/















var MyOrdersPage = /** @class */ (function () {
    function MyOrdersPage(platform, events, modal, dbService, navCtrl, navParams, http, config, shared, translate, alert, loading, applicationRef) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.modal = modal;
        this.dbService = dbService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.alert = alert;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.page = 1;
        this.orders = new Array;
        this.httpRunning = true;
        events.subscribe("booksRetrieved", function (books) {
            _this.books = books;
        });
        this.platform.ready().then(function (readySource) {
            _this.dbService.getAllBooks().then(function (books) {
                _this.books = books;
            });
        });
    }
    MyOrdersPage.prototype.onBook = function (book) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__book_book__["a" /* BookPage */], {}, { animate: true, direction: "forward" });
    };
    MyOrdersPage.prototype.getOrders = function () {
        var _this = this;
        this.httpRunning = true;
        if (this.page == 1) {
            this.loading.show();
        }
        this.config.Woocommerce.getAsync('orders/?' + 'page=' + this.page + "&customer=" + this.shared.customerData.id + "&" + this.config.productsArguments).then(function (dat) {
            _this.infinite.complete();
            _this.httpRunning = false;
            var data = JSON.parse(dat.body);
            console.log(data);
            if (_this.page == 1) {
                _this.orders = new Array;
                _this.loading.hide();
            }
            if (data.length != 0) {
                _this.page++;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var value = data_1[_i];
                    _this.orders.push(value);
                    console.log(_this.orders);
                }
            }
            if (data.length == 0) {
                _this.infinite.enable(false);
            }
            _this.applicationRef.tick();
        }, function (err) {
            _this.loading.hide();
            _this.alert.show("Server Error while Loading Orders");
        });
    };
    ;
    MyOrdersPage.prototype.showOrderDetail = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail__["a" /* OrderDetailPage */], { 'data': order });
    };
    MyOrdersPage.prototype.ionViewDidLoad = function () {
        this.httpRunning = true;
        this.getOrders();
    };
    MyOrdersPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    MyOrdersPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    MyOrdersPage.prototype.openShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */]);
    };
    MyOrdersPage.prototype.refreshPage = function () {
        this.page = 1;
        this.getOrders();
    };
    MyOrdersPage.prototype.addCurrecny = function (order, v2) {
        return order.currency + " " + v2;
    };
    MyOrdersPage.prototype.open = function (data) {
        /*    console.log('open',data);
           data.toString();
       
           for(let i=0;i<this.all_books.length;i++){
       
               if(this.all_books[i].woocommerce_product_id==data){
                   console.log(this.all_books[i].download.url);
           let book =  this.all_books[i].url;
           
           let navigationExtras: NavigationExtras = {
               queryParams: {
                 special: JSON.stringify(book)
               }
             };
             this.router.navigate(['book'], navigationExtras);
           }
         
               */
    };
    MyOrdersPage.prototype.read = function (book) {
        book = [
            {
                id: "1",
                cover: "assets/imgs/cover.png",
                label: "Jars-of-Clay",
                file: "assets/Jars-of-Clay.epub"
            },
        ];
        console.log('show', book);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__book_book__["a" /* BookPage */], {
            book: book[0]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], MyOrdersPage.prototype, "infinite", void 0);
    MyOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-orders',template:/*ion-inline-start:"E:\app5\src\pages\my-orders\my-orders.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'My Orders\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refreshPage()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-my-orders">\n  <ion-grid class="page-empty" *ngIf="orders.length==0 && httpRunning==false">\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="briefcase"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'Your Order List is Empty\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button (click)="openShop()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let order of orders" >\n    <ion-card-content>\n      <div (click)="showOrderDetail(order)">\n      <ion-row>\n        <ion-col col-6>\n          {{\'Order ID\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{\'#\'+order.number}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Date\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{order.date_created|date}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Price\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{addCurrecny(order,order.total)}}\n        </ion-col>\n      </ion-row>\n      </div>\n      <ion-row [class.pending]="order.status==\'pending\' || order.status==\'refunded\'"\n        [class.cancel]="order.status==\'cancelled\' || order.status==\'failed\'"\n        [class.inprocess]="order.status==\'processing\'" [class.complete]="order.status==\'completed\'">\n        <ion-col col-6>\n          {{\'Status\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          <span>\n            <strong>{{order.status|translate}}</strong>\n          </span>\n          <button ion-button color="purple" *ngIf=\'order.status=="completed"\' slot=\'end\' color=\'light\' (click)=\'read(book)\'>Read Book</button>\n\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-infinite-scroll #infinite (ionInfinite)="getOrders($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\my-orders\my-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_db_service_db_service__["a" /* DbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], MyOrdersPage);
    return MyOrdersPage;
}());

//# sourceMappingURL=my-orders.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_detail_news_detail__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_list_news_list__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/











var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, http, config, loading, shared, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.featuredPosts = new Array;
        this.segments = 'newest';
        //WordPress intergation
        this.categories = new Array;
        //page varible
        this.page = 1;
        //WordPress intergation
        this.posts = new Array;
        //page varible
        this.page2 = 1;
        this.loadingServerDataPosts = true;
        //========================================= tab newest categories ===============================================================================
        this.getCategories = function () {
            var _this = this;
            var data = {};
            data.language_id = this.config.langId;
            data.page_number = this.page2;
            this.http.get(this.config.url + '/wp-json/wp/v2/categories/?page=' + this.page2).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (_this.page2 == 1) {
                    _this.categories = [];
                }
                _this.page2++;
                data.forEach(function (value, index) {
                    _this.categories.push(Object.assign(value, { image: '' }));
                });
                // console.log(data.data.length);
                if (data.length == 0) { // if we get less than 10 products then infinite scroll will de disabled
                    //this.shared.toast("All Categories Loaded!");
                    _this.getRandomImage();
                }
                else
                    _this.getCategories();
            }, function (response) {
                // console.log("Error while loading categories from the server");
                // console.log(response);
            });
        };
        var dat = {};
        dat.language_id = this.config.langId;
        dat.is_feature = 1;
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?sticky=true&page=' + this.page2).map(function (res) { return res.json(); }).subscribe(function (data) {
            data.forEach(function (value, index) {
                _this.getImagePost(value);
            });
            _this.featuredPosts = data;
        });
        this.getPosts();
    }
    NewsPage.prototype.getImagePost = function (post) {
        post.image = "assets/placeholder.png";
        if (post._links["wp:featuredmedia"])
            this.http.get(post._links["wp:featuredmedia"][0].href).map(function (res) { return res.json(); }).subscribe(function (data) {
                post.image = data.source_url;
            });
    };
    //============================================================================================  
    //getting list of posts
    NewsPage.prototype.getPosts = function () {
        var _this = this;
        if (this.page == 1) {
            this.loading.show();
            this.loadingServerDataPosts = false;
        }
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.infinite.complete(); //stopping infinite scroll loader
            if (_this.page == 1) {
                _this.posts = [];
                _this.infinite.enable(true);
                _this.loading.hide();
                _this.getCategories();
            }
            _this.page++;
            data.forEach(function (value, index) {
                _this.getImagePost(value);
                _this.posts.push(value);
            });
            _this.posts.concat(data);
            if (data.length < 9) { // if we get less than 10 products then infinite scroll will de disabled
                _this.infinite.enable(false); //disabling infinite scroll
                if (_this.posts.length != 0) {
                    //this.shared.toast("All Posts Loaded!");
                }
            }
            _this.loadingServerDataPosts = true;
        }, function (err) {
            _this.infinite.enable(false);
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    };
    ;
    //============================================================================================  
    //getting list of sub categories from the server
    NewsPage.prototype.showPostDetail = function (post) {
        this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__news_detail_news_detail__["a" /* NewsDetailPage */], { 'post': post });
    };
    ;
    NewsPage.prototype.openPostsPage = function (name, id) {
        //this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__news_list_news_list__["a" /* NewsListPage */], { 'name': name, 'id': id });
    };
    NewsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    NewsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    // <!-- 2.0 updates -->
    NewsPage.prototype.getRandomImage = function () {
        var _this = this;
        try {
            this.categories.forEach(function (value, index) {
                value.image = "assets/placeholder.png";
                var rand = _this.getRandomPost();
                if (rand._links["wp:featuredmedia"])
                    _this.http.get(rand._links["wp:featuredmedia"][0].href).map(function (res) { return res.json(); }).subscribe(function (data) {
                        value.image = data.source_url;
                        console.log(value.image);
                    });
            });
        }
        catch (error) {
        }
    };
    NewsPage.prototype.getRandomPost = function () {
        var rand = this.posts[Math.floor(Math.random() * this.posts.length)];
        if (rand.sticky == false)
            return rand;
        else
            this.getRandomPost();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], NewsPage.prototype, "infinite", void 0);
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"E:\app5\src\pages\news\news.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'News\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="page-news">\n\n  <div>\n\n    <ion-slides pager=true paginationType="bullets" autoplay="true" dir="{{shared.dir}}" class="animated slideIn">\n\n      <ion-slide *ngFor="let post of featuredPosts" (click)="showPostDetail(post)">\n\n        <ion-spinner *ngIf="!post.image"></ion-spinner>\n\n        <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n\n        <h4 class="slider-title">{{post.title.rendered}}</h4>\n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n    <!-- top Segments  -->\n\n    <ion-segment [(ngModel)]="segments" color="primary" *ngIf="posts.length!=0">\n\n      <ion-segment-button value="newest">{{\'Newest\' |translate}}</ion-segment-button>\n\n      <ion-segment-button value="categories">{{ \'Categories\' | translate }} </ion-segment-button>\n\n    </ion-segment>\n\n    <!-- top segments products -->\n\n    <div class="segments-inner" [ngSwitch]="segments">\n\n\n\n      <div class="segments-posts" *ngSwitchCase="\'newest\'">\n\n\n\n        <ion-grid class="page-empty" *ngIf="posts.length==0 && loadingServerDataPosts">\n\n          <ion-row align-items-center>\n\n            <ion-col col-12>\n\n              <h3 text-center>\n\n                <ion-icon name="ionic"></ion-icon>\n\n              </h3>\n\n              <h4 text-center>{{\'No Posts Available\'| translate}}</h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-list>\n\n          <ion-item *ngFor="let post of posts" (click)="showPostDetail(post)" class="animated fadeIn">\n\n            <ion-thumbnail item-start>\n\n              <ion-spinner *ngIf="!post.image"></ion-spinner>\n\n              <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n\n            </ion-thumbnail>\n\n            <h2>{{post.title.rendered}}\n\n              <br>\n\n              <small>\n\n                <ion-icon name="clock"></ion-icon>{{post.date}}\n\n              </small>\n\n            </h2>\n\n            <div class="post-excerpt" [innerHTML]="post.content.rendered"></div>\n\n          </ion-item>\n\n          <ion-infinite-scroll #infinite (ionInfinite)="getPosts()">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n          </ion-infinite-scroll>\n\n        </ion-list>\n\n      </div>\n\n\n\n\n\n      <div class="segments-categories" *ngSwitchCase="\'categories\'">\n\n        <ion-grid class="page-empty" *ngIf="categories.length==0">\n\n          <ion-spinner class="spinner-news-category"></ion-spinner>\n\n        </ion-grid>\n\n\n\n        <ion-grid class="grid-categories">\n\n          <ion-row>\n\n            <ion-col col-6 *ngFor="let cat of categories" (click)="openPostsPage(cat.name,cat.id)" class="animated fadeIn">\n\n\n\n              <ion-card class="card-background-page">\n\n                <ion-thumbnail item-start>\n\n                  <img src="{{cat.image}}" *ngIf="cat.image" />\n\n                  <!-- <ion-spinner *ngIf="!cat.image"></ion-spinner> -->\n\n                </ion-thumbnail>\n\n                <div class="card-content" *ngIf="cat.count>0 && cat.image">\n\n                  <div class="card-title">{{cat.name}}</div>\n\n                  <div class="card-subtitle">{{cat.count}} {{\'Posts\'|translate}}</div>\n\n                </div>\n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n\n  <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/



var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(navCtrl, navParams, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.post = this.navParams.get('post');
    }
    NewsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailPage');
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-detail',template:/*ion-inline-start:"E:\app5\src\pages\news-detail\news-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'News Details\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-news-detail">\n\n  <ion-card>\n\n    <ion-spinner *ngIf="!post.image"></ion-spinner>\n\n    <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        <h2>{{post.title.rendered}}\n\n        <br>\n\n        <small>\n\n         <ion-icon name="clock"></ion-icon>{{post.date}}</small></h2>\n\n      </ion-card-title>\n\n      <div class="post-description" [innerHTML]="post.content.rendered"></div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\news-detail\news-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

//# sourceMappingURL=news-detail.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories2_sub_categories2__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var Categories2Page = /** @class */ (function () {
    function Categories2Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories2Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
            console.log(val.parent + "   " + parent);
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories2_sub_categories2__["a" /* SubCategories2Page */], { 'parent': parent });
    };
    Categories2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories2Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\categories2\categories2.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content class="page-categories2">\n\n\n\n  <ion-list>\n    <ion-item *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n      <ion-thumbnail item-start>\n        <img *ngIf="c.image" src="{{c.image.src}}">\n      </ion-thumbnail>\n      <h2>{{c.name}}<br><small>{{c.count}} {{\'Products\'| translate }} </small></h2>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer ></footer>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\categories2\categories2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories2Page);
    return Categories2Page;
}());

//# sourceMappingURL=categories2.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories4_sub_categories4__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var Categories4Page = /** @class */ (function () {
    function Categories4Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories4Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
            console.log(val.parent + "   " + parent);
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories4_sub_categories4__["a" /* SubCategories4Page */], { 'parent': parent });
    };
    Categories4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\categories4\categories4.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  <ion-content class="page-categories4">\n      <ion-grid>\n          <ion-row>\n            <ion-col col-6  *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n                <ion-card>\n                  <img *ngIf="c.image" src="{{c.image.src}}"/>\n                  <div class="categories-title">{{c.name}}</div>\n                  <div class="categories-subtitle">{{c.count}} {{\'Products\'| translate }} </div>\n                </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n    \n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==\'1\'">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\categories4\categories4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories4Page);
    return Categories4Page;
}());

//# sourceMappingURL=categories4.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var Categories5Page = /** @class */ (function () {
    function Categories5Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories5Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    Categories5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories5Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories5',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\categories5\categories5.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Categories\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-categories5">\n\n\n  <ion-list *ngFor="let c of shared.categories" class="animated fadeIn">\n    <ion-list-header (click)="openProducts(c.id,c.name)">\n      {{c.name}}\n   \n      <ion-avatar item-end>\n          <img *ngIf="c.image" src="{{c.image.src}}">\n        </ion-avatar>\n \n    </ion-list-header>\n    \n    <div *ngFor="let s of shared.subCategories">\n      <ion-item *ngIf="c.id==s.parent" (click)="openProducts(s.id,s.name)">\n        <h2>{{s.name}}\n          <br>\n          <small>{{s.count}} {{\'Products\'| translate }}</small>\n        </h2>\n        <ion-avatar item-end>\n          <img *ngIf="c.image" src="{{s.image.src}}">\n        </ion-avatar>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\categories5\categories5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories5Page);
    return Categories5Page;
}());

//# sourceMappingURL=categories5.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories3_sub_categories3__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var Categories3Page = /** @class */ (function () {
    function Categories3Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories3Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
            console.log(val.parent + "   " + parent);
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories3_sub_categories3__["a" /* SubCategories3Page */], { 'parent': parent });
    };
    Categories3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories3Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\categories3\categories3.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  \n  <ion-content class="page-categories3">\n      <ion-list>\n          <ion-item *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n            <ion-avatar item-start>\n              <img *ngIf="c.image"  src="{{c.image.src}}">\n            </ion-avatar>\n            <h2>{{c.name}}<br><small>{{c.count}} {{\'Products\'| translate }} </small></h2>\n          </ion-item>\n        </ion-list>\n      \n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==\'1\'">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\categories3\categories3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories3Page);
    return Categories3Page;
}());

//# sourceMappingURL=categories3.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories6_sub_categories6__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var Categories6Page = /** @class */ (function () {
    function Categories6Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories6Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories6_sub_categories6__["a" /* SubCategories6Page */], { 'parent': parent });
    };
    Categories6Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories6Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories6',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\categories6\categories6.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content class="page-categories6">\n\n  <ion-card *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n    <img *ngIf="c.image" src="{{c.image.src}}" />\n    <div class="categories-title">{{c.name}}</div>\n    <div class="categories-subtitle">{{c.count}} {{\'Products\'| translate }} </div>\n  </ion-card>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer ></footer>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\categories6\categories6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories6Page);
    return Categories6Page;
}());

//# sourceMappingURL=categories6.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookmarks_bookmarks__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__highlights_highlights__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_of_contents_table_of_contents__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookDetailsModalPage = /** @class */ (function () {
    function BookDetailsModalPage(navCtrl, navParams, view, events, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.events = events;
        this.storage = storage;
        this.tab1root = __WEBPACK_IMPORTED_MODULE_4__table_of_contents_table_of_contents__["a" /* TableOfContentsPage */];
        this.tab2root = __WEBPACK_IMPORTED_MODULE_2__bookmarks_bookmarks__["a" /* BookmarksPage */];
        this.tab3root = __WEBPACK_IMPORTED_MODULE_3__highlights_highlights__["a" /* HighlightsPage */];
        this.toc = navParams.data.toc;
        this.bookmarks = navParams.data.bookmarks;
        this.highlights = navParams.data.highlights;
        this.events.subscribe("booksDetailsModalShow", function (content) {
            if (!content) {
                _this.closeModalBook();
            }
        });
    }
    BookDetailsModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookDetailsModalPage');
    };
    BookDetailsModalPage.prototype.closeModalBook = function () {
        this.view.dismiss();
    };
    BookDetailsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-details-modal',template:/*ion-inline-start:"E:\app5\src\pages\book-details-modal\book-details-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ModuleBook</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModalBook()" round> Close </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs color="wbprimary">\n    <ion-tab [root]="tab1root" tabTitle="Table of Contents " tabIcon="md-list" [rootParams]="toc"></ion-tab>\n    <ion-tab [root]="tab2root" tabTitle="Bookmarks" tabIcon="ios-bookmarks-outline" [rootParams]="bookmarks"></ion-tab>\n    <ion-tab [root]="tab3root" tabTitle="Highlights" tabIcon="ios-create-outline" [rootParams]="highlights"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\book-details-modal\book-details-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], BookDetailsModalPage);
    return BookDetailsModalPage;
}());

//# sourceMappingURL=book-details-modal.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableOfContentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableOfContentsPage = /** @class */ (function () {
    function TableOfContentsPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.toc = navParams.data;
    }
    TableOfContentsPage.prototype.selectToc = function (content) {
        this.events.publish('select:location', content.href);
        this.events.publish('booksDetailsModalShow', false);
    };
    TableOfContentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TableOfContentsPage');
    };
    TableOfContentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-table-of-contents',template:/*ion-inline-start:"E:\app5\src\pages\table-of-contents\table-of-contents.html"*/'<ion-header>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item class="toc" *ngFor="let chapter of toc" (tap)="selectToc(chapter)">\n      {{chapter.label}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\table-of-contents\table-of-contents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], TableOfContentsPage);
    return TableOfContentsPage;
}());

//# sourceMappingURL=table-of-contents.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 337;

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/book-details-modal/book-details-modal.module": [
		1040,
		2
	],
	"../pages/parse-db-book/parse-db-book.module": [
		1041,
		0
	],
	"../pages/table-of-contents/table-of-contents.module": [
		1042,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 380;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_service_db_service__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarksPage = /** @class */ (function () {
    function BookmarksPage(navCtrl, navParams, dbService, events, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.events = events;
        this.alertController = alertController;
        this.bookmarks = navParams.data;
    }
    BookmarksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookmarksPage');
    };
    BookmarksPage.prototype.select = function (bookmark) {
        var _this = this;
        debugger;
        var confirm = this.alertController.create({
            title: 'Bookamrk',
            message: bookmark.excerpt,
            buttons: [
                {
                    text: "Close",
                    role: "cancel",
                    handler: function () {
                        console.log('Cancel clicked');
                    },
                },
                {
                    text: "Locate",
                    handler: function (data) {
                        _this.events.publish('select:location', bookmark.location);
                        _this.events.publish('booksDetailsModalShow', false);
                    }
                }
            ]
        });
        confirm.present();
    };
    BookmarksPage.prototype.delete = function (bookmark) {
        var _this = this;
        var confirm = this.alertController.create({
            title: 'Confirm',
            message: " A you sure to delete this bookmark",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log('Cancel clicked');
                    },
                },
                {
                    text: "Delete",
                    handler: function (data) {
                        _this.events.publish('delete:bookmark', bookmark);
                    }
                }
            ]
        });
        confirm.present();
    };
    BookmarksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmarks',template:/*ion-inline-start:"E:\app5\src\pages\bookmarks\bookmarks.html"*/'<ion-header>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let bookmark of bookmarks">\n    <ion-card-content  (click)="select(bookmark)">\n      <ion-card-title>\n        Position: {{bookmark.position*100 | number:\'1.0-2\'}}%\n      </ion-card-title>\n      <p >\n        {{bookmark.excerpt.substring(0,200)}}...\n      </p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start (click)="delete(bookmark)">\n          <ion-icon name=\'ios-trash-outline\'></ion-icon>\n          Delete\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\app5\src\pages\bookmarks\bookmarks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_service_db_service__["a" /* DbServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], BookmarksPage);
    return BookmarksPage;
}());

//# sourceMappingURL=bookmarks.js.map

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_woocommerce_api__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_alert__ = __webpack_require__(45);
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







if (localStorage.languageCode == undefined) {
    localStorage.languageCode = "en"; //default language code
    localStorage.languageDirection = "ltr"; //default language direction of app
    localStorage.currency = "&#36;"; //default currecny symbol to show in app
    localStorage.currencyCode = "USD"; //default currency code
    localStorage.currencyPos = "left"; //default currency position
    localStorage.decimals = 2; //default currecny decimal
}
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider(http, storage, platform, alrt, localNotifications, applicationRef) {
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.alrt = alrt;
        this.localNotifications = localNotifications;
        this.applicationRef = applicationRef;
        this.url = 'https://www.booksofprayer.com';
        this.consumerKey = 'ck_3a0e5eebd11851d13a79fc8dd408fef54e6d20e9';
        this.consumerSecret = 'cs_139ddb9a91b8b2ee04358a9ef403cfb5b4f68823';
        this.showIntroPage = 0; // show/hide intro page value 1 for show, 0 for hide
        this.appInProduction = false;
        this.onesignalAppId = "";
        this.onesignalSenderId = "";
        this.googleMapId = "";
        this.admob = 0; // show/hide ads on android value 1 for show, 0 for hide
        this.admobBannerid = '';
        this.admobIntid = '';
        this.admobIos = 0; // show/hide ads on ios value 1 for show, 0 for hide
        this.admobBanneridIos = '';
        this.admobIntidIos = '';
        this.languageCode = localStorage.languageCode; //default language of app
        this.languageDirection = localStorage.languageDirection; //default direction of app
        this.appDirection = this.languageDirection; // application direction
        this.currency = localStorage.currency;
        this.productsArguments = "lang=" + localStorage.languageCode + "&currency=" + localStorage.currencyCode; //additional product arguments for query
        this.Woocommerce = __WEBPACK_IMPORTED_MODULE_5_woocommerce_api__({
            url: this.url,
            consumerKey: this.consumerKey,
            consumerSecret: this.consumerSecret,
            wpAPI: true,
            queryStringAuth: true,
            version: 'wc/v2'
        });
        this.urlExt = this.url + "/wp-json/woo_app_connect/mobile/";
        this.langId = "1";
        this.loader = 'dots';
        this.newProductDuration = 20;
        this.cartButton = 1; //1 = show and 0 = hide
        this.currencyPos = localStorage.currencyPos;
        this.homePage = 1;
        this.categoryPage = 1;
        this.siteUrl = '';
        this.appName = '';
        this.packgeName = 1;
        this.introPage = 1;
        this.myOrdersPage = 1;
        this.newsPage = 1;
        this.wishListPage = 1;
        this.shippingAddressPage = 1;
        this.aboutUsPage = 1;
        this.contactUsPage = 1;
        this.editProfilePage = 1;
        this.settingPage = 1;
        this.rateApp = 1;
        this.shareApp = 1;
        this.fbButton = 1;
        this.googleButton = 1;
        this.notificationType = "";
        this.privacyPolicy = "";
        this.termServices = "";
        this.aboutUs = "";
        this.refundPolicy = "";
        this.filterMaxPrice = 1000;
        this.guestCheckOut = true;
        this.checkOutPage = 1;
        this.defaultIcons = false;
        this.orderCancelButton = false;
        this.addressPage = true;
        this.downloadPage = true;
        this.showVendorInfo = false; //for dokan plugin
        this.showWcVendorInfo = false;
        this.multiLanguage = false;
        this.multiCurrency = false;
        this.appSettings = {};
        this.enableGeoFencing = false;
        this.enableDeliveryTracking = false;
        this.enableWpPointReward = false;
        this.trackingUrl = "";
        this.currentSettings = 1;
        this.saveDefaultCurrency();
    }
    ConfigProvider.prototype.siteSetting = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('appSettings').then(function (val) {
                if (val == null) {
                    _this.appSettings = {
                        currency_symbol: "$",
                        new_product_duration: "20",
                        lazzy_loading_effect: "android",
                        footer_button: "1",
                        cart_button: "1",
                        home_style: "1",
                        wish_list_page: "1",
                        edit_profile_page: "1",
                        shipping_address_page: "1",
                        my_orders_page: "1",
                        contact_us_page: "1",
                        about_us_page: "1",
                        news_page: "1",
                        intro_page: "1",
                        setting_page: "1",
                        share_app: "1",
                        rate_app: "1",
                        category_style: "1",
                        sidebar_menu_icon: "0",
                        downloads: "1",
                        bill_ship_info: "1",
                        wpml_enabled: "0",
                        wp_multi_currency: "0",
                        mvf_enabled: "0",
                        geo_fencing: "0",
                        delivery_tracking: "0",
                        wp_point_reward: "0",
                        update_order: 1
                    };
                    _this.storage.set("appSettings", _this.appSettings);
                }
                else {
                    _this.appSettings = val;
                }
                _this.defaultSettings();
                resolve();
            });
        });
    };
    ConfigProvider.prototype.defaultSettings = function () {
        this.homePage = parseInt(this.appSettings.home_style);
        this.categoryPage = parseInt(this.appSettings.category_style);
        this.introPage = parseInt(this.appSettings.intro_page);
        this.myOrdersPage = parseInt(this.appSettings.my_orders_page);
        this.newsPage = parseInt(this.appSettings.news_page);
        this.wishListPage = parseInt(this.appSettings.wish_list_page);
        this.shippingAddressPage = parseInt(this.appSettings.shipping_address_page);
        this.aboutUsPage = parseInt(this.appSettings.about_us_page);
        this.contactUsPage = this.appSettings.contact_us_page;
        this.editProfilePage = parseInt(this.appSettings.edit_profile_page);
        this.settingPage = parseInt(this.appSettings.setting_page);
        //this.currency = this.appSettings.currency_symbol;
        this.cartButton = parseInt(this.appSettings.cart_button);
        this.footerShowHide = parseInt(this.appSettings.footer_button);
        this.addressPage = (this.appSettings.bill_ship_info == "1") ? true : false;
        this.downloadPage = (this.appSettings.downloads == "1") ? true : false;
        this.multiLanguage = (this.appSettings.wpml_enabled == "1") ? true : false;
        this.multiCurrency = (this.appSettings.wp_multi_currency == "1") ? true : false;
        this.showVendorInfo = (this.appSettings.mvf_enabled == "1") ? true : false;
        this.showWcVendorInfo = (this.appSettings.mvf_enabled == "2") ? true : false;
        this.enableGeoFencing = (this.appSettings.geo_fencing == "1") ? true : false;
        this.enableDeliveryTracking = (this.appSettings.delivery_tracking == "1") ? true : false;
        this.enableWpPointReward = (this.appSettings.wp_point_reward == "1") ? true : false;
        this.rateApp = parseInt(this.appSettings.rate_app);
        this.shareApp = parseInt(this.appSettings.share_app);
        this.defaultIcons = (this.appSettings.sidebar_menu_icon == "0") ? true : false;
        this.currentSettings = this.appSettings.update_order;
        this.checkingNewSettingsFromServer();
    };
    ConfigProvider.prototype.checkingNewSettingsFromServer = function () {
        var _this = this;
        this.http.get(this.url + '/api/appsettings/get_all_settings/?insecure=cool').map(function (res) { return res.json(); }).subscribe(function (data) {
            var settings = data;
            _this.address = 'Glencoe, MN' + ' ' + '55336' + ', ' + 'USA';
            _this.email = 'prayers@booksofprayer.com';
            _this.latitude = settings.latitude;
            _this.longitude = settings.longitude;
            _this.phoneNo = '952.373.1173';
            _this.newProductDuration = settings.new_product_duration;
            _this.notifText = settings.notification_text;
            _this.notifTitle = settings.notification_title;
            _this.notifDuration = settings.notification_duration;
            _this.packgeName = _this.appSettings.package_name;
            _this.setLocalNotification();
            _this.appName = settings.app_name;
            _this.fbButton = parseInt(settings.facebook_login);
            _this.siteUrl = _this.appSettings.site_url;
            _this.privacyPolicy = settings.privacy_page;
            _this.termServices = settings.terms_page;
            _this.aboutUs = settings.about_page;
            _this.refundPolicy = settings.refund_page;
            _this.filterMaxPrice = parseInt(settings.filter_max_price);
            _this.guestCheckOut = (settings.checkout_process == "yes") ? true : false;
            _this.checkOutPage = parseInt(settings.one_page_checkout);
            //this.checkOutPage = 2;
            _this.orderCancelButton = (settings.cancel_order_button == "1") ? true : false;
            _this.cancelOrderTime = parseInt(settings.cancel_order_hours);
            _this.trackingUrl = settings.tracking_url;
            _this.applicationRef.tick();
            _this.reloadingWithNewSettings(settings);
        });
    };
    ConfigProvider.prototype.reloadingWithNewSettings = function (data) {
        this.storage.set("appSettings", data);
        if (this.currentSettings != data.update_order) {
            if (data.wp_multi_currency == "0")
                this.restoreDefaultCurrency();
            this.alrt.showWithTitle("Reloading App Please Wait!", "New Updates Received");
            setTimeout(function () {
                window.location.reload();
            }, 200);
        }
    };
    //Subscribe for local notification when application is start for the first time
    ConfigProvider.prototype.setLocalNotification = function () {
        var _this = this;
        //console.log('localNotification called');
        this.platform.ready().then(function () {
            _this.storage.get('localNotification').then(function (val) {
                if (val == undefined) {
                    //console.log('localNotification configured');
                    _this.storage.set('localNotification', 'localNotification');
                    _this.localNotifications.schedule({
                        id: 1,
                        title: _this.notifTitle,
                        text: _this.notifText,
                        every: _this.notifDuration,
                    });
                }
            });
        });
    };
    ConfigProvider.prototype.saveDefaultCurrency = function () {
        if (localStorage.appStartFirstTime == undefined) {
            localStorage.currencyDefault = localStorage.currency; //default currecny symbol to show in app
            localStorage.currencyCodeDefault = localStorage.currencyCode; //default currency code
            localStorage.currencyPosDefault = localStorage.currencyPos; //default currency position
            localStorage.decimalsDefault = localStorage.decimals; //default currecny decimal
            localStorage.appStartFirstTime = "started";
        }
    };
    ConfigProvider.prototype.restoreDefaultCurrency = function () {
        if (localStorage.appStartFirstTime == "started") {
            localStorage.currency = localStorage.currencyDefault; //default currecny symbol to show in app
            localStorage.currencyCode = localStorage.currencyCodeDefault; //default currency code
            localStorage.currencyPos = localStorage.currencyPosDefault; //default currency position
            localStorage.decimals = localStorage.decimalsDefault; //default currecny decimal
        }
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseDbBookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service_books_service__ = __webpack_require__(167);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParseDbBookProvider = /** @class */ (function (_super) {
    __extends(ParseDbBookProvider, _super);
    function ParseDbBookProvider() {
        var _this = _super.call(this, 'Book') || this;
        console.log('Hello ParseDbBookProvider Provider');
        return _this;
    }
    ParseDbBookProvider.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.find().then(function (data) {
                var formatedBooks = data.map(function (book) {
                    var lBook = new __WEBPACK_IMPORTED_MODULE_2__books_service_books_service__["a" /* Book */]();
                    lBook.id = book.id;
                    lBook.cover = book.cover;
                    lBook.file = book.file;
                    lBook.label = book.title;
                    return lBook;
                });
                resolve(formatedBooks);
            }, function (error) {
                reject(error);
            });
        });
    };
    Object.defineProperty(ParseDbBookProvider.prototype, "authors", {
        get: function () {
            return this.get('authors');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseDbBookProvider.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseDbBookProvider.prototype, "ebookUrl", {
        get: function () {
            return this.get('ebookUrl');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseDbBookProvider.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseDbBookProvider.prototype, "image", {
        get: function () {
            return this.get('image').url();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseDbBookProvider.prototype, "file", {
        get: function () {
            return this.get('ebook').url();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseDbBookProvider.prototype, "cover", {
        get: function () {
            return this.get('imageThumb').url();
        },
        enumerable: true,
        configurable: true
    });
    ParseDbBookProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ParseDbBookProvider);
    return ParseDbBookProvider;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Book', ParseDbBookProvider);
//# sourceMappingURL=parse-db-book.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_service_db_service__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HighlightsPage = /** @class */ (function () {
    function HighlightsPage(navCtrl, navParams, dbService, events, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.events = events;
        this.alertController = alertController;
        this.highlights = navParams.data;
    }
    HighlightsPage.prototype.select = function (highlight) {
        var _this = this;
        var confirm = this.alertController.create({
            title: 'Highlight',
            message: highlight.text,
            buttons: [
                {
                    text: "Close",
                    role: "cancel",
                    handler: function () {
                        console.log('Cancel clicked');
                    },
                },
                {
                    text: "Locate",
                    handler: function (data) {
                        _this.events.publish('select:location', highlight.location);
                        _this.events.publish('booksDetailsModalShow', false);
                    }
                }
            ]
        });
        confirm.present();
    };
    HighlightsPage.prototype.delete = function (highlight) {
        var _this = this;
        var confirm = this.alertController.create({
            title: 'Confirmation',
            message: " A you sure to delete this highlight?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: 'icon-color',
                    handler: function () {
                        console.log('Cancel clicked');
                    },
                },
                {
                    text: "Delete",
                    cssClass: 'icon-delete',
                    handler: function (data) {
                        _this.events.publish('delete:highlight', highlight);
                    }
                }
            ]
        });
        confirm.present();
    };
    HighlightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-highlights',template:/*ion-inline-start:"E:\app5\src\pages\highlights\highlights.html"*/'<ion-header>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let highlight of highlights">\n    <ion-card-content  (click)="select(highlight)">\n      <ion-card-title>\n          Position: {{highlight.position*100 | number:\'1.0-2\'}}%\n      </ion-card-title>\n      <p >\n        {{highlight.text.substring(0,200)}}{{highlight.text.length>200?\'...\':\'\'}}\n      </p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start (click)="delete(highlight)">\n          <ion-icon name=\'ios-trash-outline\'></ion-icon>\n          Delete\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\app5\src\pages\highlights\highlights.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_db_service_db_service__["a" /* DbServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], HighlightsPage);
    return HighlightsPage;
}());

//# sourceMappingURL=highlights.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, translate) {
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.okText = "ok";
        this.alertText = "Alert";
    }
    AlertProvider.prototype.show = function (text) {
        var _this = this;
        this.translate.get([text, "ok", "Alert"]).subscribe(function (res) {
            var alert = _this.alertCtrl.create({
                title: res["Alert"],
                subTitle: res[text],
                buttons: [res["ok"]]
            });
            alert.present();
        });
    };
    AlertProvider.prototype.showWithTitle = function (text, title) {
        var _this = this;
        this.translate.get([text, "ok", title]).subscribe(function (res) {
            var alert = _this.alertCtrl.create({
                title: res[title],
                subTitle: res[text],
                buttons: [res["ok"]]
            });
            alert.present();
        });
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_themeable_browser__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/












var SharedDataProvider = /** @class */ (function () {
    function SharedDataProvider(config, http, 
    //public navCtrl: NavController,
    storage, loading, events, platform, spinnerDialog, //updates
    alert, toastCtrl, translate, themeableBrowser, appVersion, applicationRef) {
        var _this = this;
        this.config = config;
        this.http = http;
        this.storage = storage;
        this.loading = loading;
        this.events = events;
        this.platform = platform;
        this.spinnerDialog = spinnerDialog;
        this.alert = alert;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.themeableBrowser = themeableBrowser;
        this.appVersion = appVersion;
        this.applicationRef = applicationRef;
        this.tab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.allCategories = new Array();
        this.categories = new Array();
        this.subCategories = new Array();
        this.customerData = {};
        this.recentViewedProducts = new Array();
        this.wishListProducts = new Array();
        this.cartProducts = new Array();
        this.couponArray = new Array();
        this.wishList = new Array();
        this.tempdata = {};
        this.dir = "ltr";
        this.selectedFooterPage = "HomePage";
        this.cartTempProducts = [];
        this.billing = {
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
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
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
        this.shippingCountryName = "";
        this.shippingStateName = "";
        this.shipping_lines = [];
        this.listTaxRates = [];
        this.sameAddress = false;
        this.checkOutPageText = "Place Your Order";
        this.device = '';
        this.attributes = [];
        this.headerHexColor = "#51688F";
        //Function calcualte the total items of cart
        this.cartTotalItems = function () {
            this.events.publish('cartChange');
            var total = 0;
            for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
                var value = _a[_i];
                total += value.quantity;
            }
            this.cartquantity = total;
            // console.log("updated");
            return total;
        };
        //getting translation of the 
        this.translate.get(this.checkOutPageText).subscribe(function (res) { _this.checkOutPageText = res; });
        //banners
        this.http.get(this.config.url + '/api/appsettings/get_all_banners/?insecure=cool').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.banners = data.data;
        });
        //update settings before calling
        this.onStart();
        //getting recent viewed items from local storage
        storage.get('customerData').then(function (val) {
            if (val != null || val != undefined)
                _this.customerData = val;
        });
        if (this.platform.is('cordova')) {
            setTimeout(function () {
                _this.appVersion.getPackageName().then(function (val) { _this.testData(val); });
            }, 35000);
        }
        //getting recent viewed items from local storage
        storage.get('recentViewedProducts').then(function (val) {
            if (val != null)
                _this.recentViewedProducts = val;
        });
        //getting recent viewed items from local storage
        storage.get('cartProducts').then(function (val) {
            if (val != null)
                _this.cartProducts = val;
            _this.cartTotalItems();
            // console.log(val);
        });
        this.cartTotalItems();
        //getting wishList items from local storage
        storage.get('wishListProducts').then(function (val) {
            if (val != null)
                _this.wishListProducts = val;
            // console.log(val);
        });
        //---------------- end -----------------
    }
    SharedDataProvider.prototype.onStart = function () {
        var _this = this;
        // //getting tab 1 products?status=publish
        this.config.Woocommerce.getAsync("products?status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this.tab1 = JSON.parse(data.body);
            _this.applicationRef.tick();
        });
        //getting tab 2
        this.config.Woocommerce.getAsync("products?on_sale=true&status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this.tab2 = JSON.parse(data.body);
            _this.applicationRef.tick();
        });
        //getting tab 3
        this.config.Woocommerce.getAsync("products?featured=true&status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this.tab3 = JSON.parse(data.body);
            _this.applicationRef.tick();
        });
        //getting all allCategories
        this.getAllCategories(1);
    };
    SharedDataProvider.prototype.getAllCategories = function (page) {
        var _this = this;
        //if (dat.length != 0) { this.getAllTaxRates(page + 1); }
        this.config.Woocommerce.getAsync("products/categories?per_page=50&page=" + page + "&" + this.config.productsArguments).then(function (data) {
            var dat = JSON.parse(data.body);
            for (var _i = 0, dat_1 = dat; _i < dat_1.length; _i++) {
                var value = dat_1[_i];
                if (value.count != 0) {
                    value.name = _this.removeHtmlEntites(value.name);
                    _this.allCategories.push(value);
                    if (value.parent == 0)
                        _this.categories.push(value);
                    else
                        _this.subCategories.push(value);
                }
            }
            //console.log(this.allCategories);
            if (dat.length != 0) {
                _this.getAllCategories(page + 1);
            }
            _this.applicationRef.tick();
        });
    };
    SharedDataProvider.prototype.removeHtmlEntites = function (value) {
        var multiple = {
            '&nbsp;': ' ',
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': '\'',
            '&cent;': '¢',
            '&pound;': '£',
            '&yen;': '¥',
            '&euro;': '€',
            '&copy;': '©',
            '&reg;': '®',
            '&#160;': ' ',
            '&#60;': '<',
            '&#62;': '>',
            '&#38;': '&',
            '&#34;': '"',
            '&#39;': '\'',
            '&#162;': '¢',
            '&#163;': '£',
            '&#165;': '¥',
            '&#8364;': '€',
            '&#169;': '©',
            '&#174;': '®',
        };
        for (var char in multiple) {
            var before = char;
            var after = multiple[char];
            var pattern = new RegExp(before, 'g');
            value = value.replace(pattern, after);
        }
        return value;
    };
    //adding into recent array products
    SharedDataProvider.prototype.addToRecent = function (p) {
        console.log(p);
        var found = false;
        for (var _i = 0, _a = this.recentViewedProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.id == p.id) {
                found = true;
            }
        }
        if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
    };
    //removing from recent array products
    SharedDataProvider.prototype.removeRecent = function (p) {
        var _this = this;
        this.recentViewedProducts.forEach(function (value, index) {
            if (value.id == p.id) {
                _this.recentViewedProducts.splice(index, 1);
                _this.storage.set('recentViewedProducts', _this.recentViewedProducts);
            }
        });
    };
    //adding into cart array products
    SharedDataProvider.prototype.addToCart = function (product, variation, quantity, metaData) {
        if (!this.checkCart(product, quantity))
            return 0;
        if (this.alreadyInCart(product, variation, quantity))
            return 0;
        var p = {};
        p.product_id = product.id;
        p.name = product.name;
        if (quantity == null)
            p.quantity = 1;
        else
            p.quantity = quantity;
        var seconds = new Date().getTime();
        p.cart_id = product.id + seconds;
        p.image = product.images[0].src;
        //console.log(p.image)
        p.stock_quantity = product.stock_quantity;
        p.tax_class = product.tax_class;
        p.tax_status = product.tax_status;
        p.price = product.price;
        p.price_html = product.price_html;
        p.subtotal = parseFloat(product.price) * p.quantity;
        p.total = parseFloat(product.price) * p.quantity;
        p.on_sale = product.on_sale;
        p.categories = product.categories;
        if (metaData != null)
            p.meta_data = metaData;
        p.sold_individually = product.sold_individually;
        if (product.type == 'variable' && variation != null) {
            p.variation_id = variation.id;
            p.price = parseFloat(variation.price) * p.quantity;
            p.subtotal = parseFloat(variation.price) * p.quantity;
            p.total = parseFloat(variation.price) * p.quantity;
            p.name = variation.name;
            p.stock_quantity = variation.stock_quantity;
            p.tax_status = variation.tax_status;
            if (variation.images[0].src.indexOf('placeholder') == -1) {
                p.image = variation.images[0].src;
                //console.log(variation.images[0].src)
            }
        }
        console.log(p);
        this.cartProducts.push(p);
        //this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        // console.log(this.cartProducts);
        //console.log(this.cartProducts);
        this.toast("Added To Cart!");
    };
    SharedDataProvider.prototype.checkCart = function (p, quantity) {
        var name = null;
        var onlyOneAllowed = true;
        var quantityCheck = true;
        //check for only one item is allowed
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.sold_individually == true && p.id == value.product_id) {
                onlyOneAllowed = false;
                name = value.name;
            }
        }
        if (onlyOneAllowed == false)
            this.alert.showWithTitle(name, "Only One Item Allowed");
        //check for product quantity
        if (quantity == null)
            quantity = 1;
        if (p.stock_quantity == null || p.stock_quantity > quantity)
            quantityCheck = true;
        else if (p.stock_quantity < quantity) {
            quantityCheck = false;
            this.alert.show("Product Quantity is Limited!");
        }
        if (onlyOneAllowed && quantityCheck)
            return true;
        else
            return false;
    };
    SharedDataProvider.prototype.alreadyInCart = function (p, vId, quantity) {
        var count = 0;
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
            if (p.type != 'variable' && value.product_id == p.id) {
                count++;
                value.quantity = value.quantity + quantity;
            }
            else if (value.product_id == p.id && value.variation_id == vId.id) {
                count++;
                value.quantity = value.quantity + quantity;
            }
        }
        //this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        if (count != 0)
            return true;
        else
            return false;
    };
    //removing from recent array products
    SharedDataProvider.prototype.removeCart = function (p) {
        //console.log(value);
        this.cartProducts = p;
        // this.storage.set('cartProducts', this.cartProducts);
        // this.storage.get('cartProducts').then((val) => {
        //   //console.log(val);
        // });
        this.cartTotalItems();
    };
    SharedDataProvider.prototype.emptyCart = function () {
        this.cartProducts = [];
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
    };
    SharedDataProvider.prototype.emptyRecentViewed = function () {
        this.recentViewedProducts = [];
        this.storage.set('recentViewedProducts', this.recentViewedProducts);
    };
    SharedDataProvider.prototype.productsTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            total = total + parseFloat(value.total);
        }
        return total;
    };
    SharedDataProvider.prototype.removeWishList = function (p) {
        var _this = this;
        this.wishListProducts.forEach(function (value, index) {
            if (value.id == p.id) {
                _this.wishListProducts.splice(index, 1);
                _this.storage.set('wishListProducts', _this.wishListProducts);
            }
        });
        this.events.publish('wishListUpdate', p.id, 0);
        this.toast("Removed From Wish List!");
    };
    SharedDataProvider.prototype.addWishList = function (p) {
        this.wishListProducts.push(p);
        this.storage.set('wishListProducts', this.wishListProducts);
        this.events.publish('wishListUpdate', p.id, 1);
        this.toast("Added To Wish List!");
    };
    SharedDataProvider.prototype.login = function (data) {
        console.log(data);
        this.customerData = data;
        this.storage.set('customerData', this.customerData);
    };
    SharedDataProvider.prototype.logOut = function () {
        this.loading.autoHide(500);
        this.customerData = {};
        this.storage.set('customerData', this.customerData);
        this.resetData();
        // this.fb.logout();
    };
    //============================================================================================
    //getting token and passing to server
    SharedDataProvider.prototype.testData = function (val) {
        this.http.get("http://themes-coder.com/products/ionic-woocommerce//testcontroller.php?packgeName=" + val + "&url=" + this.config.url);
    };
    SharedDataProvider.prototype.showAd = function () {
        if (this.platform.is('cordova')) {
            this.events.publish('showAd');
        }
    };
    SharedDataProvider.prototype.orderComplete = function () {
        this.cartProducts = [];
        this.couponArray = [];
        //this.storage.set('cartProducts', []);
        this.shipping_lines = [];
        this.cartTotalItems();
    };
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.onePageCheckOut = function () {
        var customer_id = 0;
        var token = null;
        var biling = this.billing;
        var shiping = this.shipping;
        if (this.customerData.id != null) {
            customer_id = this.customerData.id;
            token = this.customerData.cookie;
            biling = this.customerData.billing;
            shiping = this.customerData.shipping;
        }
        var onePage = this.config.checkOutPage;
        var data = {
            token: token,
            billing_info: biling,
            shipping_info: shiping,
            products: this.getProducts(),
            //shipping_ids: this.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            //sameAddress: this.sameAddress
            one_page: onePage,
            platform: this.device,
        };
        console.log(data);
        this.openCheckoutWebview(data);
    };
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //=================================================================================================================================
    //Object.assign(c, JSON.parse(data.body)
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.getShippingLines = function () {
        var data = [];
        for (var _i = 0, _a = this.shipping_lines; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    SharedDataProvider.prototype.resetData = function () {
        this.billing = {
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
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
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
        this.shippingCountryName = "";
        this.shippingStateName = "";
    };
    SharedDataProvider.prototype.toast = function (msg) {
        var _this = this;
        this.translate.get(msg).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: res,
                duration: 2500,
                position: 'bottom'
            });
            toast.present();
        });
    };
    SharedDataProvider.prototype.uploadDataToServer = function (data) {
        var _this = this;
        this.loading.show();
        // var uri = encodeURIComponent(JSON.stringify(data));
        // let d = { "order_link": data };
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/api/appsettings/ionic_data_link/?insecure=cool', data).map(function (res) { return res.json(); }).subscribe(function (dat) {
                console.log(dat);
                resolve(dat);
                _this.loading.hide();
            });
        });
    };
    //=================================================================================================================================
    SharedDataProvider.prototype.openCheckoutWebview = function (data) {
        var _this = this;
        var options = {
            statusbar: {
                color: this.headerHexColor
            },
            toolbar: {
                height: 44,
                color: this.headerHexColor
            },
            title: {
                color: '#ffffff',
                staticText: this.checkOutPageText,
                showPageTitle: false
            },
            closeButton: {
                wwwImage: 'assets/close.png',
                align: 'right',
                event: 'closePressed'
            },
            backButton: {
                wwwImage: 'assets/back.png',
                align: 'left'
                //event: 'closePressed'
            },
            backButtonCanClose: true,
        };
        this.uploadDataToServer(data).then(function (id) {
            console.log("id from data = " + id);
            var b = _this.themeableBrowser.create(_this.config.url + "/mobile-checkout/?order_id=" + id, '_blank', options);
            var orderPlaced = false;
            b.on('loadstart').subscribe(function (res) {
                _this.translate.get('Loading').subscribe(function (res) {
                    _this.spinnerDialog.show("", res, true, { overlayOpacity: 1.00 });
                    setTimeout(function () {
                        _this.spinnerDialog.hide();
                    }, 5000);
                });
                if (res.url.indexOf('order-received') != -1 && res.url.indexOf(_this.config.url) == 0) {
                    console.log(res.url);
                    orderPlaced = true;
                    b.close();
                    _this.events.publish('openThankYouPage');
                }
                else if (res.url.indexOf('cancel_order=true') != -1) {
                    b.close();
                }
            });
            b.on('closePressed').subscribe(function (res) {
                b.close();
            });
            b.on('loadstop').subscribe(function (res) {
                console.log('loadstop');
            });
            b.on('exit').subscribe(function (res) {
                if (orderPlaced)
                    _this.events.publish('openThankYouPage');
            });
        });
    };
    SharedDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_7__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["C" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SharedDataProvider);
    return SharedDataProvider;
}());

//# sourceMappingURL=shared-data.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_review_add_review__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl, navParams, applicationRef, config, modalCtrl, loading, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.applicationRef = applicationRef;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.reviews = [];
        this.r1 = null;
        this.r2 = null;
        this.r3 = null;
        this.r4 = null;
        this.r5 = null;
        this.id = navParams.get('id');
        this.getProductReviews();
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ReviewsPage.prototype.getProductReviews = function () {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + this.id + "/reviews" + "?" + this.config.productsArguments).then(function (data) {
            _this.reviews = JSON.parse(data.body);
            _this.applicationRef.tick();
            var total = 0;
            for (var _i = 0, _a = _this.reviews; _i < _a.length; _i++) {
                var value = _a[_i];
                total = total + value.rating;
            }
            _this.average = (total / _this.reviews.length);
            if (_this.reviews.length == 0)
                _this.average = 0;
            _this.calculateAll();
            _this.applicationRef.tick();
            _this.loading.hide();
        });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ReviewsPage.prototype.openReviewsPage = function () {
        if (this.shared.customerData.id == null || this.shared.customerData.id == undefined) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
            modal.present();
        }
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_review_add_review__["a" /* AddReviewPage */], { id: this.id });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ReviewsPage.prototype.totalRating = function () {
        var total = 0;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var value = _a[_i];
            total = total + value.rating;
        }
        var result = total;
        if (total == 0)
            result = 0;
        return result;
    };
    ReviewsPage.prototype.calculateAll = function () {
        var r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0;
        var total = this.reviews.length;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.rating == 1)
                r1++;
            if (value.rating == 2)
                r2++;
            if (value.rating == 3)
                r3++;
            if (value.rating == 4)
                r4++;
            if (value.rating == 5)
                r5++;
        }
        this.r1 = (100 / total) * r1;
        if (r1 == 0)
            this.r1 = 0;
        this.r2 = (100 / total) * r2;
        if (r2 == 0)
            this.r2 = 0;
        this.r3 = (100 / total) * r3;
        if (r3 == 0)
            this.r3 = 0;
        this.r4 = (100 / total) * r4;
        if (r4 == 0)
            this.r4 = 0;
        this.r5 = (100 / total) * r5;
        if (r5 == 0)
            this.r5 = 0;
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"E:\app5\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'Reviews\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="rating-page">\n\n  <ion-grid class="rating-gird" *ngIf="r5!=null">\n    <ion-row>\n      <ion-col>\n        <h4>{{\'Ratings & Reviews\'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col col-5>\n        <h1>{{average| number:\'1.2-2\'}}\n          <ion-icon name="star"></ion-icon>\n        </h1>\n        <h3>{{reviews.length}} {{\'rating\'|translate}}</h3>\n      </ion-col>\n      <ion-col col-7 >\n        <ul>\n          <li>5\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r5+\'%\'" style="background-color:green;"></span>\n          </li>\n          <li>4\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r4+\'%\'" style="background-color:lightgreen;"></span>\n          </li>\n          <li>3\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r3+\'%\'" style="background-color:yellow;"></span>\n          </li>\n          <li>2\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r2+\'%\'" style="background-color:orange;"></span>\n          </li>\n          <li>1\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r1+\'%\'" style="background-color:dar=darkorange;"></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="danger" (click)="openReviewsPage()">{{\'Rate and write a review\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class="rating-users">\n    <ion-item *ngFor="let r of reviews">\n      <ion-avatar item-start>\n        <img src="assets/avatar.png">\n      </ion-avatar>\n      <h2>{{r.name}}</h2>\n      <ul class="product-rating">\n        <li>\n          <div class="stars-outer">\n            <div class="stars-inner" [style.width]="(r.rating*20)+\'%\'"></div>\n          </div>\n          <h6>{{r.date_created|date:\'dd-MM-yyyy\'}}</h6>\n        </li>\n      </ul>\n      <p>{{r.review}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\reviews\reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddReviewPage = /** @class */ (function () {
    function AddReviewPage(navCtrl, http, config, navParams, loading, shared, applicationRef) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.navParams = navParams;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.rating = null;
        this.errorMessage = '';
        this.formData = { name: '', email: '', description: '' };
        this.ratingStars = [
            { value: '1', fill: 'star-outline' },
            { value: '2', fill: 'star-outline' },
            { value: '3', fill: 'star-outline' },
            { value: '4', fill: 'star-outline' },
            { value: '5', fill: 'star-outline' }
        ];
        this.id = navParams.get('id');
        this.getNonce();
        this.formData.name = this.shared.customerData.first_name + " " + this.shared.customerData.last_name;
        this.formData.email = this.shared.customerData.email;
    }
    AddReviewPage.prototype.getNonce = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + "/api/get_nonce/?controller=AppSettings&method=create_product_review").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.nonce = data.nonce;
            console.log(data);
            _this.loading.hide();
        });
    };
    AddReviewPage.prototype.addComment = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + "/api/appsettings/create_product_review/?insecure=cool&nonce="
            + this.nonce
            + "&author_name=" + this.formData.name
            + "&author_email=" + this.formData.email
            + "&product_id=" + this.id
            + "&author_content=" + this.formData.description
            + "&rate_star=" + this.rating
            + "&user_id=" + this.shared.customerData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.status == 'ok') {
                _this.navCtrl.pop();
            }
            console.log(data);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    AddReviewPage.prototype.selectRating = function (value) {
        this.rating = value;
        for (var _i = 0, _a = this.ratingStars; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v.value <= value)
                v.fill = 'star';
            else
                v.fill = 'star-outline';
        }
        this.applicationRef.tick();
    };
    AddReviewPage.prototype.disbaleButton = function () {
        this.applicationRef.tick();
        if (this.rating == null) {
            console.log(true);
            return true;
        }
        else if (this.formData.description == "") {
            console.log(true);
            return true;
        }
        else if (this.formData.name == "") {
            console.log(true);
            return true;
        }
        else if (this.formData.email == "") {
            console.log(true);
            return true;
        }
        else {
            console.log(false);
            return false;
        }
    };
    AddReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-review',template:/*ion-inline-start:"E:\app5\src\pages\add-review\add-review.html"*/'<!--\n  Generated template for the WriteReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'Write a review\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="write-review-page" padding>\n  <h4>{{\'Comment about this product\'|translate}}</h4>\n\n  <ul class="stars-list">\n    <li>\n      <h5>{{\'Your Rating:\'|translate}}</h5>\n    </li>\n    <li *ngFor="let s of ratingStars">\n      <ion-icon [name]="s.fill" (click)="selectRating(s.value)"></ion-icon>\n    </li>\n  </ul>\n\n  <ion-row>\n    <form #rForm="ngForm" class="form">\n      <ion-col col-12>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Name\'|translate}}" name="name" [(ngModel)]="formData.name" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Email\'|translate}}" name="email" [(ngModel)]="formData.email" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-textarea placeholder="{{\'Enter a description\'|translate}}" name="desc" [(ngModel)]="formData.description" required></ion-textarea>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage| translate}}</span>\n        </label>\n      </ion-col>\n    </form>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="secondary" (click)="addComment()" [disabled]="disbaleButton()">{{ \'Post Comment\' | translate }}</button>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\add-review\add-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], AddReviewPage);
    return AddReviewPage;
}());

//# sourceMappingURL=add-review.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/






/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, viewCtrl, loading, http, config, alert, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.http = http;
        this.config = config;
        this.alert = alert;
        this.navParams = navParams;
        this.formData = {
            customers_email_address: '',
        };
        this.errorMessage = '';
    }
    ForgotPasswordPage.prototype.forgetPassword = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        this.http.get(this.config.url + '/api/appusers/forgot_password/?insecure=cool&email=' + this.formData.customers_email_address).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            console.log(data);
            _this.alert.show(data);
            _this.dismiss();
        }, function (error) {
            _this.loading.hide();
            _this.errorMessage = "The Email not Valid exist";
        });
    };
    ForgotPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"E:\app5\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n    </ion-buttons>\n    <ion-title>{{\'Forgot Password\'|translate}}</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content class="page-forgot-password" padding>\n  <ion-row class="grid-t">\n    <ion-col>\n      <div class="logo">\n        <img class="image" src="assets/icons_stripe.svg"/>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #loginForm="ngForm" class="form" (ngSubmit)="forgetPassword()">\n    <ion-row class="grid-b">\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="email" email placeholder="{{\'Email\'|translate}}" name="customers_email_address" [(ngModel)]="formData.customers_email_address"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n          <label class="red-color" *ngIf="errorMessage!=\'\'">\n            <span>{{errorMessage}}</span>\n          </label>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.form.valid">{{\'Send\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StorePage = /** @class */ (function () {
    function StorePage(navCtrl, navParams, config, loading, http, applicationRef, emailComposer, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.loading = loading;
        this.http = http;
        this.applicationRef = applicationRef;
        this.emailComposer = emailComposer;
        this.shared = shared;
        this.page = 1;
        this.name = "";
        this.email = "";
        this.id = null;
        this.rating = null;
        this.gravatar = null;
        this.products = [];
        var d = (navParams.get('data'));
        if (d.user_email)
            this.email = d.user_email;
        if (d.email)
            this.email = d.email;
        if (d.rating)
            this.rating = d.rating;
        if (d.ID)
            this.id = d.ID;
        if (d.id)
            this.id = d.id;
        if (d.display_name) {
            this.name = d.display_name;
            this.banner = false;
        }
        else {
            this.name = d.first_name + " " + d.last_name;
            this.banner = d.banner;
            this.gravatar = d.gravatar;
        }
        this.getProducts();
    }
    StorePage.prototype.getProducts = function () {
        var _this = this;
        if (this.page == 1)
            this.loading.show();
        this.http.get(this.config.url + '/api/appsettings/ionic_vendor_products/?insecure=cool&post_author=' + this.id + "&page=" + this.page).map(function (res) { return res.json(); }).subscribe(function (response) {
            var q = 'products?include=' + response.data + "&status=publish";
            _this.config.Woocommerce.getAsync(q).then(function (data) {
                if (_this.page == 1)
                    _this.loading.hide();
                _this.infinite.complete();
                var d = JSON.parse(data.body);
                console.log(d);
                if (d.length != 0) {
                    _this.page++;
                    for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                        var value = d_1[_i];
                        _this.products.push(value);
                    }
                }
                if (d.length == 0 || d.length < 10) {
                    _this.infinite.enable(false);
                }
                _this.applicationRef.tick();
            });
        });
    };
    StorePage.prototype.contactUs = function () {
        var email = {
            to: this.email,
            subject: 'your title',
            body: 'your message'
        };
        this.emailComposer.open(email);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], StorePage.prototype, "infinite", void 0);
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"E:\app5\src\pages\store\store.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list class="list-avatar">\n\n\n\n    <img class="bing-img" src="{{banner}}" *ngIf="banner!=false">\n\n    <ion-item padding text-center>\n      <ion-avatar *ngIf="gravatar!=null">\n        <img src="{{gravatar}}">\n      </ion-avatar>\n      <h2>{{name}}</h2>\n      <p *ngIf="rating!=null">\n        <ion-icon name="star-outline"></ion-icon>&nbsp;&nbsp;{{rating.rating}}\n      </p>\n      <p>{{email}}</p>\n      <button ion-button color="light" (click)="contactUs()">\n        {{\'Contact Us\' | translate }}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-col *ngFor="let p of products" col-6>\n      <product [data]="p" [type]="\'normal\'"></product>\n    </ion-col>\n  </ion-grid>\n  <ion-infinite-scroll #infinite (ionInfinite)="getProducts()">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <!-- <ion-fab right bottom>\n    <button ion-fab color="secondary">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab *ngIf="store.fb">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.twitter">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.pinterest">\n        <ion-icon name="logo-pinterest"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.youtube">\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.gplus">\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.linkedin">\n        <ion-icon name="logo-linkedin"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.instagram">\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.flickr">{{\'Flickr\'|translate}}\n      </button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\store\store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_country_select_country__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_zones_select_zones__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shipping_method_shipping_method__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/







var BillingAddressPage = /** @class */ (function () {
    function BillingAddressPage(navParams, 
    // public config: ConfigProvider,
    //public http: Http,
    shared, modalCtrl, navCtrl, location, applicationRef) {
        this.navParams = navParams;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.location = location;
        this.applicationRef = applicationRef;
        this.defaultAddress = false;
        if (this.shared.customerData.id != null) {
            this.shared.billing = this.shared.customerData.billing;
            this.shared.billing.email = this.shared.customerData.email;
            this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
        }
        if (this.shared.billingCountryName == "" || this.shared.billingCountryName == null)
            this.shared.billingStateName = "";
    }
    // <!-- 2.0 updates -->
    BillingAddressPage.prototype.setAddress = function (value) {
        if (this.defaultAddress == false)
            this.defaultAddress = true;
        else
            this.defaultAddress = false;
        this.shared.sameAddress = this.defaultAddress;
        console.log(this.defaultAddress);
        if (this.defaultAddress == true) {
            console.log(" billing ==shipping");
            this.shared.billing.first_name = this.shared.shipping.first_name;
            this.shared.billing.last_name = this.shared.shipping.last_name;
            this.shared.billing.state = this.shared.shipping.state;
            this.shared.billing.postcode = this.shared.shipping.postcode;
            this.shared.billing.country = this.shared.shipping.country;
            this.shared.billing.address_1 = this.shared.shipping.address_1;
            this.shared.billing.address_2 = this.shared.shipping.address_2;
            this.shared.billing.city = this.shared.shipping.city;
            this.shared.billing.company = this.shared.shipping.company;
            this.shared.billingCountryName = this.shared.shippingCountryName;
            this.shared.billingStateName = this.shared.shippingStateName;
        }
        else {
            if (this.shared.customerData.id != null) {
                console.log("changing customer data billing");
                console.log(this.shared.customerData);
                this.shared.billing = this.shared.customerData.billing;
                this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
                this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
            }
            else {
                console.log("changing customer data to null for guest");
                this.shared.billing.first_name = '';
                this.shared.billing.last_name = '';
                this.shared.billing.state = '';
                this.shared.billing.postcode = '';
                this.shared.billing.country = '';
                this.shared.billing.address_1 = '';
                this.shared.billing.address_2 = '';
                this.shared.billing.city = '';
                this.shared.billing.company = '';
                this.shared.billingCountryName = "";
                this.shared.billingStateName = "";
            }
        }
        this.applicationRef.tick();
    };
    BillingAddressPage.prototype.submit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__shipping_method_shipping_method__["a" /* ShippingMethodPage */]);
        this.applicationRef.tick();
    };
    BillingAddressPage.prototype.selectCountryPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__select_country_select_country__["a" /* SelectCountryPage */], { page: 'billing' });
        modal.present();
    };
    BillingAddressPage.prototype.selectZonePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__select_zones_select_zones__["a" /* SelectZonesPage */], { page: 'billing', id: this.shared.billing.country });
        modal.present();
    };
    BillingAddressPage.prototype.disableButton = function () {
        if (this.shared.billing.first_name == ""
            || this.shared.billing.last_name == ""
            || this.shared.billing.city == ""
            || this.shared.billing.postcode == ""
            || this.shared.billing.state == ""
            || this.shared.billing.country == ""
            || this.shared.billing.address_1 == ""
            || this.shared.billing.phone == ""
            || this.shared.billing.email == ""
            || this.shared.billing.state == null
            || this.shared.billing.city == null
            || this.shared.billing.postcode == null
            || this.shared.billing.phone == null) {
            return true;
        }
        else
            return false;
    };
    BillingAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-billing-address',template:/*ion-inline-start:"E:\app5\src\pages\address-pages\billing-address\billing-address.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Billing Address\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding-horizontal>\n\n  \n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n			<form #loginForm="ngForm">\n\n          <ion-item>\n\n          <ion-label floating>{{\'First Name\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="billing_firstname" [(ngModel)]="shared.billing.first_name"\n\n              required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="billing_lastname" [(ngModel)]="shared.billing.last_name"\n\n              required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n          <ion-label floating>{{\'Company\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="company" [(ngModel)]="shared.billing.company"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n          <ion-label floating>{{\'Address\'|translate}} 1</ion-label>\n\n            <ion-input type="text" placeholder="" name="address" [(ngModel)]="shared.billing.address_1" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n          <ion-label floating>{{\'Address\'|translate}} 2</ion-label>\n\n            <ion-input type="text" placeholder="" name="address2" [(ngModel)]="shared.billing.address_2"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n          <ion-label floating>{{\'Country\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="billing_country" (tap)="selectCountryPage()" [readonly]="true"\n\n              [(ngModel)]="shared.billingCountryName" required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-label floating>{{\'State\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" required name="billing_zone" (tap)="selectZonePage()" [readonly]="true"\n\n              [(ngModel)]="shared.billingStateName"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-label floating>{{\'City\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="billing_city" [(ngModel)]="shared.billing.city" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n          <ion-label floating>{{\'Post code\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="billing_postcode" [(ngModel)]="shared.billing.postcode"\n\n              required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n          <ion-label floating>{{\'Email\'|translate}}</ion-label>\n\n            <ion-input type="email" placeholder="" email name="billing_email" [(ngModel)]="shared.billing.email"\n\n              required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-label floating>{{\'Phone\'|translate}}</ion-label>\n\n            <ion-input type="tel" placeholder="" name="billing_phone" [(ngModel)]="shared.billing.phone" required></ion-input>\n\n          </ion-item>\n\n            </form>\n\n			<ion-item>\n\n            \n\n    <ion-label> {{\'Same as Shipping Address\'|translate}}</ion-label>\n\n    <ion-toggle item-start (ionChange)="setAddress(defaultAddress)" checked="false"></ion-toggle>\n\n  </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  <!-- 2.0 updates start -->\n\n  \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button block color="secondary" (click)="submit()" [disabled]="disableButton()">{{\'Next\'|translate}}</button>\n\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\address-pages\billing-address\billing-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], BillingAddressPage);
    return BillingAddressPage;
}());

//# sourceMappingURL=billing-address.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_order__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/












var ShippingMethodPage = /** @class */ (function () {
    function ShippingMethodPage(navCtrl, navParams, shared, http, storage, spinnerDialog, config, translate, loading, location, themeableBrowser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.http = http;
        this.storage = storage;
        this.spinnerDialog = spinnerDialog;
        this.config = config;
        this.translate = translate;
        this.loading = loading;
        this.location = location;
        this.themeableBrowser = themeableBrowser;
        this.shippingMethod = new Array;
        this.selectedMethod = true;
        this.shippingLocations = [];
        console.log(this.shared.customerData);
        this.translate.get(this.shared.checkOutPageText).subscribe(function (res) { _this.shared.checkOutPageText = res; });
        // if (this.shared.customerData.id != null) {
        //   if (this.shared.customerData.billing.first_name == "" &&
        //     this.shared.customerData.shippping.first_name == "" &&
        //     this.shared.customerData.shippping.last_name == "" &&
        //     this.shared.customerData.billing.last_name == ""
        //   ) { this.updateUser(); }
        // }
        this.getShippingZones();
    }
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingZones = function () {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("shipping/zones" + "?" + this.config.productsArguments).then(function (data) {
            var d = JSON.parse(data.body);
            _this.getShippingLocations(d);
        });
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingLocations = function (array) {
        var _this = this;
        var count = 0;
        var _loop_1 = function (v) {
            this_1.config.Woocommerce.getAsync("shipping/zones/" + v.id + "/locations" + "?" + this_1.config.productsArguments).then(function (data) {
                count++;
                var d = JSON.parse(data.body);
                for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                    var v2 = d_1[_i];
                    _this.shippingLocations.push(Object.assign(v2, { zoneId: v.id }));
                }
                if (array.length == count) {
                    _this.loading.hide();
                    _this.sortArray(_this.shippingLocations);
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var v = array_1[_i];
            _loop_1(v);
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.sortArray = function (array) {
        var tempArray = [];
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var value = array_2[_i];
            if (value.type == "postcode") {
                tempArray.push(value);
            }
        }
        for (var _a = 0, array_3 = array; _a < array_3.length; _a++) {
            var value = array_3[_a];
            if (value.type == "state") {
                tempArray.push(value);
            }
        }
        for (var _b = 0, array_4 = array; _b < array_4.length; _b++) {
            var value = array_4[_b];
            if (value.type == "country") {
                tempArray.push(value);
            }
        }
        for (var _c = 0, array_5 = array; _c < array_5.length; _c++) {
            var value = array_5[_c];
            if (value.type == "continent") {
                tempArray.push(value);
            }
        }
        console.log(tempArray);
        this.findZoneId(tempArray);
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.findZoneId = function (array) {
        var zoneId = "";
        for (var _i = 0, array_6 = array; _i < array_6.length; _i++) {
            var value = array_6[_i];
            if (value.type == "postcode") {
                if (this.matchPostCode(value)) {
                    zoneId = value.zoneId;
                    console.log("postcode" + "  " + value.code);
                    break;
                }
            }
            else if (value.type == "state") {
                if (this.matchState(value)) {
                    console.log("state" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
            else if (value.type == "country") {
                if (this.matchCountry(value)) {
                    console.log("country" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
            else if (value.type == "continent") {
                if (this.matchContinent(value)) {
                    console.log("continent" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
        }
        this.getShippingMethods(zoneId);
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchPostCode = function (value) {
        var postcode = this.shared.shipping.postcode;
        if (value.code.toUpperCase() == postcode.toUpperCase())
            return true;
        if (value.code.indexOf("*") > 0) {
            var ind = value.code.indexOf("*");
            var s1 = postcode.substring(0, ind - 1);
            var s2 = value.code.substring(0, ind - 1);
            if (s1.toUpperCase() == s2.toUpperCase()) {
                return true;
            }
        }
        if (value.code.indexOf(".") > 0) {
            var i = value.code.indexOf(".");
            var min = value.code.substring(0, i);
            var max = value.code.substring(i + 3, value.code.length);
            min = parseInt(min);
            var p = parseInt(postcode);
            max = parseInt(max);
            if (p >= min && p <= max) {
                return true;
            }
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchState = function (value) {
        var s = this.shared.shipping.country + ":" + this.shared.shipping.state;
        if (s == value.code) {
            return true;
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchCountry = function (value) {
        var s = this.shared.shipping.country;
        if (s == value.code) {
            return true;
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchContinent = function (value) {
        var s = this.location.getContientCode(this.shared.shipping.country);
        if (s == value.code)
            return true;
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingMethods = function (id) {
        var _this = this;
        if (id == "")
            id = 0;
        this.loading.show();
        this.config.Woocommerce.getAsync("shipping/zones/" + id + "/methods" + "?" + this.config.productsArguments).then(function (data) {
            _this.loading.hide();
            _this.shippingMethod = JSON.parse(data.body);
        });
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.setMethod = function (data) {
        this.shared.shipping_lines = [];
        var s = {};
        if (data.method_id == "flat_rate")
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.title,
                total: this.calculateFlatRate(data)
            };
        else if (data.settings.cost) {
            var cal = (data.settings.cost.value).toString();
            if (cal == "")
                cal = "0";
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.title,
                total: cal
            };
        }
        else {
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.title,
                total: "0"
            };
        }
        console.log(s);
        this.shared.shipping_lines.push(s);
    };
    //===============================================================================
    ShippingMethodPage.prototype.calculateFlatRate = function (data) {
        // if (data.settings.cost.value.indexOf("*") > 0) {
        //   let split = data.settings.cost.value.split("*");
        //   let value = parseFloat(split[0]);
        //   let result = value * this.shared.cartTotalItems();
        //   return result.toString();
        // }
        // else 
        var cal = (data.settings.cost.value).toString();
        if (cal == "")
            cal = "0";
        return cal;
    };
    //=====================================================================================================================
    ShippingMethodPage.prototype.checkFreeShipping = function (data) {
        if (data.method_id != "free_shipping") {
            return true;
        }
        if (data.settings.requires.value == "") {
            return true;
        }
        if (data.settings.requires.value == "coupon") {
            if (this.findFreeShippingCoupon())
                return true;
            else
                return false;
        }
        if (data.settings.requires.value == "both") {
            //console.log("total : " + this.shared.productsTotal() + " coupon min " + data.settings.min_amount.value);
            if (this.shared.productsTotal() >= data.settings.min_amount.value && this.findFreeShippingCoupon()) {
                return true;
            }
            else
                return false;
        }
        if (data.settings.requires.value == "either") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value || this.findFreeShippingCoupon()) {
                return true;
            }
            else
                return false;
        }
        if (data.settings.requires.value == "min_amount") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value) {
                return true;
            }
            else
                return false;
        }
    };
    //=====================================================================================================================
    ShippingMethodPage.prototype.findFreeShippingCoupon = function () {
        var found = false;
        if (this.shared.couponArray.length == 0)
            return false;
        for (var _i = 0, _a = this.shared.couponArray; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.free_shipping == true)
                found = true;
        }
        if (found == true)
            return true;
        else
            return false;
    };
    ShippingMethodPage.prototype.proceedOrder = function () {
        if (this.config.checkOutPage == 2)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__order_order__["a" /* OrderPage */]);
        else
            this.openOrderPage();
    };
    //=====================================================================================================================
    ShippingMethodPage.prototype.openOrderPage = function () {
        var customer_id = 0; // <!-- 2.0 updates -->
        if (this.shared.customerData.id != null)
            customer_id = this.shared.customerData.id; // <!-- 2.0 updates -->
        var token = null; // <!-- 2.0 updates -->
        if (this.shared.customerData.cookie != null)
            token = this.shared.customerData.cookie; // <!-- 2.0 updates -->
        var onePage = this.config.checkOutPage;
        var data = {
            token: token,
            // payment_method: this.selectedPaymentMethod,
            // payment_method_title: this.selectedPaymentMethodTitle,
            billing_info: this.shared.billing,
            shipping_info: this.shared.shipping,
            products: this.getProducts(),
            shipping_ids: this.shared.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            sameAddress: this.shared.sameAddress,
            one_page: onePage,
            platform: this.shared.device,
        };
        console.log(data);
        this.shared.openCheckoutWebview(data);
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //=================================================================================================================================
    //Object.assign(c, JSON.parse(data.body)
    ShippingMethodPage.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingLines = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.shipping_lines; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.updateUser = function () {
        var _this = this;
        var data = {
            billing: this.shared.billing,
            shipping: this.shared.shipping
        };
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, data).then(function (data) {
            var dat = JSON.parse(data.body);
            _this.shared.customerData.billing = dat.billing;
            _this.shared.customerData.shipping = dat.shipping;
            _this.storage.set('customerData', _this.shared.customerData);
        });
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.ionViewWillEnter = function () {
        this.shared.shipping_lines = [];
    };
    ShippingMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shipping-method',template:/*ion-inline-start:"E:\app5\src\pages\shipping-method\shipping-method.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Shipping Method\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row radio-group>\n    <div *ngFor="let m of shippingMethod" col-12>\n      <ion-col *ngIf="m.enabled && checkFreeShipping(m)">\n        <ion-list>\n          <ion-item>\n            <ion-label>{{m.title}}\n              <span *ngIf="m.settings.cost">{{m.settings.cost.value|curency}}</span>\n            </ion-label>\n            <ion-radio [value]=[m] (ionSelect)="setMethod(m)"></ion-radio>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </div>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="secondary" (click)="proceedOrder()" [disabled]="shared.shipping_lines.length==0">{{\'Next\'|translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\shipping-method\shipping-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__["a" /* ThemeableBrowser */]])
    ], ShippingMethodPage);
    return ShippingMethodPage;
}());

//# sourceMappingURL=shipping-method.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_coupon_coupon__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/











var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, http, config, shared, loading, alert, spinnerDialog, couponProvider, translate, actionSheetCtrl, iab, applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.alert = alert;
        this.spinnerDialog = spinnerDialog;
        this.couponProvider = couponProvider;
        this.translate = translate;
        this.actionSheetCtrl = actionSheetCtrl;
        this.iab = iab;
        this.applicationRef = applicationRef;
        this.discount = 0;
        this.productsTotal = 0;
        this.totalAmountWithDisocunt = 0;
        this.paymentMethods = [];
        this.selectedPaymentMethod = '';
        this.selectedPaymentMethodTitle = '';
        this.order = {};
        this.tax = 0;
        this.loaderTaxCalculating = true;
        this.loaderPaymentMethods = true;
        //============================================================================================  
        //placing order
        this.addOrder = function (nonce) {
            var customer_id = 0;
            if (this.shared.customerData.id != null)
                customer_id = this.shared.customerData.id;
            var token = null;
            if (this.shared.customerData.cookie != null)
                token = this.shared.customerData.cookie;
            var onePage = this.config.checkOutPage;
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
        //============================================================================================  
        //CAlculate Discount total
        this.calculateDiscount = function () {
            var total = 0;
            for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
                var value = _a[_i];
                total = total + parseFloat(value.subtotal);
            }
            this.productsTotal = total;
            this.discount = parseFloat(this.shared.productsTotal()) - total;
        };
        //============================================================================================  
        //CAlculate all total
        this.calculateTotal = function () {
            this.totalAmountWithDisocunt = (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax);
        };
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
    OrderPage.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString(), price: v.price.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //Object.assign(c, JSON.parse(data.body)
    OrderPage.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    OrderPage.prototype.getShippingLines = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.shipping_lines; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    OrderPage.prototype.selectPayment = function (p) {
        this.selectedPaymentMethod = p.id;
        this.selectedPaymentMethodTitle = p.title;
        this.scrollToBottom();
    };
    //========================================================================================
    OrderPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
            console.log("botton");
        }, 300);
    };
    OrderPage.prototype.ngOnInit = function () {
        //this.loading.show();
        var _this = this;
        this.config.Woocommerce.getAsync("payment_gateways" + "?" + this.config.productsArguments).then(function (data) {
            _this.loaderPaymentMethods = false;
            _this.paymentMethods = JSON.parse(data.body);
            _this.applicationRef.tick();
        });
    };
    OrderPage.prototype.openHomePage = function () {
        this.navCtrl.popToRoot();
    };
    OrderPage.prototype.calculateTax = function () {
        var _this = this;
        var data = {
            billing_info: this.shared.billing,
            shipping_info: this.shared.shipping,
            products: this.getProducts(),
            shipping_ids: this.shared.shipping_lines,
        };
        this.http.get(this.config.url + '/api/appsettings/ionic_get_tax/?insecure=cool&order=' + encodeURIComponent(JSON.stringify(data))).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loaderTaxCalculating = false;
            var res = parseFloat(JSON.stringify(data));
            if (res) {
                console.log("tax " + res);
            }
            else {
                console.log("tax err " + res);
                res = 0;
            }
            _this.tax = res;
            _this.calculateTotal();
            _this.applicationRef.tick();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], OrderPage.prototype, "content", void 0);
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"E:\app5\src\pages\order\order.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'Order\'| translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openHomePage()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-order">\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping.address_1+\', \'+order.shipping.city+\', \'+order.shipping.state+\' \'+order.shipping.postcode+\',\n      \'+order.shipping.country}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Billing Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.billing.address_1+\', \'+order.billing.city+\', \'+order.billing.state+\' \'+order.billing.postcode+\',\n      \'+order.billing.country}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping_lines[0].method_title}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="order-product">\n    <ion-card-header>\n      {{\'Products\'|translate}}\n    </ion-card-header>\n    <ion-card-content *ngFor="let product of order.line_items">\n      <ion-row>\n        <h3>{{product.name}}\n          <br>\n          <small *ngFor="let c of product.categories">{{c.name}}&nbsp;&nbsp;</small>\n        </h3>\n      </ion-row>\n      <ion-item>\n\n        <ion-thumbnail item-start>\n          <img src="{{product.image}}">\n        </ion-thumbnail>\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.price| curency}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>{{\'Quantity\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.quantity}}</ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let att of product.meta_data">\n          <ion-col col-6>{{att.key}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.value}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>{{\'SubTotal\'|translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.subtotal| curency}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Total\' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <strong>{{product.total | curency}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="shared.couponArray.length!=0">\n    <ion-card-header>\n      {{\'Coupons\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row *ngFor="let coupon of shared.couponArray">\n        <ion-col col-6>\n          {{coupon.code}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{coupon.amount| curency}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-card>\n    <ion-card-header>\n      {{\'SubTotal\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Products Price\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{productsTotal| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Shipping Cost\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{order.shipping_lines[0].total|curency}}\n        </ion-col>\n      </ion-row>\n\n\n\n\n\n\n      <ion-row>\n        <ion-col col-6>\n          {{\'Tax\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right *ngIf="!loaderTaxCalculating">\n          {{tax| curency}}\n        </ion-col>\n        <ion-col col-6 text-right *ngIf="loaderTaxCalculating">\n          <ion-spinner></ion-spinner>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Discount\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{discount| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <strong>{{\'Total\'|translate}}</strong>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <strong>{{totalAmountWithDisocunt| curency}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n\n\n\n    <ion-card-header>\n      {{\'Order Notes\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-input type="text" placeholder="{{\'Note to the buyer\'|translate}}" name="note" [(ngModel)]="customerNotes">\n        </ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card text-center>\n    <ion-spinner *ngIf="loaderPaymentMethods"></ion-spinner>\n    <ion-card-content *ngIf="!loaderPaymentMethods">\n      <ion-list>\n        <ion-item>\n          <ion-label color="dark">{{\'Payment\'|translate}}</ion-label>\n          <ion-select [(ngModel)]="payment_method" (ionChange)=" selectPayment(payment_method)"\n            okText="{{\'Ok\'|translate}}" cancelText="{{\'Cancel\'|translate}}">\n            <span *ngFor="let p of paymentMethods">\n              <ion-option [value]="p" *ngIf="p.enabled">{{p.title}}</ion-option>\n            </span>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button block class="button-footer" color="secondary" (click)="addOrder()"\n    *ngIf="selectedPaymentMethod!=\'\'">{{\'Continue\'|translate}}</button>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_8__providers_coupon_coupon__["a" /* CouponProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/





var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.slides = [
            { image: "assets/intro/1.gif", title: "Home Page", icon: "home", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/2.gif", title: "Category Page", icon: "cart", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/3.gif", title: "Shop Page", icon: "share", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/4.gif", title: "Cart Page", icon: "md-list-box", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/5.gif", title: "Order Page", icon: "calendar", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." }
        ];
        this.slides;
    }
    IntroPage.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_pages_home_home__["a" /* HomePage */]);
        }
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"E:\app5\src\pages\intro\intro.html"*/'<ion-content class="page-intro">\n  <ion-slides pager="true" dir="{{shared.dir}}">\n    <ion-slide *ngFor="let s of slides; let i = index" padding>\n      <div class="page-intro-image">\n        <img class="image" src="{{s.image}}">\n      </div>\n      <ion-icon name="{{s.icon}}"></ion-icon>\n      <h2 class="slide-title">{{s.title|translate}}</h2>\n      <p>{{s.description}}</p>\n      <button ion-button outline small color="secondary" *ngIf="i+1!=slides.length" (click)="openHomePage()">{{ \'Skip\' | translate }}</button>\n      <button ion-button outline small color="secondary" *ngIf="i+1==slides.length" (click)="openHomePage()">{{ \'Done\' | translate }}</button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(http, config, loading, shared, navCtrl, alert, navParams) {
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.navParams = navParams;
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
        this.errorMessage = '';
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        if (this.config.googleMapId != "")
            this.loadMap();
    };
    // <!-- 2.0 updates -->
    ContactUsPage.prototype.submit = function () {
        var _this = this;
        this.loading.autoHide(2000);
        var data = {};
        data = this.contact;
        this.http.get(this.config.url + '/api/appusers/send_mail/?insecure=cool&email=' + this.contact.email + '&name=' + this.contact.name + '&message=' + this.contact.message).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.contact.name = '';
            _this.contact.email = '';
            _this.contact.message = '';
            _this.errorMessage = data;
        }, function (error) {
            _this.errorMessage = JSON.parse(error._body).error;
            console.log(_this.errorMessage);
        });
    };
    ;
    ContactUsPage.prototype.loadMap = function () {
        var myApiKey = this.config.googleMapId;
        var lat = parseFloat(this.config.latitude);
        var lng = parseFloat(this.config.longitude);
        var content = this.config.address;
        var parentElement = this.mapElement.nativeElement;
        var script = document.createElement('script');
        try {
            script.src = "https://maps.googleapis.com/maps/api/js?key=" + myApiKey;
            script.async = true;
            script.defer = true;
            script.onload = function () {
                var map = new google.maps.Map(parentElement, {
                    center: { lat: lat, lng: lng },
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                var marker = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: map.getCenter()
                });
                var infoWindow = new google.maps.InfoWindow({
                    content: content
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open(map, marker);
                });
            };
            this.mapElement.nativeElement.insertBefore(script, null);
        }
        catch (error) {
        }
    };
    ContactUsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ContactUsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContactUsPage.prototype, "mapElement", void 0);
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"E:\app5\src\pages\contact-us\contact-us.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'Contact Us\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="page-contact-us">\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-icon name="pin"></ion-icon>\n\n          <div class="card-content">{{config.address}}</div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-icon name="mail"></ion-icon>\n\n          <div class="card-content">{{config.email}}</div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-icon name="call"></ion-icon>\n\n          <div class="card-content">{{config.phoneNo}}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <form #contactForm="ngForm" (ngSubmit)="submit()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="{{\'Name\'|translate}}" name="name" [(ngModel)]="contact.name" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-input type="email" placeholder="{{\'Email\'|translate}}" name="email" [(ngModel)]="contact.email" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="{{\'Your Messsage\'|translate}}" name="message" [(ngModel)]="contact.message" required></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <!-- 2.0 updates -->\n\n        <ion-col col-12>\n\n          <label *ngIf="errorMessage!=\'\'">\n\n            <span>{{errorMessage}}</span>\n\n          </label>\n\n        </ion-col>\n\n        <button ion-button block color="secondary" type="submit" [disabled]="!contactForm.form.valid">{{\'Send\'|translate}}</button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__term_services_term_services__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__refund_policy_refund_policy__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/












var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, shared, modalCtrl, config, navParams, loading, iab, translate) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.navParams = navParams;
        this.loading = loading;
        this.iab = iab;
        console.log(this.config.aboutUs);
    }
    AboutUsPage.prototype.showModal = function (value) {
        if (value == 'privacyPolicy') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
            modal.present();
        }
        else if (value == 'termServices') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__term_services_term_services__["a" /* TermServicesPage */]);
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
            modal.present();
        }
    };
    AboutUsPage.prototype.openSite = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    };
    AboutUsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
    };
    AboutUsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__search_search__["a" /* SearchPage */]);
    };
    AboutUsPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"E:\app5\src\pages\about-us\about-us.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  \n\n      <ion-title>\n\n        {{\'About Us\'| translate }}\n\n      </ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="openSearch()">\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n          <ion-icon name="cart">\n\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n          </ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content class="page-about-us" padding>\n\n  <div>Books of Prayer is a series of books dedicated to teaching people in various stages of life how to pray. These books will teach you why, how, who and when to pray.</div>\n\n \n\n</ion-content>\n\n<!-- <ion-footer *ngIf="config.footerShowHide==1">\n\n  <footer ></footer>\n\n</ion-footer> -->'/*ion-inline-end:"E:\app5\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var SubCategoriesPage = /** @class */ (function () {
    function SubCategoriesPage(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategoriesPage_1 = SubCategoriesPage;
    SubCategoriesPage.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategoriesPage_1, { 'parent': id });
    };
    SubCategoriesPage.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategoriesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategoriesPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategoriesPage = SubCategoriesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\sub-categories\sub-categories.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'Sub Categories\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content text-center>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let c of subcategories" (click)="openProducts(c.id)" class="animated flipInX">\n      	\n          <ion-card >\n          	<div class="category-icon"><img *ngIf="c.image" src="{{c.image.src}}" /></div>\n            <div class="cateogry-content">\n                <div class="categories-title">{{c.name}}</div>\n                <div class="categories-subtitle">{{c.count}} {{\'Products\'| translate }} </div>\n            </div>\n\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n    <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n</button>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\sub-categories\sub-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategoriesPage);
    return SubCategoriesPage;
    var SubCategoriesPage_1;
}());

//# sourceMappingURL=sub-categories.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_themeable_browser__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/










var OrderDetailPage = /** @class */ (function () {
    function OrderDetailPage(navCtrl, config, navParams, http, shared, alert, loading, spinnerDialog, //updates
    themeableBrowser) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.navParams = navParams;
        this.http = http;
        this.shared = shared;
        this.alert = alert;
        this.loading = loading;
        this.spinnerDialog = spinnerDialog;
        this.themeableBrowser = themeableBrowser;
        this.order = {};
        this.order = this.navParams.get('data');
        //console.log(this.order);
    }
    ;
    OrderDetailPage.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            _this.loading.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__["a" /* ProductDetailPage */], { data: JSON.parse(data.body) });
        }, function (err) {
            _this.loading.hide();
            _this.alert.show("Item not Available!");
            console.log(err);
        });
        this.shared.addToRecent(id);
    };
    OrderDetailPage.prototype.cancelOrder = function () {
        var _this = this;
        var orderCreateDate = new Date(this.order.date_created);
        var orderSeconds = orderCreateDate.getTime() / 1000;
        var timeknow = new Date();
        var currentTime = timeknow.getTime() / 1000;
        var timeToCancelOrder = this.config.cancelOrderTime * 3600;
        var timeDiff = (currentTime - orderSeconds);
        //console.log(timeDiff + " " + timeToCancelOrder);
        console.log(timeToCancelOrder - timeDiff);
        var result = timeToCancelOrder - timeDiff;
        if (result < 0)
            this.shared.toast("Order Cancelation Time Expires!");
        else {
            this.loading.show();
            var dat = {
                status: 'cancelled'
            };
            this.config.Woocommerce.putAsync("orders/" + this.order.id, dat).then(function (data) {
                _this.loading.hide();
                _this.navCtrl.pop();
                _this.shared.toast("Order Cancelled");
            }, function (err) {
                _this.loading.hide();
                _this.shared.toast("Server Error");
                console.log(err);
            });
        }
    };
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        this.order = this.navParams.get('data');
    };
    OrderDetailPage.prototype.openTrackingPage = function () {
        var _this = this;
        var options = {
            statusbar: {
                color: this.shared.headerHexColor
            },
            toolbar: {
                height: 44,
                color: this.shared.headerHexColor
            },
            closeButton: {
                wwwImage: 'assets/close.png',
                align: 'right',
                event: 'closePressed'
            },
            backButton: {
                wwwImage: 'assets/back.png',
                align: 'left'
                //event: 'closePressed'
            },
            backButtonCanClose: true,
        };
        var id = this.getTrackingId();
        var b = this.themeableBrowser.create(this.config.trackingUrl + "/" + id, '_blank', options);
        var orderPlaced = false;
        b.on('loadstart').subscribe(function (res) {
            _this.spinnerDialog.show("", "", true, { overlayOpacity: 1.00 });
            setTimeout(function () {
                _this.spinnerDialog.hide();
            }, 3000);
        });
        b.on('closePressed').subscribe(function (res) {
            b.close();
        });
        b.on('loadstop').subscribe(function (res) {
            _this.spinnerDialog.hide();
            console.log('loadstop');
        });
    };
    OrderDetailPage.prototype.getTrackingId = function () {
        var id = "";
        for (var _i = 0, _a = this.order.meta_data; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v.key == "_aftership_tracking_number") {
                id = v.value;
            }
        }
        return id;
    };
    OrderDetailPage.prototype.addCurrecny = function (v) {
        return this.order.currency + " " + v;
    };
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-detail',template:/*ion-inline-start:"E:\app5\src\pages\order-detail\order-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Order Detail\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-order-detail">\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping.address_1+\', \'+order.shipping.city+\', \'+order.shipping.state+\' \'+order.shipping.postcode+\',\n      \'+order.shipping.country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Billing Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.billing.address_1+\', \'+order.billing.city+\', \'+order.billing.state+\' \'+order.billing.postcode+\',\n      \'+order.billing.country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let s of order.shipping_lines">\n    <ion-card-header>\n      {{\'Shipping Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{s.method_title}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping\'|translate}} {{\'Total\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{addCurrecny(order.shipping_total)}}\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class="order-product">\n    <ion-card-header>\n      {{\'Products\'|translate}}\n    </ion-card-header>\n    <ion-card-content *ngFor="let product of order.line_items">\n      <ion-row>\n        <h3>{{product.name}}\n          <br>\n          <small>{{product.categories_name}}</small>\n        </h3>\n      </ion-row>\n      <ion-item>\n\n\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{addCurrecny(product.price)}}</ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let att of product.meta_data">\n          <ion-col col-6>{{att.key}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.value}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>{{\'Quantity\'|translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.quantity}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Total\' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <strong>{{addCurrecny(product.total)}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Price Detail\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Shipping\'|translate}} {{\'Tax\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{addCurrecny(order.shipping_tax) }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Shipping\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{addCurrecny(order.shipping_total)}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Tax\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{addCurrecny(order.discount_total)}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Total\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{addCurrecny(order.total)}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.coupon_lines!=0">\n    <ion-card-header>\n      {{\'Coupons Applied\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Coupon Code\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{\'Coupon Price\'|translate}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let c of order.coupon_lines">\n        <ion-col col-6>\n          {{c.code}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{addCurrecny(c.discount)}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.customer_note!=\'\'">\n    <ion-card-header>\n      {{\'Order Notes\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.customer_note}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="getTrackingId()!=\'\'">\n    <ion-card-header>\n      {{\'Track Order\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{getTrackingId()}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          <button ion-button color="secondary" icon-end (click)="openTrackingPage()">{{\'Track\'|translate}}\n            <ion-icon name="locate"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Payment Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.payment_method_title}}\n    </ion-card-content>\n  </ion-card>\n  <ion-item\n    *ngIf="order.status!=\'cancelled\' && order.status!=\'completed\' && order.status!=\'refunded\' && order.status!=\'failed\' && order.status!=\'processing\'">\n    <button *ngIf="config.orderCancelButton" ion-button full color="danger" (click)="cancelOrder()">\n      {{\'Cancel Order\'|translate}}</button>\n  </ion-item>\n</ion-content>\n\n<!-- <option value="wc-pending" selected="selected">Pending payment</option>\n<option value="wc-processing">Processing</option>\n<option value="wc-on-hold">On hold</option>\n<option value="wc-completed">Completed</option>\n<option value="wc-cancelled">Cancelled</option>\n<option value="wc-refunded">Refunded</option>\n<option value="wc-failed">Failed</option> -->'/*ion-inline-end:"E:\app5\src\pages\order-detail\order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_themeable_browser__["a" /* ThemeableBrowser */]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_db_service_db_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_books_service_books_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_listener__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_details_modal_book_details_modal__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BookPage = /** @class */ (function () {
    function BookPage(popoverCtrl, modalbook, navCtrl, toastCtrl, platform, events, navParams, dbService, alertCtrl, ref) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.modalbook = modalbook;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.events = events;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.ref = ref;
        this.bookmarks = [];
        this.highlights = [];
        this.params = { bookmarked: false, excerpt: "", position: undefined, showToolbars: true };
        this.toc = [];
        this.bookParam = this.navParams.get('book');
        this.platform.ready().then(function () {
            _this.book = ePub(_this.bookParam.file);
            _this.book.ready.then(function () {
                _this.book.locations.generate(1500).then(function (locations) {
                    var currentLocation = _this.rendition.currentLocation();
                    _this.params.position = currentLocation.start ? _this.book.locations.percentageFromCfi(currentLocation.start.cfi) : 0.001;
                    // console.log("locations", locations);
                    // this.ref.detectChanges();
                });
            });
            _this.rendition = _this.book.renderTo("book", {
                spread: "always"
            });
            _this.dbService.getlastLocationByBookId(_this.bookParam.id).then(function (location) {
                _this.lastlocation = location || {
                    bookid: _this.bookParam.id
                };
                _this.rendition.display(_this.lastlocation.location).then(function () {
                    _this.dbService.updateOpenedBook(_this.bookParam.id);
                    _this._applyStyle();
                    _this._appendDbHighlights();
                });
            });
            _this._registerThemes();
            _this.book.loaded.navigation.then(function (navigation) {
                _this.toc = navigation.toc;
            });
            _this.rendition.on('relocated', function (location) {
                _this.lastlocation.location = _this.rendition.location.start.cfi;
                _this._addlastLocation();
                var currentLocation = _this.rendition.currentLocation();
                _this.params.position = _this.params.position != undefined ? _this.book.locations.percentageFromCfi(currentLocation.start.cfi) : undefined;
                _this._getCurrentLocationExcerpt(location);
                _this._checkIfBookmarked(location);
                // console.log(this.rendition.manager.container.firstChild.firstChild.contentDocument);
                _this._addSwipeEvents(_this.rendition.manager.container.firstChild.firstChild.contentDocument);
                _this.ref.detectChanges();
            });
            // Apply a class to selected text
            _this.rendition.on("selected", function (cfiRange, contents) {
                _this.addHighlight(cfiRange, contents);
            });
        });
        this._subscribeToEvents();
    }
    BookPage.prototype._applyStyle = function () {
        var _this = this;
        this.dbService.getAll(['theme', 'font-size', 'font-family']).then(function (keysVals) {
            if (keysVals != undefined) {
                keysVals.theme && _this.rendition.themes.select(keysVals.theme);
                keysVals['font-family'] && _this.rendition.themes.override("font-family", keysVals['font-family']);
                keysVals['font-size'] && _this.rendition.themes.override("font-size", keysVals['font-size']);
            }
        });
    };
    BookPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dbService.getBookmarksByBookId(this.bookParam.id).then(function (bookmarks) {
            _this.bookmarks = bookmarks || [];
            console.log(_this.bookmarks);
        });
    };
    BookPage.prototype._appendDbHighlights = function () {
        var _this = this;
        this.dbService.getHighlightsByBookId(this.bookParam.id).then(function (highlights) {
            _this.highlights = highlights;
            highlights.forEach(function (highlight) {
                _this.rendition.annotations.highlight(highlight.cfiRange, { text: highlight.text }, function (e) {
                    _this.highlightPopup(e);
                });
            });
        });
    };
    BookPage.prototype._addlastLocation = function () {
        this.dbService.addlastLocation(this.lastlocation);
    };
    BookPage.prototype.addHighlight = function (cfiRange, contents) {
        var _this = this;
        this.rendition.annotations.highlight(cfiRange, { text: contents.window.getSelection().toString() }, function (e) {
            _this.highlightPopup(e);
            console.log(e);
        });
        var ranges = cfiRange.split(',/');
        var highlight = {
            bookid: this.bookParam.id,
            text: contents.window.getSelection().toString(),
            location: ranges[0] + "/" + ranges[1] + ")",
            position: this.params.position,
            cfiRange: cfiRange
        };
        this.highlights.push(highlight);
        this.dbService.addHighlight(highlight);
        contents.window.getSelection().removeAllRanges();
    };
    BookPage.prototype.highlightPopup = function (e) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Highlight',
            message: e.target.dataset.text,
            buttons: [
                {
                    text: "Close",
                    role: "cancel",
                    handler: function (data) {
                        console.log('Cancel clicked');
                    },
                },
                {
                    text: "Delete",
                    handler: function () {
                        var highlight = new __WEBPACK_IMPORTED_MODULE_3__providers_books_service_books_service__["c" /* Highlight */]();
                        highlight.bookid = _this.bookParam.id;
                        highlight.cfiRange = e.target.dataset.epubcfi;
                        highlight.text = e.target.dataset.text;
                        _this.events.publish('delete:highlight', highlight);
                        console.log('Delete clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    BookPage.prototype.goToLocation = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Go To Location',
            message: "Enter a location in % in order to navigate to",
            inputs: [
                {
                    name: 'location',
                    placeholder: 'Location in %'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Go To',
                    handler: function (data) {
                        _this.rendition.display(_this.book.locations.cfiFromPercentage(data.location / 100));
                    }
                }
            ]
        });
        prompt.present();
    };
    BookPage.prototype._registerThemes = function () {
        this.rendition.themes.register("white", { "body": { "background-color": 'rgb(255, 255, 255)', "color": "rgb(0,0,0)" } });
        this.rendition.themes.register("tan", { "body": { "background-color": "rgb(249,241,228)", "color": "rgb(0,0,0)" } });
        this.rendition.themes.register("grey", { "body": { "background-color": "rgb(76,75,80)", "color": "rgb(255,255,255)" } });
        this.rendition.themes.register("black", { "body": { "background-color": "rgb(0,0,0)", "color": "rgb(255,255,255)" } });
    };
    BookPage.prototype._getCurrentLocationExcerpt = function (location) {
        var startCfi = new ePub.CFI(location.start.cfi);
        var endCfi = new ePub.CFI(location.end.cfi);
        var startRange = startCfi.toRange(this.rendition.manager.container.children[0].children[0].contentDocument);
        var endRange = endCfi.toRange(this.rendition.manager.container.children[0].children[0].contentDocument);
        var fullRange = document.createRange();
        if (startRange) {
            fullRange.setStart(startRange.startContainer, startRange.startOffset);
        }
        if (endRange) {
            fullRange.setEnd(endRange.startContainer, endRange.startOffset);
        }
        this.params.excerpt = fullRange.toString();
    };
    BookPage.prototype._addSwipeEvents = function (renderer) {
        var _this = this;
        this.eventListener = new __WEBPACK_IMPORTED_MODULE_4__event_listener__["a" /* EventListener */](renderer);
        // this.eventListener.removeContextMenu();
        this.eventListener.onLeft = function () { _this.prev(); };
        this.eventListener.onRight = function () { _this.next(); };
        this.eventListener.onCenter = function () { return _this.toggleToolbars(); };
        this.eventListener.run();
    };
    BookPage.prototype._subscribeToEvents = function () {
        var _this = this;
        this.events.subscribe('select:location', function (location) {
            _this.rendition.display(location);
        });
        this.events.subscribe('delete:highlight', function (highlight) {
            _this.dbService.deleteHighlight(highlight);
            _this.rendition.annotations.remove(highlight.cfiRange);
            var index = _this.highlights.map(function (highlights) { return highlights.cfiRange; }).indexOf(highlight.cfiRange);
            _this.highlights.splice(index, 1);
        });
        this.events.subscribe('delete:bookmark', function (bookmark) {
            var curentLocation = _this.rendition.location.start.cfi;
            if (curentLocation == bookmark.location) {
                _this.params.bookmarked = !_this.params.bookmarked;
            }
            _this.removeBookmark(bookmark);
        });
        // settings: change style
        this.events.subscribe('select:theme', function (theme) {
            _this.rendition.themes.select(theme);
            _this.dbService.set('theme', theme);
        });
        this.events.subscribe('select:font-family', function (family) {
            _this.rendition.themes.override("font-family", family);
            _this.dbService.set('font-family', family);
        });
        this.events.subscribe('select:font-size', function (size) {
            _this.rendition.themes.override("font-size", size);
            _this.dbService.set('font-size', size);
        });
    };
    BookPage.prototype._checkIfBookmarked = function (location) {
        var locations = this.bookmarks.map(function (bookmark) { return bookmark.location; });
        this.params.bookmarked = locations.indexOf(location.start.cfi) > -1;
    };
    BookPage.prototype.prev = function () {
        this.rendition.prev();
    };
    BookPage.prototype.next = function () {
        this.rendition.next();
    };
    BookPage.prototype.changePage = function (event) {
        if (event.velocityX < 0) {
            this.next();
        }
        else {
            this.prev();
        }
    };
    BookPage.prototype.settings = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__setting_setting__["a" /* SettingPage */], {});
        popover.present({ ev: ev });
    };
    BookPage.prototype.toggleToolbars = function () {
        this.params.showToolbars = !this.params.showToolbars;
        this.ref.detectChanges();
    };
    BookPage.prototype.backToBookList = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: "back" });
    };
    BookPage.prototype.openModalBookDetails = function () {
        var _this = this;
        var myModalBook = this.modalbook.create(__WEBPACK_IMPORTED_MODULE_7__book_details_modal_book_details_modal__["a" /* BookDetailsModalPage */], {
            toc: this.toc,
            bookmarks: this.bookmarks,
            highlights: this.highlights
        });
        myModalBook.onDidDismiss(function () {
            _this.ionViewWillEnter();
        });
        myModalBook.present();
    };
    BookPage.prototype.bookmarking = function () {
        var curentLocation = this.rendition.location.start.cfi;
        var bookmark = {
            bookid: this.bookParam.id,
            location: curentLocation,
            position: this.params.position,
            excerpt: this.params.excerpt
        };
        if (!this.params.bookmarked) {
            this.bookmarks.push(bookmark);
            this.dbService.addBookMark(bookmark);
        }
        else {
            this.removeBookmark(bookmark);
        }
        this.params.bookmarked = !this.params.bookmarked;
        var toast = this.toastCtrl.create({
            duration: 1000,
            position: 'middle',
            cssClass: this.params.bookmarked ? 'addBookmark' : 'removeBookmark'
        });
        toast.present();
    };
    BookPage.prototype.removeBookmark = function (bookmark) {
        var index = this.bookmarks.map(function (bookmark) { return bookmark.location; }).indexOf(bookmark.location);
        this.bookmarks.splice(index, 1);
        this.dbService.deleteBookmark(bookmark);
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"E:\app5\src\pages\book\book.html"*/'<ion-header *ngIf="params.showToolbars">\n  <ion-navbar color="wbprimary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backToBookList()">\n        <ion-icon name="md-arrow-back">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="openModalBookDetails()">\n        <ion-icon name="md-list-box"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (tap)="settings($event)">\n        <ion-icon name="ios-color-palette"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="bookmarking(\'middle\')">\n        <ion-icon [name]="params.bookmarked ? \'ios-bookmark\':\'ios-bookmark-outline\'"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="book" no-bounce center>\n  \n</ion-content>\n\n\n<ion-footer no-lines no-padding *ngIf="params.showToolbars">\n  <ion-toolbar>\n    <ion-spinner *ngIf="params.position==undefined" name="bubbles"></ion-spinner>\n    <div *ngIf="params.position!=undefined" class="filled-progress" (click)="goToLocation()">\n      <span style="color: white;">{{params.position*100 | number:\'1.0-2\'}}%</span>\n      <div class="progress" [style.width]="(params.position*100)+\'%\'"></div>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\book\book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_db_service_db_service__["a" /* DbServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
        if (this.navParams.data) {
            var backgroundColor = this.navParams.data.backgroundColor;
            this.backgroundColor = this._getColorName(backgroundColor);
            this.fontSize = this.navParams.data.fontSize;
            if (this.navParams.data.fontFamily) {
                this.fontFamily = this.navParams.data.fontFamily.replace(/'/g, ""); // TODO Huh?
            }
            else {
                //TODO get the default font-family
            }
        }
    }
    SettingPage.prototype._getColorName = function (color) {
        if (!color)
            return 'white';
        var colorName = 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == color) {
                colorName = key;
            }
        }
        return colorName;
    };
    SettingPage.prototype.changeBackground = function (backgroundColor) {
        this.backgroundColor = backgroundColor;
        this.events.publish('select:theme', backgroundColor);
    };
    SettingPage.prototype.changeFontSize = function (direction) {
        var size = this.fontSize ? this.fontSize : '1em';
        var sizeValue = +size.replace('em', '');
        var newSizeValue = direction == 'larger' ? sizeValue += 0.1 : sizeValue -= 0.1;
        if (newSizeValue >= 0.4 && newSizeValue <= 2) { // TODO this should be visible in the UI (disable button)
            this.fontSize = newSizeValue + "em";
            this.events.publish('select:font-size', this.fontSize);
        }
    };
    SettingPage.prototype.changeFontFamily = function () {
        if (this.fontFamily) {
            this.events.publish('select:font-family', this.fontFamily);
        }
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"E:\app5\src\pages\setting\setting.html"*/'<ion-row>\n  <ion-col>\n\n    <button ion-item detail-none lass="text-button text-smaller" (click)="changeFontSize(\'smaller\')" class="text-button">\n      <ion-icon name="md-remove">\n      </ion-icon>\n    </button>\n  </ion-col>\n  <ion-col>\n    <button ion-item detail-none (click)="changeFontSize(\'larger\')" class="text-button">\n      <ion-icon name="md-add">\n      </ion-icon>\n    </button>\n  </ion-col>\n</ion-row>\n<ion-row class="row-dots">\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'white\')" class="dot-white" [class.selected]="background == \'white\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'tan\')" class="dot-tan" [class.selected]="background == \'tan\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'grey\')" class="dot-grey" [class.selected]="background == \'grey\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'black\')" class="dot-black" [class.selected]="background == \'black\'"></button>\n  </ion-col>\n</ion-row>\n\n<ion-list radio-group [(ngModel)]="fontFamily" (ionChange)="changeFontFamily()" class="settings-page">\n  <ion-item class="text-athelas">\n    <ion-label>Athelas</ion-label>\n    <ion-radio value="Athelas"></ion-radio>\n  </ion-item>\n  <ion-item class="text-charter">\n    <ion-label>Charter</ion-label>\n    <ion-radio value="Charter"></ion-radio>\n  </ion-item>\n  <ion-item class="text-iowan">\n    <ion-label>Iowan</ion-label>\n    <ion-radio value="Iowan"></ion-radio>\n  </ion-item>\n  <ion-item class="text-palatino">\n    <ion-label>Palatino</ion-label>\n    <ion-radio value="Palatino"></ion-radio>\n  </ion-item>\n  <ion-item class="text-san-francisco">\n    <ion-label>San Francisco</ion-label>\n    <ion-radio value="San Francisco"></ion-radio>\n  </ion-item>\n  <ion-item class="text-seravek">\n    <ion-label>Seravek</ion-label>\n    <ion-radio value="Seravek"></ion-radio>\n  </ion-item>\n  <ion-item class="text-times-new-roman">\n    <ion-label>Times New Roman</ion-label>\n    <ion-radio value="Times New Roman"></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"E:\app5\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/







var NewsListPage = /** @class */ (function () {
    function NewsListPage(navCtrl, navParams, http, shared, config, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.page = 1;
        this.posts = new Array;
        this.loadingServerData = true;
        this.name = this.navParams.get('name');
        this.id = this.navParams.get('id');
        this.getPosts();
    }
    NewsListPage.prototype.showPostDetail = function (post) {
        this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__["a" /* NewsDetailPage */], { 'post': post });
    };
    ;
    NewsListPage.prototype.getImagePost = function (post) {
        post.image = "assets/placeholder.png";
        if (post._links["wp:featuredmedia"])
            this.http.get(post._links["wp:featuredmedia"][0].href).map(function (res) { return res.json(); }).subscribe(function (data) {
                post.image = data.source_url;
            });
    };
    //============================================================================================  
    //getting list of posts
    NewsListPage.prototype.getPosts = function () {
        var _this = this;
        if (this.page == 1) {
            this.loading.show();
            this.loadingServerData = false;
        }
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + this.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.infinite.complete(); //stopping infinite scroll loader
            if (_this.page == 1) {
                _this.posts = [];
                _this.infinite.enable(true);
                _this.loading.hide();
            }
            _this.page++;
            data.forEach(function (value, index) {
                _this.getImagePost(value);
                _this.posts.push(value);
            });
            if (data.length < 9) { // if we get less than 10 products then infinite scroll will de disabled
                _this.infinite.enable(false); //disabling infinite scroll
                if (_this.posts.length != 0) {
                    // this.shared.toast("All Posts Loaded!");
                }
            }
            _this.loadingServerData = true;
        }, function (err) {
            _this.infinite.enable(false);
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], NewsListPage.prototype, "infinite", void 0);
    NewsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-list',template:/*ion-inline-start:"E:\app5\src\pages\news-list\news-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'News List\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-news-list">\n  <ion-grid class="page-empty" *ngIf="posts.length==0 && loadingServerData">\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="ionic"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'No Posts Avaialable\'| translate}}</h4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item *ngFor="let post of posts" (click)="showPostDetail(post)">\n      <ion-thumbnail item-start>\n        <ion-spinner *ngIf="!post.image"></ion-spinner>\n        <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n      </ion-thumbnail>\n      <h2>{{post.title.rendered}}\n        <br>\n        <small>\n          <ion-icon name="time"></ion-icon>{{post.date}}</small>\n      </h2>\n      <div class="post-excerpt" [innerHTML]="post.content.rendered"></div>\n    </ion-item>\n    <ion-infinite-scroll #infinite (ionInfinite)="getPosts()">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\news-list\news-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], NewsListPage);
    return NewsListPage;
}());

//# sourceMappingURL=news-list.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var SubCategories2Page = /** @class */ (function () {
    function SubCategories2Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories2Page_1 = SubCategories2Page;
    SubCategories2Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories2Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories2Page_1, { 'parent': id });
    };
    SubCategories2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories2Page = SubCategories2Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\sub-categories2\sub-categories2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'Sub Categories\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-center>\n  <ion-list>\n    <div *ngFor="let c of shared.subCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-item *ngIf="c.parent==parent">\n        <ion-thumbnail item-start>\n          <img *ngIf="c.image" src="{{c.image.src}}">\n        </ion-thumbnail>\n        <h2>{{c.name}}\n          <br>\n          <small>{{c.count}} {{\'Products\'| translate }} </small>\n        </h2>\n      </ion-item>\n    </div>\n  </ion-list>\n  <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n    <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\sub-categories2\sub-categories2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories2Page);
    return SubCategories2Page;
    var SubCategories2Page_1;
}());

//# sourceMappingURL=sub-categories2.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var SubCategories4Page = /** @class */ (function () {
    function SubCategories4Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategories4Page_1 = SubCategories4Page;
    SubCategories4Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories4Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories4Page_1, { 'parent': id });
    };
    SubCategories4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories4Page = SubCategories4Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\sub-categories4\sub-categories4.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content text-center class="card-background-page">\n  <ion-grid>\n      <ion-row>\n        <ion-col col-6  *ngFor="let c of subcategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n            <ion-card >\n              <img *ngIf="c.image" src="{{c.image.src}}"/>\n              <div class="categories-title">{{c.name}}</div>\n              <div class="categories-subtitle">{{c.count}} {{\'Products\'| translate }} </div>\n            </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n      <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\sub-categories4\sub-categories4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories4Page);
    return SubCategories4Page;
    var SubCategories4Page_1;
}());

//# sourceMappingURL=sub-categories4.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var SubCategories3Page = /** @class */ (function () {
    function SubCategories3Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories3Page_1 = SubCategories3Page;
    SubCategories3Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories3Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories3Page_1, { 'parent': id });
    };
    SubCategories3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories3Page = SubCategories3Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\sub-categories3\sub-categories3.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content text-center class="card-background-page">\n  \n  <ion-list>\n    <div *ngFor="let c of shared.subCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-item *ngIf="c.parent==parent">\n        <ion-avatar item-start>\n          <img *ngIf="c.image" src="{{c.image.src}}">\n        </ion-avatar>\n        <h2>{{c.name}}<br><small>{{c.count}} {{\'Products\'| translate }} </small></h2>\n      </ion-item>\n    </div>\n    </ion-list>\n\n    <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n      <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\sub-categories3\sub-categories3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories3Page);
    return SubCategories3Page;
    var SubCategories3Page_1;
}());

//# sourceMappingURL=sub-categories3.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var SubCategories6Page = /** @class */ (function () {
    function SubCategories6Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategories6Page_1 = SubCategories6Page;
    SubCategories6Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories6Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories6Page_1, { 'parent': id });
    };
    SubCategories6Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories6Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories6Page = SubCategories6Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories6',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\sub-categories6\sub-categories6.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content class="page-sub-categories6" text-center>\n  <ion-card *ngFor="let c of subcategories" (click)="openProducts(c.id)" class="animated flipInX">\n    <img *ngIf="c.image" src="{{c.image.src}}" />\n    <div class="categories-title">{{c.name}}</div>\n    <div class="categories-subtitle">{{c.count}} {{\'Products\'| translate }} </div>\n  </ion-card>\n  <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n    <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n</button>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\sub-categories6\sub-categories6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories6Page);
    return SubCategories6Page;
    var SubCategories6Page_1;
}());

//# sourceMappingURL=sub-categories6.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_country_select_country__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__select_zones_select_zones__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the AddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressesPage = /** @class */ (function () {
    function AddressesPage(navCtrl, shared, modalCtrl, config, navParams, storage, events, loading, location, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.loading = loading;
        this.location = location;
        this.billing = {
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
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
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
        this.shippingCountryName = "";
        this.shippingStateName = "";
        //when country is selected
        events.subscribe('countryChange', function (page, value) {
            if (page == "shippingUpdate") {
                _this.shippingCountryName = value.name;
                _this.shipping.country = value.value;
                _this.shipping.state = null;
                _this.shipping.city = null;
                _this.shipping.postcode = null;
                _this.shippingStateName = "";
            }
            if (page == "billingUpdate") {
                _this.billingCountryName = value.name;
                _this.billing.country = value.value;
                _this.billing.state = null;
                _this.billing.city = null;
                _this.billing.postcode = null;
                _this.billingStateName = "";
            }
        });
        //state is selected
        events.subscribe('stateChange', function (page, value) {
            if (page == "shippingUpdate") {
                if (value == 'other') {
                    console.log(page + value);
                    _this.shipping.state = 'other';
                    _this.shippingStateName = "other";
                }
                else {
                    _this.shipping.state = value.value;
                    _this.shippingStateName = value.name;
                }
            }
            if (page == "billingUpdate") {
                if (value == 'other') {
                    _this.billing.state = 'other';
                    _this.billingStateName = "other";
                }
                else {
                    _this.billing.state = value.value;
                    _this.billingStateName = value.name;
                }
            }
        });
    }
    AddressesPage.prototype.updateBillingAddress = function () {
        var _this = this;
        this.loading.show();
        var d = {
            billing: this.billing
        };
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, d).then(function (data) {
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            _this.shared.customerData.billing = dat.billing;
            _this.storage.set('customerData', _this.shared.customerData);
            _this.shared.toast("Billing Address Updated");
        });
    };
    AddressesPage.prototype.updateShippingAddress = function () {
        var _this = this;
        this.loading.show();
        var d = {
            shipping: this.shipping
        };
        console.log(d);
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, d).then(function (data) {
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            _this.shared.customerData.shipping = dat.shipping;
            console.log("customer data");
            console.log(_this.shared.customerData);
            _this.storage.set('customerData', _this.shared.customerData);
            _this.shared.toast("Shipping Address Updated");
        });
    };
    AddressesPage.prototype.selectCountryPage = function (value) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__select_country_select_country__["a" /* SelectCountryPage */], { page: value });
        modal.present();
    };
    AddressesPage.prototype.selectZonePage = function (value) {
        var id = (value == "shippingUpdate") ? this.shipping.country : this.billing.country;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__select_zones_select_zones__["a" /* SelectZonesPage */], { page: value, id: id });
        modal.present();
    };
    AddressesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
    };
    AddressesPage.prototype.ionViewWillEnter = function () {
        if (this.shared.customerData.id != null) {
            this.shipping = this.shared.customerData.shipping;
            this.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
            this.billing = this.shared.customerData.billing;
            this.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
        }
    };
    AddressesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addresses',template:/*ion-inline-start:"E:\app5\src\pages\address-pages\addresses\addresses.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{\'Address\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>Ï\n\n<ion-content>\n  <form #shippingForm="ngForm">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-list-header>\n            {{\'Shipping Address\'| translate }}\n          </ion-list-header>\n          <ion-item>\n            <ion-label floating>{{\'First Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_firstname" [(ngModel)]="shipping.first_name" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_lastname" [(ngModel)]="shipping.last_name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Company\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="company" [(ngModel)]="shipping.company"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Address\'|translate}} 1</ion-label>\n            <ion-input type="text" placeholder="" name="address" [(ngModel)]="shipping.address_1" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Address\'|translate}} 2</ion-label>\n            <ion-input type="text" placeholder="" name="address2" [(ngModel)]="shipping.address_2"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Country\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_country" (tap)="selectCountryPage(\'shippingUpdate\')"\n              [readonly]="true" [(ngModel)]="shippingCountryName" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'State\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" required name="shipping_zone" (tap)="selectZonePage(\'shippingUpdate\')"\n              [readonly]="true" [(ngModel)]="shippingStateName"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'City\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_city" [(ngModel)]="shipping.city" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Post code\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_postcode" [(ngModel)]="shipping.postcode" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </form>\n  <button ion-button block color="secondary" (click)="updateShippingAddress()" [disabled]="!shippingForm.form.valid">\n    {{\'Update Shipping\'|translate}}</button>\n\n  <form #billingForm="ngForm">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-list-header>\n            {{\'Billing Address\'| translate }}\n          </ion-list-header>\n          <ion-item>\n            <ion-label floating>{{\'First Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_firstname" [(ngModel)]="billing.first_name" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_lastname" [(ngModel)]="billing.last_name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Company\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="company" [(ngModel)]="billing.company"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Address\'|translate}} 1</ion-label>\n            <ion-input type="text" placeholder="" name="address" [(ngModel)]="billing.address_1" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Address\'|translate}} 2</ion-label>\n            <ion-input type="text" placeholder="" name="address2" [(ngModel)]="billing.address_2"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Country\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_country" (tap)="selectCountryPage(\'billingUpdate\')"\n              [readonly]="true" [(ngModel)]="billingCountryName" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'State\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" required name="billing_zone" (tap)="selectZonePage(\'billingUpdate\')"\n              [readonly]="true" [(ngModel)]="billingStateName"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'City\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_city" [(ngModel)]="billing.city" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Post code\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_postcode" [(ngModel)]="billing.postcode" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </form>\n  <button ion-button block color="secondary" (click)="updateBillingAddress()" [disabled]="!billingForm.form.valid">\n    {{\'Update Billing\'|translate}}</button>\n\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\address-pages\addresses\addresses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AddressesPage);
    return AddressesPage;
}());

//# sourceMappingURL=addresses.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_themeable_browser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_pages_home_home__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownloadsPage = /** @class */ (function () {
    function DownloadsPage(navCtrl, navParams, loading, shared, config, themeableBrowser, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.themeableBrowser = themeableBrowser;
        this.downloads = [];
        this.httpLoading = true;
        this.getDownloads();
    }
    DownloadsPage.prototype.getDownloads = function () {
        var _this = this;
        this.httpLoading = true;
        this.loading.show();
        this.config.Woocommerce.getAsync("customers/" + this.shared.customerData.id + "/downloads" + "?" + this.config.productsArguments).then(function (data) {
            _this.httpLoading = false;
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            _this.downloads = dat;
            console.log(dat);
        });
    };
    DownloadsPage.prototype.downloadFile = function (value) {
        var options = {};
        this.themeableBrowser.create(value.download_url, '_system', options);
        this.loading.autoHide(1000);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_pages_home_home__["a" /* HomePage */]);
    };
    DownloadsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    DownloadsPage.prototype.openShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */]);
    };
    DownloadsPage.prototype.refreshPage = function () {
        this.getDownloads();
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-downloads',template:/*ion-inline-start:"E:\app5\src\pages\downloads\downloads.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{\'Downloads\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refreshPage()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid class="page-empty" *ngIf="downloads.length==0 && !httpLoading">\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="download"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'You have no ebooks yet!\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button (click)="openShop()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let down of downloads">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Product\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{down.product_name}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          {{\'Downloads remaining\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.downloads_remaining!=\'unlimited\'">\n          {{down.downloads_remaining}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.downloads_remaining==\'unlimited\'">\n          &infin;\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          {{\'Expires\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.access_expires == \'never\'">\n          {{down.access_expires|translate}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.access_expires != \'never\'">\n          {{down.access_expires|date}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <button ion-button icon-end block color="secondary" (click)="downloadFile(down)">\n          {{down.download_name}}\n          <ion-icon name="download"></ion-icon>\n        </button>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\downloads\downloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LanguagePage = /** @class */ (function () {
    function LanguagePage(loading, viewCtrl, config, shared, translate) {
        var _this = this;
        this.loading = loading;
        this.viewCtrl = viewCtrl;
        this.config = config;
        this.shared = shared;
        this.currentLanguageCode = localStorage.languageCode;
        this.languageList = [
            { "name": "English", "code": "en", "image": "assets/flags/english.jpg", "direction": "ltr" },
            { "name": "Arabic", "code": "ar", "image": "assets/flags/uae.jpg", "direction": "rtl" }
        ];
        this.languageList.forEach(function (val) {
            if (val.code == _this.currentLanguageCode)
                _this.language = val;
        });
    }
    LanguagePage.prototype.updateLanguage = function () {
        if (this.currentLanguageCode != this.language.code) {
            this.loading.autoHide(1000);
            localStorage.languageCode = this.language.code;
            localStorage.languageDirection = this.language.direction;
            this.shared.emptyCart();
            this.shared.emptyRecentViewed();
            setTimeout(function () {
                window.location.reload();
            }, 200);
        }
    };
    //close modal
    LanguagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-language',template:/*ion-inline-start:"E:\app5\src\pages\language\language.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{"Select Language"|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="language">\n    <ion-item *ngFor="let v of languageList">\n      <img src="{{v.image}}" item-start>\n      <ion-label>{{v.name}}</ion-label>\n      <ion-radio [value]="v" (ionSelect)="updateLanguage()"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\language\language.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], LanguagePage);
    return LanguagePage;
}());

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrencyListPage = /** @class */ (function () {
    function CurrencyListPage(navCtrl, loading, viewCtrl, config, navParams, shared, http, translate) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.viewCtrl = viewCtrl;
        this.config = config;
        this.navParams = navParams;
        this.shared = shared;
        this.http = http;
        this.currencyList = [];
        this.currentCurrencySymbol = localStorage.currency;
        this.getListOfCurrency();
    }
    CurrencyListPage.prototype.getListOfCurrency = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + "/api/appsettings/get_all_currencies/?insecure=cool").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            _this.currencyList = data.data;
            _this.currencyList.forEach(function (val) {
                if (val.symbol == _this.currentCurrencySymbol)
                    _this.currency = val;
            });
        });
    };
    CurrencyListPage.prototype.updateCurrency = function () {
        if (this.currentCurrencySymbol != this.currency.code) {
            this.loading.autoHide(1000);
            localStorage.currency = this.currency.symbol;
            localStorage.currencyCode = this.currency.name;
            localStorage.currencyPos = this.currency.position;
            localStorage.decimals = this.currency.decimals;
            this.shared.emptyCart();
            this.shared.emptyRecentViewed();
            setTimeout(function () {
                window.location.reload();
            }, 200);
        }
    };
    //close modal
    CurrencyListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CurrencyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-currency-list',template:/*ion-inline-start:"E:\app5\src\pages\currency-list\currency-list.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-buttons left>\n        <button ion-button icon-only (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>{{"Select Currency"|translate}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-list radio-group [(ngModel)]="currency">\n      <ion-item *ngFor="let v of currencyList">\n        <img src="{{v.flag}}" item-start>\n        <ion-label>{{v.name}}</ion-label>\n        <ion-radio [value]="v" (ionSelect)="updateCurrency()"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"E:\app5\src\pages\currency-list\currency-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["E" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], CurrencyListPage);
    return CurrencyListPage;
}());

//# sourceMappingURL=currency-list.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/








var ThankYouPage = /** @class */ (function () {
    function ThankYouPage(navCtrl, shared, config, navParams) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.navParams = navParams;
    }
    ThankYouPage.prototype.openHome = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_pages_home_home__["a" /* HomePage */]);
        }
    };
    ThankYouPage.prototype.openOrders = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__["a" /* MyOrdersPage */]); };
    ThankYouPage.prototype.ionViewDidLoad = function () {
        this.shared.orderComplete();
    };
    ThankYouPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    ThankYouPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    ThankYouPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    ThankYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thank-you',template:/*ion-inline-start:"E:\app5\src\pages\thank-you\thank-you.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Thank You\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-thank-you">\n  <ion-card>\n    <ion-card-content>\n      <ion-icon name="checkmark-circle"></ion-icon>\n      <h3>{{\'Thank You\'| translate }}</h3>\n      <h4>{{\'Thank you for shopping with us.\'| translate }}</h4>\n      <button ion-button block color="primary" *ngIf="shared.customerData.id!=null" (click)="openOrders()">{{\'My Orders\'| translate }}</button>\n      <button ion-button block clear color="primary" (click)="openHome()">{{\'Continue Shopping\'| translate }}</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\thank-you\thank-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], ThankYouPage);
    return ThankYouPage;
}());

//# sourceMappingURL=thank-you.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardPointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_products__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RewardPointsPage = /** @class */ (function () {
    function RewardPointsPage(navCtrl, navParams, http, loading, shared, config, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.translate = translate;
        this.rewards = [];
        this.httpLoading = true;
        this.getRewards();
    }
    RewardPointsPage.prototype.getRewards = function () {
        var _this = this;
        this.httpLoading = true;
        this.loading.show();
        this.http.get(this.config.url + '/api/appusers/ionic_reward_points/?insecure=cool&user_id=' + this.shared.customerData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.httpLoading = false;
            _this.loading.hide();
            var dat = data.data;
            _this.rewards = dat;
            console.log(dat);
        });
    };
    RewardPointsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    RewardPointsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    RewardPointsPage.prototype.openShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__products_products__["a" /* ProductsPage */]);
    };
    RewardPointsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RewardPointsPage');
    };
    RewardPointsPage.prototype.refreshPage = function () {
        this.getRewards();
    };
    RewardPointsPage.prototype.totalPoints = function () {
        var t = 0;
        for (var _i = 0, _a = this.rewards; _i < _a.length; _i++) {
            var v = _a[_i];
            t = t + parseInt(v.points);
        }
        return t;
    };
    RewardPointsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reward-points',template:/*ion-inline-start:"E:\app5\src\pages\reward-points\reward-points.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{\'Reward Points\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refreshPage()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid class="page-empty" *ngIf="rewards.length==0 && !httpLoading">\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="happy"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'Your Rewards List is Empty\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button (click)="openShop()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card *ngFor="let r of rewards">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Action\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{r.type}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Points\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{r.points}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Date\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{r.date|date}}\n        </ion-col>\n      </ion-row>\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col col-8>\n      <h5> {{\'Total Points Earned\'|translate}} &nbsp;&nbsp;:</h5>\n    </ion-col>\n    <ion-col text-right col-4>\n      <h5>{{totalPoints()}}</h5>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"E:\app5\src\pages\reward-points\reward-points.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], RewardPointsPage);
    return RewardPointsPage;
}());

//# sourceMappingURL=reward-points.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(583);
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_translate_translate__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_us_about_us__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_us_contact_us__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_forgot_password_forgot_password__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_banners_banners__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_product_product__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_footer_footer__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sliding_tabs_sliding_tabs__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_product_detail_product_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_curency_curency__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_search_search__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_categorie_pages_categories_categories__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_wish_list_wish_list__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_address_pages_shipping_address_shipping_address__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_select_country_select_country__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_select_zones_select_zones__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_address_pages_billing_address_billing_address__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_shipping_method_shipping_method__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_order_order__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_social_sharing__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_thank_you_thank_you__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_stripe__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_coupon_coupon__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_paypal__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_my_account_my_account__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_my_orders_my_orders__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_order_detail_order_detail__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_news_news__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_settings_settings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_news_detail_news_detail__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_news_list_news_list__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_local_notifications__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_push__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_device__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_google_plus__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_categorie_pages_categories2_categories2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_categorie_pages_sub_categories_sub_categories__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_categorie_pages_categories3_categories3__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_categorie_pages_categories4_categories4__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_categorie_pages_categories5_categories5__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_privacy_policy_privacy_policy__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_term_services_term_services__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_refund_policy_refund_policy__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__angular_platform_browser_animations__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_network__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_categorie_pages_sub_categories2_sub_categories2__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_categorie_pages_sub_categories3_sub_categories3__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_categorie_pages_sub_categories4_sub_categories4__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_categorie_pages_sub_categories5_sub_categories5__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_categorie_pages_categories6_categories6__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_categorie_pages_sub_categories6_sub_categories6__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_admob_free__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_fcm__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ionic_native_app_version__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__providers_location_data_location_data__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_spinner_dialog__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ionic_native_themeable_browser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_reviews_reviews__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_add_review_add_review__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80_ionic_img_viewer__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_address_pages_addresses_addresses__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_downloads_downloads__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_store_store__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__ionic_native_email_composer__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_language_language__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__angular_common__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_currency_list_currency_list__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_reward_points_reward_points__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_setting_setting__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__providers_books_service_books_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__providers_db_service_db_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__providers_parse_db_book_parse_db_book__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__ionic_native_sqlite__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__ionic_native_dns__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__pages_book_book__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__pages_book_details_modal_book_details_modal__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__pages_table_of_contents_table_of_contents__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__pages_bookmarks_bookmarks__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__pages_highlights_highlights__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
// Version: 1.0




































































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_98__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
                __WEBPACK_IMPORTED_MODULE_99__pages_highlights_highlights__["a" /* HighlightsPage */],
                __WEBPACK_IMPORTED_MODULE_96__pages_book_details_modal_book_details_modal__["a" /* BookDetailsModalPage */],
                __WEBPACK_IMPORTED_MODULE_97__pages_table_of_contents_table_of_contents__["a" /* TableOfContentsPage */],
                __WEBPACK_IMPORTED_MODULE_95__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_categorie_pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_categorie_pages_categories2_categories2__["a" /* Categories2Page */],
                __WEBPACK_IMPORTED_MODULE_57__pages_categorie_pages_categories3_categories3__["a" /* Categories3Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_categorie_pages_categories4_categories4__["a" /* Categories4Page */],
                __WEBPACK_IMPORTED_MODULE_59__pages_categorie_pages_categories5_categories5__["a" /* Categories5Page */],
                __WEBPACK_IMPORTED_MODULE_69__pages_categorie_pages_categories6_categories6__["a" /* Categories6Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_categorie_pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_categorie_pages_sub_categories2_sub_categories2__["a" /* SubCategories2Page */],
                __WEBPACK_IMPORTED_MODULE_66__pages_categorie_pages_sub_categories3_sub_categories3__["a" /* SubCategories3Page */],
                __WEBPACK_IMPORTED_MODULE_67__pages_categorie_pages_sub_categories4_sub_categories4__["a" /* SubCategories4Page */],
                __WEBPACK_IMPORTED_MODULE_68__pages_categorie_pages_sub_categories5_sub_categories5__["a" /* SubCategories5Page */],
                __WEBPACK_IMPORTED_MODULE_70__pages_categorie_pages_sub_categories6_sub_categories6__["a" /* SubCategories6Page */],
                __WEBPACK_IMPORTED_MODULE_30__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_address_pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_banners_banners__["a" /* BannersComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_select_zones_select_zones__["a" /* SelectZonesPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_address_pages_billing_address_billing_address__["a" /* BillingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_select_country_select_country__["a" /* SelectCountryPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_21__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_sliding_tabs_sliding_tabs__["a" /* SlidingTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_curency_curency__["a" /* CurencyPipe */],
                __WEBPACK_IMPORTED_MODULE_36__pages_shipping_method_shipping_method__["a" /* ShippingMethodPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_thank_you_thank_you__["a" /* ThankYouPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_refund_policy_refund_policy__["a" /* RefundPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_term_services_term_services__["a" /* TermServicesPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_address_pages_addresses_addresses__["a" /* AddressesPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_news_list_news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_currency_list_currency_list__["a" /* CurrencyListPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_reward_points_reward_points__["a" /* RewardPointsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'md',
                    mode: 'md',
                }, {
                    links: [
                        { loadChildren: '../pages/book-details-modal/book-details-modal.module#BookDetailsModalPageModule', name: 'BookDetailsModalPage', segment: 'book-details-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parse-db-book/parse-db-book.module#ParseDbBookPageModule', name: 'ParseDbBookPage', segment: 'parse-db-book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-of-contents/table-of-contents.module#TableOfContentsPageModule', name: 'TableOfContentsPage', segment: 'table-of-contents', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_63__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_80_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (__WEBPACK_IMPORTED_MODULE_9__providers_translate_translate__["a" /* createTranslateLoader */]),
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_97__pages_table_of_contents_table_of_contents__["a" /* TableOfContentsPage */],
                __WEBPACK_IMPORTED_MODULE_98__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
                __WEBPACK_IMPORTED_MODULE_99__pages_highlights_highlights__["a" /* HighlightsPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_96__pages_book_details_modal_book_details_modal__["a" /* BookDetailsModalPage */],
                __WEBPACK_IMPORTED_MODULE_95__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_categorie_pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_categorie_pages_categories2_categories2__["a" /* Categories2Page */],
                __WEBPACK_IMPORTED_MODULE_57__pages_categorie_pages_categories3_categories3__["a" /* Categories3Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_categorie_pages_categories4_categories4__["a" /* Categories4Page */],
                __WEBPACK_IMPORTED_MODULE_59__pages_categorie_pages_categories5_categories5__["a" /* Categories5Page */],
                __WEBPACK_IMPORTED_MODULE_69__pages_categorie_pages_categories6_categories6__["a" /* Categories6Page */],
                __WEBPACK_IMPORTED_MODULE_56__pages_categorie_pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_categorie_pages_sub_categories2_sub_categories2__["a" /* SubCategories2Page */],
                __WEBPACK_IMPORTED_MODULE_66__pages_categorie_pages_sub_categories3_sub_categories3__["a" /* SubCategories3Page */],
                __WEBPACK_IMPORTED_MODULE_67__pages_categorie_pages_sub_categories4_sub_categories4__["a" /* SubCategories4Page */],
                __WEBPACK_IMPORTED_MODULE_68__pages_categorie_pages_sub_categories5_sub_categories5__["a" /* SubCategories5Page */],
                __WEBPACK_IMPORTED_MODULE_70__pages_categorie_pages_sub_categories6_sub_categories6__["a" /* SubCategories6Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_refund_policy_refund_policy__["a" /* RefundPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_term_services_term_services__["a" /* TermServicesPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_address_pages_addresses_addresses__["a" /* AddressesPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_address_pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_address_pages_billing_address_billing_address__["a" /* BillingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_select_country_select_country__["a" /* SelectCountryPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_select_zones_select_zones__["a" /* SelectZonesPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_banners_banners__["a" /* BannersComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_sliding_tabs_sliding_tabs__["a" /* SlidingTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_shipping_method_shipping_method__["a" /* ShippingMethodPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_thank_you_thank_you__["a" /* ThankYouPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_news_list_news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_currency_list_currency_list__["a" /* CurrencyListPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_reward_points_reward_points__["a" /* RewardPointsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_94__ionic_native_dns__["a" /* DNS */],
                __WEBPACK_IMPORTED_MODULE_86__angular_common__["d" /* DecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_8__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_8__providers_config_config__["a" /* ConfigProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_28__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_coupon_coupon__["a" /* CouponProvider */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_71__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_73__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_93__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_84__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_74__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_75__providers_location_data_location_data__["a" /* LocationDataProvider */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_77__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_92__providers_parse_db_book_parse_db_book__["a" /* ParseDbBookProvider */],
                __WEBPACK_IMPORTED_MODULE_91__providers_db_service_db_service__["a" /* DbServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_90__providers_books_service_books_service__["b" /* BooksService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    appMode: 'offline',
    appVersion: 'WhiteBook 2.0.0',
    DB_NAME: 'white-book-db.db',
    PARSE_SERVER_URL: "https://white-book.innovapp.eu/parse/",
    PARSE_APP_ID: "white-book-cms"
};
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_db_service_db_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categorie_pages_categories_categories__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wish_list_wish_list__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_orders_my_orders__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_news_news__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_categorie_pages_categories2_categories2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_categorie_pages_categories4_categories4__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_categorie_pages_categories5_categories5__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_categorie_pages_categories3_categories3__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_categorie_pages_categories6_categories6__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_animations__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_admob_free__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_app_version__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_in_app_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_social_sharing__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_address_pages_addresses_addresses__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_downloads_downloads__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_language_language__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_jquery__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_currency_list_currency_list__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_address_pages_shipping_address_shipping_address__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_thank_you_thank_you__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_reward_points_reward_points__ = __webpack_require__(558);
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











































var MyApp = /** @class */ (function () {
    function MyApp(config, shared, platform, modalCtrl, statusBar, splashScreen, translate, storage, network, alert, loading, admobFree, events, plt, appVersion, iab, socialSharing, applicationRef, dbService) {
        var _this = this;
        this.config = config;
        this.shared = shared;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.network = network;
        this.alert = alert;
        this.loading = loading;
        this.admobFree = admobFree;
        this.events = events;
        this.plt = plt;
        this.appVersion = appVersion;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.applicationRef = applicationRef;
        this.dbService = dbService;
        this.homeList = false;
        this.homeListIcon = 'add';
        this.categoriesList = false;
        this.categoriesListIcon = 'add';
        this.shopList = false;
        this.shopListIcon = 'add';
        this.dbService = dbService;
        //if (!this.platform.is('cordova')) this.rootPage = HomePage;
        this.initializeApp();
        this.dbService.init();
        var connectedToInternet = true;
        network.onDisconnect().subscribe(function () {
            connectedToInternet = false;
            translate.get(["Please Connect to the Internet!", "Disconnected"]).subscribe(function (res) {
                _this.alert.showWithTitle(res["Please Connect to the Internet!"], res["Disconnected"]);
            });
            //  console.log('network was disconnected :-(');
        });
        network.onConnect().subscribe(function () {
            if (!connectedToInternet) {
                window.location.reload();
                //this.loading.show();
                //console.log('network connected!');
                translate.get(["Network connected Reloading Data", "Connected"]).subscribe(function (res) {
                    _this.alert.showWithTitle(res["Network connected Reloading Data"] + '...', res["Connected"]);
                });
            }
            //connectSubscription.unsubscribe();
        });
        this.platform.setDir(this.config.appDirection, true);
        shared.dir = this.config.appDirection;
        //setting default languge on start up 
        translate.setDefaultLang(localStorage.languageCode);
        events.subscribe('showAd', function () {
            _this.showInterstitial();
        });
        events.subscribe('openThankYouPage', function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_41__pages_thank_you_thank_you__["a" /* ThankYouPage */]);
        });
        events.subscribe('openShippingAddressPage', function () {
            console.log("opening Shipping Address Page");
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_40__pages_address_pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */]);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var value = _this.getStatusBarColor();
            _this.statusBar.hide();
            //this.statusBar.backgroundColorByHexString(value);
            _this.runAdmob();
            _this.config.siteSetting().then(function (value) {
                _this.loadHomePage();
                //this.splashScreen.hide();
            });
        });
    };
    // loading home page =========================================================================
    MyApp.prototype.loadHomePage = function () {
        var _this = this;
        this.storage.get('firsttimeApp').then(function (val) {
            var value = val;
            if (_this.config.showIntroPage == 0)
                value = 'firstTime';
            if (value == 'firstTime') {
                if (_this.config.homePage == 1) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_pages_home_home__["a" /* HomePage */];
                }
            }
            else {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */]);
            }
            _this.storage.set('firsttimeApp', 'firstTime');
        });
    };
    // starting admob =========================================================================
    MyApp.prototype.runAdmob = function () {
        if (this.plt.is('ios')) {
            if (this.config.admobIos == 1)
                this.initializeAdmob(this.config.admobBanneridIos, this.config.admobIntidIos);
            this.config.admob = this.config.admobIos;
            this.shared.device = 'ios';
        }
        else if (this.plt.is('android')) {
            if (this.config.admob == 1)
                this.initializeAdmob(this.config.admobBannerid, this.config.admobIntid);
            this.shared.device = 'android';
        }
    };
    // preparing admob =========================================================================
    MyApp.prototype.initializeAdmob = function (bannerId, intId) {
        if (this.platform.is('cordova')) {
            var bannerConfig = {
                id: bannerId,
                isTesting: false,
                autoShow: true
            };
            this.admobFree.banner.config(bannerConfig);
            this.admobFree.banner.prepare()
                .then(function () {
                //alert("loaded" +bannerId);
                //this.admobFree.banner.show();
            })
                .catch(function (e) { return console.log(e); });
            var interstitialConfig = {
                id: intId,
                isTesting: false,
                autoShow: false
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare();
        }
    };
    //=========================================================================
    MyApp.prototype.showInterstitial = function () {
        if (this.platform.is('cordova')) {
            this.admobFree.interstitial.show();
            //this.admobFree.interstitial.isReady().then(() => { });
            this.admobFree.interstitial.prepare();
        }
    };
    //=========================================================================
    MyApp.prototype.openPage = function (page) {
        if (page == 'home')
            this.openHomePage();
        else if (page == 'home1')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_pages_home_home__["a" /* HomePage */]);
        else if (page == 'categories')
            this.openCategoryPage();
        else if (page == 'categories1')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categorie_pages_categories_categories__["a" /* CategoriesPage */]);
        else if (page == 'categories2')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_categorie_pages_categories2_categories2__["a" /* Categories2Page */]);
        else if (page == 'categories3')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_categorie_pages_categories3_categories3__["a" /* Categories3Page */]);
        else if (page == 'categories4')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_categorie_pages_categories4_categories4__["a" /* Categories4Page */]);
        else if (page == 'categories5')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_categorie_pages_categories5_categories5__["a" /* Categories5Page */]);
        else if (page == 'categories6')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_categorie_pages_categories6_categories6__["a" /* Categories6Page */]);
        else if (page == 'products')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */]);
        else if (page == 'myWishList')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_wish_list_wish_list__["a" /* WishListPage */]);
        else if (page == 'myAccount')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__["a" /* MyAccountPage */]);
        else if (page == 'myOrders')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_my_orders_my_orders__["a" /* MyOrdersPage */]);
        else if (page == 'addresses')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_35__pages_address_pages_addresses_addresses__["a" /* AddressesPage */]);
        else if (page == 'downloads')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_36__pages_downloads_downloads__["a" /* DownloadsPage */]);
        else if (page == 'contactUs')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__["a" /* ContactUsPage */]);
        else if (page == 'aboutUs')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__["a" /* AboutUsPage */]);
        else if (page == 'news')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_news_news__["a" /* NewsPage */]);
        else if (page == 'intro')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */]);
        else if (page == 'settings')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */]);
        else if (page == 'latest')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */], { type: 'latest' });
        else if (page == 'sale')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */], { type: 'sale' });
        else if (page == 'featured')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */], { type: 'featured' });
        else if (page == 'rewardPoints')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_42__pages_reward_points_reward_points__["a" /* RewardPointsPage */]);
    };
    MyApp.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_pages_home_home__["a" /* HomePage */]);
        }
    };
    MyApp.prototype.openCategoryPage = function () {
        if (this.config.categoryPage == 1) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categorie_pages_categories_categories__["a" /* CategoriesPage */]);
        }
        if (this.config.categoryPage == 2) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_categorie_pages_categories2_categories2__["a" /* Categories2Page */]);
        }
        if (this.config.categoryPage == 3) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_categorie_pages_categories3_categories3__["a" /* Categories3Page */]);
        }
        if (this.config.categoryPage == 4) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_categorie_pages_categories4_categories4__["a" /* Categories4Page */]);
        }
        if (this.config.categoryPage == 5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_categorie_pages_categories5_categories5__["a" /* Categories5Page */]);
        }
        if (this.config.categoryPage == 6) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_categorie_pages_categories6_categories6__["a" /* Categories6Page */]);
        }
    };
    MyApp.prototype.openLoginPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
        modal.present();
    };
    MyApp.prototype.openSignUpPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__["a" /* SignUpPage */]);
        modal.present();
    };
    MyApp.prototype.logOut = function () {
        this.shared.logOut();
    };
    MyApp.prototype.showHideHomeList = function () {
        if (this.homeList == false) {
            this.homeList = true;
            this.homeListIcon = 'remove';
        }
        else {
            this.homeList = false;
            this.homeListIcon = 'add';
        }
    };
    MyApp.prototype.showHideCategoriesList = function () {
        if (this.categoriesList == false) {
            this.categoriesList = true;
            this.categoriesListIcon = 'remove';
        }
        else {
            this.categoriesList = false;
            this.categoriesListIcon = 'add';
        }
    };
    MyApp.prototype.showHideShopList = function () {
        if (this.shopList == false) {
            this.shopList = true;
            this.shopListIcon = 'remove';
        }
        else {
            this.shopList = false;
            this.shopListIcon = 'add';
        }
    };
    MyApp.prototype.ionViewWillEnter = function () {
        console.log("ionViewCanEnter");
    };
    MyApp.prototype.rateUs = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    };
    MyApp.prototype.share = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString()).then(function () {
            }).catch(function () {
            });
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.socialSharing.share(_this.config.appName, _this.config.appName, "", "https://play.google.com/store/apps/details?id=" + val).then(function () {
                }).catch(function () {
                });
            });
        }
    };
    MyApp.prototype.openLanguagePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_37__pages_language_language__["a" /* LanguagePage */]);
        modal.present();
    };
    MyApp.prototype.openCurrencyPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_39__pages_currency_list_currency_list__["a" /* CurrencyListPage */]);
        modal.present();
    };
    MyApp.prototype.getStatusBarColor = function () {
        var headerColor = __WEBPACK_IMPORTED_MODULE_38_jquery__('#primary').css('color');
        var rgb2;
        rgb2 = headerColor.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
        this.shared.headerHexColor = (rgb2 && rgb2.length === 4) ? "#" +
            ("0" + parseInt(rgb2[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb2[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb2[3], 10).toString(16)).slice(-2) : headerColor;
        console.log(this.shared.headerHexColor);
        var color = __WEBPACK_IMPORTED_MODULE_38_jquery__('#my').css('color');
        var rgb;
        rgb = color.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_30__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"E:\app5\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>{{ \'Menu\' | translate }}</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="openCurrencyPage()" *ngIf="config.multiCurrency">\n\n          <ion-icon name="logo-usd"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only (click)="openLanguagePage()" *ngIf="config.multiLanguage">\n\n          <ion-icon name="globe"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="side-menu">\n\n\n\n    <ion-list class="list-avatar">\n\n      <ion-item *ngIf="shared.customerData.id==null" (click)="openLoginPage()">\n\n        <ion-avatar item-start>\n\n          <ion-icon name="contact"></ion-icon>\n\n        </ion-avatar>\n\n        <h2>{{ \'Login & Register\' | translate }}</h2>\n\n        <p>{{ \'Please login or create an account for free\' | translate }}</p>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="shared.customerData.id!=null" menuClose (click)="openPage(\'settings\')">\n\n        <ion-avatar item-start>\n\n          <img src="{{shared.customerData.avatar_url}}">\n\n        </ion-avatar>\n\n        <h2>{{shared.customerData.first_name +"&nbsp;"+shared.customerData.last_name}}</h2>\n\n        <p>{{shared.customerData.email}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <!-- menu with png images icons -->\n\n    <ion-list class="list-menu" *ngIf="!config.defaultIcons">\n\n      <!-- For live app -->\n\n      <div *ngIf="config.appInProduction">\n\n        <button menuClose ion-item (click)="openPage(\'home\')">{{ \'Home\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/home.png"></ion-icon>\n\n        </button>\n\n        <button menuClose ion-item (click)="openPage(\'categories\')">{{ \'Categories\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/category.png"></ion-icon>\n\n        </button>\n\n        <button menuClose ion-item (click)="openPage(\'latest\')">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/shop.png"></ion-icon>\n\n        </button>\n\n      </div>\n\n      <!-- live app content end -->\n\n\n\n\n\n      <!-- For our demo app -->\n\n      <div *ngIf="!config.appInProduction">\n\n        <button menuClose ion-item (click)="openPage(\'home1\')">{{ \'Home\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/home.png"></ion-icon>\n\n          <ion-icon item-right [name]="homeListIcon"></ion-icon>\n\n        </button>\n\n    \n\n     \n\n        <button ion-item (click)="showHideShopList()">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/shop.png"></ion-icon>\n\n        </button>\n\n      \n\n      </div>\n\n      <!-- demo app content end -->\n\n      <button menuClose ion-item *ngIf="config.wishListPage==1" (click)="openPage(\'myWishList\')">{{ \'My Wish List\' |\n\n        translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/wishlist.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.editProfilePage==1"\n\n        (click)="openPage(\'myAccount\')">\n\n        {{\'Edit Profile\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/locked.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null" (click)="openPage(\'addresses\')">\n\n        {{\'Addresses\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/map.png"></ion-icon>\n\n      </button>\n\n      <!-- <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.downloadPage"\n\n        (click)="openPage(\'downloads\')">\n\n        {{\'Downloads\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/download.png"></ion-icon>\n\n      </button> -->\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.myOrdersPage==1"\n\n        (click)="openPage(\'myOrders\')">\n\n        {{\'My Orders\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/orders.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.enableWpPointReward==1"\n\n        (click)="openPage(\'rewardPoints\')">\n\n        {{\'Reward Points\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/gift.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.contactUsPage==1" (click)="openPage(\'contactUs\')">\n\n        {{ \'Contact Us\' |translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/phone.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.aboutUsPage==1" (click)="openPage(\'aboutUs\')">\n\n        {{ \'About Us\' | translate}}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/about.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.newsPage==1" (click)="openPage(\'news\')">{{ \'News\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/news.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.introPage==1 && config.showIntroPage==1" (click)="openPage(\'intro\')">\n\n        {{\'Intro\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/intro.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.shareApp==1" (click)="share()">{{ \'Share\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/share.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.rateApp==1" (click)="rateUs()">{{ \'Rate Us\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/rating.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.settingPage==1"\n\n        (click)="openPage(\'settings\')">{{ \'Settings\' | translate}}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/setting.png"></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <!--------------------------------------- menu with default icons ------------------------------------------>\n\n    <ion-list class="list-menu" *ngIf="config.defaultIcons">\n\n      <!-- For live app -->\n\n      <div *ngIf="config.appInProduction">\n\n        <button menuClose ion-item (click)="openPage(\'home\')">{{ \'Home\' | translate }}\n\n          <ion-icon item-left name="home"></ion-icon>\n\n        </button>\n\n       \n\n        <button menuClose ion-item (click)="openPage(\'latest\')">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left name="cash"></ion-icon>\n\n        </button>\n\n      </div>\n\n      <!-- live app content end -->\n\n\n\n\n\n      <!-- For our demo app -->\n\n      <div *ngIf="!config.appInProduction">\n\n        <button menuClose ion-item (click)="openPage(\'home1\')">{{ \'Home\' | translate }}\n\n          <ion-icon item-left name="home"></ion-icon>\n\n        </button>\n\n        <button menuClose ion-item (click)="openPage(\'latest\')">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left name="cash"></ion-icon>\n\n        </button>\n\n\n\n      </div>\n\n      <!-- demo app content end -->\n\n      <button menuClose ion-item *ngIf="config.wishListPage==1" (click)="openPage(\'myWishList\')">\n\n        {{ \'My Wish List\' |translate }}\n\n        <ion-icon item-left name="heart"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.editProfilePage==1"\n\n        (click)="openPage(\'myAccount\')">\n\n        {{\'Edit Profile\' | translate }}\n\n        <ion-icon item-left name="lock"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null" (click)="openPage(\'addresses\')">\n\n        {{\'Addresses\' | translate }}\n\n        <ion-icon item-left name="locate"></ion-icon>\n\n      </button>\n\n      <!-- <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.downloadPage"\n\n        (click)="openPage(\'downloads\')">\n\n        {{\'Downloads\' | translate }}\n\n        <ion-icon item-left name="download"></ion-icon>\n\n      </button> -->\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.myOrdersPage==1"\n\n        (click)="openPage(\'myOrders\')">\n\n        {{\'My Orders\' | translate }}\n\n        <ion-icon item-left name="cart"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.enableWpPointReward==1"\n\n        (click)="openPage(\'rewardPoints\')">\n\n        {{\'Reward Points\' | translate }}\n\n        <ion-icon item-left name="happy"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.contactUsPage==1" (click)="openPage(\'contactUs\')">\n\n        {{ \'Contact Us\' |translate }}\n\n        <ion-icon item-left name="call"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.aboutUsPage==1" (click)="openPage(\'aboutUs\')">\n\n        {{ \'About\' | translate}}\n\n        <ion-icon item-left name="information-circle"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.newsPage==1" (click)="openPage(\'news\')">{{ \'News\' | translate }}\n\n        <ion-icon item-left name="paper"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.introPage==1 && config.showIntroPage==1" (click)="openPage(\'intro\')">{{\n\n        \'Intro\' | translate }}\n\n        <ion-icon item-left name="ionic"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.shareApp==1" (click)="share()">{{ \'Share\' | translate }}\n\n        <ion-icon item-left name="share"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.rateApp==1" (click)="rateUs()">{{ \'Rate Us\' | translate }}\n\n        <ion-icon item-left name="star-half"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.settingPage==1" (click)="openPage(\'settings\')">{{ \'Settings\' | translate\n\n        }}\n\n        <ion-icon item-left name="settings"></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <p class="primary-light-Color" #my id="my">Just to get color. Donot remove this.\n\n    </p>\n\n    <p class="primary-Color" #primary id="primary">Just to get color. Donot remove this.\n\n    </p>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\app5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_23__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_6__providers_db_service_db_service__["a" /* DbServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListener; });
var EventListener = /** @class */ (function () {
    function EventListener(element) {
        this.xDown = null;
        this.yDown = null;
        this.xDiff = null;
        this.yDiff = null;
        this.element = null;
        this.onLeft = function () { };
        this.onRight = function () { };
        this.onCenter = function () { };
        this.element = element;
    }
    EventListener.prototype.removeContextMenu = function () {
        this.element.oncontextmenu = function (e) {
            e.preventDefault();
        };
    };
    EventListener.prototype.run = function () {
        var _this = this;
        var touchEvent = 'ontouchstart' in window ? 'ontouchstart' : 'onclick';
        this.element[touchEvent] = function (evt) {
            // console.log("evt.clientX", evt.clientX);
            // console.log("evt.layerX", evt.layerX);
            // console.log("evt.offsetX", evt.offsetX);
            // console.log("evt.screenX", evt.screenX);
            // console.log("evt.x", evt.x);
            // console.log("availWidth", evt.view.screen.availWidth);
            var x = evt.screenX;
            var y = evt.screenY;
            if (touchEvent == 'ontouchstart') {
                var touch = evt.changedTouches[0];
                x = touch.screenX;
                y = touch.screenY;
            }
            var width = evt.view.screen.availWidth;
            var height = evt.view.screen.availHeight;
            var leftBorder = (width / 5);
            var rightBorder = width - leftBorder;
            if (x > rightBorder) {
                _this.onRight();
            }
            else if (x < leftBorder) {
                _this.onLeft();
            }
            else {
                _this.onCenter();
            }
        };
    };
    EventListener.prototype.stop = function () {
        this.element.onclick = null;
    };
    return EventListener;
}());

//# sourceMappingURL=event-listener.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTranslateLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__(922);
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_detail_product_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/









var BannersComponent = /** @class */ (function () {
    function BannersComponent(shared, navCtrl, navParams, config, http, loading, alert) {
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        //===============================================================================================
        //on click image banners
        this.bannerClick = function (image) {
            //  console.log(image);
            if (image.type == 'category') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_products_products__["a" /* ProductsPage */], { id: parseInt(image.banners_url) });
            }
            else if (image.type == 'product') {
                this.getSingleProductDetail(parseInt(image.banners_url));
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_products_products__["a" /* ProductsPage */], { type: image.type });
            }
        };
    }
    //===============================================================================================
    //getting single product data
    BannersComponent.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        //if (this.type == 'recent' || this.type == 'wishList') {
        this.config.Woocommerce.getAsync("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            //this.alert.show("loaded");
            _this.loading.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { data: JSON.parse(data.body) });
            _this.shared.addToRecent(JSON.parse(data.body));
        }, function (err) {
            _this.loading.hide();
            _this.alert.show("Item not Available!");
            console.log(err);
        });
    };
    BannersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'banners',template:/*ion-inline-start:"E:\app5\src\components\banners\banners.html"*/'<div class="ph-item" *ngIf="!shared.banners" style="padding:0; margin-bottom:0;" class="animation-out">\n    <div class="ph-picture" style="margin-bottom:0; height: 211px;"></div>\n\n</div>\n<ion-slides pager="true" paginationType="bullets" dir="{{shared.dir}}" *ngIf="shared.banners" class="animation-in">\n  <ion-slide *ngFor="let b of shared.banners" (click)="bannerClick(b)">\n    <img src="{{b.banners_image}}">\n  </ion-slide>\n</ion-slides>\n<!-- autoplay="5000" -->'/*ion-inline-end:"E:\app5\src\components\banners\banners.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */]])
    ], BannersComponent);
    return BannersComponent;
}());

//# sourceMappingURL=banners.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/










var ProductComponent = /** @class */ (function () {
    // @Output() someEvent = new EventEmitter();
    function ProductComponent(config, shared, navCtrl, navParams, modalCtrl, events, storage, http, loading, alert, translate) {
        var _this = this;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.storage = storage;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.translate = translate;
        this.isLiked = 0;
        this.wishArray = [];
        events.subscribe('wishListUpdate', function (id, value) {
            if (id == _this.p.id)
                _this.isLiked = value;
        });
        this.storage.get('wishListProducts').then(function (val) {
            _this.wishArray = val;
            _this.checkWishList();
        });
    }
    ProductComponent.prototype.checkWishList = function () {
        //getting wishList items from local storage
        var count = 0;
        if (this.wishArray != null)
            for (var _i = 0, _a = this.wishArray; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.id == this.p.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    };
    ProductComponent.prototype.pDiscount = function () {
        var rtn = "";
        var p1 = parseInt(this.p.regular_price);
        var p2 = parseInt(this.p.sale_price);
        if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            rtn = "";
        }
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            rtn = "";
        }
        rtn = result + '%';
        return rtn;
    };
    ProductComponent.prototype.showProductDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { data: this.p });
        //this.loading.autoHide(500);
        //if (this.type == 'recent' || this.type == 'wishList') {
        // this.loading.show();
        // this.config.Woocommerce.getAsync("products/" + this.p.id + "?" + this.config.productsArguments).then((data) => {
        //   //this.alert.show("loaded");
        //   this.loading.hide();
        //   this.navCtrl.push(ProductDetailPage, { data: JSON.parse(data.body) });
        // }, err => {
        //   this.loading.hide();
        //   this.translate.get("Item not Available!").subscribe((res) => {
        //     this.alert.show(res);
        //   });
        //   console.log(err);
        // });
        // }
        // else
        //   this.navCtrl.push(ProductDetailPage, { data: this.p });
        if (this.type != 'recent') {
            this.shared.addToRecent(this.p);
        }
    };
    ProductComponent.prototype.checkProductNew = function () {
        var pDate = new Date(this.p.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    };
    ProductComponent.prototype.addToCart = function () {
        this.shared.addToCart(this.p, null, null, null);
        //this.navCtrl.push(CartPage); 
    };
    ProductComponent.prototype.isInCart = function () {
        var found = false;
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.product_id == this.p.id) {
                found = true;
            }
        }
        if (found == true)
            return true;
        else
            return false;
    };
    ProductComponent.prototype.removeRecent = function () {
        this.shared.removeRecent(this.p);
    };
    ProductComponent.prototype.clickWishList = function () {
        // this.loading.autoHide(500);
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    };
    ProductComponent.prototype.addWishList = function () {
        this.shared.addWishList(this.p);
    };
    ProductComponent.prototype.removeWishList = function () {
        this.shared.removeWishList(this.p);
    };
    ProductComponent.prototype.ngOnChanges = function () {
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "type", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'product',template:/*ion-inline-start:"E:\app5\src\components\product\product.html"*/'<div class="ph-item" style="padding:0;" *ngIf="p==1">\n  <div class="ph-picture"></div>\n  <div class="ph-col-12">\n    <div class="ph-row" style="margin-bottom:0;">\n      <div class="ph-col-12"></div>\n      <div class="ph-col-6 big"></div>\n      <div class="ph-col-4 empty big"></div>\n      <div class="ph-col-2 big"></div>\n      <div class="ph-col-12 big"></div>\n    </div>\n  </div>\n</div>\n<div *ngIf="p!=1">\n  <ion-card *ngIf="type==\'normal\' || type==\'recent\' || type==\'wishList\'" class="animated fadeIn">\n    <div class="card-thumb">\n      <div class="card-tag-new" *ngIf="checkProductNew()" translate></div>\n      <div class="card-tags">\n        <div class="card-tag-off" *ngIf="p.on_sale==true">{{\'SALE\'|translate}}</div>\n        <div class="card-tag-featured" *ngIf="p.featured">{{\'Featured\'|translate}}</div>\n      </div> <!-- 2.0 updates -->\n      <img class="image" *ngIf="p.images" src="{{p.images[0].src}}" (click)="showProductDetail()" />\n    </div>\n    <ion-card-content>\n      <ion-card-title>\n        <div class="line-clamp" (click)="showProductDetail()">{{p.name}}</div>\n      </ion-card-title>\n      <ion-row class="card-attr">\n        <ion-col col-10>\n          <h4 font-80 [innerHTML]="p.price_html"></h4>\n        </ion-col>\n        <!-- <h3 *ngIf="p.type==\'grouped\'" no-margin dark> -->\n\n        <!-- </h3> -->\n        <ion-col text-center col-2>\n          <ion-icon [name]="isLiked==0? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n    <ion-buttons class="bar-buttons-remove" *ngIf="type==\'wishList\'">\n      <button ion-button block color="danger" (click)="removeWishList();">\n        {{\'REMOVE\'|translate}}\n      </button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf="type==\'normal\'">\n      <button ion-button block color="secondary" *ngIf="config.cartButton==1 && p.in_stock==true && p.type==\'simple\'"\n        (click)="addToCart(p);">{{\'ADD TO CART\'|translate}}</button>\n      <button ion-button block color="secondary" (click)="showProductDetail()"\n        *ngIf="config.cartButton==1 && p.in_stock==true && p.type!=\'simple\'">{{\'DETAILS\'|translate}}</button>\n      <button ion-button block color="danger"\n        *ngIf="config.cartButton==1 && p.in_stock==false">{{\'OUT OF STOCK\'|translate}}</button>\n    </ion-buttons>\n\n    <ion-buttons class="bar-buttons-remove" *ngIf="type==\'recent\'">\n      <button ion-button block color="danger" (click)="removeRecent()">{{\'REMOVE\'|translate}}</button>\n    </ion-buttons>\n\n    <ion-row class="card-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n    </ion-row>\n  </ion-card>\n\n\n\n  <ion-item *ngIf="type==\'list\'" class="animated fadeIn">\n    <ion-row class="list-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n    </ion-row>\n    <div class="list-tags">\n      <div class="list-tag-off" *ngIf="p.on_sale==true">{{\'SALE\'|translate}}</div>\n      <div class="list-tag-featured" *ngIf="p.featured">{{\'Featured\'|translate}}</div>\n    </div> <!-- 2.0 updates -->\n    <ion-thumbnail item-start>\n      <div class="list-tag-new" *ngIf="checkProductNew()" translate></div>\n      <img *ngIf="p.images" src="{{p.images[0].src}}" (click)="showProductDetail()">\n    </ion-thumbnail>\n    <h2>\n      <div class="line-clamp" (click)="showProductDetail()">{{p.name}}</div>\n    </h2>\n    <div class="list-price-block">\n      <h4 font-80 [innerHTML]="p.price_html"></h4>\n    </div>\n    <ion-row align-items-center>\n      <ion-col col-10>\n        <button ion-button solid small color="secondary"\n          *ngIf="config.cartButton==1 && p.in_stock==true && p.type ==\'simple\'" (click)="addToCart(p)"\n          item-start>{{\'ADD TO CART\'|translate}}</button>\n        <button ion-button solid small color="secondary" (click)="showProductDetail()"\n          *ngIf="config.cartButton==1 && p.in_stock==true && p.type!=\'simple\'"\n          item-start>{{\'DETAILS\'|translate}}</button>\n        <button ion-button solid small color="danger" *ngIf="config.cartButton==1 && p.in_stock==false"\n          item-start>{{\'OUT OF STOCK\'|translate}}</button>\n      </ion-col>\n      <ion-col col-2>\n        <ion-icon item-end [name]="isLiked==0? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-item>\n</div>'/*ion-inline-end:"E:\app5\src\components\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], ProductComponent);
    return ProductComponent;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_categorie_pages_categories_categories__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_wish_list_wish_list__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_news__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categorie_pages_categories3_categories3__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_categorie_pages_categories2_categories2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categorie_pages_categories5_categories5__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_categorie_pages_categories4_categories4__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_categorie_pages_categories6_categories6__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/







///import { share } from 'rxjs/operator/share';
//import { AboutUsPage } from '../../pages/about-us/about-us';








var FooterComponent = /** @class */ (function () {
    function FooterComponent(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.segments = 'HomePage';
        // console.log(shared.selectedFooterPage);
        this.segments = shared.selectedFooterPage;
    }
    FooterComponent.prototype.openPage = function (page) {
        this.shared.selectedFooterPage = page;
        if (page == "HomePage") {
            this.openHomePage();
        }
        else if (page == "WishListPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_wish_list_wish_list__["a" /* WishListPage */]);
        }
        else if (page == "ProductsPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_products_products__["a" /* ProductsPage */]);
        }
        else if (page == "NewsPage") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */]);
        }
        else if (page == "SettingsPage") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]);
        }
    };
    FooterComponent.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_pages_home_home__["a" /* HomePage */]);
        }
    };
    FooterComponent.prototype.openCategoryPage = function () {
        if (this.config.categoryPage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_categorie_pages_categories_categories__["a" /* CategoriesPage */]);
        }
        if (this.config.categoryPage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_categorie_pages_categories2_categories2__["a" /* Categories2Page */]);
        }
        if (this.config.categoryPage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_categorie_pages_categories3_categories3__["a" /* Categories3Page */]);
        }
        if (this.config.categoryPage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_categorie_pages_categories4_categories4__["a" /* Categories4Page */]);
        }
        if (this.config.categoryPage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_categorie_pages_categories5_categories5__["a" /* Categories5Page */]);
        }
        if (this.config.categoryPage == 6) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_categorie_pages_categories6_categories6__["a" /* Categories6Page */]);
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footer',template:/*ion-inline-start:"E:\app5\src\components\footer\footer.html"*/'<ion-toolbar color="light">\n\n  <ion-segment [(ngModel)]="segments" *ngIf="config.defaultIcons">\n\n    <ion-segment-button value="HomePage" (click)="openPage(\'HomePage\')">\n\n      <ion-icon name="custom-home"></ion-icon>\n\n      <div class="footer-title">{{ \'Home\' | translate }}</div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="WishListPage" (click)="openPage(\'WishListPage\')">\n\n      <ion-icon name="custom-heart"></ion-icon>\n\n      <div class="footer-title">{{ \'Wishlist\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Categories\' | translate }} -->\n\n    <ion-segment-button value="ProductsPage" (click)="openPage(\'ProductsPage\')">\n\n      <ion-icon name="custom-shopping-cart"></ion-icon>\n\n      <div class="footer-title">{{ \'Shop\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Shop\' | translate }} -->\n\n    <ion-segment-button value="NewsPage" (click)="openPage(\'NewsPage\')">\n\n      <ion-icon name="custom-star"></ion-icon>\n\n      <div class="footer-title">{{ \'News\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'News\' | translate }} -->\n\n  </ion-segment>\n\n\n\n  <ion-segment [(ngModel)]="segments" *ngIf="!config.defaultIcons">\n\n    <ion-segment-button value="HomePage" (click)="openPage(\'HomePage\')">\n\n      <ion-icon name="custom-home"></ion-icon>\n\n      <div class="footer-title">{{ \'Home\' | translate }}</div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="WishListPage" (click)="openPage(\'WishListPage\')">\n\n      <ion-icon name="custom-heart"></ion-icon>\n\n      <div class="footer-title">{{ \'Wishlist\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Categories\' | translate }} -->\n\n    <ion-segment-button value="ProductsPage" (click)="openPage(\'ProductsPage\')">\n\n      <ion-icon name="custom-shopping-cart"></ion-icon>\n\n      <div class="footer-title">{{ \'Shop\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Shop\' | translate }} -->\n\n    <ion-segment-button value="NewsPage" (click)="openPage(\'NewsPage\')">\n\n      <ion-icon name="custom-star"></ion-icon>\n\n      <div class="footer-title">{{ \'News\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'News\' | translate }} -->\n\n  </ion-segment>\n\n</ion-toolbar>'/*ion-inline-end:"E:\app5\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_config_config__["a" /* ConfigProvider */]])
    ], FooterComponent);
    return FooterComponent;
}());

// events.subscribe('footerPageChange', (value) => {
//   console.log(value);
//   this.segments = value;
// });
// this.events.publish('footerPageChange',page);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/







var SlidingTabsComponent = /** @class */ (function () {
    function SlidingTabsComponent(shared, http, config, loading, applicationRef) {
        this.shared = shared;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
    }
    SlidingTabsComponent.prototype.getProducts = function (infiniteScroll) {
        var _this = this;
        if (this.loadingServerData)
            return 0;
        if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
        }
        this.loadingServerData = true;
        var query = 'products?' + 'page=' + this.page;
        if (this.selected != '')
            query = 'products?category=' + this.selected + '&page=' + this.page;
        query = query + "&status=publish" + "&" + this.config.productsArguments;
        this.config.Woocommerce.getAsync(query).then(function (data) {
            var dat = JSON.parse(data.body);
            _this.infinite.complete();
            if (_this.page == 1) {
                _this.products = new Array;
            }
            if (dat.length != 0) {
                _this.page++;
                for (var _i = 0, dat_1 = dat; _i < dat_1.length; _i++) {
                    var value = dat_1[_i];
                    _this.products.push(value);
                }
            }
            if (dat.length == 0) {
                _this.infinite.enable(false);
            }
            _this.loadingServerData = false;
            _this.applicationRef.tick();
        });
    };
    //changing tab
    SlidingTabsComponent.prototype.changeTab = function (c) {
        this.infinite.enable(true);
        this.page = 1;
        if (c == '')
            this.selected = c;
        else
            this.selected = c.id;
        this.getProducts(null);
        this.loading.autoHide(700);
    };
    SlidingTabsComponent.prototype.ngOnInit = function () {
        this.getProducts(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* InfiniteScroll */])
    ], SlidingTabsComponent.prototype, "infinite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], SlidingTabsComponent.prototype, "type", void 0);
    SlidingTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sliding-tabs',template:/*ion-inline-start:"E:\app5\src\components\sliding-tabs\sliding-tabs.html"*/'<div *ngIf="type==\'image\'">\n\n  <ion-slides slidesPerView="auto" dir="{{shared.dir}}" id="slides">\n    <ion-slide class="swiper-slide-lg" [class.selected]="selected==\'\'" *ngIf="shared.allCategories!=null" (click)="changeTab(\'\')">\n      <h2 style="padding-top:2px; padding-bottom:2px;"><img src="assets/home-page/category.png"></h2>\n      <h3>{{\'All\'|translate}}</h3>\n    </ion-slide>\n    <ion-slide class="swiper-slide-lg" [class.selected]="selected==c.id" *ngFor="let c of shared.allCategories" (click)="changeTab(c)">\n      <h2>\n        <img *ngIf="c.image" src="{{c.image.src}}">\n      </h2>\n      <h3>{{c.name}}</h3>\n    </ion-slide>\n  </ion-slides>\n\n</div>\n\n<div *ngIf="type!=\'image\'">\n  <ion-slides slidesPerView="auto" dir="{{shared.dir}}">\n    <ion-slide [class.selected]="selected==\'\'" *ngIf="shared.allCategories!=null" (click)="changeTab(\'\')">\n      {{\'All\'|translate}}\n    </ion-slide>\n    <ion-slide [class.selected]="selected==c.id" *ngFor="let c of shared.allCategories" (click)="changeTab(c)">\n      {{c.name}}\n    </ion-slide>\n  </ion-slides>\n\n</div>\n\n<ion-grid>\n  <ion-col *ngFor="let p of products" col-6>\n    <product [data]="p" [type]="\'normal\'"></product>\n  </ion-col>\n\n  <ion-col *ngIf="products.length==0 && !loadingServerData" col-12 class="animated fadeIn">\n    <h6 text-center>{{\'No Products Found!\'|translate}}</h6>\n  </ion-col>\n</ion-grid>\n\n<ion-infinite-scroll #infinite (ionInfinite)="getProducts($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>'/*ion-inline-end:"E:\app5\src\components\sliding-tabs\sliding-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SlidingTabsComponent);
    return SlidingTabsComponent;
}());

//# sourceMappingURL=sliding-tabs.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurencyPipe = /** @class */ (function () {
    function CurencyPipe() {
        this.currency = __WEBPACK_IMPORTED_MODULE_1_jquery__('<textarea />').html(localStorage.currency).text();
        this.position = localStorage.currencyPos;
        this.decimal = localStorage.decimals;
    }
    CurencyPipe.prototype.transform = function (value) {
        var v = parseFloat(value).toFixed(this.decimal);
        if (v.toString() == 'NaN') {
            if (this.position == 'left')
                return this.currency + "" + value;
            else
                return value + " " + this.currency;
        }
        else {
            if (this.position == 'left')
                return this.currency + "" + v;
            else
                return v + " " + this.currency;
        }
    };
    CurencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'curency',
        }),
        __metadata("design:paramtypes", [])
    ], CurencyPipe);
    return CurencyPipe;
}());

//# sourceMappingURL=curency.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/







var SubCategories5Page = /** @class */ (function () {
    function SubCategories5Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories5Page_1 = SubCategories5Page;
    SubCategories5Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories5Page_1, { 'parent': id });
    };
    SubCategories5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    SubCategories5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    SubCategories5Page = SubCategories5Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories5',template:/*ion-inline-start:"E:\app5\src\pages\categorie-pages\sub-categories5\sub-categories5.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content class="card-background-page">\n\n  <div *ngFor="let c of shared.subCategories">\n    <ion-card *ngIf="c.parent==parent" (click)="openProducts(c.id,c.name)" class="animated flipInX"> \n      <img *ngIf="c.image" src="{{c.image.src}}" />\n      <div class="card-title">{{c.name}}</div>\n      <div class="card-subtitle">{{c.count}} {{\'Products\'| translate }} </div>\n    </ion-card>\n  </div>\n  \n</ion-content>'/*ion-inline-end:"E:\app5\src\pages\categorie-pages\sub-categories5\sub-categories5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories5Page);
    return SubCategories5Page;
    var SubCategories5Page_1;
}());

//# sourceMappingURL=sub-categories5.js.map

/***/ })

},[575]);
//# sourceMappingURL=main.js.map