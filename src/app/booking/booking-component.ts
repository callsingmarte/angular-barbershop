import { Component, inject } from '@angular/core';
import { BarbershopServicesComponent } from '../barbershop-services-component/barbershop-services-component';
import { Calendar } from '../calendar/calendar';
import { Router } from '@angular/router';
import { BarberShopService } from '../barbershopservicesinterface';
import { Moment } from 'moment';

@Component({
  imports: [BarbershopServicesComponent, Calendar],
  selector: 'app-booking-component',
  styleUrl: './booking-component.scss',
  templateUrl: './booking-component.html',
})
export class BookingComponent {

  constructor(private router : Router){
  }

  selectedBarbershopService : BarberShopService | null = null
  bookingDateSelected : Moment | null = null

  goToStep2() : void {
     this.router.navigate(
    ['/appointment', { outlets: { appointment: ['step2'] } }],
    { queryParams: { service: JSON.stringify(this.selectedBarbershopService), date: this.bookingDateSelected } }
  );
  }

}
