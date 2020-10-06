import { Component, OnInit } from '@angular/core';
import { TripsService } from './../../../shared/services/trips.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-vehicle-trips',
  templateUrl: './vehicle-trips.component.html',
  styleUrls: ['./vehicle-trips.component.scss']
})
export class VehicleTripsComponent implements OnInit {

  trips: any;
  constructor(
    private tripsService: TripsService,
    private auth: AuthService
    // private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const userID = this.auth.user.id;
    this.tripsService.searchVehicleTripsByTout(userID).subscribe((resp) => {
      this.trips = resp;
      console.log('vtrippppp', this.trips);
    });
  }

}
