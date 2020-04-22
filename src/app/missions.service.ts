import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MissionsService {

   
  constructor(private http: HttpClient) { }


  getMissions(){

    const data = this.http.get('https://api.spacexdata.com/v3/payloads');


    return data;
    
  }
}
