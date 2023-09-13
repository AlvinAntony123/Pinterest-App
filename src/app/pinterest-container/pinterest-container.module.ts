import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinterestContainerComponent } from './pinterest-container.component';
import { PinterestTopBarComponent } from './pinterest-top-bar/pinterest-top-bar.component';
import { PinterestTopBarSigninComponent } from './pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';



@NgModule({
  declarations: [
    PinterestContainerComponent,
    PinterestTopBarComponent,
    PinterestTopBarSigninComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PinterestContainerComponent
  ]
})
export class PinterestContainerModule { }
