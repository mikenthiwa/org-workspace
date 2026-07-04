import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
  Signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { FeatureModel } from '../model/lifestyle.model';
import { FeatureFlagService } from '../../../core/feature-flag/feature-flag.service';
import { Router } from '@angular/router';
import { CardComponent } from '../../../ui/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { GLOBAL_LOGGER } from '../../../core/token/logger.token';


@Component({
  selector: 'my-org-lifestyle',
  imports: [
    MatIconModule,
    CardComponent,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule
  ],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifestyleComponent {
  private featureFlagService: FeatureFlagService = inject(FeatureFlagService);
  private logger = inject(GLOBAL_LOGGER);
  features: Signal<FeatureModel[]> = signal<FeatureModel[]>([
    {
      featureName: 'Bus',
      label: 'Bus',
      icon: 'airport_shuttle',
      route: '/lifestyle/bus',
      isFeatureEnabled: this.featureFlagService.isEnabled('bus'),
    },
  ]).asReadonly();
  private route = inject(Router);

  navigate(feature: FeatureModel): void {
    this.logger('info', `Navigating to ${feature.route}`);
    this.route.navigate([feature.route]);
  }
}
