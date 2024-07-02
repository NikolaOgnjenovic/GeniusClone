import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenreModalComponent } from './create-genre-modal.component';

describe('CreateGenreModalComponent', () => {
  let component: CreateGenreModalComponent;
  let fixture: ComponentFixture<CreateGenreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGenreModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGenreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
