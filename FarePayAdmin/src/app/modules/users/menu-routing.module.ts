import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {
    path: 'MOH',
    component: ListComponent
  },
  {
    path: 'sacco',
    component: ListComponent
  },
  {
    path: 'drivers',
    component: ListComponent
  },
  {
    path: 'drivers/add',
    component: AddUserComponent
  },
  {
    path: 'owners/add',
    component: AddUserComponent
  },
  {
    path: 'touts/add',
    component: AddUserComponent
  },
  {
    path: 'touts',
    component: ListComponent
  },
  {
    path: 'owners',
    component: ListComponent
  },
  {
    path: 'saccos',
    component: ListComponent
  },
  {
    path: 'passengers',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
