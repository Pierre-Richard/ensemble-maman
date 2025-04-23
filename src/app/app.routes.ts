import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GrilClothesPageComponent } from './gril-clothes-page/gril-clothes-page.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'gril-clothes', component: GrilClothesPageComponent },
];
