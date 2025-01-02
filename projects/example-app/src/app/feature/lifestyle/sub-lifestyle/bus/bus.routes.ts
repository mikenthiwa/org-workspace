import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'schedule-retriever-form',
    pathMatch: 'full',
  },
  {
    path: 'schedule-retriever-form',
    loadComponent: () =>
      import(
        './bus-schedule-retriever-page/bus-schedule-retriever-page.component'
      ).then((m) => m.BusScheduleRetrieverPageComponent),
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./bus-schedule-page/bus-schedule-page.component').then(
        (m) => m.BusSchedulePageComponent
      ),
  },
  {
    path: 'seat-selection',
    loadComponent: () =>
      import('./seat-selection-page/seat-selection-page.component').then(
        (m) => m.SeatSelectionPageComponent
      ),
  },
] as Routes;
