import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusScheduleRetrieverPageComponent } from './bus-schedule-retriever-page.component';

describe('BusScheduleRetrieverPageComponent', () => {
  let component: BusScheduleRetrieverPageComponent;
  let fixture: ComponentFixture<BusScheduleRetrieverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusScheduleRetrieverPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusScheduleRetrieverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
