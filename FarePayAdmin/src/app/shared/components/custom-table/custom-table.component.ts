import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Output('onAction') emitter = new EventEmitter();
  @Input('data') dataSource = [];
  @Input('cols') tableCols = [];
  // We will need this getter to exctract keys from tableCols
  get keys() {
    return this.tableCols.map(({ key }) => key);
  }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt, column) {
    return column.config.values[`${elt[column.key]}`];
  }
}
