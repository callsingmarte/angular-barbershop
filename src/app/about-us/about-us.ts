import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';
import { Barber } from '../barber/barber';

@Component({
  imports: [Menu, Footer, Barber],
  selector: 'app-about-us',
  styleUrl: './about-us.scss',
  templateUrl: './about-us.html',
})
export class AboutUs {}
