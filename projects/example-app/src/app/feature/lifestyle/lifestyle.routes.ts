import { Routes } from '@angular/router';

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
        loadChildren: () => import('./sub-lifestyle/bus/bus.routes'),
      },
    ],
  },
] as Routes;
