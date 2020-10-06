import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePipe } from './pipes/date-time.pipe';
import { DateDatePipe } from './pipes/date-date.pipe';
import { HyphenatePipe } from './pipes/hyphenate.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  declarations: [DateTimePipe, DateDatePipe, HyphenatePipe],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NotifierModule.withConfig(customNotifierOptions),
  ],
  exports: [
    DateTimePipe,
    DateDatePipe,
    HyphenatePipe,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NotifierModule
  ]
})
export class SharedModule { }
