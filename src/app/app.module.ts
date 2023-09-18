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
import { PinterestContainerRoutingModule } from './pinterest-container/pinterest-container-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpsInterceptor } from './https.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PinterestContainerModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PinterestContainerRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsInterceptor,
      multi: true,
    },
    LocalStorageService,
    AddTileService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
