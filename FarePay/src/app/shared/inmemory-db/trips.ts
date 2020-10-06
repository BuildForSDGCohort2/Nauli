
export interface ITrip {
  id?: string;
  from: string;
  to: string;
  price: string;
  time: string;
  date: Date;
  userID?: string;
  numPlate: string;
  endTime?: Date;
}

export class TripsDB {
    public static trips: ITrip[] = [
      {
        id: '5a9ae210651b68251fdf',
        from: 'Kisumu',
        to: 'Eldoret',
        price: 'KSh 6,500',
        time: '10:00',
        date: new Date(2020, 6, 10, 10, 30, 30, 0),
        userID: '',
        numPlate: 'KAR 432R',
        endTime: new Date(2020, 6, 10, 14, 33, 30, 0),
      },
      {
        id: '5a9ae2518248b68251fdf',
        from: 'Eldoret',
        to: 'Nakuru',
        price: 'KSh 6,500',
        time: '11:00',
        date: new Date(2020, 6, 11, 9, 33, 30, 0),
        userID: '',
        numPlate: 'KAR 432R',
        endTime: new Date(2020, 6, 10, 15, 33, 30, 0),
      },

      {
        id: '5a9ae21651828b6825fdf',
        from: 'Nakuru',
        to: 'Naivasha',
        price: 'KSh 6,500',
        time: '12:00',
        userID: '',
        date: new Date(2020, 6, 13, 10, 6, 30, 0),
        numPlate: 'KAR 432R',
        endTime: new Date(2020, 6, 10, 16, 33, 30, 0),
      },

      {
        id: '5a9a210651248b6825fd',
        from: 'Naivasha',
        to: 'Nairobi',
        price: 'KSh 6,500',
        time: '15:00',
        userID: '',
        date: new Date(2020, 6, 15, 10, 33, 30, 0),
        numPlate: 'KAR 432R',
        endTime: new Date(2020, 6, 10, 17, 33, 30, 0),
      },

      {
        id: '5a9a210651828b6821fd',
        from: 'Nairobi',
        to: 'Mombasa',
        price: 'KSh 6,500',
        time: '08:00',
        userID: '',
        date: new Date(2020, 6, 17, 10, 33, 30, 0),
        numPlate: 'KAR 432R',
        endTime: new Date(2020, 6, 10, 12, 33, 30, 0),
      },

    ];
  }
