// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component, ViewChild, Input, ApplicationRef } from '@angular/core';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Http } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
import 'rxjs/add/operator/map';
import { LoadingProvider } from '../../providers/loading/loading';
import { InfiniteScroll } from 'ionic-angular';

@Component({
  selector: 'sliding-tabs',
  templateUrl: 'sliding-tabs.html'
})
export class SlidingTabsComponent {
  @ViewChild(InfiniteScroll) infinite: InfiniteScroll;

  @Input('type') type;//product data
  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  selected = '';
  page = 1;
  count = 0;
  loadingServerData = false;
  constructor(
    public shared: SharedDataProvider,
    public http: Http,
    public config: ConfigProvider,
    public loading: LoadingProvider,
    private applicationRef: ApplicationRef
  ) {

  }
  getProducts(infiniteScroll) {
    if (this.loadingServerData) return 0;
    if (this.page == 1) {

      this.count++;
      this.loadingServerData = false;
    }
    this.loadingServerData = true;
    let query = 'products?' + 'page=' + this.page;
    if (this.selected != '')
      query = 'products?category=' + this.selected + '&page=' + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments
    this.config.Woocommerce.getAsync(query).then((data) => {

      let dat = JSON.parse(data.body);

      this.infinite.complete();
      if (this.page == 1) {
        this.products = new Array;

      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.products.push(value);
        }
      }
      if (dat.length == 0) { this.infinite.enable(false); }
      this.loadingServerData = false;
      this.applicationRef.tick();
    });
  }

  //changing tab
  changeTab(c) {
    this.infinite.enable(true);
    this.page = 1;
    if (c == '') this.selected = c
    else this.selected = c.id;
    this.getProducts(null);
    this.loading.autoHide(700);
  }


  ngOnInit() {
    this.getProducts(null);
  }

}
