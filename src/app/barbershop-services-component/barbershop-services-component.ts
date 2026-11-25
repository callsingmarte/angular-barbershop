import { Component, inject, output, Output } from '@angular/core';
import { BarbershopServicesService } from '../barbershop-services-service';
import { BarberShopService, Gender } from '../barbershopservicesinterface';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-barbershop-services-component',
  styleUrl: './barbershop-services-component.scss',
  templateUrl: './barbershop-services-component.html',
})
export class BarbershopServicesComponent {
  private servicesdata = inject(BarbershopServicesService)

  readonly Gender = Gender
  readonly genders = Object.values(Gender).filter(v => typeof v === 'number');

  BabershopServices : BarberShopService[] = this.servicesdata.getBarbershopListOfServices()

  selectedBarbershopService = output<BarberShopService | null>()
  prevselectedItem : Element | null = null

  selectService(event : Event, service : BarberShopService) : void {
    if(this.prevselectedItem){
      console.log(this.prevselectedItem.tagName)
      this.prevselectedItem.classList.remove('selected')
    }
    const element = event.target as HTMLElement;
    const button = element.closest('BUTTON')
    const input = button?.querySelector('input')
    console.log("input", input)
    if(button && input){
      button?.classList.add('selected')
      input.checked = true
    }

    if(button && input && this.prevselectedItem == button ){
      console.log('removing class')
      this.prevselectedItem.classList.remove('selected')
      this.selectedBarbershopService.emit(null)
      this.prevselectedItem = null
      input.checked = false
    }else{
      this.selectedBarbershopService.emit(service)
      this.prevselectedItem = button
    }


  }
}
