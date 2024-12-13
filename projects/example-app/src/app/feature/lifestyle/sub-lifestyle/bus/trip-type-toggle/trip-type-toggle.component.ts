import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

type TripType = 'one-way' | 'return';

@Component({
  selector: 'my-org-trip-type-toggle',
  imports: [CommonModule],
  templateUrl: './trip-type-toggle.component.html',
  styleUrl: './trip-type-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripTypeToggleComponent {
  tripType: InputSignal<TripType> = input<TripType>('one-way');
  tripTypes = signal<TripType[]>(['one-way', 'return']);
  toggleTripType: OutputEmitterRef<TripType> = output<'one-way' | 'return'>();
}
