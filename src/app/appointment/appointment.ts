import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref, ActivatedRoute, UrlSegment, Router, NavigationEnd } from '@angular/router';
import { filter, Observable } from 'rxjs';

@Component({
  imports: [Menu, RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  selector: 'app-appointment',
  styleUrl: './appointment.scss',
  templateUrl: './appointment.html',
})
export class Appointment implements OnInit {

  private url! : string;
  @ViewChild('step1') step1! : ElementRef<HTMLElement>
  @ViewChild('step2') step2! : ElementRef<HTMLElement>
  @ViewChild('step3') step3! : ElementRef<HTMLElement>
  @ViewChild('step4') step4! : ElementRef<HTMLElement>

  constructor(private router: Router) {}

  ngOnInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
         this.url = event.urlAfterRedirects.split('?')[0].split('#')[0];
         console.log(this.url)
         switch(this.url){
          case "/appointment" :
          break;
          case "/appointment/(appointment:step2)":
            this.step1.nativeElement.classList.add('done')
          break ;
          case "/appointment/(appointment:step3)":
            this.step1.nativeElement.classList.add('done')
            this.step2.nativeElement.classList.add('done')
          break;
          case "/appointment/(appointment:step4)":
            this.step1.nativeElement.classList.add('done')
            this.step2.nativeElement.classList.add('done')
             this.step3.nativeElement.classList.add('done')
        break;
         }
      });
    }


}

