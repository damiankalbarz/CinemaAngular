import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private apiUrl = 'http://localhost:8082/cinema';

  constructor(private http: HttpClient) { }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.apiUrl);
  }
}

export interface Cinema {
  id: number;
  cinemaName: string;
  location: string;
  roomList: Room[];
}

export interface Room {
  id: number;
  name: string;
  seats: number;
}
