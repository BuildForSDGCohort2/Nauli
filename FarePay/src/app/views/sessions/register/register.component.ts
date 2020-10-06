import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { AuthService} from '../../../shared/services/auth.service';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
      name: ['', Validators.required],
      role: ['Passenger'],
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
    this.auth.register(this.loginForm.value).subscribe((resp) => {
      this.loading = false;
      this.buttonDisabled = false;
      this.showNotification( 'success', `Registration successful`);
      console.log(resp);
    }, error => {
      console.log(error);
      this.loading = false;
      this.buttonDisabled = false;
      const errors = Utils.getHttpErrors('Registration error', error);
      this.showNotification( 'error', `Login failed , ${errors}`);
    });


  }

  public showNotification( type: string, message: string ): void {
    this._notifier.notify( type, message );
  }

}
