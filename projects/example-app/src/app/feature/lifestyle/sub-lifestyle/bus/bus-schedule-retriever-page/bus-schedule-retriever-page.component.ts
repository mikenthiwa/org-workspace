import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  inject,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BusService } from '../../../../../core/lifestyle/bus/bus.service';
import {
  City,
  Schedule,
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
export class BusScheduleRetrieverPageComponent implements OnDestroy {
  tripType: WritableSignal<'one-way' | 'return'> = signal<'one-way' | 'return'>(
    'one-way'
  );
  cities: WritableSignal<City[]> = signal<City[]>([]);
  isLoading: WritableSignal<boolean> = signal<boolean>(false);
  private busService = inject(BusService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private ngUnsubscribe = new Subject<void>();

  constructor() {
    this.cities.set(this.route.snapshot.data['cities']);
  }

  toggleTripType(value: 'one-way' | 'return'): void {
    this.tripType.set(value);
  }

  schedulePayLoad(formValue: SchedulePayload): SchedulePayload {
    return {
      ...formValue,
      departure_on: moment(formValue.departure_on).format('DD-MM-YYYY'),
    };
  }

  fetchBusSchedule(formValue: SchedulePayload): void {
    this.isLoading.set(true);
    this.busService
      .getBusSchedule(this.schedulePayLoad(formValue))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((schedule: Schedule[]) => {
        this.isLoading.set(false);
        const urlTree = this.router.createUrlTree(['/lifestyle/bus/schedule'], {
          relativeTo: this.route,
          queryParams: this.schedulePayLoad(formValue),
        });
        this.router.navigateByUrl(urlTree, { state: { schedule: schedule } });
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
