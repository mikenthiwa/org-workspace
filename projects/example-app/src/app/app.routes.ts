import { Routes } from '@angular/router';
import { AccessLayoutComponent } from './layout/access-layout/access-layout.component';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: DashboardLayout,
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
    component: DashboardLayout,
    canActivate: [],
    loadChildren: () => import('./feature/lifestyle/lifestyle.routes'),
  },
];
