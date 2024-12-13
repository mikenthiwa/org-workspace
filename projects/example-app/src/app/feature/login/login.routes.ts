import { Routes } from '@angular/router';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./login-page/login-page.component').then(
            (m) => m.LoginPageComponent
          ),
      },
    ],
  },
] as Routes;
