import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { AuthService } from '../../../../data/service/auth.service';
import { Utils } from '@shared/_helpers/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  loading = false;  // loader while awaiting response
  error: string;
  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private _router: Router,
    private _notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm = () => {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login = () => {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    this.loading = true;

    this.auth.loginUser(this.loginForm.value).subscribe(
      (res) => {
        this.loading = false;
        console.log('Login response ', res);
        this._router.navigate(['/dashboard']);
      }, (err) => {
        this.loading = false;
        const errors = Utils.getHttpErrors('Add user error', err);
        this.showNotification( 'error', `Registration failed , ${errors}`);
      });
    }

    public showNotification( type: string, message: string ): void {
      this._notifier.notify( type, message );
    }
}
