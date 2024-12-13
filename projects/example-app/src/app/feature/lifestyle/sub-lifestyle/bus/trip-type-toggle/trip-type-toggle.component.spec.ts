import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTypeToggleComponent } from './trip-type-toggle.component';

describe('TripTypeToggleComponent', () => {
  let component: TripTypeToggleComponent;
  let fixture: ComponentFixture<TripTypeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripTypeToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripTypeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
