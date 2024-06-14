import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // Dodaj ReactiveFormsModule tutaj
import { MovieService, Movie } from '../../services/movie.service';
import { CinemaService, Cinema, Room } from '../../services/cinema.service';
import { CommonModule } from '@angular/common';  // Dodaj CommonModule dla dyrektyw Angular

@Component({
  selector: 'app-add-seans',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  // Dodaj ReactiveFormsModule i CommonModule tutaj
  templateUrl: './add-seans.component.html',
  styleUrls: ['./add-seans.component.less']
})
export class AddSeansComponent implements OnInit {
  seansForm: FormGroup;
  movie: Movie | null = null;
  cinemas: Cinema[] = [];
  rooms: Room[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private cinemaService: CinemaService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.seansForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      hall: ['', Validators.required],
      cinema: ['', Validators.required],
      movie: ['']
    });
  }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe((movie: Movie) => {
        this.movie = movie;
        this.seansForm.patchValue({ movie: movie.title });
      });
    }

    this.cinemaService.getCinemas().subscribe((cinemas: Cinema[]) => {
      this.cinemas = cinemas;
    });

    this.seansForm.get('cinema')?.valueChanges.subscribe(cinemaId => {
      this.updateRooms(cinemaId);
    });
  }

  updateRooms(cinemaId: number): void {
    const selectedCinema = this.cinemas.find(cinema => cinema.id == cinemaId);
    this.rooms = selectedCinema ? selectedCinema.roomList : [];
    this.seansForm.patchValue({ hall: '' });
  }

  onSubmit(): void {
    if (this.seansForm.valid) {

      this.router.navigate(['/admin-page/movieList']);
    }
  }
}
