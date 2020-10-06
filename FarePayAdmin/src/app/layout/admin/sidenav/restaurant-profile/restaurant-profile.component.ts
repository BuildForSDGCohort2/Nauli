import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.scss']
})
export class RestaurantProfileComponent implements OnInit {


  roles = Role;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
