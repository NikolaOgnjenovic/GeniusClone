import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BandsTableComponent} from "./ui/bands-table/bands-table.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {CreateBandModalComponent} from "./ui/create-band-modal/create-band-modal.component";
import {UpdateBandModalComponent} from "./ui/update-band-modal/update-band-modal.component";
import {DeleteBandModalComponent} from "./ui/delete-band-modal/delete-band-modal.component";
import {BandService} from "../../../services/band.service";
import {Band} from "../../../models/as-is/band";
import {CreateBandRequest} from "../../../models/bands/create-band-request";
import {Artist} from "../../../models/as-is/artist";

@Component({
  selector: 'app-bands-page',
  standalone: true,
  imports: [
    BandsTableComponent,
    AsyncPipe,
    CreateBandModalComponent,
    NgIf,
    UpdateBandModalComponent,
    DeleteBandModalComponent
  ],
  templateUrl: './bands-page.component.html',
  styleUrl: './bands-page.component.css'
})
export class BandsPageComponent implements OnInit {
  bands: Band[] = [];
  showCreationModal = false;
  showUpdateModal = false;
  showDeleteModal = false;
  selectedBand!: Band;

  constructor(private readonly bandService: BandService) { }

  ngOnInit(): void {
    this.bandService.getAll().subscribe((response: Band[]) => {
      if (response) {
        this.bands = response;
      }
    })
  }

  onCreateBand(): void {
    this.showCreationModal = true;
  }

  onCloseCreationModal(): void {
    this.showCreationModal = false;
  }

  onCreate(name: string): void {
    const request: CreateBandRequest = { name: name };
    this.bandService.create(request).subscribe((response: Band) => {
      if (response) {
        this.bands = [...this.bands, response];
      }
    });

    this.showCreationModal = false;
  }

  onUpdateBand(band: Band): void {
    this.selectedBand = band;
    this.showUpdateModal = true;
  }

  onCloseUpdateModal(): void {
    this.showUpdateModal = false;
  }

  onUpdate(updateEvent: { name: string, members: Artist[] }): void {
    const request = { name: updateEvent.name, members: updateEvent.members };
    this.bandService.update(this.selectedBand.id, request).subscribe((response: Band) => {
      if (response) {
        const index = this.bands.findIndex(b => b.id === this.selectedBand.id);
        this.bands[index] = response;
      }
    });

    this.showUpdateModal = false;
  }

  onDeleteBand(band: Band): void {
    this.selectedBand = band;
    this.showDeleteModal = true;
  }

  onCloseDeleteModal(): void {
    this.showDeleteModal = false;
  }

  onDelete(): void {
    this.bandService.delete(this.selectedBand.id).subscribe(() => {
      this.bands = this.bands.filter(b => b.id !== this.selectedBand.id);
    });

    this.showDeleteModal = false;
  }
}
