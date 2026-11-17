import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';
import { Barber } from '../barber/barber';

@Component({
  imports: [Menu, Footer, Barber],
  selector: 'app-about-us',
  styleUrl: './about-us.scss',
  templateUrl: './about-us.html',
})
export class AboutUs implements OnInit, AfterViewInit{

  @ViewChild('title') title!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    if(this.title){

    }
  }

  ngAfterViewInit(): void {
    setTimeout(() =>
      this.title.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'})
    , 2000);
  }
}
