import { Component } from '@angular/core';
import { AdminNavbarComponent} from '../../components/admin-navbar/admin-navbar.component';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.less'
})
export class AdminPageComponent {

}
