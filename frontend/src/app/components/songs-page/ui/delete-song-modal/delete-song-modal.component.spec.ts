import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSongModalComponent } from './delete-song-modal.component';

describe('DeleteSongModalComponent', () => {
  let component: DeleteSongModalComponent;
  let fixture: ComponentFixture<DeleteSongModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSongModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSongModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
