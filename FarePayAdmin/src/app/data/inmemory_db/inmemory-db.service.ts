import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TripsDB } from './products';
import { UsersDB } from './users';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'trips': TripsDB.trips,
      'users': UsersDB.users,
    };
  }
}
