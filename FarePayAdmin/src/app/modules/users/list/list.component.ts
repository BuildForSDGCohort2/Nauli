import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'app/data/inmemory_db/users';
import { AuthService } from 'app/data/service/auth.service';
import { Role } from 'app/data/schema/Role';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users$;
  alluser$;
  href: string;
  users: IUser[];
  link: string;
  role = Role;
  user: any;

  public tabIndex = 1;
  title: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.title = this.router.url.split('/').pop();
    this.determineTable();
    this.link = `/${this.title}/add`;
  }


  determineTable = () => {
    const tables = ['owners', 'drivers', 'touts'];
    const href = this.router.url.split('/').pop();
    this.tabIndex = tables.indexOf(href);
    console.log(href, this.tabIndex);
    const userRole = this.auth.user.role;
    this.getUsers(userRole, href);
  }

  getUsers(userRole, roleToGet) {
    console.log(roleToGet)

    if (userRole === Role.MOH || userRole === Role.NTSA) {
      this.auth.getUsersAll().subscribe((res: any[]) =>
        this.users = res.filter((res: any) => {
          return `${res.role.toLowerCase()}s` === roleToGet.toLowerCase()
        })
      )
    } else {
      this.auth.getUsers().subscribe((res: any) => {
        console.log(roleToGet);

        this.users = res.filter((res: any) => {
          return `${res.role.toLowerCase()}s` === roleToGet.toLowerCase()
        });

      });
    }
  }

  public switchPage(index): void {
    console.log('Index ', index);
    if (index === 0) {
      this.router.navigate(['/owners']);
    } else if (index === 1) {
      this.router.navigate(['/drivers']);
    } else if (index === 2) {
      this.router.navigate(['/touts']);
    }
  }
}