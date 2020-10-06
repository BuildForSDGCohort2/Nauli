
export class Trips {
    constructor(
        public from: string,
        public to: string,
        public price: string,
        public time: string | {},
        public userID: number,
        public numPlate: string,
        public date: string,
        public endTime?: string
    ) {}
}

export class EditTrips {
    constructor(
        public id: string,
        public from: string,
        public to: string,
        public price: string,
        public time: string | {},
        public userID: number,
        public numPlate: string,
        public date: string,
        public endTime: string
    ) {}
}