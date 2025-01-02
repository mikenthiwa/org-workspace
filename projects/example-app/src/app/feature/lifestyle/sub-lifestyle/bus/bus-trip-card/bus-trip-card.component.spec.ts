import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTripCardComponent } from './bus-trip-card.component';

describe('TripCardComponent', () => {
  let component: BusTripCardComponent;
  let fixture: ComponentFixture<BusTripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusTripCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
