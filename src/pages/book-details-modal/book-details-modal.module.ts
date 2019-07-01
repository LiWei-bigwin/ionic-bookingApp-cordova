import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookDetailsModalPage } from './book-details-modal';

@NgModule({
  declarations: [
    BookDetailsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BookDetailsModalPage),
  ],
})
export class BookDetailsModalPageModule {}
