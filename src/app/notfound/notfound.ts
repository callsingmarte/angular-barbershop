import { Component, ElementRef, AfterViewInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';

@Component({
  imports: [Menu, Footer],
  selector: 'app-notfound',
  styleUrl: './notfound.scss',
  templateUrl: './notfound.html'
})
export class Notfound implements AfterViewInit, OnDestroy {

  loupeW = 311;
  loupeH = 352;

  @ViewChild('loupe') loupe!: ElementRef<HTMLElement>;
  @ViewChild('magnifier') magnifier!: ElementRef<HTMLDivElement>;
  @ViewChild('title') title!: ElementRef<HTMLHeadElement>;
  @ViewChild('lens') lens!: ElementRef<HTMLElement>;

  private animFrameId: number | null = null;
  titleString: string = $localize`Error404: Page Not Found`;

  isColliding = false;
  isCollidingLetter = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.checkCollision();
    });
  }

  ngOnDestroy(): void {
    this.stopLoop();
  }


  checkCollision(): void {
    const rect1 = this.magnifier.nativeElement.getBoundingClientRect();
    const rect2 = this.title.nativeElement.getBoundingClientRect();
    const spans = this.title.nativeElement.querySelectorAll('span');

    this.isColliding =
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y;

    if (this.isColliding) {
      spans.forEach(span => {
        const rect = span.getBoundingClientRect();
        this.isCollidingLetter =
          rect1.x < rect.x + rect.width &&
          rect1.x + rect1.width > rect.x &&
          rect1.y < rect.y + rect.height &&
          rect1.y + rect1.height > rect.y;

        if (this.isCollidingLetter) {
          span.classList.add('zoom');
        } else {
          span.classList.remove('zoom');
        }
      });
    } else {
      spans.forEach(span => {
        span.classList.remove('zoom');
      });
    }
  }

  private startLoop(): void {
    const loop = (): void => {
      this.syncLensMagnifierposition();
      this.checkCollision();
      this.cdr.detectChanges();
      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  private stopLoop(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  private magPos = { x: 0, y: 0 };

syncLensMagnifierposition(): void {
  const lensEl = this.lens?.nativeElement;
  const magEl = this.magnifier?.nativeElement;

  if (!lensEl || !magEl) return;

  const parentEl = magEl.offsetParent as HTMLElement;
  if (!parentEl) return;

  const lensRect = lensEl.getBoundingClientRect();
  const parentRect = parentEl.getBoundingClientRect();

  const centerX = (lensRect.left + lensRect.width / 2) - parentRect.left;
  const centerY = (lensRect.top + lensRect.height / 2) - parentRect.top;

  // --- Separación móvil / escritorio ---
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const offsetX = isMobile ? 0 : 0;      // ajusta según necesites
  const offsetY = isMobile ? -4 : -10;   // en móvil la lente suele ir más pegada

  // En móvil conviene escalar el offset al tamaño de la lente
  // porque la lente cambia de tamaño con el viewport
  const scale = lensRect.width / 311; // 311 = loupeW de escritorio

  magEl.style.left = `${centerX - magEl.offsetWidth / 2 + offsetX * scale}px`;
  magEl.style.top  = `${centerY - magEl.offsetHeight / 2 + offsetY * scale}px`;
}

  onAnimationStart(event: AnimationEvent): void {
    this.startLoop();
  }

  onAnimationEnd(event: AnimationEvent): void {
    this.stopLoop();
  }
}
