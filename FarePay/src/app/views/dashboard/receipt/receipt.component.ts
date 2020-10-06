import { TripsService } from './../../../shared/services/trips.service';
import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
  animations: [SharedAnimations]
})
export class ReceiptComponent implements OnInit {
  passengerTripID: any;
  data: any;
  phone: any;
  constructor(    private _router: Router, private route: ActivatedRoute, private auth: AuthService, private trips: TripsService
    ) {
     }

  ngOnInit() {
    this.passengerTripID = this.route.snapshot.params.id;
    this.trips.getPassengerTripByID(this.passengerTripID).subscribe((res) => {
      this.data = res;
      this.phone = res.passenger_phone;
      console.log(res);
    }, err => console.log('Error: ', err));
  }

  change() {
    this._router.navigate(['/trips/' + this.phone]);
  }

}
