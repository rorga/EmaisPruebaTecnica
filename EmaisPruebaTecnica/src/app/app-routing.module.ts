import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'favorites', component: FavoritesPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
