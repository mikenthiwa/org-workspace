import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {
  BusApiResponse,
  BusReservationModel,
  BusSchedule,
  Schedule,
  SchedulePayload,
} from './model/bus.model';
import { CitiesApiResponse, City } from './model/bus.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  apiUrl = environment.apiUrl;
  busReservation = signal<BusReservationModel>({
    booking_channel: 'web',
  } as BusReservationModel);

  private http = inject(HttpClient);

  getCitiesInfo(): Observable<City[]> {
    const url = `${this.apiUrl}buses/cities/aliases`;
    return this.http
      .get<CitiesApiResponse>(url)
      .pipe(map(({ data }) => data.all_cities));
  }

  getBusSchedule(payload: SchedulePayload): Observable<Schedule> {
    console.log('payload', payload);
    const url = `${this.apiUrl}buses`;
    const params = new HttpParams()
      .set('leaving_from', payload.leaving_from)
      .set('going_to', payload.going_to)
      .set('departing_on', payload.departure_on);
    return this.http
      .get<BusApiResponse<BusSchedule>>(url, {
        params: params,
      })
      .pipe(map(({ data }) => data.schedule));
  }
}
