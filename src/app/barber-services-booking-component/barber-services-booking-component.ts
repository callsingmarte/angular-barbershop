import { Component, Input } from '@angular/core';
import { BarberIcon } from '../barber-icon/barber-icon';
import { services } from '../barber/barber';

@Component({
  imports: [BarberIcon],
  standalone: true,
  selector: 'app-barber-services-booking-component',
  styleUrl: './barber-services-booking-component.scss',
  templateUrl: './barber-services-booking-component.html',
})
export class BarberServicesBookingComponent {

  readonly services = services

  @Input() barberServices : services[] = []

  scissorsW = 64
  scissorsH = 103
  razorW = 72
  razorH = 81
  machineW = 253
  machineH = 162
  combW = 169
  combH = 162
  manW = 800
  manH = 800

}
