import { Component } from '@angular/core';
import { AdsPageComponent } from '../ads-page/ads-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AdsPageComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


}
