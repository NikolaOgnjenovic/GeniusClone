import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlaylistPageComponent } from './delete-playlist-page.component';

describe('DeletePlaylistPageComponent', () => {
  let component: DeletePlaylistPageComponent;
  let fixture: ComponentFixture<DeletePlaylistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePlaylistPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePlaylistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
