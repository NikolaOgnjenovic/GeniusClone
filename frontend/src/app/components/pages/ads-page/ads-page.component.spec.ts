import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsPageComponent } from './ads-page.component';

describe('AdsPageComponent', () => {
  let component: AdsPageComponent;
  let fixture: ComponentFixture<AdsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
