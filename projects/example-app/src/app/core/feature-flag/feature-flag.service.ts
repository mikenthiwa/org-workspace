import { Injectable, signal, WritableSignal } from '@angular/core';

type FeatureFlags = Record<string, boolean>;

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  featureFlags: WritableSignal<FeatureFlags> = signal({
    lifestyle: true,
    home: true,
    analytics: true,
    settings: true,
    bus: true,
  });

  isEnabled(feature: string): boolean {
    return this.featureFlags()[feature];
  }
}
