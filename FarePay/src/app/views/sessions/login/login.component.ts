import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotifierService } from 'angular-notifier';

import { AuthService} from 'src/app/shared/services/auth.service';

import { Utils } from 'src/app/shared/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  buttonDisabled = false;
  loading = false;  // loader while awaiting response
  error: string;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private _notifier: NotifierService
  ) { }

  ngOnInit(): void {
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

  onSubmit(): void {
    this.submitted = true;
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.loading = true;
    this.buttonDisabled = true;
    this.auth.login(this.loginForm.value).subscribe((resp) => {
      this.loading = false;
      this.buttonDisabled = false;
      this.showNotification( 'success', `Welcome to Farepay`);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.loading = false;
      this.buttonDisabled = false;
      const errors = Utils.getHttpErrors('Login error', error);
      this.showNotification( 'error', `Login failed , ${errors}`);
      console.log(errors);
    });

  }


  public showNotification( type: string, message: string ): void {
    this._notifier.notify( type, message );
  }

}
