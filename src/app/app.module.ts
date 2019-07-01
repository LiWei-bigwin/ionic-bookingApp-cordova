// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
// Version: 1.0
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home-pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { createTranslateLoader } from '../providers/translate/translate';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IonicStorageModule } from '@ionic/storage';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';

import { IntroPage } from '../pages/intro/intro';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { LoadingProvider } from '../providers/loading/loading';
import { SharedDataProvider } from '../providers/shared-data/shared-data';

import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

import { BannersComponent } from '../components/banners/banners';
import { ProductComponent } from '../components/product/product';
import { FooterComponent } from '../components/footer/footer';
import { SlidingTabsComponent } from '../components/sliding-tabs/sliding-tabs';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { CartPage } from '../pages/cart/cart';
import { CurencyPipe } from '../pipes/curency/curency';
import { SearchPage } from '../pages/search/search';
import { AlertProvider } from '../providers/alert/alert';
import { CategoriesPage } from '../pages/categorie-pages/categories/categories';
import { ProductsPage } from '../pages/products/products';
import { WishListPage } from '../pages/wish-list/wish-list';
import { ShippingAddressPage } from '../pages/address-pages/shipping-address/shipping-address';
import { SelectCountryPage } from '../pages/select-country/select-country';
import { SelectZonesPage } from '../pages/select-zones/select-zones';
import { BillingAddressPage } from '../pages/address-pages/billing-address/billing-address';
import { ShippingMethodPage } from '../pages/shipping-method/shipping-method';
import { OrderPage } from '../pages/order/order';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ThankYouPage } from '../pages/thank-you/thank-you';
import { Stripe } from '@ionic-native/stripe';
import { CouponProvider } from '../providers/coupon/coupon';
import { PayPal } from '@ionic-native/paypal';
import { MyAccountPage } from '../pages/my-account/my-account';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { NewsPage } from '../pages/news/news';
import { SettingsPage } from '../pages/settings/settings';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsListPage } from '../pages/news-list/news-list';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Push } from '@ionic-native/push';
import { Device } from '@ionic-native/device';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Categories2Page } from '../pages/categorie-pages/categories2/categories2';
import { SubCategoriesPage } from '../pages/categorie-pages/sub-categories/sub-categories';
import { Categories3Page } from '../pages/categorie-pages/categories3/categories3';
import { Categories4Page } from '../pages/categorie-pages/categories4/categories4';
import { Categories5Page } from '../pages/categorie-pages/categories5/categories5';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TermServicesPage } from '../pages/term-services/term-services';
import { RefundPolicyPage } from '../pages/refund-policy/refund-policy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Network } from '@ionic-native/network';
import { SubCategories2Page } from '../pages/categorie-pages/sub-categories2/sub-categories2';
import { SubCategories3Page } from '../pages/categorie-pages/sub-categories3/sub-categories3';
import { SubCategories4Page } from '../pages/categorie-pages/sub-categories4/sub-categories4';
import { SubCategories5Page } from '../pages/categorie-pages/sub-categories5/sub-categories5';
import { Categories6Page } from '../pages/categorie-pages/categories6/categories6';
import { SubCategories6Page } from '../pages/categorie-pages/sub-categories6/sub-categories6';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AdMobFree} from '@ionic-native/admob-free';
import { FCM } from '@ionic-native/fcm';
import { AppVersion } from '@ionic-native/app-version';
import { LocationDataProvider } from '../providers/location-data/location-data';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { ReviewsPage } from '../pages/reviews/reviews';
import { AddReviewPage } from '../pages/add-review/add-review';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { AddressesPage } from '../pages/address-pages/addresses/addresses';
import { DownloadsPage } from '../pages/downloads/downloads';
import { StorePage } from '../pages/store/store';
import { EmailComposer } from '@ionic-native/email-composer';
import { LanguagePage } from '../pages/language/language';
import { DecimalPipe } from '@angular/common';
import { CurrencyListPage } from '../pages/currency-list/currency-list';
import { RewardPointsPage } from '../pages/reward-points/reward-points';
import { SettingPage } from '../pages/setting/setting';

import { BooksService, BookMark } from '../providers/books-service/books-service';

