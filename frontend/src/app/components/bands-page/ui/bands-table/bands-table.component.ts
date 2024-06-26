import {Component, Input} from '@angular/core';
import {Band} from "../../../../models/as-is/band";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-bands-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './bands-table.component.html',
  styleUrl: './bands-table.component.css'
})
export class BandsTableComponent {
  @Input()
  bands: Band[] = [];
}
