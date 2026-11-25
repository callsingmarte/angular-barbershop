import { Component, Input, input } from '@angular/core';
import { Image } from '../image-gallery/image-gallery';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-barber-frame',
  styleUrl: './barber-frame.scss',
  templateUrl: './barber-frame.html',
})
export class BarberFrame {
  width = 527
  height = 499
  @Input() image! : Image;
  @Input() name : string= ""
}
