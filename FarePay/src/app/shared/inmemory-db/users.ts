export enum Role {
  SaccoAdmin = 'Sacco Admin',
  Owner = 'Owner',
  Driver = 'Driver',
  Tout = 'Tout',
  Passenger = 'Passenger',
  MOH = 'MOH',
  NTSA = 'NTSA',
  KRA = 'KRA',
  Interior = 'INTERIOR',
}

export interface IUser {
  id: string;
  role: string;
  phone: string;
  email?: string;
  password: string;
  name: string;
  saccoId?: string;
  sacco?: string;
}

export class UsersDB {
    public static users: IUser[] = [
      {
        id: '5a9a06518248b68251fdf',
        role: 'passenger',
        phone: '0711223344',
        password: 'string',
        name: 'Adrian Passenger',
      },
      {
        id: '5a9ae2106248b68251fdf',
        role: 'passenger',
        phone: '0712224334',
        password: 'string',
        name: 'Bomas Passenger',
      },
      {
        id: '5a9ae2106518248b51fdf',
        role: 'passenger',
        phone: '0712478523',
        password: 'string',
        name: 'Calvince Passenger',
      },
      {
        id: '59ae21051828b61fdf',
        role: 'driver',
        phone: '0712457852',
        password: 'string',
        name: 'Derrick Passenger',
        sacco: 'SaccoOne',
      },
      {
        id: '5a9ae2106518248b681fdf',
        role: 'driver',
        phone: '0712457842',
        password: 'string',
        name: 'Derrick Dereva',
        sacco: 'SaccoTwo',
      },
      {
        id: 'a9e20658248b8251df',
        role: 'conductor',
        phone: '0722334455',
        password: 'string',
        name: 'Evelyn Conda',
        sacco: 'SaccoOne',
      },
      {
        id: 'a9ae206518248b68251df',
        role: 'conductor',
        phone: '0779457852',
        password: 'string',
        name: 'Evelyn Sacco',
        sacco: 'SaccoTwo',
      },
      {
        id: '5a9e210651248b6251fdf',
        role: 'saccoAdmin',
        phone: '0712459632',
        password: 'string',
        name: 'Faith Saco',
        sacco: 'SaccoOne',
      },
      {
        id: '5a9ae2106518248b68251fdf',
        role: 'saccoAdmin',
        phone: '0745785412',
        password: 'string',
        name: 'Jackline Sako',
        sacco: 'SaccoTwo',
      },
      {
        id: '5a9a210518248b251fdf',
        role: 'MOH',
        phone: '0765789654',
        password: 'string',
        name: 'Kagwe Matiba',
      },
    ];
}