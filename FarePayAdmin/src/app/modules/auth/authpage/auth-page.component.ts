import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  form: string;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    const currentRoute = this._router.url;
    this.form = this.determineForm(currentRoute);
  }

  /** Returns form to be display based on active route */
  determineForm = (currentRoute: string): string => {
    const route = currentRoute.split('/').pop();
    console.log(route);
    return route;
  }

}
