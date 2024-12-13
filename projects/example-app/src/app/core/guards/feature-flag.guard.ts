import { CanActivateFn } from '@angular/router';
import { FeatureFlagService } from '../feature-flag/feature-flag.service';
import { inject } from '@angular/core';

export function featureFlagGuard(flagName: string): CanActivateFn {
  return () => {
    const featureFlagService = inject(FeatureFlagService);
    return featureFlagService.isEnabled(flagName);
  };
}
