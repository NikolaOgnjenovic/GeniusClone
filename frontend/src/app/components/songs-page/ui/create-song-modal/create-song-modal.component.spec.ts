import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSongModalComponent } from './create-song-modal.component';

describe('CreateSongModalComponent', () => {
  let component: CreateSongModalComponent;
  let fixture: ComponentFixture<CreateSongModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSongModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSongModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
