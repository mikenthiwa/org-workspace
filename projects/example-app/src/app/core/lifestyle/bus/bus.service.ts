import { inject, Injectable, ResourceLoaderParams, signal, WritableSignal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {
  BusReservationModel,
  BusSchedule,
  Schedule,
  SchedulePayload,
} from '../../../model/bus.model';
import { CitiesApiResponse, City } from '../../../model/bus.model';
import { environment } from '../../../../environments/environment';
import {
  AvailableSeats,
  AvailableSeatsApiResponse,
  SeatsPayloadModel,
} from '../../../model/available-seats.model';
import { APIResponse } from '../../../model';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  apiUrl = environment.apiUrl;
  busReservation: WritableSignal<BusReservationModel> =
    signal<BusReservationModel>({
      booking_channel: 'web',
    } as BusReservationModel);

  private http = inject(HttpClient);

  getCitiesInfo(): Observable<City[]> {
    const url = `${this.apiUrl}buses/cities/aliases`;
    return this.http
      .get<CitiesApiResponse>(url)
      .pipe(map(({ data }) => data.all_cities));
  }

  getBusSchedule(payload: SchedulePayload): Observable<Schedule[]> {
    const url = `${this.apiUrl}buses`;
    const params = new HttpParams()
      .set('leaving_from', payload?.leaving_from || '')
      .set('going_to', payload?.going_to || '')
      .set('departing_on', payload?.departure_on || '');
    return this.http
      .get<APIResponse<BusSchedule>>(url, {
        params: params,
      })
      .pipe(map(({ data }) => data.schedule));
  }

  getSeats$(payload: ResourceLoaderParams<SeatsPayloadModel>): Observable<AvailableSeats> {
    const url = `${this.apiUrl}buses/seats`;
    const params = new HttpParams()
      .set('fleet_registration_id', payload.params.fleet_registration_id)
      .set('bus_id', payload.params.bus_id.toString())
      .set('start_point', payload.params.start_point.toString())
      .set('alias', payload.params.alias)
      .set('date', payload.params.date)
      .set('fare', payload.params.fare)
      .set('end_point', payload.params.end_point.toString())
      .set('rsc_id', payload.params.rsc_id.toString());

    return this.http
      .get<APIResponse<AvailableSeatsApiResponse>>(url, { params })
      .pipe(map(({ data }) => data.available_seats));
  }
}
