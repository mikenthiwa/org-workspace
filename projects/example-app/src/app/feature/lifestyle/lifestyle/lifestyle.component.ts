import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
  inject,
} from '@angular/core';
import { CardComponent } from '../../../ui/card/card.component';
import { MatIconModule } from '@angular/material/icon';

import { FeatureModel } from '../model/lifestyle.model';
import { FeatureFlagService } from '../../../core/feature-flag/feature-flag.service';

@Component({
  selector: 'my-org-lifestyle',
  imports: [CardComponent, MatIconModule],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifestyleComponent {
  private featureFlagService: FeatureFlagService = inject(FeatureFlagService);
  features: WritableSignal<FeatureModel[]> = signal<FeatureModel[]>([
    {
      featureName: 'Bus',
      label: 'Bus',
      icon: 'airport_shuttle',
      route: '/lifestyle/bus',
      isFeatureEnabled: this.featureFlagService.isEnabled('bus'),
    },
  ]);
}
