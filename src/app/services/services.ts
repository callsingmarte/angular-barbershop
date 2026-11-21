import { Component, inject } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { BarberShopService, Gender } from '../barbershopservicesinterface';
import { BarbershopServicesService } from '../barbershop-services-service';


@Component({
  imports: [Menu, Footer, RouterLink],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {

  private servicesdata = inject(BarbershopServicesService)

  readonly Gender = Gender
  readonly genders = Object.values(Gender).filter(v => typeof v === 'number');

  BabershopServices : BarberShopService[] = this.servicesdata.getBarbershopListOfServices()
}
