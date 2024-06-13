import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less'] // Użyj 'styleUrls' zamiast 'styleUrl'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  titleFilter: string = '';
  categoryFilter: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      this.filteredMovies = data;
    });
  }

  deleteMovie(movie: Movie): void {
    if (confirm(`Are you sure you want to delete the movie "${movie.title}"?`)) {
      this.movieService.deleteMovie(movie.id).subscribe(() => {
        this.movies = this.movies.filter(m => m.id !== movie.id);
        this.filterMovies();
      });
    }
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie =>
      (this.titleFilter === '' || movie.title.toLowerCase().includes(this.titleFilter.toLowerCase())) &&
      (this.categoryFilter === '' || movie.category.toLowerCase().includes(this.categoryFilter.toLowerCase()))
    );
  }
}
