import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BandsTableComponent} from "./ui/bands-table/bands-table.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {CreateBandModalComponent} from "./ui/create-band-modal/create-band-modal.component";
import {UpdateBandModalComponent} from "./ui/update-band-modal/update-band-modal.component";
import {DeleteBandModalComponent} from "./ui/delete-band-modal/delete-band-modal.component";
import {BandService} from "../../../services/band.service";
import {Band} from "../../../models/as-is/band";
import {BandCreateRequest} from "../../../models/bands/band-create-request";
import {Artist} from "../../../models/as-is/artist";
import { ArtistService } from '../../../services/artist.service';
import {AuthState} from "../../../state/auth-state";

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

  constructor(private readonly bandService: BandService, private readonly artistService: ArtistService, protected readonly authState: AuthState) { }

  ngOnInit(): void {
    this.bandService.getAll().subscribe((response: Band[]) => {
      if (response) {
        this.bands = response;
        for(var band of this.bands) {
          var members: Artist[] = [];
          for(var member of band.members) {
            if(typeof member === 'string') {
              this.artistService.getById(member).subscribe((response: Artist) => {
                members.push(response);
              });
            } else {
              members.push(member);
            }
          }
          band.members = members;
        }
      }
    })
  }

  onCreateBand(): void {
    this.showCreationModal = true;
  }

  onCloseCreationModal(): void {
    this.showCreationModal = false;
  }

  onCreate(request: BandCreateRequest): void {
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

  onUpdate(updateEvent: { name: string, members: Artist[], image: string }): void {
    const request = { name: updateEvent.name, members: updateEvent.members, image: updateEvent.image };
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
