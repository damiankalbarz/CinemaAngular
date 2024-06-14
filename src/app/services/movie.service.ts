import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, withFetch } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8084/film';
  private apiUrl2 = 'http://localhost:8084/film/auth';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addMovie(moviesData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    console.log('Sending movie data:', moviesData);
    return this.http.post<any>(this.apiUrl2, moviesData, { headers });
  }

  getMovieList(): Observable<Movie[]>{
    return this.http.get<Movie[]>("http://localhost:8084/film");
  }

   deleteMovie(id: string): Observable<void> {
       return this.http.delete<void>(`${this.apiUrl2}/${id}`);
     }

   getMovieById(id: string): Observable<Movie> {
       return this.http.get<Movie>(`${this.apiUrl}/${id}`);
     }
}

export interface Movie {
  id: string;
  title: string;
  author: string;
  category: string;
}
