import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { Appointment } from './appointment/appointment';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full',
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'about-us',
    component: AboutUs
  },
  {
    path: 'appointment',
    component: Appointment
  },
  {
    path: '**',
    component: Notfound
  }
];
