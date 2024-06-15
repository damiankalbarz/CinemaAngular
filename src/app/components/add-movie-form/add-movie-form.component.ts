import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movie-form',
  standalone: true,
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.less'],
  imports: [FormsModule]
})
export class AddMovieFormComponent {
  movie: any = {
    title: '',
    author: '',
    category: ''
  };
  //selectedFile: File | null = null;

  constructor(private movieService: MovieService, private http: HttpClient) { }
/*
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Wybrany plik:', this.selectedFile);
  }*/

  onSubmit() {
    // Upewnij się, że wszystkie pola są wypełnione
    if (!this.movie.title || !this.movie.director || !this.movie.category) {
      console.error('Wszystkie pola są wymagane');
      return;
    }

    const movieData = {
      title : this.movie.title,
      author : this.movie.director,
      category : this.movie.category
    };


    this.movieService.addMovie(movieData).subscribe(
      response => {
        console.log('Film został dodany:', response);
      },
      error => {
        console.error('Wystąpił błąd podczas dodawania filmu:', error);
        console.log('Wysłane dane:', movieData);
      }
    );
  }
}
