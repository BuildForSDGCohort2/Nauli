import { Component, OnInit, Input,   ChangeDetectorRef,   ChangeDetectionStrategy } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../../shared/services/vehicle.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  animations: [SharedAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsComponent implements OnInit {
  viewMode = 'list';
  @Input() trips: [];
  loaded = false;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private vehicle: VehicleService
  ) { }

  ngOnInit() {

    setTimeout(()=> {
      console.log(this.trips);
      this.cd.detectChanges();
      this.loaded = true;

    }, 1500);
  }

  // editTrip() {
  //   const ID = this.trips.id;
  //   this.router.navigateByUrl('/edit-trip/' + ID);
  // }

  // viewSeats() {
  //   const ID = this.trips.id;
  //   this.router.navigateByUrl('/seats/' + ID);
  // }

}
