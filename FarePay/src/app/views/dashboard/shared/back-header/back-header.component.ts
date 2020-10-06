import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-header',
  templateUrl: './back-header.component.html',
  styleUrls: ['./back-header.component.scss']
})
export class BackHeaderComponent implements OnInit {

  username: string;
  abbreviation: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.auth.user) {
      this.username = this.auth.user.name;
      const nameArr = this.username.split(' ');
      nameArr.forEach(name => {
        this.abbreviation += name.charAt(0);
      });
    }


  }

  goToDashBoard() {
    if (this.auth.user) {
      if (this.auth.user.role === 'Passenger') {
        this.router.navigate(['/passenger']);
      } else if (this.auth.user.role === 'Driver' || this.auth.user.role === 'Tout') {
        this.router.navigate(['/staff']);
      }
    }
  }

  logOut = () => this.auth.logout();
}