import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent} from './shared/layout/layout.component';
import { RegisterComponent} from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component'
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddMovieFormComponent} from './components/add-movie-form/add-movie-form.component';

export const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
   { path: 'login', component: LoginComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'slider', component: SliderComponent}
  ],
  },
   { path: 'admin-page',
    component: AdminPageComponent,
    children: [
      { path: '', redirectTo: 'addMovie', pathMatch: 'full'},
      { path: 'addMovie', component: AddMovieFormComponent},
    ],
   },
];
