import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AuthPageComponent} from "./components/auth-page/auth-page.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'auth', component: AuthPageComponent, pathMatch: 'full' },
  { path: 'auth/:login', component: AuthPageComponent }
];
