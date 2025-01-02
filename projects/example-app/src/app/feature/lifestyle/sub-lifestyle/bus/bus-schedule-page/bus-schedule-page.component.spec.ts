import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSchedulePageComponent } from './bus-schedule-page.component';

describe('BusSchedulePageComponent', () => {
  let component: BusSchedulePageComponent;
  let fixture: ComponentFixture<BusSchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusSchedulePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
