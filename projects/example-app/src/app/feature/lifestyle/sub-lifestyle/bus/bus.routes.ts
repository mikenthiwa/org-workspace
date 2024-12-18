import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'bus-schedule-retriever-form',
    pathMatch: 'full',
  },
  {
    path: 'bus-schedule-retriever-form',
    loadComponent: () =>
      import(
        './bus-schedule-retriever-page/bus-schedule-retriever-page.component'
      ).then((m) => m.BusScheduleRetrieverPageComponent),
  },
] as Routes;
