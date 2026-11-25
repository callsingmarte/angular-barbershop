import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { Appointment } from './appointment/appointment';
import { Notfound } from './notfound/notfound';
import { BookingComponent } from './booking/booking-component';
import { BookingStep2Component } from './booking-step2-component/booking-step2-component';
import { BookingStep3Component } from './booking-step3-component/booking-step3-component';
import { BookingStep4Component } from './booking-step4-component/booking-step4-component';

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
        component: BookingStep2Component,
        outlet: 'appointment',
      },
      {
        path: 'step3',
        component: BookingStep3Component,
        outlet: 'appointment',
      },
      {
        path: 'step4',
        component: BookingStep4Component,
        outlet: 'appointment',
      },
    ]
  },
  {
    path: '**',
    component: Notfound
  }
];
