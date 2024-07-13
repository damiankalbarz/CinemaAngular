import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.less'
})
export class AdminNavbarComponent {

   constructor( private router: Router) { }

     onLogout() {
       localStorage.removeItem('angular17token');
       this.router.navigateByUrl('/login');

    }


}
