import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ComponentsModule } from './components/components.module';
import { NgbootstrapModule } from './third-party-components/ngbootstrap.module';
import { AngularMaterialModule } from './third-party-components/angular-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgSelectModule } from '@ng-select/ng-select';
import { NotifierModule, NotifierOptions } from "angular-notifier";



/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
      horizontal: {
        position: 'left',
        distance: 12
      },
      vertical: {
        position: 'bottom',
        distance: 12,
        gap: 10
      }
    },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgbootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    PerfectScrollbarModule,
    NgxDatatableModule,
    NgxPaginationModule,
    ComponentsModule,
    NgSelectModule,
    NotifierModule.withConfig(customNotifierOptions),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    NgbootstrapModule,
    PerfectScrollbarModule,
    NgxDatatableModule,
    NgxPaginationModule,
    NgxEchartsModule,
    ComponentsModule,
    NotifierModule
  ]
})
export class SharedModule { }
