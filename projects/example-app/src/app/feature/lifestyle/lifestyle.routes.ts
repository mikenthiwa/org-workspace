import { Routes } from '@angular/router';
import { citiesResolver } from '../../core/lifestyle/bus/resolver/cities.resolver';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./lifestyle/lifestyle.component').then(
            (m) => m.LifestyleComponent
          ),
      },
      {
        path: 'bus',
        resolve: {
          cities: citiesResolver,
        },
        loadChildren: () => import('./sub-lifestyle/bus/bus.routes'),
      },
    ],
  },
] as Routes;
