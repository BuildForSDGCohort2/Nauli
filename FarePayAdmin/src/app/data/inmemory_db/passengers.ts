
export interface IPassenger {
    _id: string;
    phoneNumber: string;
    names: string;
    sacco?: string;
    lastTravelDate: Date;
    trips: string[];
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