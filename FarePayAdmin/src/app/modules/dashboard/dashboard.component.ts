import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';
import { ProductService } from 'app/data/service/product.service';
import { AuthService } from 'app/data/service/auth.service';
import { IUser } from 'app/data/inmemory_db/users';
import { Role } from 'app/data/schema/Role';
import { TripsService } from 'app/data/service/trips.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: IUser;
  chartPie1: any;
  chartLineOption3: any;
	products$: any;
  options: any;

  trips: any[];

  role = Role;

  psvs = [
    {sacco: 'SaccoOne', driver: 'James Kiarie', regNo: 'KAA 245E', trips: 164 },
    {sacco: 'SaccoOne', driver: 'Cleophas Okumu', regNo: 'KSA 147R', trips: 145 },
    {sacco: 'SaccoOne', driver: 'Nicholas Kamuti', regNo: 'KBA 284C', trips: 131 },
    {sacco: 'SaccoOne', driver: 'Eliud Bwana', regNo: 'KBB 974C', trips: 108 },
    {sacco: 'SaccoOne', driver: 'Paul Kabete', regNo: 'KCA 292D', trips: 108 },
    {sacco: 'SaccoTwo', driver: 'William Kuria', regNo: 'KDD 145A', trips: 105 },
    {sacco: 'SaccoTwo', driver: 'Elvis Olwande', regNo: 'KCE 365X', trips: 94 },
    {sacco: 'SaccoTwo', driver: 'Eugene Supeyo', regNo: 'KAZ 657P', trips: 82 },
    {sacco: 'SaccoTwo', driver: 'Duncan Mali', regNo: 'KBF 570T', trips: 80 },
    {sacco: 'SaccoTwo', driver: 'Melvin Nderitu', regNo: 'KBR 245T', trips: 60 },
  ]
  leads: any[];

  constructor(
    private productService: ProductService,
    private auth: AuthService,
    private _tripsService: TripsService,
    
	) { }

  ngOnInit() {
    this.getTrips();
    this.user = this.auth.user;
    this.products$ = this.productService.getTrips();
    this.leads = this.psvs.filter(psv => psv.sacco === this.auth.user.sacco);
    const dataAxis = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const data = [
      220,
      182,
      191,
      234,
      290,
      330,
      310,
      220,
      0,
      0,
      0,
      0,
      0,
    ];
    const yMax = 500;
    const dataShadow = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    this.options = {
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: false,
          textStyle: {
            color: '#222',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        z: 10,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#999',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.05)' },
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false,
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: '#051F51' },
                { offset: 0.5, color: '#051F51' },
                { offset: 0, color: '#051F51' },
              ]),
            },
            emphasis: {
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' },
              ]),
            },
          },
          data,
        },
      ],
    };
  }

  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }

  getTrips = () => {

    this._tripsService.getTrips().subscribe(
      (res: any[])=> {
        console.log('TRIPS LIST: ', res);
        this.trips = res;
      },
      (err) => console.log('Trips list error: ', err));
  }

}
