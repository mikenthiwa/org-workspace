import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-org-seat-selection-page',
  imports: [],
  templateUrl: './seat-selection-page.component.html',
  styleUrl: './seat-selection-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectionPageComponent {}
