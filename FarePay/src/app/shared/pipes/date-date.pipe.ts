import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDate'
})
export class DateDatePipe implements PipeTransform {

  transform(unix_timestamp:number) {
    let date = new Date(unix_timestamp*1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    // Will display time in 10:30:23 format
    let formattedTime = months[month] + ' ' + day + ', ' + year;
        return formattedTime;
      }
}
