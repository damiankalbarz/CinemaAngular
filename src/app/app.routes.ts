import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddMovieFormComponent } from './components/add-movie-form/add-movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AddSeansComponent } from './components/add-seans/add-seans.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'slider', component: SliderComponent },
    ],
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
    children: [
      { path: '', redirectTo: 'movieList', pathMatch: 'full' },
      { path: 'addMovie', component: AddMovieFormComponent },
      { path: 'movieList', component: MovieListComponent },
      { path: 'addSeans/:id', component: AddSeansComponent },
    ],
  },
];
