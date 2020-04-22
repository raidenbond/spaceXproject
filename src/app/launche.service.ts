import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LauncheService {

  constructor(
   private http: HttpClient 


  ) { }



  getLaunches(){
     return this.http.get('https://api.spacexdata.com/v3/missions');
  }

  getSingleLaunch(flightnumber){

    return this.http.get('https://api.spacexdata.com/v3/missions' );
  }


}
