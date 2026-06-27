import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform {
  transform(value: string, type: 'upper' | 'lower' | 'title' = 'title'): string {
    if (!value) return '';
    if (type === 'upper') return value.toUpperCase();
    if (type === 'lower') return value.toLowerCase();
    return value.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  }
}
