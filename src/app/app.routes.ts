import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GirlClothesPageComponent } from './detail-clothes-page/girl-clothes-page.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'girl-clothes', component: GirlClothesPageComponent },
];
