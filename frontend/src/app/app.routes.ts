import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AuthPageComponent} from "./components/auth-page/auth-page.component";
import {BandsPageComponent} from "./components/bands-page/bands-page.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'auth', component: AuthPageComponent, pathMatch: 'full' },
  { path: 'auth/:login', component: AuthPageComponent },
  { path: 'bands', component: BandsPageComponent }
];
