export interface ITrip {
  _id: string;
  sacco: string;
  regNo: string;
  driver: string;
  driverPhoneNumber?: string;
  conductor?: string;
  from: string;
  to: string;
  date: Date;
  startTime: Date;
  endTime?: Date;
  passengers?: string[]
}

export interface IPassenger {
  _id: string;
  phoneNumber: string;
  names: string;
  sacco?: string;
  lastTravelDate: Date;
  trips: string[];
}


export class TripsDB {
  public static trips: ITrip[] = [
    {
      _id: '5a9ae21068248b8251fdf',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoTwo',
      startTime: new Date(2020, 6, 10, 16, 25, 30, 0),
      endTime: new Date(2020, 6, 10, 18, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: [
        'Adrian Paul',
        'Bomas Makori',
      ]
    },
    {
      _id: '5a9a2106518248b651fdf',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoTwo',
      startTime: new Date(2020, 6, 8, 9, 30, 30, 0),
      endTime: new Date(2020, 6, 10, 11, 30, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: [
        'Adrian Paul',
      ]
    },
    {
      _id: '5ae2165182486825fdf',
      regNo: 'KAA 147B',
      driver: 'David Ndugu',
      conductor: 'James Kimata',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoTwo',
      startTime: new Date(2020, 6, 7, 16, 25, 30, 0),
      endTime: new Date(2020, 6, 7, 18, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: [
        'Bomas Makori'
      ]
    },
    {
      _id: '5a9ae2106518248b68251fdf',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoTwo',
      startTime: new Date(2020, 6, 7, 7, 25, 30, 0),
      endTime: new Date(2020, 6, 10, 14, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: [
        'Calvince Thuita',
        'Jack Ndungu',
        'Esther Nyambura'
      ]
    },
    {
      _id: '5a9e210651824b6851ff',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoOne',
      startTime: new Date(2020, 2, 8, 16, 12, 30, 0),
      endTime: new Date(2020, 6, 10, 16, 15, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: []
    },
    {
      _id: '5a9ae265182b6825df',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoOne',
      startTime: new Date(2020, 6, 14, 8, 25, 30, 0),
      endTime: new Date(2020, 6, 10, 16, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: []
    },
    {
      _id: '5ae210651828b681fdf',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoOne',
      startTime: new Date(2020, 6, 18, 16, 25, 30, 0),
      endTime: new Date(2020, 6, 10, 16, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: []
    },
    {
      _id: '5a9210651828b682fdf',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoOne',
      startTime: new Date(2020, 4, 11, 16, 25, 30, 0),
      endTime: new Date(2020, 6, 10, 16, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: []
    },
    {
      _id: '59ae106518248b8251ff',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoOne',
      startTime: new Date(2020, 6, 18, 16, 25, 30, 0),
      endTime: new Date(2020, 6, 10, 16, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: []
    },
    {
      _id: '59ae210618248b6851ff',
      regNo: 'KAA 147B',
      driver: 'Amos Nguni',
      conductor: 'James Muchie',
      from: 'Kirinyaga',
      to: 'Nyeri',
      sacco: 'SaccoOne',
      startTime: new Date(2020, 5, 27, 16, 25, 30, 0),
      endTime: new Date(2020, 6, 10, 16, 25, 30, 0),
      date: new Date(2020, 6, 10, 16, 25, 30, 0),
      passengers: []
    },


  ];
}

export class PassengersDB {

  public static passengers: IPassenger[] = [
    {
      _id: '5a9a06518248b68251fdf',
      phoneNumber: '0711223344',
      names: 'Adrian Paul',
      sacco: 'SaccoOne',
      lastTravelDate: new Date(2020, 6, 10, 16, 25, 30, 0),
      trips: [
        '5a9ae21068248b8251fdf',
        '5a9a2106518248b651fdf',
      ]
    },
    {
      _id: '5a9ae2106248b68251fdf',
      phoneNumber: '0712224334',
      names: 'Bomas Makori',
      sacco: 'SaccoTwo',
      lastTravelDate: new Date(2020, 6, 10, 16, 25, 30, 0),
      trips: [
        '5ae2165182486825fdf',
        '5a9ae21068248b8251fdf'
      ]
    },
    {
      _id: '5a9ae2106518248b51fdf',
      phoneNumber: '0712478523',
      names: 'Calvince Thuita',
      sacco: 'SaccoOne',
      lastTravelDate: new Date(2020, 6, 10, 16, 24, 30, 0),
      trips: [
        '5a9ae2106518248b68251fdf',
      ]
    },
    {
      _id: 'a9e20658248b8251df',
      phoneNumber: '0722334455',
      names: 'Jack Ndungu',
      sacco: 'SaccoOne',
      lastTravelDate: new Date(2020, 6, 10, 16, 24, 30, 0),
      trips: [
        '5a9ae2106518248b68251fdf',

      ]
    },
    {
      _id: 'a9ae206518248b68251df',
      phoneNumber: '0779457852',
      names: 'Esther Nyambura',
      sacco: 'SaccoTwo',
      lastTravelDate: new Date(2020, 6, 10, 16, 24, 30, 0),
      trips: [
        '5a9ae2106518248b68251fdf',
      ]
    }
  ];
}