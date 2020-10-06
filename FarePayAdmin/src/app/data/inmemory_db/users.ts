
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
      password: '123456',
      name: 'Adrian Paul',
      sacco: 'SaccoOne',
    },
    {
      id: '5a9ae2106248b68251fdf',
      role: 'passenger',
      phone: '0712224334',
      password: '123456',
      name: 'Bomas Makori',
      sacco: 'SaccoTwo',
    },
    {
      id: '5a9ae2106518248b51fdf',
      role: 'passenger',
      phone: '0712478523',
      password: '123456',
      name: 'Calvince Thuita',
      sacco: 'SaccoOne',
    },
    {
      id: '59ae21051828b61fdf',
      role: 'saccoAdmin',
      phone: '0712457852',
      password: '123456',
      name: 'Felix Wangondu',
      sacco: 'SaccoOne',
    },
    {
      id: '5a9ae2106518248b681fdf',
      role: 'saccoAdmin',
      phone: '0712224283',
      password: '123456',
      name: 'Denis Mwai',
      sacco: 'SaccoTwo',
    },
    {
      id: 'a9e20658248b8251df',
      role: 'passenger',
      phone: '0722334455',
      password: '123456',
      name: 'Jack Ndungu',
      sacco: 'SaccoOne',
    },
    {
      id: 'a9ae206518248b68251df',
      role: 'passenger',
      phone: '0779457852',
      password: '123456',
      name: 'Esther Nyambura',
      sacco: 'SaccoTwo',
    },
    {
      id: '5a9e210651248b6251fdf',
      role: 'owner',
      phone: '0738224283',
      password: '123456',
      name: 'Pius Kahata',
      sacco: 'SaccoTwo',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'driver',
      phone: '0721413516',
      password: '123456',
      name: 'Davis Njaramba',
      sacco: 'SaccoTwo',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'conductor',
      phone: '0721413526',
      password: '123456',
      name: 'Bill Joel',
      sacco: 'SaccoOne',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'conductor',
      phone: '0721416516',
      password: '123456',
      name: 'Eagan Njoroge',
      sacco: 'SaccoTwo',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'driver',
      phone: '0721413516',
      password: '123456',
      name: 'Dorothy Wamae',
      sacco: 'SaccoOne',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'driver',
      phone: '0721414516',
      password: '123456',
      name: 'Jabali Kamuti',
      sacco: 'SaccoTwo',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'driver',
      phone: '0721413516',
      password: '123456',
      name: 'Fidelis Mary',
      sacco: 'SaccoOne',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'driver',
      phone: '0712413516',
      password: '123456',
      name: 'Gillian Mumbi',
      sacco: 'SaccoTwo',
    },
    {
      id: '5a9ae2106518248b68251fdf',
      role: 'driver',
      phone: '0721414616',
      password: '123456',
      name: 'Robert Katana',
      sacco: 'SaccoOne',
    },
    {
      id: '5a9a210518248b251fdf',
      role: 'MOH',
      phone: '0700000000',
      password: '123456',
      name: 'Kagwe Matiba',
    },
  ];
}
