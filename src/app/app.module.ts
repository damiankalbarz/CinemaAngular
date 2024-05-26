import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { AddMovieFormComponent } from './components/add-movie-form/add-movie-form.component';
import { MovieService } from './services/movie.service'; // Dodaj import MovieService

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AddMovieFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService, provideHttpClient(),], // Dodaj MovieService do providers
  bootstrap: [AppComponent]
})
export class AppModule { }
