import { Component } from '@angular/core';
import { BarberFrame } from '../barber-frame/barber-frame';
import { BarberServices } from '../barber-services/barber-services';
import { ImageGallery } from '../image-gallery/image-gallery';

export enum services {
  HAIRCUT,
  RAZOR,
  DEFINITION,
  MACHINECUT
}

export interface Image {
  src : string;
  alt : string;
}


@Component({
  imports: [BarberFrame, BarberServices, ImageGallery],
  standalone: true,
  selector: 'app-barber',
  styleUrl: './barber.scss',
  templateUrl: './barber.html',
})
export class Barber {
  readonly Services = services;

  barberPics : Image[] = [
    { src: "/images/barber-model.png",
      alt: "barber-profile-1"
    },
    { src: "",
      alt: "barber-profile-2"
    },
    { src: "",
      alt: "barber-profile-3"
    },
    { src: "",
      alt: "barber-profile-4"
    },
    { src: "",
      alt: "barber-profile-5"
    },

  ]

}
