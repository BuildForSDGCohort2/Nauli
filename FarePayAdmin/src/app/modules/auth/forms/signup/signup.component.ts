import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '@shared/_helpers/must-match.validators';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { AuthService } from 'app/data/service/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { Utils } from '@shared/_helpers/utils';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  saccoForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  loading = false;  // loader while awaiting response
  canAddSacco = false;

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
    private _notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.buildSignupForm();
    this.buildSaccoForm();
  }

  buildSignupForm = () => {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      password: ['', Validators.required],
    });
  }

  buildSaccoForm = () => {
    this.saccoForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  get uForm() {
    return this.signupForm.controls;
  }

  get sForm() {
    return this.saccoForm.controls;
  }

  submitUser = () => {
    if (this.signupForm.invalid) {
      return;
    }

    this.canAddSacco = true;
  }

  back = (): void => {
    this.canAddSacco = false;
  }

  register = () => {
    if (this.saccoForm.invalid) {
      return;
    }
    this.loading = true;
    const form = this.signupForm.value;
    form.name = `${form.firstname} ${form.lastname}`;
    form.role = 'Sacco Admin';
    console.log("Form - ", form);
    console.log("Form - ", this.saccoForm.value);
    const data = {
      user: form,
      sacco: this.saccoForm.value
    }
    this._auth.signUp(data)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("Signup data-", data);
          this.loading = false;
          this.showNotification( 'success', `Registration successful`);
          this._router.navigate(['/auth/login']);
        },
        (error) => {
          this.loading = false;
          console.log("Login Error-", error);
          const errors = Utils.getHttpErrors('Add user error', error);
          this.showNotification( 'error', `Registration failed , ${errors}`);
        }
      );
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}
}
