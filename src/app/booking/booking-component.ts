import { Component } from '@angular/core';
import { BarbershopServicesComponent } from '../barbershop-services-component/barbershop-services-component';
import { Calendar } from '../calendar/calendar';

@Component({
  imports: [BarbershopServicesComponent, Calendar],
  selector: 'app-booking-component',
  styleUrl: './booking-component.scss',
  templateUrl: './booking-component.html',
})
export class BookingComponent {}
