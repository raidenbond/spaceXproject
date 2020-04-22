import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LauncheService } from '../launche.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rocket2',
  templateUrl: './rocket2.component.html',
  styleUrls: ['./rocket2.component.css']
})
export class Rocket2Component implements OnInit {
  

  constructor( private launchesService: LauncheService,
    private route: ActivatedRoute,private http: HttpClient) { }

  launch;

  public Rocket()
  {
    this.http.get('https://api.spacexdata.com/v3/rockets/falcon9');
  }



  ngOnInit(): void {

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


