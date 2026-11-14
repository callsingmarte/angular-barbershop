import { Component, inject, OnInit} from '@angular/core';
import { BarberIcon } from '../barber-icon/barber-icon';
import { MenuDecoration } from '../menu-decoration/menu-decoration';
import { LangSelector } from '../lang-selector/lang-selector';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Slogan } from '../slogan/slogan';

@Component({
  imports: [BarberIcon, MenuDecoration, LangSelector, RouterLink, RouterLinkActive, Slogan],
  standalone: true,
  selector: 'app-menu',
  styleUrl: './menu.scss',
  templateUrl: './menu.html',
})

export class Menu implements OnInit{
  private router = inject(Router);
  private routes :string[]= ["/","home", "services", "about-us", "appointment"]

  ngOnInit(): void {
    const url = this.router.url;

    }

}

