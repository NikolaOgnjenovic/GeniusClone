import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArtistModalComponent } from './create-artist-modal.component';

describe('CreateArtistModalComponent', () => {
  let component: CreateArtistModalComponent;
  let fixture: ComponentFixture<CreateArtistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateArtistModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateArtistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
