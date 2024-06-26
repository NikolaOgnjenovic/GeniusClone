import { Component } from '@angular/core';
import { SongPageComponent } from '../song-page/song-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SongPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
