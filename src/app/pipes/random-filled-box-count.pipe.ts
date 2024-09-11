import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomFilledBoxCount',
  standalone: true,
})
export class RandomFilledBoxCountPipe implements PipeTransform {
  private cache = new Map<any, number>();

  transform(array: any[]): number {
    const arrayKey = JSON.stringify(array);
    if (!this.cache.has(arrayKey)) {
      this.cache.set(arrayKey, Math.floor(Math.random() * array.length));
    }
    return this.cache.get(arrayKey) || 0;
  }
}
