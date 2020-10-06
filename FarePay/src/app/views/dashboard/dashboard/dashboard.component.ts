import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { IUser, Role } from 'src/app/shared/inmemory-db/users';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isPassenger: boolean;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.isPassenger = (!this.auth.user || this.auth.user.role === Role.Passenger);

  }



}
