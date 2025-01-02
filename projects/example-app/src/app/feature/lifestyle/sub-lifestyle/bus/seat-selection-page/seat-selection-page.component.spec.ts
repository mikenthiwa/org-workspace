import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatSelectionPageComponent } from './seat-selection-page.component';

describe('SeatSelectionPageComponent', () => {
  let component: SeatSelectionPageComponent;
  let fixture: ComponentFixture<SeatSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatSelectionPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeatSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
