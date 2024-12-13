import { Routes } from '@angular/router';
import { AccessLayoutComponent } from './layout/access-layout/access-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        loadChildren: () => import('./feature/home/home.routes'),
      },
    ],
  },
  {
    path: 'access',
    component: AccessLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./feature/login/login.routes'),
      },
    ],
  },
  {
    path: 'lifestyle',
    component: HomeLayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        loadChildren: () => import('./feature/lifestyle/lifestyle.routes'),
      },
    ],
  },
];
