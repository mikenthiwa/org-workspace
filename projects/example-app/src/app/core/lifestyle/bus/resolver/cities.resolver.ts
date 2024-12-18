import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { BusService } from '../bus.service';
import { City } from '../model/bus.model';

export const citiesResolver: ResolveFn<City[]> = () => {
  const busService = inject(BusService);
  return busService.getCitiesInfo();
};
