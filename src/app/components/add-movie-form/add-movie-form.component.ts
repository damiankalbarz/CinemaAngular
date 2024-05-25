import { Component } from '@angular/core';

@Component({
  selector: 'app-add-movie-form',
  standalone: true,
  imports: [],
  templateUrl: './add-movie-form.component.html',
  styleUrl: './add-movie-form.component.less'
})
export class AddMovieFormComponent {

   movie: any = {};

   onFileSelected(event: any) {
      const file: File = event.target.files[0]; // Pobieramy pierwszy plik z wybranych
      // Tutaj można wykonać różne operacje związane z wybranym plikiem, np. wyświetlenie podglądu
      console.log(file);
    }

    onSubmit() {
      // Tutaj można umieścić logikę wysyłania danych formularza na serwer
      console.log(this.movie);
    }



}
