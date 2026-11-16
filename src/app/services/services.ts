import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Menu, Footer, RouterLink],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {}
