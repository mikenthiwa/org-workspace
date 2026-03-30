import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ResourceStatus,
  signal,
  WritableSignal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { BusService } from '../../../../../core/lifestyle/bus/bus.service';
import { ActivatedRoute } from '@angular/router';
import {
  AvailableSeats,
  SeatsPayloadModel,
} from '../../../../../model/available-seats.model';
import { BusSeatsComponent } from '../bus-seats/bus-seats.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { BusHeaderComponent } from '../bus-header/bus-header.component';
import { SelectedBusSeatCardComponent } from '../selected-bus-seat-card/selected-bus-seat-card.component';
import { SeatModel } from '../../../../../model/seat.model';
import { BusHeaderModel } from '../../../../../model/bus-header.model';

@Component({
  selector: 'my-org-seat-selection-page',
  imports: [
    BusSeatsComponent,
    MatProgressSpinner,
    BusHeaderComponent,
    SelectedBusSeatCardComponent,
  ],
  templateUrl: './seat-selection-page.component.html',
  styleUrl: './seat-selection-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectionPageComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private busService: BusService = inject(BusService);
  selectedSeats = signal<SeatModel[]>([]);
  headerDetails: WritableSignal<BusHeaderModel> = signal<BusHeaderModel>({
    title: 'Bus Seat Selection',
    subtitle: 'Choose your preferred seats',
    content: {
      from: this.route.snapshot.queryParams?.['from'],
      to: this.route.snapshot.queryParams?.['to'],
      alias: this.route.snapshot.queryParams?.['alias'],
    },
  });

  seatResources = rxResource<AvailableSeats, SeatsPayloadModel>({
    params: () => this.route.snapshot.queryParams as SeatsPayloadModel,
    stream: (params) => this.busService.getSeats$(params),
  });

  reserveSelectedSeats(): void {
    this.busService.busReservation.update((reservation) => ({
      ...reservation,
      selected_bus: {
        ...reservation.selected_bus,
        seats: this.selectedSeats(),
      },
    }));
  }
}
