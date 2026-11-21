import { Image } from "./image-gallery/image-gallery"

export enum Gender{
  MALE,
  FEMALE
}

export interface Service{
  name: string
  duration: string
  price: string
}

export interface BarberShopService{
  img : Image
  title: string
  description: string
  service: Service
  gender: Gender
}


export interface Barbershopservicesinterface {

    getBarbershopListOfServices() : BarberShopService[];
}
