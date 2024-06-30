import { Component } from '@angular/core';
import { ArtistsTableComponent } from './ui/artists-table/artists-table.component';

@Component({
  selector: 'app-artists-page',
  standalone: true,
  imports: [
    ArtistsTableComponent
  ],
  templateUrl: './artists-page.component.html',
  styleUrl: './artists-page.component.css'
})
export class ArtistsPageComponent {

}
