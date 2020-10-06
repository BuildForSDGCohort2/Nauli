import { SharedModule } from './../../shared/shared.module';
import { ErroreRoutingModule } from './error.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOhFourComponent } from './page/four-oh-four/four-oh-four.component';
import { MaintenanceComponent } from './page/maintenance/maintenance.component';
import { FiveHundredComponent } from './page/five-hundred/five-hundred.component';


@NgModule({
  declarations: [FourOhFourComponent, MaintenanceComponent, FiveHundredComponent],
  imports: [
    CommonModule,
    SharedModule,
    ErroreRoutingModule
  ]
})
export class ErrorModule { }
