import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BusService } from '../../../../../core/lifestyle/bus/bus.service';
import {
  City,
  SchedulePayload,
} from '../../../../../core/lifestyle/bus/model/bus.model';
import { TripTypeToggleComponent } from '../trip-type-toggle/trip-type-toggle.component';
import { BusScheduleRetrieverFormComponent } from '../bus-schedule-retriever-form/bus-schedule-retriever-form.component';
import moment from 'moment';

@Component({
  selector: 'my-org-bus-schedule-retriever-page',
  imports: [TripTypeToggleComponent, BusScheduleRetrieverFormComponent],
  templateUrl: './bus-schedule-retriever-page.component.html',
  styleUrl: './bus-schedule-retriever-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusScheduleRetrieverPageComponent {
  tripType: WritableSignal<'one-way' | 'return'> = signal<'one-way' | 'return'>(
    'one-way'
  );
  cities: WritableSignal<City[]> = signal<City[]>([]);
  isLoading: WritableSignal<boolean> = signal<boolean>(false);
  private busService = inject(BusService);
  private route = inject(ActivatedRoute);

  constructor() {
    this.cities.set(this.route.snapshot.data['cities']);
  }

  toggleTripType(value: 'one-way' | 'return'): void {
    this.tripType.set(value);
  }

  fetchBusSchedule(formValue: SchedulePayload): void {
    this.isLoading.set(true);
    this.busService
      .getBusSchedule({
        ...formValue,
        departure_on: moment(formValue.departure_on).format('DD-MM-YYYY'),
      })
      .subscribe((resp) => {
        this.isLoading.set(false);
        console.log(resp);
      });
  }
}
