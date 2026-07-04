import { Routes } from '@angular/router';
import { citiesResolver } from './services/bus/resolver/cities.resolver';
import { BusService } from './services/bus/bus.service';

export default [
  {
    path: '',
    title: 'Lifestyle',
    loadComponent: () =>
      import('./lifestyle/lifestyle.component').then((m) => m.LifestyleComponent),
  },
  {
    path: 'bus',
    title: 'Bus',
    resolve: {
      cities: citiesResolver,
    },
    loadChildren: () => import('./sub-lifestyle/bus/bus.routes'),
    providers: [{ provide: BusService, useClass: BusService }],
  }
] as Routes;
