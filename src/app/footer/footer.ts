import { Component } from '@angular/core';
import { FooterDecoration } from '../footer-decoration/footer-decoration';
import { SocialMedia } from '../social-media/social-media';
import { FooterServices } from '../footer-services/footer-services';

@Component({
  imports: [FooterDecoration, SocialMedia, FooterServices],
  standalone: true,
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
