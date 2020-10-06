import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'app/data/service/users.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { Role } from 'app/data/schema/Role';
import { AuthService } from 'app/data/service/auth.service';
import { NotifierService } from 'angular-notifier';
import { Utils } from '@shared/_helpers/utils';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  loading = false;  // loader while awaiting response
  matcher = new MyErrorStateMatcher();
  role: string;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _notifier: NotifierService,
    private _usersService: AuthService) { }

  ngOnInit(): void {
    this.setRole();
    this.buildForm();


  }

  setRole = () => {
    const userType = this._router.url.split('/')[1];
    console.log(userType);
    if (userType === 'touts') {
      this.role = Role.Tout
    } else if (userType === 'drivers') {
      this.role = Role.Driver
    } else if (userType === 'owners') {
      this.role = Role.Owner
    }
  }

  buildForm = () => {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      password: ['147poiuy'],
      role: [this.role],
      sacco: [this._usersService.user.saccoId]
    });
  }

  get uForm() {
    return this.userForm.controls;
  }

  register = () => {
    if (this.userForm.invalid) {
      return;
    }
    this.loading = true;
    const form = this.userForm.value;
    form.name = `${form.firstname} ${form.lastname}`;
  
    this._usersService.createUser(form)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("User created as -", data);
          this.loading = false;
          this.showNotification( 'success', `${form.name} added successfully`  );
          // this._router.navigate(['/dashboard']);
        },
        (error) => {
          this.loading = false;
          const errors = Utils.getHttpErrors('Add user error', error);
          this.showNotification( 'error', `Failed to add ${form.name}, ${errors}`  );
        }
      );
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

}
