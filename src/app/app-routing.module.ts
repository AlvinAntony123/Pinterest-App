import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinterestContainerComponent } from './pinterest-container/pinterest-container.component';
import { PinterestTopBarSigninComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';
import { PinterestTopBarSignupComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PinterestContainerComponent,
  },
  {
    path: 'login',
    component: PinterestTopBarSigninComponent
  },
  {
    path: 'signup',
    component: PinterestTopBarSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
