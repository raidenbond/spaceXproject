import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {LauncheService} from '../launche.service';



@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(

    private launcheService: LauncheService,
    private route: ActivatedRoute, 


  ) { }

  launch;

  ngOnInit() : void {

    this.route.params.subscribe(params => {

      console.log(params);
      const flightnumber = params.flightnumber;
      const description = params.description;


      // this will pass the flight number as paramter into the get ;anucn single lanuch to make a single lanuhc 

   this.launcheService.getSingleLaunch(flightnumber).subscribe(response =>{
    console.log(response);
    this.launch = response;

   })


    });
    



  }

}
