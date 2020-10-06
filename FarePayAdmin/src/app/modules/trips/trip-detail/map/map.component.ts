import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/takeWhile';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'My first AGM project';
    // google maps zoom level
    zoom = 16;

    // initial center position for the map
  
    currentPos: any = {
      lat : -1.283233,
      lng : 36.824376
    };
    points: any[] = [];
    tmpPoints: any[] = [
      this.currentPos,
      {
        lat : -1.283233,
        lng : 36.824376
      },
      
      {
        lat : -1.281088,
        lng : 36.822241
      },
      
      {
        lat : -1.279854,
        lng : 36.821254
      },
  
      {
        lat : -1.277441,
        lng : 36.821544
      },
      {
        lat : -1.275564,
        lng : 36.823207
      },
  
      {
        lat : -1.269171,
        lng : 36.832284
      },
      {
        lat : -1.264730,
        lng : 36.836318
      },
  
      {
        lat : -1.261373,
        lng : 36.840749
      },
      {
        lat : -1.259818,
        lng : 36.842230
      },
  
      {
        lat : -1.255549,
        lng : 36.843625
      },
  
      {
        lat : -1.248920,
        lng : 36.847198
      },
      {
        lat : -1.247740, 
        lng : 36.846930
      },
      {
        lat : -1.246775, 
        lng : 36.845932
      },
      {
        lat : -1.243707, 
        lng : 36.844687
      },
      {
        lat : -1.231897, 
        lng : 36.843042
      },
      {
        lat : -1.229537, 
        lng : 36.840896
      },
      {
        lat : -1.223884, 
        lng : 36.838042
      },
      {
        lat : -1.221385, 
        lng : 36.835778
      },
      {
        lat : -1.219722, 
        lng : 36.835563
      },
      {
        lat : -1.217148, 
        lng : 36.835810
      },
      {
        lat : -1.210723, 
        lng : 36.833128
      },
      {
        lat : -1.208352, 
        lng : 36.832871
      },
      {
        lat : -1.206196,
        lng :  36.831938
      },
      {
        lat : -1.198763, 
        lng : 36.835811
      },
      {
        lat : -1.193443, 
        lng : 36.839899
      },
      {
        lat : -1.192821, 
        lng : 36.840028
      },
      {
        lat : -1.180110, 
        lng : 36.837796
      },
      {
        lat: -1.180110, 
        lng: 36.837796
      },
      {
        lat: -1.172599, 
        lng: 36.830571
      }
    ];
  
  constructor() { }

  ngOnInit(): void {
    let i = 0;
    const obs = interval(2000).pipe(
      takeWhile((v) =>  i < this.tmpPoints.length))
      .subscribe(() => {
        const pos = this.tmpPoints[i];
        this.points.push(pos);
        // this.currentPos = pos;
        i++;
      });
  }

}
