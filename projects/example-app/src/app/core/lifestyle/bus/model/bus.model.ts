interface Operator {
  booked_seat_session_id: string;
  alias: string;
  name: string;
  logo: string;
}

interface BoardingPoint {
  id: number;
  name: string;
  address: string;
  booked_seat_session_id?: string;
}

interface ScheduleOperator {
  alias: string;
  name: string;
  logo: string;
}

interface Payee {
  email: string;
  name: string;
  phone_number: string;
}

interface Seat {
  class: string;
  fare: string;
  id: string;
}

interface Passenger {
  full_name: string;
  id_or_passport: string;
  phone_number: string;
  residence: string;
  seat: Seat;
}

export interface BusReservationModel {
  booking_channel: string;
  transaction_reference: string;
  referral_code: string;
  residence: string;
  promo_code: string;
  selected_bus: Schedule;
  payee: Payee;
  boarding_point: string;
  date_of_travel: string;
  departure_time: string;
  arrival_time: string;
  route_schedule_id: string;
  operator: Operator;
  origin_city_name: string;
  destination_city_name: string;
  origin_city_id: string;
  destination_city_id: string;
  passengers: Passenger;
  children: string[];
  payment_channel: string;
}

export interface City {
  name: string;
  alias: string;
}

export interface CitiesApiResponse {
  data: {
    all_cities: City[];
  };
}

export interface BusApiResponse<T> {
  data: T;
}

interface SeatTypes {
  id: string;
  alias: string;
  fare: number;
  name: string;
  currency: string;
  available_seat_ids: [];
}

export interface Schedule {
  is_shuttle: boolean;
  morning_schedule: string;
  from: string;
  to: string;
  departure_date: string;
  bus_type_id: string;
  operator: ScheduleOperator;
  is_express_travel: boolean;
  number_of_seats_booked: number;
  id: number;
  make: string;
  bus_model: string;
  route_id: number;
  route_schedule_id: number;
  route_schedule_code: string;
  departure_time: string;
  arrival_time: string;
  number_of_available_seats: number;
  fare: string;
  boarding_points: BoardingPoint[];
  dropoff_points: [];
  seats: [];
  seats_types: SeatTypes[];
  number_of_window_seats: number;
  last_booking: number;
  amenities: [];
  origin_city_id: number;
  destination_city_id: number;
  bus_capacity: number;
  trip_id: number;
  reporting_time: string;
  route_name: string;
  currencies: object;
}

export interface BusSchedule {
  schedule: Schedule[];
}

export interface SchedulePayload {
  leaving_from: string;
  going_to: string;
  departure_on: string;
  return_on?: string;
}
