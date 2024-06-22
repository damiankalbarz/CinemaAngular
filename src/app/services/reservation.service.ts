import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8085/filmShow';

  constructor(private http: HttpClient) { }

  getReservations(filmShowId: number): Observable<Reservation[]> {
      return this.http.get<Reservation[]>(`${this.baseUrl}${filmShowId}/reservations`);
    }
}
