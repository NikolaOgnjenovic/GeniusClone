import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlaylistPageComponent } from './update-playlist-page.component';

describe('UpdatePlaylistPageComponent', () => {
  let component: UpdatePlaylistPageComponent;
  let fixture: ComponentFixture<UpdatePlaylistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePlaylistPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlaylistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
