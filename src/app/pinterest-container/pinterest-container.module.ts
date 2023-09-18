import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinterestContainerComponent } from './pinterest-container.component';
import { PinterestTopBarComponent } from './pinterest-top-bar/pinterest-top-bar.component';
import { PinterestTopBarSigninComponent } from './pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';
import { PinterestTopBarSignupComponent } from './pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTileComponent } from './create-tile/create-tile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PinterestContainerRoutingModule } from './pinterest-container-routing.module';



@NgModule({
  declarations: [
    PinterestContainerComponent,
    PinterestTopBarComponent,
    PinterestTopBarSigninComponent,
    PinterestTopBarSignupComponent,
    CreateTileComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PinterestContainerRoutingModule
  ],
  exports: [
    PinterestContainerComponent
  ]
})
export class PinterestContainerModule { }
