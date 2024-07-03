import { Component } from '@angular/core';
import { Ad } from '../../../models/as-is/ad';
import { AdService } from '../../../services/ad.service';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-ads-page',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule
  ],
  templateUrl: './ads-page.component.html',
  styleUrl: './ads-page.component.css'
})
export class AdsPageComponent {

  ads: Ad[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.adService.getAll().subscribe((response) => {
      this.ads = response.ads;
    });
  }
}
