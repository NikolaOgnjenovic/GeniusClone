import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArtistModalComponent } from './delete-artist-modal.component';

describe('DeleteArtistModalComponent', () => {
  let component: DeleteArtistModalComponent;
  let fixture: ComponentFixture<DeleteArtistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteArtistModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteArtistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
