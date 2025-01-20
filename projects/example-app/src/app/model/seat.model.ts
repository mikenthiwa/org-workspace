export interface Fare {
  currencies: { Ksh: string };
  normal: string;
}

export interface SeatModel {
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
