import { Component, Input, input } from '@angular/core';

export interface Image {
  src : string;
  alt : string;
}

@Component({
  imports: [],
  standalone: true,
  selector: 'app-image-gallery',
  styleUrl: './image-gallery.scss',
  templateUrl: './image-gallery.html',
})
export class ImageGallery {

  @Input() images : Image[] = [];

  svgfill = "#e0c007"

}
