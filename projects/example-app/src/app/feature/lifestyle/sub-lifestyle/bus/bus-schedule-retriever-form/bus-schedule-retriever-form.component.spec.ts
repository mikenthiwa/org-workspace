import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusScheduleRetrieverFormComponent } from './bus-schedule-retriever-form.component';

describe('BusScheduleRetrieverFormComponent', () => {
  let component: BusScheduleRetrieverFormComponent;
  let fixture: ComponentFixture<BusScheduleRetrieverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusScheduleRetrieverFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusScheduleRetrieverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
