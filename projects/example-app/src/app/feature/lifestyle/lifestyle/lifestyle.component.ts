import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { CardComponent } from '../../../ui/card/card.component';
import { MatIconModule } from '@angular/material/icon';

import { FeatureModel } from '../model/lifestyle.model';
import { schedule } from '../../../core/lifestyle/bus/mocks/schedule';

@Component({
  selector: 'my-org-lifestyle',
  imports: [CardComponent, MatIconModule],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifestyleComponent {
  features: WritableSignal<FeatureModel[]> = signal<FeatureModel[]>([
    {
      featureName: 'Bus',
      label: 'Bus',
      icon: 'airport_shuttle',
      route: '/lifestyle/bus',
    },
  ]);
  protected readonly schedule = schedule;
}
