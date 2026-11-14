import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';

@Component({
  imports: [Menu, Footer],
  selector: 'app-services',
  styleUrl: './services.scss',
  templateUrl: './services.html',
})
export class Services {}
