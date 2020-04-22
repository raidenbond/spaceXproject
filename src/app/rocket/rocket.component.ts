import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LauncheService } from '../launche.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
 
  splashImg: string='/assets/space.jpg';
  constructor(private http: HttpClient, private launchesService: LauncheService,
    private route: ActivatedRoute,) {
   
    
    console.log(this.splashImg);

   }

   launch;

  public Rocket()
  {
    this.http.get('https://api.spacexdata.com/v3/rockets');
  }

  ngOnInit(): void{
   this.route.params.subscribe(params => {

    console.log(params);
    const flightNumber = params.flightNumber;

    this.launchesService.getSingleLaunch(flightNumber).subscribe(response => {

      console.log(response);
      this.launch = response;
    })


   });

  }

}
