import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinterestContainerModule } from './pinterest-container/pinterest-container.module';
import { PinterestTopBarComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar.component';
import { PinterestTopBarSigninComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';
import { PinterestTopBarSignupComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTileService } from './services/add-tile.service';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PinterestContainerModule,
    
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LocalStorageService,
    AddTileService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
