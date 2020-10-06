
export interface IPayment {
    _id: string;
    sacco: string;
    name: string;
    phoneNumber: string;
    amount: string;
    to: string;
    from: string;
    timeOfPayment?: Date;
  }
  
  
  export class PaymentsDB {
    public static payments: IPayment[] = [
      {
        _id: '5a9a0518248b68251fdf',
        name: '',
        phoneNumber: '0712323344',
        amount: '1',
        to: 'Kiambu',
        from: 'Naiorbi',
        timeOfPayment: new Date(2020, 6, 1, 10, 30, 30, 0),
        sacco: 'Kacose Wan',
      },
      {
        _id: '5a9a0518248b68251fdf',
        name: '',
        phoneNumber: '0712323344',
        amount: '1',
        to: 'Kiambu',
        from: 'Naiorbi',
        timeOfPayment: new Date(2020, 6, 1, 10, 30, 30, 0),
        sacco: 'Kacose Wan',
      },
      {
        _id: '5a9a06518248b851fdf',
        name: 'Agnes Muli',
        phoneNumber: '0778223344',
        amount: '1400',
        to: 'Eldoret',
        from: 'Nakuru',
        timeOfPayment: new Date(2020, 6, 14, 10, 30, 30, 0),
        sacco: 'SaccoOne',
      },
      {
        _id: '5a0651828b6821fdf',
        name: 'Bomas Makori',
        phoneNumber: '0732223344',
        amount: '1600',
        to: 'Kirinyaga',
        from: 'Thika',
        timeOfPayment: new Date(2020, 6, 11, 10, 30, 30, 0),
        sacco: 'SaccoTwo',
      },
      
    ]
  }