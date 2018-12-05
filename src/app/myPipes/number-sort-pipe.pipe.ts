import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSortPipe'
})
export class NumberSortPipePipe implements PipeTransform {
sortNumbers = function(first,second)
{
  console.log(first-second)
  return first-second
}
  transform(value: any, args?: any): any {
    {
      if(args =='asc'){
    return value.sort();
  }
  else if(args =='dsc')
  {
      return value.sort().reverse();
  }
 return value.sort();
    }
  }

}
