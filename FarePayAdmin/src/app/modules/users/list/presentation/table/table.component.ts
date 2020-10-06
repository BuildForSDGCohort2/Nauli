import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'app/data/schema/Role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() users;
  isStaff: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const href = this.router.url.split('/').pop();
    this.isStaff = href === 'drivers' || href === 'touts';
    console.log('Is staff: ', this.isStaff);
  }

}
