import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AuthPageComponent} from "./components/auth-page/auth-page.component";
import {BandsPageComponent} from "./components/bands-page/bands-page.component";
import { SongsPageComponent } from './components/songs-page/songs-page.component';
import { ArtistsPageComponent } from './components/artists-page/artists-page.component';
import { GenresPageComponent } from './components/genres-page/genres-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'auth', component: AuthPageComponent, pathMatch: 'full' },
  { path: 'auth/:login', component: AuthPageComponent },
  { path: 'bands', component: BandsPageComponent },
  {path: 'songs', component: SongsPageComponent},
  {path: 'artists', component: ArtistsPageComponent},
  {path: 'genres', component: GenresPageComponent}
];
