import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'greeting' })
export class GreetingPipe implements PipeTransform {
  transform(name: string, prefix: string = 'Hello'): string {
    if (!name || !name.trim()) return '';
    return `${prefix}, ${name.trim()}!`;
  }
}
