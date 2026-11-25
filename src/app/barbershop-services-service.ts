import { Service } from '@angular/core';
import { BarberShopService, Barbershopservicesinterface, Gender } from './barbershopservicesinterface';
import { services } from './barber/barber';

@Service()
export class BarbershopServicesService implements Barbershopservicesinterface {

  getBarbershopListOfServices() : BarberShopService[] {
    return [
      {
        img: {
          src: '/images/Haircut-service.png',
          alt: 'haircut service'
        },
        title: 'Gentleman haircut',
        description: 'Classic and modern styles tailored for men.',
        service: {
          type: [services.HAIRCUT, services.MAN],
          name: 'Gentleman haircut',
          duration: '30min',
          price: '11',
        },
        gender: Gender.MALE
      },
      {
        img: {
          src: '/images/Shave-service.png',
          alt: 'shaving service'
        },
        title: 'Shave',
        description: 'This service requires a high level of skill and experience from the barber to ensure safety and a comfortable experience for the client.',
        service: {
          type: [services.MACHINECUT, services.RAZOR, services.MAN],
          name: 'shave',
          duration: '30min',
          price: '10'
        },
        gender: Gender.MALE
      },
      {
        img: {
          src: '/images/razorCut-service.png',
          alt: 'razor cut service'
        },
        title: 'Razor cut',
        description: ': A traditional, close shave using a straight razor for a smooth finish.',
        service: {
          type: [services.RAZOR, services.MAN],
          name: 'Razor cut',
          duration: '30min',
          price: '15'
        },
        gender: Gender.MALE
      },
      {
        img: {
          src: '/images/kidHaircut-service.png',
          alt: 'kid haircut service'
        },
        title: 'Kid haircut',
        description: 'Grooming services designed for younger clients.',
        service: {
          type: [services.HAIRCUT, services.MAN],
          name: 'Kid haircut',
          duration: '30min',
          price: '10'
        },
        gender: Gender.MALE
      },
      {
        img: {
          src: '/images/femaleHaircut-service.png',
          alt: 'female haircut service'
        },
        title: 'Female Haircut',
        description: 'Styling and cutting options for women.',
        service: {
          type: [services.HAIRCUT, services.WOMAN],
          name: 'Female haircut',
          duration: '30 min',
          price: '10'
        },
        gender: Gender.FEMALE
      },
      {
        img: {
          src: '/images/femaleHaircut-service.png',
          alt: 'female haircut service'
        },
        title: 'Female Haircut',
        description: 'Styling and cutting options for women.',
        service: {
          type: [services.HAIRCUT, services.WOMAN],
          name: 'Female haircut',
          duration: '30 min',
          price: '10'
        },
        gender: Gender.FEMALE
      }
    ]
  }

}
