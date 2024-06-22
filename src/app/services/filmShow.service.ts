import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmShowResponse } from '../model/film-show-response.model';


@Injectable({
  providedIn: 'root'
})
export class FilmShowService {
  private apiUrl = 'http://localhost:8085/filmShow';

  constructor(private http: HttpClient) { }

  addFilmShow(filmShowData: FilmShow): Observable<FilmShow> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<FilmShow>(this.apiUrl, filmShowData, { headers });
  }

  getFilmShows(): Observable<FilmShow[]> {
      return this.http.get<FilmShow[]>(this.apiUrl);
    }

  getAllFilmShowsWithDetails(): Observable<FilmShowResponse[]> {
      return this.http.get<FilmShowResponse[]>(`${this.apiUrl}/detail`);
    }

}

export interface FilmShow {
  id: number;
  dateTime: string;
  cinemaId: number;
  filmId: string;
  roomId: number;
  availableSeats: number;
}
