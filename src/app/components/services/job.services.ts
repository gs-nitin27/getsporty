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

  //  return this._http.post("http://localhost:3000/insert",job , xhrHeaders).map((res=>res.json()));
    return this._http.post(this.baseurl + "/angularapi.php?act=createjob",job).map((res=>res.json()));
}

 Sportlist() {

   // return this._http.get("http://localhost:3000/test").map(res => res.json());
    return this._http.get(this.sportlistUrl).map(res => res.json());
  }



 getJobdetails(id : string) : Observable<any>
 {
    return this._http.get(this.baseurl+ "/angularapi.php?act=getjobdetails&id="+id).map(res => <JobModule[]> res.json());

 } 

 getJobList(userid : string) : Observable<any>
 {
   return this._http.get(this.baseurl + "/angularapi.php?act=getjoblist&id="+userid).map(res=> <JobModule[]> res.json());

 }
jobapplyUser(id : string) :Observable<any>
{
   return this._http.get(this.baseurl+"/angularapi.php?act=jobapplyUser&id="+id).map(res => <JobModule[]>res.json());
}
uploadimage(binaryString)
{
    return  this._http.post(this.baseurl+"/angularapi_image.php?act=jobimage", binaryString) .retryWhen(error => error.delay(2000)).timeout(8000).map(res => res.json());
}
publish(jobid:any , publish:any)
{
  return this._http.get(this.baseurl + "/angularapi.php?act=publishjob&jobid="+ jobid + "&publish=" + publish).map(res =>res.json());
} 

shortlist(userid,jobid)
{
  return this._http.get(this.baseurl + "/angularapi.php?act=callforshortlist&userid="+userid+"&jobid="+jobid).map(res =>res.json());
}

callforinterview(interviewdata)
{
  return this._http.post(this.baseurl + "/create_database.php?act=interview_schedule",interviewdata).map(res => res.json());
}

JobOffer(offer)
{
  return this._http.post(this.baseurl + "/create_database.php?act=send_offer",offer).map(res => res.json());
}
}