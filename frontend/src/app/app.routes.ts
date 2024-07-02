import {Routes} from '@angular/router';
import {HomePageComponent} from "./components/pages/home-page/home-page.component";
import {AuthPageComponent} from "./components/pages/auth-page/auth-page.component";
import {BandsPageComponent} from "./components/pages/bands-page/bands-page.component";
import {SongsPageComponent} from "./components/pages/songs-page/songs-page.component";
import {ArtistsPageComponent} from "./components/pages/artists-page/artists-page.component";
import {GenresPageComponent} from "./components/pages/genres-page/genres-page.component";
import {SongDetailsComponent} from "./components/pages/song-details/song-details.component";
import {BandDetailsComponent} from "./components/pages/band-details/band-details.component";
import {AlbumDetailsComponent} from "./components/pages/album-details/album-details.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'auth', component: AuthPageComponent, pathMatch: 'full'},
  {path: 'auth/:login', component: AuthPageComponent},
  {path: 'bands', component: BandsPageComponent},
  {path: 'songs', component: SongsPageComponent},
  {path: 'artists', component: ArtistsPageComponent},
  {path: 'genres', component: GenresPageComponent},
  {path: 'bands/:id', component: BandDetailsComponent},
  {path: 'songs/:id', component: SongDetailsComponent},
  {path: 'albums/:id', component: AlbumDetailsComponent}
];
