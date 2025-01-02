import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Schedule } from '../../../../../core/lifestyle/bus/model/bus.model';
import { CurrencyPipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-org-bus-trip-card',
  imports: [
    MatCardModule,
    CurrencyPipe,
    TitleCasePipe,
    MatIconModule,
    NgOptimizedImage,
  ],
  templateUrl: './bus-trip-card.component.html',
  styleUrl: './bus-trip-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusTripCardComponent {
  busTripCard: InputSignal<Schedule> = input.required<Schedule>();
  selectedBusTrip: OutputEmitterRef<Schedule> = output<Schedule>();
}
