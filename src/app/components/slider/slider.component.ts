import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  movies: any[] = [];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.results;
    });
  }
}
