import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArtistModalComponent } from './update-artist-modal.component';

describe('UpdateArtistModalComponent', () => {
  let component: UpdateArtistModalComponent;
  let fixture: ComponentFixture<UpdateArtistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArtistModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArtistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
