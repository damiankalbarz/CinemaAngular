import { Client } from './client.model';

export interface Reservation {
  id: number;
  filmShow: any;
  numberOfSeats: number;
  client: Client | null;
}
