import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  private router: Router = inject(Router);
  slides: string[] = ['carousel1.png', 'carousel2.png', 'car.png', 'bmw.png'];
  i = 0;

  getSlide(num?: number) {
    if (num) {
      return this.slides[this.i + 1];
    }
    return this.slides[this.i];
  }

  public getPrev() {
    this.i = this.i === 0 ? 0 : this.i - 1;
  }
  //edit here
  public getNext() {
    this.i = this.i === this.slides.length ? this.i : this.i + 1;
  }
  public goToNotFound404() {
    this.router.navigate(['not-found']);
  }
}
