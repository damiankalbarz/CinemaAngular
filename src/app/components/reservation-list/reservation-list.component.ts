import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../model/reservation.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.less'
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];
  filmShowId!: number;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    const filmShowIdParam = this.route.snapshot.paramMap.get('filmShowId');
    if (filmShowIdParam) {
      this.filmShowId = +filmShowIdParam;
      this.loadReservations();
    } else {
      console.error('No filmShowId parameter found in route');
    }
  }

  loadReservations(): void {
    if (this.filmShowId !== undefined) {
      this.reservationService.getReservations(this.filmShowId).subscribe(
        data => this.reservations = data,
        error => console.error('Error loading reservations', error)
      );
    } else {
      console.error('filmShowId is undefined');
    }
  }
}
