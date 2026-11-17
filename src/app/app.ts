import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

export const locale = (typeof $localize !== 'undefined' && $localize.locale) || 'en-US';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit{
  protected readonly title = signal($localize`angular-barbershop`);

  constructor(private router: Router){}

  ngOnInit(): void {
     this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

}
