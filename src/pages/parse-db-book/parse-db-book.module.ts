import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParseDbBookPage } from './parse-db-book';

@NgModule({
  declarations: [
    ParseDbBookPage,
  ],
  imports: [
    IonicPageModule.forChild(ParseDbBookPage),
  ],
})
export class ParseDbBookPageModule {}
