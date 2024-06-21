import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
   private apiUrl = 'http://localhost:8081/client';

    constructor(private http: HttpClient) { }

    getClients(): Observable<Client[]> {
      return this.http.get<Client[]>(this.apiUrl);
    }
}
