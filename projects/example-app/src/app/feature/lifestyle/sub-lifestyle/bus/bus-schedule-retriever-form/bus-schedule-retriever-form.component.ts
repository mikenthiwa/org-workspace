import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  inject,
} from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
import { TripTypeToggleComponent } from '../trip-type-toggle/trip-type-toggle.component';

@Component({
  selector: 'my-org-bus-schedule-retriever-form',
  imports: [
    TripTypeToggleComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './bus-schedule-retriever-form.component.html',
  styleUrl: './bus-schedule-retriever-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusScheduleRetrieverFormComponent {
  tripType: WritableSignal<'one-way' | 'return'> = signal('one-way');

  busScheduleRetrievalForm: FormGroup = new FormGroup({});

  private fb = inject(FormBuilder);

  constructor() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.busScheduleRetrievalForm = this.fb.group({
      leaving_from: ['', Validators.required],
      going_to: ['', Validators.required],
      departure_on: ['', Validators.required],
      return_on: ['', Validators.required],
    });
  }

  cities = ['nairobi', 'kisumu', 'mombasa', 'eldoret'];

  toggleTripType(value: 'one-way' | 'return'): void {
    this.tripType.set(value);
  }
}