import { DbServiceProvider } from '../providers/db-service/db-service';
import { ParseDbBookProvider } from '../providers/parse-db-book/parse-db-book';
import { SQLite } from '@ionic-native/sqlite';
import { DNS } from '@ionic-native/dns';
import { BookPage } from '../pages/book/book';
import { BookDetailsModalPage } from '../pages/book-details-modal/book-details-modal';
import { TableOfContentsPage } from '../pages/table-of-contents/table-of-contents';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { HighlightsPage } from '../pages/highlights/highlights';


@NgModule({
  declarations: [
    BookmarksPage,
    HighlightsPage,
    BookDetailsModalPage,
    TableOfContentsPage,
    BookPage,
    SettingPage,
    MyApp,
    HomePage,
    SearchPage,
    CartPage,
 
    SettingPage,
    SearchPage,
    CategoriesPage,
    Categories2Page,
    Categories3Page,
    Categories4Page,
    Categories5Page,
    Categories6Page,
    IntroPage,
    SubCategoriesPage,
    SubCategories2Page,
    SubCategories3Page,
    SubCategories4Page,
    SubCategories5Page,
    SubCategories6Page,
    ProductsPage,
    ContactUsPage,
    AboutUsPage,
    IntroPage,
    LoginPage,
    SignUpPage,
    WishListPage,
    ShippingAddressPage,
    ForgotPasswordPage,
    BannersComponent,
    SelectZonesPage,
    BillingAddressPage,
    SelectCountryPage,
    MyAccountPage,
    ProductComponent,
    FooterComponent,
    SlidingTabsComponent,
    ProductDetailPage,
    CurencyPipe,
    ShippingMethodPage,
    ThankYouPage,
    OrderPage,
    OrderDetailPage,
    MyOrdersPage,
    PrivacyPolicyPage,
    RefundPolicyPage,
    TermServicesPage,
    NewsPage,
    AddressesPage,
    DownloadsPage,
    NewsDetailPage,
    NewsListPage,
    SettingsPage,
    ReviewsPage,
    AddReviewPage,
    StorePage,
    LanguagePage,
    CurrencyListPage,
    RewardPointsPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      iconMode: 'md',
      mode:'md',
    
    }),
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule,// <!-- 2.0 updates start -->
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TableOfContentsPage,
    BookmarksPage,
    HighlightsPage,
    SettingPage,
    BookDetailsModalPage,
    BookPage,
    MyApp,
    HomePage,
    SearchPage,
    CategoriesPage,
    Categories2Page,
    Categories3Page,
    Categories4Page,
    Categories5Page,
    Categories6Page,
    SubCategoriesPage,
    SubCategories2Page,
    SubCategories3Page,
    SubCategories4Page,
    SubCategories5Page,
    SubCategories6Page,
    IntroPage,
    PrivacyPolicyPage,
    RefundPolicyPage,
    TermServicesPage,
    AddressesPage,
    DownloadsPage,
    ProductsPage,
    ContactUsPage,
    AboutUsPage,
    IntroPage,
    WishListPage,
    ShippingAddressPage,
    CartPage,
    LoginPage,
    SignUpPage,
    BillingAddressPage,
    SelectCountryPage,
    SelectZonesPage,
    MyAccountPage,
    ForgotPasswordPage,
    BannersComponent,
    ProductComponent,
    FooterComponent,
    SlidingTabsComponent,
    ProductDetailPage,
    ShippingMethodPage,
    OrderPage,
    MyOrdersPage,
    OrderDetailPage,
    ThankYouPage,
    NewsPage,
    NewsDetailPage,
    NewsListPage,
    SettingsPage,
    ReviewsPage,
    AddReviewPage, 
    StorePage,
    LanguagePage,
    CurrencyListPage,
    RewardPointsPage
  ],
  providers: [
    DNS,  
    DecimalPipe,
    ConfigProvider,
    StatusBar,
    SplashScreen,
    SocialSharing,
    ConfigProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoadingProvider,
    SharedDataProvider,
    Stripe,
    AlertProvider,
    CouponProvider,
    PayPal,
    Push,
    Device,
    Facebook,
    GooglePlus,
    LocalNotifications,
    InAppBrowser,
    Network,
    AdMobFree,
    FCM,
    SQLite,
    EmailComposer,
    AppVersion,
    LocationDataProvider,
    SpinnerDialog,
    ThemeableBrowser,
    ParseDbBookProvider,
    DbServiceProvider,
    BooksService
  ]
})
export class AppModule { }
