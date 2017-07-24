import { Injectable, Inject } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http'
import {Observable, BehaviorSubject, Subject} from "rxjs/Rx";
import { Router, ActivatedRoute } from '@angular/router';
import {xhrHeaders} from "./xhr-headers";

import 'rxjs/Rx'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CreateEvent } from  '../model/createEvent.module';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';



  
@Injectable()
export class createEventServices {
 

    public createeventurl: string;
    public sportlistUrl : string;

constructor(private _http: Http,
                 @Inject(APP_CONFIG) private _config: IAppConfig ,private router: Router) {
                      this.createeventurl = this._config.apBaseUrl;
                      this.sportlistUrl = this._config.apBaseUrl + "/angularapi.php?act=sportlisting";
                      
                 } 
 Sportlist() {
    return this._http.get(this.sportlistUrl)
      .map(res => res.json())
  }

  public saveEvent(events:CreateEvent) {
   

     return this._http.post(this.createeventurl + "/angularapi.php?act=createevent", events, xhrHeaders)
            .map((res => res.json())).subscribe(
                data => { this.router.navigate(["/home"]); },
                err => console.log("An Error Occured While Processing Your Request"));

    }


 getCreateEventList(id : string) : Observable<any> 
 {
   
  return this._http.get(this.createeventurl + "/angularapi.php?act=getuserevent&userid="+id).map(res => <CreateEvent[] > res.json());

 }  

getEventDetails(id : string) : Observable<any>
{
  
  return this._http.get(this.createeventurl + "/angularapi.php?act=geteventdetails&id="+id).map(res => < CreateEvent[]> res.json());

}
}



