import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface CardDetails {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'my-org-card',
  imports: [MatCardModule, MatIconModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  cardDetail: InputSignal<CardDetails> = input.required<CardDetails>();
}
