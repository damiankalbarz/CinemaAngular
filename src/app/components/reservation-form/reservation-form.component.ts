import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.less'
})
export class ReservationFormComponent implements OnInit {
  reservation: any = {
    name: '',
    email: '',
    seats: 1
  };
  showId: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.showId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    console.log('Reservation details:', this.reservation);
    console.log('Show ID:', this.showId);


    alert('Rezerwacja została złożona pomyślnie!');


    this.router.navigate(['/slider']);
  }
}
