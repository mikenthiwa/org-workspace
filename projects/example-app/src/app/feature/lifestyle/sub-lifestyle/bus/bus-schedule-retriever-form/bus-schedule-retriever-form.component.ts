import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  inject,
  OnInit,
  input,
  InputSignal,
  SimpleChanges,
  OnChanges,
  output,
} from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { City, SchedulePayload } from '../../../../../model/bus.model';

@Component({
  selector: 'my-org-bus-schedule-retriever-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinner,
    MatIconModule,
  ],
  providers: [],
  templateUrl: './bus-schedule-retriever-form.component.html',
  styleUrl: './bus-schedule-retriever-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusScheduleRetrieverFormComponent implements OnInit, OnChanges {
  tripType: InputSignal<'one-way' | 'return'> = input<'one-way' | 'return'>(
    'one-way'
  );
  cities: InputSignal<City[]> = input<City[]>([]);
  isLoading: InputSignal<boolean> = input<boolean>(false);

  submitForm = output<SchedulePayload>();
  filteredOptions: WritableSignal<City[]> = signal([]);

  busScheduleRetrievalForm: FormGroup = new FormGroup({});
  private fb = inject(FormBuilder);

  constructor() {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('tripType' in changes) {
      this.toggleTripType(changes['tripType'].currentValue);
    }
    if ('cities' in changes) {
      this.filteredOptions.set(changes['cities'].currentValue);
    }
  }

  ngOnInit() {
    this.busScheduleRetrievalForm
      .get('leaving_from')
      ?.valueChanges.subscribe((value) => {
        this.filterCities(value);
      });
    this.busScheduleRetrievalForm
      .get('going_to')
      ?.valueChanges.subscribe((value) => {
        this.filterCities(value);
      });
  }

  filterCities(value: string): void {
    const filterValue = value.toLowerCase();
    this.filteredOptions.update(() => {
      return this.cities().filter((option) => {
        return option.name.toLowerCase().includes(filterValue);
      });
    });
  }

  initializeForm(): void {
    this.busScheduleRetrievalForm = this.fb.group({
      leaving_from: ['', Validators.required],
      going_to: ['', Validators.required],
      departure_on: ['', Validators.required],
    });
  }

  toggleTripType(value: 'one-way' | 'return'): void {
    if (value === 'one-way') {
      this.busScheduleRetrievalForm.removeControl('return_on');
    } else {
      this.busScheduleRetrievalForm.addControl(
        'return_on',
        this.fb.control('', Validators.required)
      );
    }
  }
}
