import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
 
  splashImg: string='/assets/space.jpg';
  constructor(private missionservice: MissionsService,
    private route: ActivatedRoute,) {
   
    
    console.log(this.splashImg);

   }

   rocket;

  

  ngOnInit(): void{
   this.route.params.subscribe(params => {

    console.log(params);
    const flightnumber = params.flightnumber;

    this.missionservice.getRocket(flightnumber).subscribe(response => {

      setTimeout(() => {
        
        console.log(response);
        this.rocket 
      }, 1000);
    })
  });

  }

}
