import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../services/movie.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  titleFilter: string = '';
  categoryFilter: string = '';

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      this.filteredMovies = data;
    });
  }

  deleteMovie(movie: Movie): void {
    if (confirm(`Are you sure you want to delete the movie "${movie.title}"?`)) {
      this.movieService.deleteMovie(movie.id).subscribe(() => {
        this.movies = this.movies.filter(m => m.id !== movie.id);
        this.filteredMovies = this.filteredMovies.filter(m => m.id !== movie.id);
      });
    }
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
             movie.category.toLowerCase().includes(this.categoryFilter.toLowerCase());
    });
  }

  navigateToAddSeans(movie: Movie): void {
    this.router.navigate(['/admin-page/addSeans', movie.id]);
  }
}
