import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighlightsPage } from './highlights';

@NgModule({
  declarations: [
    HighlightsPage,
  ],
  imports: [
    IonicPageModule.forChild(HighlightsPage),
  ],
})
export class HighlightsPageModule {}
