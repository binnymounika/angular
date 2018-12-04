import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSortPipe'
})
export class StringSortPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}
