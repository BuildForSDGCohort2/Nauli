import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(unix_timestamp:number) {
    let date = new Date(unix_timestamp*1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const am_pm = (hours <= 11) ? "AM" : "PM";

    // Will display time in 10:30:23 format
    let formattedTime = `${hours}:${minutes.substr(-2)} ${am_pm}`;
        return formattedTime;
      }
}
