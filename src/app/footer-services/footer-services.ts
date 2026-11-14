import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-footer-services',
  styleUrl: './footer-services.scss',
  templateUrl: './footer-services.html',
})
export class FooterServices {

  @Input() scissorsWidth = 64
  @Input() knifeWidth = 64
  @Input() machineWidth = 253
  @Input() chairWidth = 305
  @Input() height = 100
}
