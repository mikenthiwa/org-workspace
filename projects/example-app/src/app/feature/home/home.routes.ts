import { Routes } from '@angular/router';
import { featureFlagGuard } from '../../core/guards/feature-flag.guard';

export default [
  {
    path: '',
    canActivate: [featureFlagGuard('home')],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
] as Routes;
