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
        './bus-schedule-retriever-form/bus-schedule-retriever-form.component'
      ).then((m) => m.BusScheduleRetrieverFormComponent),
  },
] as Routes;
