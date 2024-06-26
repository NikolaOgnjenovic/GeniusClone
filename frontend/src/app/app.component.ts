import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegistrationPageComponent} from "./components/registration-page/registration-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
