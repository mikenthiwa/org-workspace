import { Routes } from '@angular/router';
import { citiesResolver } from './sub-lifestyle/bus/services/bus/resolver/cities.resolver';
import { BusService } from './sub-lifestyle/bus/services/bus/bus.service';

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
        providers: [BusService]
      },
    ],
  },
] as Routes;
