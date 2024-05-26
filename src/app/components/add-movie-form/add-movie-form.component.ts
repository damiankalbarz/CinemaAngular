import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    director: '',
    category: ''
  };
  selectedFile: File | null = null;

  constructor(private movieService: MovieService, private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Wybrany plik:', this.selectedFile);
  }

  onSubmit() {
    // Upewnij się, że wszystkie pola są wypełnione
    if (!this.movie.title || !this.movie.director || !this.movie.category) {
      console.error('Wszystkie pola są wymagane');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.movie.title);
    formData.append('director', this.movie.director);
    formData.append('category', this.movie.category);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.movieService.addMovie(formData).subscribe(
      response => {
        console.log('Film został dodany:', response);
      },
      error => {
        console.error('Wystąpił błąd podczas dodawania filmu:', error);
        console.log('Wysłane dane:', formData);
      }
    );
  }
}
