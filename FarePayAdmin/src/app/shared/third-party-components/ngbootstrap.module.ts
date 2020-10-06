import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbButtonsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbTabsetModule
  ],
  exports: [
    NgbButtonsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbTabsetModule
  ],
})
export class NgbootstrapModule { }
