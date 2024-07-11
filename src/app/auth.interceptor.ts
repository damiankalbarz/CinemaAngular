import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     // Pobierz token autoryzacyjny z local storage
     const authToken = localStorage.getItem('angular17token');
     console.log('Intercepting request:', req);
     console.log('Auth Token:', authToken);

     if (authToken) {
       // Sklonuj żądanie i dodaj nagłówek autoryzacji
       const authReq = req.clone({
         headers: req.headers.set('Authorization', `Bearer ${authToken}`)
       });
       console.log('Request with auth header:', authReq);
       // Przekaż sklonowane żądanie zamiast oryginalnego
       return next.handle(authReq);
     } else {
       // Przekaż oryginalne żądanie
       return next.handle(req);
     }
   }
}
