import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { Appointment } from './appointment/appointment';
import { Notfound } from './notfound/notfound';
import { BookingComponent } from './booking/booking-component';

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
    component: Appointment,
    children: [
      {
        path: '',
        component: BookingComponent,
        outlet: 'appointment',
      },
      {
        path: 'step2',
        component: BookingComponent,
        outlet: 'appointment',
      },
      {
        path: 'step3',
        component: BookingComponent,
        outlet: 'appointment',
      },
      {
        path: 'step4',
        component: BookingComponent,
        outlet: 'appointment',
      },
    ]
  },
  {
    path: '**',
    component: Notfound
  }
];
