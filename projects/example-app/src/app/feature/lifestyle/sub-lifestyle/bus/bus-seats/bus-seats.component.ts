import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AvailableSeats } from '../../../../../model/available-seats.model';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { SeatModel } from '../../../../../model/seat.model';

@Component({
  selector: 'my-org-bus-seats',
  imports: [MatIconModule, MatGridListModule, CommonModule],
  templateUrl: './bus-seats.component.html',
  styleUrl: './bus-seats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusSeatsComponent {
  seats: InputSignal<AvailableSeats> = input.required();
  selectedSeats: ModelSignal<SeatModel[]> = model<SeatModel[]>([]);

  onSelectSeat(seat: SeatModel): void {
    this.selectedSeats.update((seats: SeatModel[]) => {
      console.log('seats', seats);
      const index = seats.indexOf(seat);
      if (index > -1) {
        return seats.filter((s: SeatModel) => s !== seat);
      }
      return [...seats, seat];
    });
  }

  isSelected(seat: SeatModel): boolean {
    return this.selectedSeats().includes(seat);
  }
}
