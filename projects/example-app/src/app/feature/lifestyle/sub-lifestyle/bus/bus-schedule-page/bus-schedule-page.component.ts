import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BusReservationModel,
  Schedule,
  SchedulePayload,
} from '../../../../../model/bus.model';
import { BusService } from '../../../../../core/lifestyle/bus/bus.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { SeatsPayloadModel } from '../../../../../model/available-seats.model';
import { CardComponent } from '../../../../../ui/components/card/card.component';
import { CurrencyPipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import {
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'my-org-bus-schedule-page',
  imports: [
    MatProgressSpinner,
    CardComponent,
    CurrencyPipe,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgOptimizedImage,
    TitleCasePipe,
  ],
  templateUrl: './bus-schedule-page.component.html',
  styleUrl: './bus-schedule-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusSchedulePageComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private busService = inject(BusService);

  scheduleResource = rxResource({
    request: (): SchedulePayload =>
      this.route.snapshot.queryParams as SchedulePayload,
    loader: ({ request }) => this.busService.getBusSchedule(request),
  });

  selectBusTrip(schedule: Schedule) {
    this.busService.busReservation.update(
      (reservation: BusReservationModel) => ({
        ...reservation,
        selected_bus: schedule,
      })
    );
    const availableSeatsPayload: SeatsPayloadModel = {
      from: schedule.from,
      to: schedule.to,
      bus_id: schedule.id,
      start_point: schedule.origin_city_id,
      alias: schedule.operator.alias,
      date: schedule.departure_date,
      fare: schedule.fare,
      end_point: schedule.destination_city_id,
      rsc_id: schedule.route_schedule_id,
      fleet_registration_id: schedule.id,
    };
    const url = this.router.createUrlTree(['/lifestyle/bus/seat-selection'], {
      relativeTo: this.route,
      queryParams: availableSeatsPayload,
    });
    this.router.navigateByUrl(url);
  }
}
