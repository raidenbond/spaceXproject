import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { MissionsService } from '../missions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  loading: boolean;
  

  constructor(private missionService: MissionsService) { }

  missions: any = [];

  missionApiCallError: any;

  @Output() dataEmitter: EventEmitter<any> = new EventEmitter<any>();

  dataForParent = 'For the parent.....';

  emittingFunction(){
    this.dataEmitter.emit(this.dataForParent);
  }
  
  @Input() dataFromParent: string;
  
  handleclick(){
     const data = this.http.get('https://api.spacexdata.com/v3/rockets');
  }

  ngOnInit(): void {

    this.emittingFunction();
    
    this.missionService.getMissions().subscribe(response => {

      setTimeout(() => {
        
        console.log(response);
        this.missions =response;
      }, 2100);
    
    },  (error) =>{
       
        //console.error('error caught in component')
        this.missionApiCallError = error;
        this.loading = false;

      });
    
  }
      tableColumns: string[] = ['title' , ' flightnumber ' , 'details'];
}






