import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'detail', component: DetailPageComponent },
];
