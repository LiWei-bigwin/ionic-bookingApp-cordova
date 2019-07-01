import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableOfContentsPage } from './table-of-contents';

@NgModule({
  declarations: [
    TableOfContentsPage,
  ],
  imports: [
    IonicPageModule.forChild(TableOfContentsPage),
  ],
})
export class TableOfContentsPageModule {}
