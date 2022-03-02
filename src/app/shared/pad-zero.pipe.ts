import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padZero'
})
export class PadZeroPipe implements PipeTransform {

  transform(value: string): string {
    return value.padStart(2, "0");
  }

}
