import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../missions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  constructor(private missionservice: MissionsService) { }
 
 
 info;
  

  ngOnInit(): void {

    this.missionservice.getMissions().subscribe(response => {

      setTimeout(() => {

        this.info= response;
        
      }, 1100);
    })}
    }






