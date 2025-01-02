import {
  ChangeDetectionStrategy,
  Component,
  inject,
  WritableSignal,
  signal,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BusReservationModel,
  Schedule,
  SchedulePayload,
} from '../../../../../core/lifestyle/bus/model/bus.model';
import { BusTripCardComponent } from '../bus-trip-card/bus-trip-card.component';
import { BusService } from '../../../../../core/lifestyle/bus/bus.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'my-org-bus-schedule-page',
  imports: [BusTripCardComponent, MatProgressSpinner],
  templateUrl: './bus-schedule-page.component.html',
  styleUrl: './bus-schedule-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusSchedulePageComponent implements OnInit {
  schedules: WritableSignal<Schedule[]> = signal<Schedule[]>([]);
  isLoading: WritableSignal<boolean> = signal<boolean>(false);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private busService = inject(BusService);

  constructor() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.['schedule']) {
      this.schedules.set(state?.['schedule']);
    } else {
      this.schedules.set([]);
    }
  }

  ngOnInit() {
    if (this.schedules().length === 0) {
      this.route.queryParams.subscribe((params) => {
        this.fetchBusSchedule(params as SchedulePayload);
      });
    }
  }

  selectBusTrip(schedule: Schedule) {
    this.busService.busReservation.update(
      (reservation: BusReservationModel) => ({
        ...reservation,
        selected_bus: schedule,
      })
    );
    this.router.navigate(['/lifestyle/bus/seat-selection']);
  }

  fetchBusSchedule(payload: SchedulePayload): void {
    this.isLoading.set(true);
    this.busService.getBusSchedule(payload).subscribe((schedule) => {
      this.schedules.set(schedule);
      this.isLoading.set(false);
    });
  }
}
