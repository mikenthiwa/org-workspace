import { Injectable } from '@angular/core';

type FeatureFlags = Record<string, boolean>;

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  featureFlags: FeatureFlags = { lifeStyle: true };

  isEnabled(feature: string): boolean {
    return this.featureFlags[feature];
  }
}
