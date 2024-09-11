import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RandomFilledBoxCountPipe } from '../../pipes/random-filled-box-count.pipe';

interface data {
  leftHeading: string;
  heading: string;
  type?: string;
  price: string;
  count?: number;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TranslateModule, RandomFilledBoxCountPipe],
  providers: [RandomFilledBoxCountPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  randomFilledBoxCountPipe: RandomFilledBoxCountPipe = inject(
    RandomFilledBoxCountPipe
  );
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  array: number[] = Array.from({ length: 9 }, (_, i) => i);
  silverArray: number[] = Array.from({ length: 4 }, (_, i) => i);
  @Input() type: string = 'silver';
  @Input() data: data = {
    leftHeading: 'card-time-play',
    heading: 'card-prizes',
    price: '15 000',
  };
  public getRandomFilledBoxCount(array: number[]): number {
    return this.randomFilledBoxCountPipe.transform(array);
  }
  constructor() {}
  // public randomFilledBoxCount(array: number[]): number {
  //   return Math.round(Math.random() * array.length);
  // }
}
