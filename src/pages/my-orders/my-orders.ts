// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component, ViewChild, ApplicationRef } from '@angular/core';
import { NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { Http } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
import { TranslateService } from '@ngx-translate/core';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { OrderDetailPage } from '../order-detail/order-detail';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { ProductsPage } from '../products/products';
import { BookPage } from '../book/book';


import { IonicPage, ModalController, Platform, Events } from 'ionic-angular';

import { Book, BooksService } from '../../providers/books-service/books-service';
import { ParseDbBookProvider } from '../../providers/parse-db-book/parse-db-book';
import { DbServiceProvider } from '../../providers/db-service/db-service';


@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrdersPage {
  onlineBooks: any;
  books: Book[];

  @ViewChild(InfiniteScroll) infinite: InfiniteScroll;
  page = 1;
  orders = new Array;
  httpRunning = true;
  constructor(
    public platform: Platform,
    public events: Events,
    private modal: ModalController,
    public dbService: DbServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    translate: TranslateService,
    public alert: AlertProvider,
    public loading: LoadingProvider,
    private applicationRef: ApplicationRef
  ) {
    events.subscribe("booksRetrieved", (books) => {
      this.books = books;
    });
    this.platform.ready().then((readySource) => {
      this.dbService.getAllBooks().then((books) => {
        this.books = books;
      });
    });


  }
  onBook(book) {
    this.navCtrl.setRoot(BookPage, {}, { animate: true, direction: "forward" });
  }
  getOrders() {
    this.httpRunning = true;
    if (this.page == 1) { this.loading.show(); }

    this.config.Woocommerce.getAsync('orders/?' + 'page=' + this.page + "&customer=" + this.shared.customerData.id + "&" + this.config.productsArguments).then((dat) => {
      this.infinite.complete();
      this.httpRunning = false;
      let data = JSON.parse(dat.body);
      console.log(data);
      if (this.page == 1) { this.orders = new Array; this.loading.hide(); }
      if (data.length != 0) {
        this.page++;

        for (let value of data) {
          this.orders.push(value);
          console.log(this.orders);
        }
      }

      if (data.length == 0) { this.infinite.enable(false); }

      this.applicationRef.tick();
    }, err => {
      this.loading.hide();
      this.alert.show("Server Error while Loading Orders");
    });
  };
  showOrderDetail(order) {

    this.navCtrl.push(OrderDetailPage, { 'data': order });

  }
  ionViewDidLoad() {
    this.httpRunning = true;
    this.getOrders();
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }
  openShop() {
    this.navCtrl.push(ProductsPage);
  }
  refreshPage() {
    this.page = 1;
    this.getOrders();

  }
  addCurrecny(order, v2) {
    return order.currency + " " + v2;
  }

  open(data){
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
      }
      read(book){
        book = [
          {
            id: "1",
            cover: "assets/imgs/cover.png",
      
            label: "Jars-of-Clay",
            file: "assets/Jars-of-Clay.epub"
          },
        
        ];
      
        console.log('show', book);
        this.navCtrl.setRoot(BookPage, {
          book: book[0]
        });
      }
}
