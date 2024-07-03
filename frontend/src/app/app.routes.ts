import {Routes} from '@angular/router';
import {HomePageComponent} from "./components/pages/home-page/home-page.component";
import {AuthPageComponent} from "./components/pages/auth-page/auth-page.component";
import {BandsPageComponent} from "./components/pages/bands-page/bands-page.component";
import {SongsPageComponent} from "./components/pages/songs-page/songs-page.component";
import {ArtistsPageComponent} from "./components/pages/artists-page/artists-page.component";
import {GenresPageComponent} from "./components/pages/genres-page/genres-page.component";
import {AlbumsPageComponent} from "./components/pages/albums-page/albums-page.component";
import { PlaylistsPageComponent } from './components/pages/playlists-page/playlists-page.component';
import { CreatePlaylistPageComponent } from './components/pages/playlists-page/ui/create-playlist-page/create-playlist-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'auth', component: AuthPageComponent, pathMatch: 'full'},
  {path: 'auth/:login', component: AuthPageComponent},
  {path: 'bands', component: BandsPageComponent},
  {path: 'songs', component: SongsPageComponent},
  {path: 'artists', component: ArtistsPageComponent},
  {path: 'genres', component: GenresPageComponent},
  {path: 'albums', component: AlbumsPageComponent},
  {path: 'playlists', component: PlaylistsPageComponent},
  {path: 'playlists/create', component: CreatePlaylistPageComponent}
];
