import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinterestTopBarSigninComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signin/pinterest-top-bar-signin.component';
import { PinterestTopBarSignupComponent } from './pinterest-container/pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.component';
import { CreateTileComponent } from './pinterest-container/create-tile/create-tile.component';
import { FavoritesComponent } from './pinterest-container/favorites/favorites.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./pinterest-container/pinterest-container.module").then(m => m.PinterestContainerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [authGuard],
})
export class AppRoutingModule { }
