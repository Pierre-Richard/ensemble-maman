import { Routes } from '@angular/router';
import { GirlclothingComponent } from './girlclothing/girlclothing.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'grilclothing', component: GirlclothingComponent },
];
