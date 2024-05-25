import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  //providers: [HttpClient]
})
export class SliderComponent implements OnInit {
  images: any[] = [];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.images = data;
      console.log('Otrzymane dane:', data);
    });
  }
}
