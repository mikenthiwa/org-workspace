import { Injectable, signal } from '@angular/core';
import { BusReservationModel } from './model/bus.model';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  busReservation = signal<BusReservationModel>({
    booking_channel: 'web',
  } as BusReservationModel);
}
