import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8085/filmShow/';

  constructor(private http: HttpClient) { }

  getReservations(filmShowId: number): Observable<Reservation[]> {
      return this.http.get<Reservation[]>(`${this.baseUrl}${filmShowId}/reservations`);
  }
}
