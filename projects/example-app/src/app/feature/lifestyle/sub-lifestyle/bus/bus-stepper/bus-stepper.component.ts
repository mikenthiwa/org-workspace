import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';

@Component({
  selector: 'my-org-bus-stepper',
  imports: [],
  templateUrl: './bus-stepper.component.html',
  styleUrl: './bus-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusStepperComponent {
  steps: InputSignal<string[]> = input.required<string[]>();
}
