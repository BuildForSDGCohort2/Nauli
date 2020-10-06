import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { CustomTableComponent } from './custom-table/custom-table.component';
// import {MatTableModule} from '@angular/material/table';
import { CardComponent } from './card/card.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { AngularMaterialModule } from '@shared/third-party-components/angular-material.module';
import { NgbootstrapModule } from '@shared/third-party-components/ngbootstrap.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { BusLayoutComponent } from './bus-layout/bus-layout.component';
// import { MatIcon } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';

const components = [
    CustomTableComponent,
    CardComponent,
    TableSearchComponent,
    TableFilterComponent,
    BreadcrumbsComponent,
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AngularMaterialModule,
        NgbootstrapModule,
        AgmCoreModule.forRoot({
            apiKey: ''
          }),
    ],
    declarations: [CustomTableComponent, CardComponent, TableSearchComponent, TableFilterComponent, BreadcrumbsComponent, BusLayoutComponent],
    exports: [        
        AgmCoreModule,
         ...components
    ]
})
export class ComponentsModule {

}
