import { afterNextRender, Component, ElementRef, Input, viewChild, OnInit, signal, input } from '@angular/core';

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
export class  ImageGallery implements OnInit {

  @Input() images : Image[] = []

  currentIndex = 0
  svgfill = "#e0c007"
  btnWidth = "5em"
  btnHeight = "5em"

private galleryRef = viewChild<ElementRef<HTMLOListElement>>('gallery');

  ngOnInit(): void {
      this.currentIndex = Math.floor(this.images.length / 2);
  }

  constructor() {
    afterNextRender(() => {
      this.currentIndex = Math.floor(this.images.length / 2);
      this.scrollToCurrent();
    });
  }
scrollToCurrent(): void {
    const gallery = this.galleryRef()?.nativeElement;
    if (!gallery) return;

    const img = gallery.querySelector<HTMLImageElement>(`#img-${this.currentIndex}`);
    // Subimos al <li> padre (el ítem real del flex) por si tiene padding o ancho propio
    const target = img?.closest<HTMLLIElement>('li.carouselimg') ?? img;
    if (!target) return;

    const left =
      target.offsetLeft -
      (gallery.clientWidth / 2) +
      (target.offsetWidth / 2);

    gallery.scrollTo({
      left: Math.max(0, left),
      behavior: 'smooth'
    });
  }

  nextPic(): void{
    if(this.images.length === 0 ){
      return;
    }
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.scrollToCurrent()
  }

  prevPic(): void{
    if(this.images.length === 0 ){
      return;
    }
    this.currentIndex = (this.currentIndex - 1) % this.images.length;
    this.scrollToCurrent()
  }

}
