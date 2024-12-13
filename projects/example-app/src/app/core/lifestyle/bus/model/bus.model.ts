interface Operator {
  booked_seat_session_id: string;
  alias: string;
  name: string;
  logo: string;
}

interface BoardingPoint {
  id: number;
  name: string;
}

interface SeatType {
  id: string;
  alias: string;
  fare: number;
  name: string;
  currency: string;
  available_seat_ids: string[];
}

interface SelectedBus {
  from: string;
  to: string;
  departure_date: string;
  bus_type_id: string;
  operator: Operator;
  is_express_travel: string;
  number_of_booked_seats: number;
  id: number;
  make: string;
  route_id: string;
  route_schedule_id: string;
  route_schedule_code: string;
  departure_time: string;
  arrival_time: string;
  number_of_available_seats: number;
  fare: string;
  boarding_points: BoardingPoint[];
  seats: string[];
  seat_types: SeatType[];
  number_of_window_seats: number;
  last_booking: number;
  amenities: string[];
  origin_city_id: number;
  destination_city_id: number;
  bus_capacity: number;
  trip_id: number;
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
  selected_bus: SelectedBus;
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
