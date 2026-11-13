import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { FooterDecoration } from '../footer-decoration/footer-decoration';
import { SocialMedia } from '../social-media/social-media';


@Component({
  imports: [Menu, FooterDecoration, SocialMedia],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {


}
