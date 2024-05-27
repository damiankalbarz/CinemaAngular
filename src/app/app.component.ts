import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { AddMovieFormComponent } from './components/add-movie-form/add-movie-form.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
    standalone: true,
    imports: [CommonModule, HeaderComponent, SliderComponent, AddMovieFormComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'kino-app';
}
