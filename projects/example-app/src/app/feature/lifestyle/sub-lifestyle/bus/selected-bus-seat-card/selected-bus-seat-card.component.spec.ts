import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBusSeatCardComponent } from './selected-bus-seat-card.component';

describe('SelectedBusSeatCardComponent', () => {
  let component: SelectedBusSeatCardComponent;
  let fixture: ComponentFixture<SelectedBusSeatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedBusSeatCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedBusSeatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
