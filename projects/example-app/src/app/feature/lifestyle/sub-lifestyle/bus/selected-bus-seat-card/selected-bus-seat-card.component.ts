import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  output,
} from '@angular/core';
import { SeatModel } from '../../../../../core/lifestyle/bus/model/seat.model';
import { MatDivider } from '@angular/material/divider';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'my-org-selected-bus-seat-card',
  imports: [MatDivider, TitleCasePipe, CurrencyPipe, MatButtonModule],
  templateUrl: './selected-bus-seat-card.component.html',
  styleUrl: './selected-bus-seat-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedBusSeatCardComponent {
  selectedSeats: InputSignal<SeatModel[]> = input.required<SeatModel[]>();
  totalFare = computed(() => {
    return this.selectedSeats().reduce(
      (total, seat) => total + parseInt(seat.fare.normal),
      0
    );
  });
  continue = output();
}
