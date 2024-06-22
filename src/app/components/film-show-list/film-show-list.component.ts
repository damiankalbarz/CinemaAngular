// src/app/components/film-show-list/film-show-list.component.ts

import { Component, OnInit } from '@angular/core';
import { FilmShowService, FilmShow } from '../../services/filmShow.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film-show-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-show-list.component.html',
  styleUrls: ['./film-show-list.component.less']
})
export class FilmShowListComponent implements OnInit {
  filmShows: FilmShow[] = [];

  constructor(private filmShowService: FilmShowService) { }

  ngOnInit(): void {
    this.filmShowService.getFilmShows().subscribe(
      (data: FilmShow[]) => {
        this.filmShows = data;
      },
      (error) => {
        console.error('Error fetching film shows:', error);
      }
    );
  }
   viewReservation(filmShowId: number): void {
      // Przekierowanie do strony z rezerwacjami dla wybranego seansu
      //this.router.navigate(['/reservation', filmShowId]);
    }
}
