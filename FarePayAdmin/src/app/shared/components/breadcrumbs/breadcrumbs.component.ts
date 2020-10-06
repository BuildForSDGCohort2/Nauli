import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() section: string;
  breadcrumbsDetails: any[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    const breadcrumbs = this.router.url.split('/').slice(1, );
    breadcrumbs.forEach((crumb, index) => {
      if (isNaN(parseInt(crumb, 10))) {
        const crumbDetail = {
          name: crumb,
          url: this.urlMaker(breadcrumbs, index)
        };
        this.breadcrumbsDetails.push(crumbDetail);
      }
    });
  }

  private urlMaker = (breadcrumbs, index) => {
    const breadCrumbs = breadcrumbs.slice(0, (index + 1));
    let url = '';
    if (index !== breadcrumbs.length - 1 ) {
      breadCrumbs.forEach((crumb) => {
        url += `/${crumb}`;
      });
    }
    else {
      url = this.router.url;
    }
    return url;
  }


}
