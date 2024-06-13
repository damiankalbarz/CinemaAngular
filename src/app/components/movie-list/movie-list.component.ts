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

   deleteMovie(movie: Movie): void {
      if (confirm(`Are you sure you want to delete the movie "${movie.title}"?`)) {
        this.movieService.deleteMovie(movie.id).subscribe(() => {
          this.movies = this.movies.filter(m => m.id !== movie.id);
        });
      }
    }

}
