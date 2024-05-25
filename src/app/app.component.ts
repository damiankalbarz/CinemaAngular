import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { AddMovieFormComponent } from './components/add-movie-form/add-movie-form.component';

@Component({
  selector: 'app-root',
    standalone: true,
    imports: [CommonModule, NavbarComponent, SliderComponent, AddMovieFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'kino-app';
}
