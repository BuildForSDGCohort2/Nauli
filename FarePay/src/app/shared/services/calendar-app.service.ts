import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CalendarEventDB } from '../../shared/inmemory-db/calendarEvents';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
import { CalendarEventDB } from 'src/app/shared/inmemory-db/calendar-events';

@Injectable({
  providedIn: 'root'
})
export class CalendarAppService {
  public events: CalendarAppEvent[];
  constructor(
    private http: HttpClient
  ) {}

  public getEvents(): Observable<CalendarAppEvent[]> {
    // return this.http.get('api/calendar/events')
    // .map((events: CalendarEvent[]) => {
    //   this.events = events;
    //   return events;
    // });

    const eventDB = new CalendarEventDB();
    return of(eventDB.events)
      .pipe(
        map(events => {
          this.events = events;
          return events;
        })
      );
  }
}
