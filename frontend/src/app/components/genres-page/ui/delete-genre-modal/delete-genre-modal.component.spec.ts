import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGenreModalComponent } from './delete-genre-modal.component';

describe('DeleteGenreModalComponent', () => {
  let component: DeleteGenreModalComponent;
  let fixture: ComponentFixture<DeleteGenreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteGenreModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGenreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
