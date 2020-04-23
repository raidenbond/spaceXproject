import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MissionsService {

   
  constructor(private http: HttpClient) { }

   //get the first rocket 
  getRocket(flightnumber){
    return this.http.get('https://api.spacexdata.com/v3/rocket' + flightnumber);
  }

   // get teh second rocket 
  getRocket2(){

     return this.http.get('https://api.spacexdata.com/v3/rockets');
  }


//get thev history mission 
  getMissions(){

    const data = this.http.get('https://api.spacexdata.com/v3/history');
     return data;
    
  }

 getdetails(){

    return this.http.get('https://api.spacexdata.com/v3/info');
  }
}
