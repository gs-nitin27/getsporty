import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import {xhrHeaders} from "./xhr-headers";
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
   
   alert(JSON.stringify(events));

     return this._http.post(this.createeventurl + "/angularapi.php?act=createevent", events, xhrHeaders)
            .map((res => res.json())).subscribe(
                data => alert(data),
                err => console.log("An Error Occured While Processing Your Request"));

    }
}



