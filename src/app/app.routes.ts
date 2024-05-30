import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent} from './shared/layout/layout.component';
import { RegisterComponent} from './components/register/register.component';
import { SliderComponent } from './components/slider/slider.component'

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
}
];
