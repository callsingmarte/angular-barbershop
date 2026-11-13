import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const locale = (typeof $localize !== 'undefined' && $localize.locale) || 'en-US';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal($localize`angular-barbershop`);
}
