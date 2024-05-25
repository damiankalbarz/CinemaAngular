import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  constructor() { }

  goToAddMovie() {
      //this.router.navigate(['/add-movie']);
    }
}

