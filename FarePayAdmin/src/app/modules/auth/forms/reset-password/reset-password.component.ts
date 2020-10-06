import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildResetForm();
  }

  buildResetForm = (): void => {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.resetForm.controls;
  }

  requestReset = (): void => {
    if (this.resetForm.invalid) {
      return;
    }
    console.log(this.resetForm.value);
  }

}
