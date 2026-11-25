import { Component } from '@angular/core';
import { Image } from '../image-gallery/image-gallery';
import { BarberServicesBookingComponent } from '../barber-services-booking-component/barber-services-booking-component';
import { ActivatedRoute, Router} from '@angular/router';
import { Moment } from 'moment';
import { BarberShopService } from '../barbershopservicesinterface';
import { services } from '../barber/barber';

interface BarbershopBarber {
  img : Image,
  name : string,
  services: services[]
}

@Component({
  imports: [BarberServicesBookingComponent],
  selector: 'app-booking-step2-component',
  styleUrl: './booking-step2-component.scss',
  templateUrl: './booking-step2-component.html',
})
export class BookingStep2Component {

  bookingDateSelected! : Moment
  selectedBarbershopService! :BarberShopService

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    this.bookingDateSelected = this.route.snapshot.queryParams['date']
    this.selectedBarbershopService = JSON.parse(this.route.snapshot.queryParams['service'])
    console.log(this.route.snapshot.queryParams['selectedBarbershopService'])

    this.barbers = this.barbers.filter(element => this.selectedBarbershopService.service.type.every(
      selectedService => element.services.includes(selectedService)
    ));
  }

  goToStep3(barber : BarbershopBarber) : void {
     this.router.navigate(
    ['/appointment', { outlets: { appointment: ['step3'] } }],
    { queryParams: {
      service: JSON.stringify(this.selectedBarbershopService),
      date: this.bookingDateSelected,
      barber: JSON.stringify(barber)
    } }
  );
  }


  barbers : BarbershopBarber[] = [
    {
      img: {
        src: "/images/Barber-posing-nobg.png",
        alt: "Tomas",
      },
      services: [services.HAIRCUT, services.RAZOR, services.MAN],
      name: "Tomas"
    },
    {
      img: {
        src: "/images/Barber-posing-nobg.png",
        alt: "Alicia",
      },
      services: [services.HAIRCUT, services.RAZOR, services.WOMAN],
      name: "Alicia"
    },
    {
      img: {
        src: "/images/Barber-posing-nobg.png",
        alt: "Pepe",
      },
      services: [services.MACHINECUT, services.HAIRCUT, services.RAZOR, services.MAN],
      name: "Pepe"
    },
    {
      img: {
        src: "/images/Barber-posing-nobg.png",
        alt: "Francisco",
      },
      services: [services.MACHINECUT, services.HAIRCUT, services.RAZOR, services.MAN, services.DEFINITION],
      name: "Francisco"
      }
  ]

}
