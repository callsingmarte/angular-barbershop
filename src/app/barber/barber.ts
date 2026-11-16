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

  barberPic: Image = {
    src: "/images/Barber-posing-nobg.png",
    alt: "barber-posing"
  }

  barberPics : Image[] = [
    { src: "/images/barber-model.png",
      alt: "barber-profile-1"
    },
    { src: "/images/haircut1.png",
      alt: "barber-profile-2"
    },
    { src: "/images/haircut3.png",
      alt: "barber-profile-3"
    },
    { src: "/images/haircut4.png",
      alt: "barber-profile-4"
    },
    { src: "/images/razorcut1.png",
      alt: "barber-profile-5"
    },

  ]

}
