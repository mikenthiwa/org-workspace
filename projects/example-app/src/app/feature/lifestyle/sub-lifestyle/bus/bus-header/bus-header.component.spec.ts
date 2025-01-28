import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusHeaderComponent } from './bus-header.component';

describe('BusHeaderComponent', () => {
  let component: BusHeaderComponent;
  let fixture: ComponentFixture<BusHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
