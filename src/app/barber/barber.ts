import { Component } from '@angular/core';
import { BarberFrame } from '../barber-frame/barber-frame';
import { BarberServices } from '../barber-services/barber-services';
import { ImageGallery } from '../image-gallery/image-gallery';

export enum services {
  HAIRCUT,
  RAZOR,
  DEFINITION,
  MACHINECUT,
  MAN,
  WOMAN
}

export interface Image {
  src : string;
  alt : string;
}

export interface BarbershopBarber{
  barberProfilePic: Image,
  barberName: string,
  barberDescription: string,
  barberServices: services[]
  barberGallery: Image[]
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

    barberProfile : BarbershopBarber = {
      barberProfilePic: this.barberPic,
      barberName: "Tomas",
      barberServices: [services.HAIRCUT, services.RAZOR, services.MAN],
      barberDescription: `Tomás. Master of detail.
              Tomás blends classic barbering techniques
              with current trends to deliver flawless results.
              He’s known in the shop for his sharp razor skills
              and his ability to tailor each cut to the client’s bone structure.
              Whether it’s a clean, military-style cut or a complex beard design,
              Tomás ensures a polished, long-lasting finish.`,
      barberGallery: this.barberPics
    }


}
