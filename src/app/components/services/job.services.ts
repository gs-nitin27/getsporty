import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import {xhrHeaders} from "./xhr-headers";
import { JobModule } from '../model/job.model';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';


@Injectable()
export class JobServices 
{
   public baseurl : string;
   public sportlistUrl : string;

constructor(private _http: Http,@Inject(APP_CONFIG) private _config: IAppConfig ,private router: Router){
	
  this.baseurl = this._config.apBaseUrl;
  this.sportlistUrl = this._config.apBaseUrl + "/angularapi.php?act=sportlisting";

}

CreatJob(job)
{
     alert(JSON.stringify(job));

     return this._http.post(this.baseurl + "/angularapi.php?act=createjob",job , xhrHeaders).map((res=>res.json())).subscribe(data=>alert(data),err => alert("failed"));
}

 Sportlist() {
    return this._http.get(this.sportlistUrl)
      .map(res => res.json())
  }
	

}