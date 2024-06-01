import { Component } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, HttpClientModule],
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    console.log(this.loginObj);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('http://localhost:9898/auth/token', this.loginObj, { headers: headers, responseType: 'text' }).subscribe({
      next: (res: any) => {
        console.log('Odpowiedź serwera:', res);
        // Ustaw token JWT bezpośrednio z odpowiedzi tekstowej
        const token = res;
        if (token) {
          alert('Logowanie powiodło się');
          localStorage.setItem('angular17token', token);
          this.router.navigateByUrl('/slider');
        } else {
          alert('Logowanie nie powiodło się: nie otrzymano tokenu');
        }
      },
      error: (error) => {
        console.error('Błąd podczas uwierzytelniania:', error);
        alert('Wystąpił błąd podczas logowania.');
      }
    });
  }
}

export class Login {
  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }
}
