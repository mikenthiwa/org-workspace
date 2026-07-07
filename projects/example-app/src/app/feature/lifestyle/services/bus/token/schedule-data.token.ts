import { InjectionToken } from '@angular/core';
import { Schedule } from '../../../../../model/bus.model';

export const SCHEDULE_DATA = new InjectionToken<Schedule>('SCHEDULE_DATA');
