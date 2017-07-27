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
     return this._http.post(this.baseurl + "/angularapi.php?act=createjob",job , xhrHeaders).map((res=>res.json())).subscribe( data=> { this.router.navigate(["/home"]); }  ,err => alert("failed"));
}

 Sportlist() {
    return this._http.get(this.sportlistUrl)
      .map(res => res.json())
  }



 getJobdetails(id : string) : Observable<any>
 {
    return this._http.get(this.baseurl+ "/angularapi.php?act=getjobdetails&id="+id).map(res => <JobModule[]> res.json());

 } 

 getJobList(userid : string) : Observable<any>
 {
   return this._http.get(this.baseurl + "/angularapi.php?act=getjoblist&id="+userid).map(res=> <JobModule[]> res.json());

 }

 
uploadimage(binaryString)
  {
    return  this._http.post(this.baseurl+"/angularapi.php?act=upload", binaryString)
            .map(res => res.json());
  }
	

}