import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';
import { isActive, Router, RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  imports: [Menu, RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  selector: 'app-appointment',
  styleUrl: './appointment.scss',
  templateUrl: './appointment.html',
})
export class Appointment {

  private router = inject(Router)

  @ViewChild('step1') step1! : ElementRef<HTMLElement>

}

