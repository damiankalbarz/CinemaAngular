import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../services/movie.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.less'
})
export class MovieListComponent {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
      this.movieService.getMovies().subscribe((data: Movie[]) => {
        this.movies = data;
      });
  }

}
