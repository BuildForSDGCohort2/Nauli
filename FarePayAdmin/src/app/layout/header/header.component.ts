import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../admin/sidenav/navigation.service';
import { AuthService } from '../../data/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isManager: boolean;
  isLoggedIn: boolean;
  username: string;
  abbreviation: string = '';

  constructor(
    private navService: NavigationService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.auth.user);
    if (!!this.auth.user) {
      this.username = this.auth.user.name;
      const nameArr = this.username.split(' ');
      nameArr.forEach(name => {
        this.abbreviation += name.charAt(0);
      });
    }
  }

  toggelSidebar() {
    const state = this.navService.sidebarState;
    if (state.childnavOpen && state.sidenavOpen) {
      return state.childnavOpen = false;
    }
    if (!state.childnavOpen && state.sidenavOpen) {
      return state.sidenavOpen = false;
    }
    // item has child items
    if (!state.sidenavOpen && !state.childnavOpen
      && !!this.navService.selectedItem && this.navService.selectedItem.type === 'dropDown') {
      state.sidenavOpen = true;
      setTimeout(() => {
        state.childnavOpen = true;
      }, 50);
    }
    // item has no child items
    if (!state.sidenavOpen && !state.childnavOpen) {
      state.sidenavOpen = true;
    }
  }

  logOut() {
    this.auth.logOut();
  }


  

}
