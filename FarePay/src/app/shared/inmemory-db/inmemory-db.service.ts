import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TripsDB } from './trips';
import { SeatDB } from './seats';
import { UsersDB } from './users';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      trips: TripsDB.trips,
      seats: SeatDB.seats,
      users: UsersDB.users,

    };
  }
}
