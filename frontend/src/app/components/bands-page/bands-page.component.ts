import {Component, OnInit} from '@angular/core';
import {BandService} from "../../services/band.service";
import {BandsTableComponent} from "./ui/bands-table/bands-table.component";
import {AsyncPipe} from "@angular/common";
import {Band} from "../../models/as-is/band";

@Component({
  selector: 'app-bands-page',
  standalone: true,
  imports: [
    BandsTableComponent,
    AsyncPipe
  ],
  templateUrl: './bands-page.component.html',
  styleUrl: './bands-page.component.css'
})
export class BandsPageComponent implements OnInit {
  bands: Band[] = [];

  constructor(private readonly bandService: BandService) { }

  ngOnInit(): void {
    this.bandService.getAll().subscribe((response: Band[]) => {
      if (response) {
        this.bands = response;
      }
    })
  }
}
