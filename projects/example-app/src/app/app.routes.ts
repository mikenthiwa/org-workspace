import { Routes } from '@angular/router';
import { AccessLayoutComponent } from './layout/access-layout/access-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

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
  {
    path: 'back-office',
    loadComponent: () =>
      loadRemoteModule('back-office', './Component').then((m) => m.AppComponent),
  },
];
