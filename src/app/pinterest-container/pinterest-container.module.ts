import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinterestContainerComponent } from './pinterest-container.component';
import { PinterestTopBarComponent } from './pinterest-top-bar/pinterest-top-bar.component';
import { PinterestTopBarSigninComponent } from './pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';
import { PinterestTopBarSignupComponent } from './pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateTileComponent } from './create-tile/create-tile.component';



@NgModule({
  declarations: [
    PinterestContainerComponent,
    PinterestTopBarComponent,
    PinterestTopBarSigninComponent,
    PinterestTopBarSignupComponent,
    CreateTileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PinterestContainerComponent
  ]
})
export class PinterestContainerModule { }
