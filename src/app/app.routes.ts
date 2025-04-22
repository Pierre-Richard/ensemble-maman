import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GrilClothePageComponent } from './gril-clothe-page/gril-clothe-page.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'gril-clothe', component: GrilClothePageComponent },
];
