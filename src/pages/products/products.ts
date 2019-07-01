// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component, ViewChild, ApplicationRef } from '@angular/core';
import { NavController, NavParams, InfiniteScroll, Content, ActionSheetController, Slides, MenuController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { Http } from '@angular/http';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { LoadingProvider } from '../../providers/loading/loading';
import { TranslateService } from '@ngx-translate/core';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  queryAttributes = "";
  attributes = [];
  tempAttributes = [];
  selectedAttributes = [];
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  scrollTopButton = false;

  @ViewChild(InfiniteScroll) infinite: InfiniteScroll;
  //@ViewChild(IonRange) priceRange: IonRange;
  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  selectedTab = '';
  categoryId = '';
  categoryName = '';
  sortOrder = 'Newest';
  sortArray = ['Newest', 'A - Z', 'Z - A'];
  //, 'A - Z Date', 'Z - A Date'
  //'Latest', 'On Sale', 'Featured'
  page = 1;
  applyFilter = false;
  filters = [];
  selectedFilters = [];
  maxAmount = 1000;
  minAmount = 0;
  price = { lower: 0, upper: this.maxAmount };
  side = "right";
  productView = 'grid';
  on_sale: any;
  featured: any;
  filterOnSale = false;
  filterFeatured = false;
  loadingServerData = true;
  type = "";
  listOfFilteredIdsFromCustom = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    public loading: LoadingProvider,
    public translate: TranslateService,
    public http: Http,
    public actionSheet: ActionSheetController,
    public menuCtrl: MenuController,
    private applicationRef: ApplicationRef) {

    if (shared.dir == "rtl") this.side = "left";

    if (this.navParams.get('id') != undefined) this.selectedTab = this.categoryId = this.navParams.get('id');
    if (this.navParams.get('name') != undefined) this.categoryName = this.navParams.get('name');
    if (this.navParams.get('type') != undefined) this.type = this.navParams.get('type');

    console.log(this.type);
    this.applicationRef.tick();
    this.getFilterdProducts();

  }
  resetProducts() {
    this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    setTimeout(() => {
      this.scrollToTop();
    }, 500);

  }

  getFilterdProducts() {

    if (this.page == 1) {
      this.resetProducts();
      //this.loading.show();
      this.loadingServerData = false;
    }
    let query = '&page=' + this.page;
    if (this.sortOrder == "Newest") query = query + "&order=desc&orderby=date";
    else if (this.sortOrder == "A - Z") query = query + "&order=asc&orderby=title";
    else if (this.sortOrder == "Z - A") query = query + "&order=desc&orderby=title";

    if (this.type == "featured" || this.filterFeatured) { query = query + "&featured=true"; this.filterFeatured = true; }

    if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) { query = query + "&on_sale=true"; this.filterOnSale = true; }

    if (this.price.lower != this.minAmount && this.applyFilter == true) query = query + "&min_price=" + this.price.lower;
    if (this.price.upper != this.maxAmount && this.applyFilter == true) query = query + "&max_price=" + this.price.upper;
    if (this.selectedTab != '') query = query + '&cat_id=' + this.selectedTab;
    query = query + '&page=' + this.page;
    query = query + this.queryAttributes;
    console.log("custom Id = " + query);
    this.getAllAttributes();
    this.http.get(this.config.url + '/api/appsettings/ionic_filter_products/?insecure=cool' + query).map(res => res.json()).subscribe(data => {
      if (data.data)
        this.listOfFilteredIdsFromCustom = data.data;
      this.applicationRef.tick();
      this.getFilterdProductsFromWoo();
    });

  }

  getFilterdProductsFromWoo() {

    if (this.listOfFilteredIdsFromCustom.length == 0) {
      this.infinite.enable(false);
      this.loadingServerData = true;
      //this.emptyProductList();
      //this.loading.hide();
      return 0;
    }

    let q = 'products?include=' + this.listOfFilteredIdsFromCustom + "&status=publish";

    console.log(this.listOfFilteredIdsFromCustom);
    if (this.sortOrder == "Newest") q = q + "&order=desc&orderby=date";
    else if (this.sortOrder == "A - Z") q = q + "&order=asc&orderby=title";
    else if (this.sortOrder == "Z - A") q = q + "&order=desc&orderby=title";

    // if (this.type == "featured" || this.filterFeatured) { q = q + "&featured=true"; this.filterFeatured = true; }

    // if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) { q = q + "&on_sale=true"; this.filterOnSale = true; }
    console.log(q);
    this.config.Woocommerce.getAsync(q + "&" + this.config.productsArguments).then((dat) => {
      //this.loading.hide();

      let data = JSON.parse(dat.body);
      this.infinite.complete();
      if (this.page == 1) { this.emptyProductList(); this.scrollToTop(); this.infinite.enable(true); }
      if (data.length != 0) {
        this.page++;
        for (let value of data) {
          this.products.push(value);
        }
      }

      if (data.length == 0 || data.length < 10) {
        this.infinite.enable(false);
      }

      this.applicationRef.tick();
      this.loadingServerData = true;
    });
  }
  emptyProductList(): any {
    this.products = [];
  }
  //============================================================================================  
  // filling filter array for keyword search 
  fillFilterArray = function (value, option) {
    this.applyFilters();
  };

  resetFilters() {
    this.reset();
  }

  reset() {
    this.applyFilter = false;
    this.filterFeatured = false;
    this.type = "latest";
    this.sortOrder = "Newest"
    this.filterOnSale = false;
    this.page = 1;

    this.selectedAttributes = [];
    this.queryAttributes = "";

    this.getFilterdProducts();
  }

  //changing tab
  changeTab(c) {
    if (c == '') this.selectedTab = c
    else this.selectedTab = c.id;
    this.reset();
  }

  applyFilters() {
    this.toggleMenu();
    //this.type = "latest";
    this.applyFilter = true;
    //this.infinite.enable(true);
    this.page = 1;
    //this.getProducts(null);
    this.getFilterdProducts();
  }

  getSortProducts(value) {
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
  }

  openSortBy() {

    var buttonArray = [];
    this.translate.get(this.sortArray).subscribe((res) => {
      // console.log(res);

      for (let key in res) {
        buttonArray.push({ text: res[key], handler: () => { this.getSortProducts(key) } });
      }
      this.translate.get('Cancel').subscribe((res) => {
        buttonArray.push(
          {
            text: res,
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          }
        );
        var actionSheet = this.actionSheet.create({
          buttons: buttonArray
        });
        actionSheet.present();
      });
    });


  }
  changeLayout() {
    if (this.productView == 'list') this.productView = "grid";
    else this.productView = "list";

    this.scrollToTop();
  }

  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  onScroll(e) {
    if (e.scrollTop >= 1200) this.scrollTopButton = true;
    if (e.scrollTop < 1200) this.scrollTopButton = false;
    //else this.scrollTopButton=false;
    //   console.log(e);
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  ionViewDidLoad() {
    // console.log("loaded");

    try {
      setTimeout(() => {
        let ind = 0;
        this.shared.allCategories.forEach((value, index) => {
          if (this.selectedTab == value.id) {
            ind = index; console.log("index to go " + ind);
          }
        });
        this.slides.slideTo(ind, 1000, true);
      }, 100);
    } catch (error) {

    }
  }
  removeString(s) {
    //console.log(s.replace('pa_', ''));
    return s.replace('pa_', '');
  }
  //=======================================================================================
  getAllAttributes() {
    // let cat = "&cat_id=" + this.selectedTab;
    // if (this.selectedTab == '') cat = '';
    let query = '';
    if (this.selectedTab != '') query = query + '&cat_id=' + this.selectedTab;
    query = query + this.queryAttributes;
    this.http.get(this.config.url + '/api/appsettings/ionic_get_attributes/?insecure=cool' + query).map(res => res.json()).subscribe(data => {
      if (data.attributes) {
        this.attributes = data.attributes;
      }
      else {
        this.attributes = [];
      }
      if (this.minAmount != data.min_price) this.minAmount = data.min_price;
      if (this.maxAmount != data.max_price) this.maxAmount = data.max_price;

      if (this.minAmount > this.price.lower) this.price.lower = this.minAmount;
      if (this.maxAmount < this.price.upper) this.price.upper = this.maxAmount;

      if (this.applyFilter == false) {
        this.price.lower = this.minAmount;
        this.price.upper = this.maxAmount;
      }
      this.on_sale = data.on_sale;
      this.featured = data.featured;

      this.applicationRef.tick();
    });
  }
  //=======================================================================================
  selectAttribute(a, v) {
    let found = false;
    this.selectedAttributes.forEach((x, index) => {

      if (x.slug == a.attribute_slug) {
        found = true;
        if (v.value == false) {
          x.list.forEach((y, ind) => {
            if (y == v.name) {
              x.list.splice(ind, 1);
            }
          });

        }
        else {
          let valueFound = false;
          x.list.forEach((y, ind) => {
            if (y == v.name) {
              valueFound = true;
              x.list.splice(ind, 1);
            }
          });
          if (valueFound == false) {
            x.list.push(v.name);
          }
        }
      }

      if (x.list.length == 0) {
        this.selectedAttributes.splice(index, 1);
      }
    });

    if (found == false) this.selectedAttributes.push({ slug: a.attribute_slug, list: [v.name] });
    console.log(this.selectedAttributes);
    this.applicationRef.tick();
    this.queryAttributes = "";
    for (let x of this.selectedAttributes) {
      this.queryAttributes = this.queryAttributes + "&" + x.slug + "="
      for (let y of x.list) {
        this.queryAttributes = this.queryAttributes + y + ","
      }
    }

    this.queryAttributes;
    console.log(this.queryAttributes);
    this.applyFilters();
  }
  //=======================================================================================
  toggleMenu() {
    console.log("called toggle");
    if (this.config.appDirection == "ltr")
      this.menuCtrl.toggle("right");
    else
      this.menuCtrl.toggle("left");
  }
  //=======================================================================================
  checkAttributeSelected(a, v) {
    let v1 = this.queryAttributes.indexOf(a.attribute_slug);
    let v2 = this.queryAttributes.indexOf(v.name);
    if (v1 != -1 && v2 != -1) { v.value = true; }
  }
}
