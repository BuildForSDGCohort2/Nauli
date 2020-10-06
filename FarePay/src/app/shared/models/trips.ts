export interface VehicleTrip {
    id: number;
    starting_from: string;
    ending_at: string;
    max_rate: string;
    min_rate: string;
    starting_time: string;
    ending_time: string;
    driver: number;
    tout: number;
    sacco: number;
    vehicle: number;
}

export interface PassengerTrip {
    id: number;
    rate: string;
    pickup_at: string;
    drop_at: string;
    vehicleTrip: number;
    passenger: number;
    sacco: number;
    seatNo: number;
    confirmed: boolean;
}