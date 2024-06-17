import { Component, OnInit } from '@angular/core';

import { FilmShowResponse } from '../../model/film-show-response.model';
import { FilmShowService, FilmShow } from '../../services/filmShow.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-film-show-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-show-list-user.component.html',
  styleUrl: './film-show-list-user.component.less'
})
export class FilmShowListUserComponent implements OnInit {
  filmShows: FilmShowResponse[] = [];
  errorMessage: string = '';

  constructor(private filmShowService: FilmShowService,private router: Router) { }

  ngOnInit(): void {
    this.filmShowService.getAllFilmShowsWithDetails().subscribe({
      next: (data) => this.filmShows = data,
      error: (error) => this.errorMessage = 'Could not load film shows.'
    });
  }

  reserveSeat(show: any): void {
      this.router.navigate(['/login']);
      console.log('Reserving seat for show:', show);

    }
}
