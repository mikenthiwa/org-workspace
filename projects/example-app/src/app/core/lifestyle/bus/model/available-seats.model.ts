export interface SeatsPayloadModel {
  bus_id: number;
  start_point: number;
  alias: string;
  date: string;
  fare: string;
  end_point: number;
  rsc_id: number;
  fleet_registration_id: number;
  from?: string;
  to?: string;
}

interface Fare {
  currencies: { Ksh: string };
  normal: string;
}

interface Seat {
  id: string;
  class: string;
  status: string;
  type: string;
  number: string;
  row: number;
  column: number;
  fare: Fare;
  currency: string;
  space_type: string;
}

export interface AvailableSeats {
  booked_seat_session_id: string;
  available_seat_ids: string[];
  last_booking: string;
  window_seats_available: string[];
  number_of_window_seats_available: number;
  number_of_available_seats: number;
  seat_reservation_limit: number;
  seats: Seat[][];
}

export interface AvailableSeatsApiResponse {
  available_seats: AvailableSeats;
}
