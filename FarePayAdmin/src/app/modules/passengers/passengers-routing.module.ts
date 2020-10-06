import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';


const routes: Routes = [
  {
    path: 'passengers',
    component: PassengerListComponent
  },
  {
    path: 'passengers/detail/:id',
    component: PassengerDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengersRoutingModule { }
