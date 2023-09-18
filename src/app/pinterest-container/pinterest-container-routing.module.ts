import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinterestTopBarSigninComponent } from './pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';
import { PinterestTopBarSignupComponent } from './pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.component';
import { CreateTileComponent } from './create-tile/create-tile.component';
import { authGuard } from 'app/services/auth.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { PinterestContainerComponent } from './pinterest-container.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PinterestContainerComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: PinterestTopBarSigninComponent
  },
  {
    path: 'signup',
    component: PinterestTopBarSignupComponent
  },
  {
    path: 'create',
    component: CreateTileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'favorite',
    component: FavoritesComponent,
    canActivate: [authGuard]
  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [authGuard],
})
export class PinterestContainerRoutingModule { }
