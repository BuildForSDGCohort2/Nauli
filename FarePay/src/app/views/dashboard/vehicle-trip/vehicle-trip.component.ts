import { Component, OnInit, Input } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-vehicle-trip',
  templateUrl: './vehicle-trip.component.html',
  styleUrls: ['./vehicle-trip.component.scss'],
  animations: [SharedAnimations],
})
export class VehicleTripComponent implements OnInit {

  @Input() trip;

  constructor() { }

  ngOnInit() {
  }

}
