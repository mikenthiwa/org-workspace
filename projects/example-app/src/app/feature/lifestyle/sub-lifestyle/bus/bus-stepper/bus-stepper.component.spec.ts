import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStepperComponent } from './bus-stepper.component';

describe('BusStepperComponent', () => {
  let component: BusStepperComponent;
  let fixture: ComponentFixture<BusStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
