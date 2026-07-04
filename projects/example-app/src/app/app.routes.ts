import { Routes } from '@angular/router';
import { AccessLayoutComponent } from './layout/access-layout/access-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeLayoutComponent,
    canActivate: [],
    loadChildren: () => import('./feature/home/home.routes'),
  },
  {
    path: 'access',
    title: 'Access',
    component: AccessLayoutComponent,
    loadChildren: () => import('./feature/login/login.routes'),
  },
  {
    path: 'lifestyle',
    title: 'Lifestyle',
    component: HomeLayoutComponent,
    canActivate: [],
    loadChildren: () => import('./feature/lifestyle/lifestyle.routes'),
  },
];
