import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string;
  abbreviation = '';

  constructor(
    private auth: AuthService,
    private router: Router
    ) {

   }

  ngOnInit() {
    if (this.auth.user) {
      this.username = this.auth.user.name;
      const nameArr = this.username.split(' ');
      nameArr.forEach(name => {
        this.abbreviation += name.charAt(0);
      });
    }

  }

  goToDashBoard = () => {
    console.log('role: ', this.auth.user.role);
    this.router.navigate(['/dashboard']);
  }

  logOut = () => this.auth.logout();

}
