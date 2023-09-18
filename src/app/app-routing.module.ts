import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinterestContainerComponent } from './pinterest-container/pinterest-container.component';
import { PinterestTopBarSigninComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';
import { PinterestTopBarSignupComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.component';
import { CreateTileComponent } from './pinterest-container/create-tile/create-tile.component';
import { FavoritesComponent } from './pinterest-container/favorites/favorites.component';
import { authGuard } from './services/auth.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [authGuard],
})
export class AppRoutingModule { }
