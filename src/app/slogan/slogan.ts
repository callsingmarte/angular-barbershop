import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-slogan',
  styleUrl: './slogan.scss',
  templateUrl: './slogan.html',
})

export class Slogan {
 @Input() width : number = 325;

}
