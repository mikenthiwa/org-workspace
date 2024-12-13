import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FeatureModel } from '../model/lifestyle.model';

@Component({
  selector: 'my-org-card',
  imports: [MatCardModule, MatIconModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  cardDetail: InputSignal<FeatureModel> = input.required<FeatureModel>();
}
