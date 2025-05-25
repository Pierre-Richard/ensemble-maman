import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { DetailClothesPageComponent } from './pages/detail-clothes-page/detail-clothes-page.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'detail-clothes', component: DetailClothesPageComponent },
];
