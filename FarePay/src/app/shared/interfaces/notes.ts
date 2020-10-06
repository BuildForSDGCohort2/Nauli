

export class Notes{
    constructor(
        public type:string,
        public notes : string,
        public medication: string,
        public cost : number,
        public follow_up: number | {},
        // public time?: any,
    ){}

}