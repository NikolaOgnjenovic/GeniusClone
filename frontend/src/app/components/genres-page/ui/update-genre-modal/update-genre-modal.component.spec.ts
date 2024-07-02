import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGenreModalComponent } from './update-genre-modal.component';

describe('UpdateGenreModalComponent', () => {
  let component: UpdateGenreModalComponent;
  let fixture: ComponentFixture<UpdateGenreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGenreModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGenreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
