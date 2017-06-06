import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {xhrHeaders} from "./xhr-headers";
import { CreateEvent } from  '../model/createEvent.module';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';



@Injectable()
export class createEventServices {
    public baseUrl: string;
    public sportlistUrl : string;

constructor(private _http: Http,
                 @Inject(APP_CONFIG) private _config: IAppConfig) {
                      this.baseUrl = this._config.createeventurl;
                      this.sportlistUrl = this._config.sportlist;

                 }
    saveEvent(events:CreateEvent) {
       return this._http.post(this.baseUrl, events, xhrHeaders).map(res =>  res.json()).share();      
    }

 Sportlist() {
    return this._http.get(this.sportlistUrl)
      .map(res => res.json())
  }
}

