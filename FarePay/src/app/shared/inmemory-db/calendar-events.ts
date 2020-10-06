import {
    startOfDay,
} from 'date-fns';

export class CalendarEventDB {

    
    public events: any[] = [{
        _id: '100',
        start: startOfDay(new Date()),
        title: 'A 3 day event',
    }, {
        _id: '101',
        start: startOfDay(new Date()),
        title: 'An event with no end date',
    },
];
}
