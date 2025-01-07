import {
  inject,
  Injectable,
  signal,
  WritableSignal,
  ResourceLoaderParams,
} from '@angular/core';
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
import {
  AvailableSeats,
  AvailableSeatsApiResponse,
  SeatsPayloadModel,
} from './model/available-seats.model';
import { rxResource } from '@angular/core/rxjs-interop';

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

  seatsResources = rxResource<AvailableSeats, SeatsPayloadModel>({
    loader: (
      params: ResourceLoaderParams<SeatsPayloadModel>
    ): Observable<AvailableSeats> => {
      return this.getSeats$(params.request);
    },
  });

  getCitiesInfo(): Observable<City[]> {
    const url = `${this.apiUrl}buses/cities/aliases`;
    return this.http
      .get<CitiesApiResponse>(url)
      .pipe(map(({ data }) => data.all_cities));
  }

  getBusSchedule(payload: SchedulePayload): Observable<Schedule[]> {
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

  getSeats$(payload: SeatsPayloadModel): Observable<AvailableSeats> {
    const url = `${this.apiUrl}buses/seats`;
    const params = new HttpParams()
      .set('fleet_registration_id', payload.fleet_registration_id)
      .set('bus_id', payload.bus_id.toString())
      .set('start_point', payload.start_point.toString())
      .set('alias', payload.alias)
      .set('date', payload.date)
      .set('fare', payload.fare)
      .set('end_point', payload.end_point.toString())
      .set('rsc_id', payload.rsc_id.toString());

    return this.http
      .get<BusApiResponse<AvailableSeatsApiResponse>>(url, { params })
      .pipe(map(({ data }) => data.available_seats));
  }
}
