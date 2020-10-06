import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/data/service/auth.service';
import { NotifierService } from 'angular-notifier';
import { first } from 'rxjs/operators';
import { TripsService } from 'app/data/service/trips.service';

@Component({
  selector: 'app-routes-add',
  templateUrl: './routes-add.component.html',
  styles: [
  ]
})
export class RoutesAddComponent implements OnInit {

  form: FormGroup;
  loading: boolean;
  matcher = new MyErrorStateMatcher();
  routeId: string;
  route: any;

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _notifier: NotifierService,
    private _tripsService: TripsService,
    private _usersService: AuthService,
  ) { }

  ngOnInit(): void {

    this.routeId = this._route.snapshot.params['id'];
    this.buildForm();
    if (this.routeId) {
      this.getRoute(this.routeId);
    }

  }


  buildForm = (i: any = {}) => {
    this.form = this._fb.group({
      sacco: [this._usersService.user.saccoId],
      starting_from: [i.starting_from ? i.starting_from : '', Validators.required],
      ending_at: [i.ending_at ? i.ending_at : ''],
      minRate: [i.minRate ? i.minRate : '', Validators.required],
      maxRate: [i.maxRate ? i.maxRate : ''],
    })
  }

  get uForm() {
    return this.form.controls;
  }


  getRoute = (id):void => {
    this._tripsService.getRouteDetail(id).subscribe(
      (res: any) => {
        console.log("Edit Route: ", res)
        this.route = res;
        this.buildForm(this.route);
      }, (err) => console.log('Route edit error: ', err)
    );
  }

  register = () => {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const form = this.form.value;
  
    if (this.routeId) {
      this.editRoute(form, this.routeId);
    } else {
      this.postRoute(form);
    }
  }


  postRoute = (form): void => {
    this._tripsService.postRoutes(form)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log("Route created as -", data);
        this.loading = false;
        this.showNotification( 'success', 'Route added successfully' );
        // this._router.navigate(['/dashboard']);
      },
      (error) => {
        this.loading = false;
        this.showNotification( 'error', `Post failed with error ${error}` );
        console.log("Route Post Error-", error);
      }
    );
  }

  editRoute = (form, typeId): void => {
    this._tripsService.editRoutes(form, typeId)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log("Route updated as -", data);
        this.loading = false;
        this.showNotification( 'success', 'Update successfull' );

        // this._router.navigate(['/dashboard']);
      },
      (error) => {
        this.loading = false;
        this.showNotification( 'error', error );
        console.log("Route Edit Error-", error);
      }
    );
  }

  public showNotification( type: string, message: string ): void {
		this._notifier.notify( type, message );
	}

}
