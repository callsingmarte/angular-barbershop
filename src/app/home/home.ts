import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';


@Component({
  imports: [Menu, RouterLink, Footer],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {


}
