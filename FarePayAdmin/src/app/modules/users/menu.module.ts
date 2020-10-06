import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';
import { TableComponent } from './list/presentation/table/table.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [ListComponent, TableComponent, AddUserComponent],
  imports: [CommonModule, MenuRoutingModule, SharedModule]
})
export class MenuModule {}
