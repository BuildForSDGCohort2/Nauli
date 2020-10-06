import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenate'
})
export class HyphenatePipe implements PipeTransform {
  transform(value:string): any {
    const word = (value.charAt(value.length - 1) !== 's') ? `${value}'s` : `${value}'`;
    return word;
  }
}
