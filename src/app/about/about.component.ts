import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  http: any;
  route: any;
  launchesService: any;

  constructor() { }

  launch;
  public Rocket()
  {
    this.http.get('https://api.spacexdata.com/v3/history');
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
