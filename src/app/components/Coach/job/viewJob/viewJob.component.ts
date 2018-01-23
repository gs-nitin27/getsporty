import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { JobModule } from '../../../model/job.model';
import { JobServices } from '../../../services/job.services';
import { loginServices } from '../../../services/login.services';
import {ActivatedRoute,Router} from '@angular/router';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';
declare var $:any;

@Component({
	selector: 'app-viewjob',
    templateUrl: './viewJob.component.html',
    styleUrls: ['./viewJob.component.css'],
    providers:[JobServices]
})

export class ViewJob implements OnInit
{
Job: JobModule = new JobModule();
// userList : JobModule = new JobModule();
userList : any;
id : any;
public shortresult : any;
public imageurl : string;
public shortlist  = [];
public applicants = [];
public offered  = [];
public tempUrl : any;
userinterview : any;
public age : any;
public myVar:boolean;
public employer_id = localStorage.getItem('currentUserid');
public employer_name = localStorage.getItem("currentUser");
public result : any;



constructor(private _accountService: loginServices,private _router :Router ,private _activatedRoute :ActivatedRoute,private _JobServices : JobServices,@Inject(APP_CONFIG) private _config: IAppConfig)
{
   this.imageurl = _config.dir_url;
}

ngOnInit()
{
this.myVar = true;   
this._activatedRoute.params.subscribe(params => 
  {
     this.tempUrl = params['id']; 
     this.id = atob(this.tempUrl);
  });
this.getJobdetails();
this.jobapplyUser();
this.getOrgDetails();
}

getJobdetails()
{
    this._JobServices.getJobdetails(this.id).subscribe(res => { this.Job = res; 
     
      //alert(JSON.stringify(this.Job));
     
    });
}

jobapplyUser()
{
    
   this._JobServices.jobapplyUser(this.id).subscribe(res => 
    {
      this.userList = res ;
      this.shortlist  = [];
      this.applicants = [];
      this.offered  = [];
    //   alert(JSON.stringify(this.userList.status));
     for(let shortlisttype in res)
     {
       if(res[shortlisttype].status == 1)
       {
        this.applicants.push(res[shortlisttype]); 
       }else if(res[shortlisttype].status == 2 || res[shortlisttype].status == 3)
       {
        this.shortlist.push(res[shortlisttype]);
       }else if(res[shortlisttype].status == 4 || res[shortlisttype].status == 5)
       {
        this.offered.push(res[shortlisttype]);
       } 
     }
      
     this.myVar = false; 
    });

}

public shortlisted(user_id:any,job_id:any)
{
  this.myVar = true; 
  this._JobServices.shortlist(user_id,job_id).subscribe(res => 
  { 
    this.shortresult = res;
    this.jobapplyUser();
    this.myVar = false; 
  });
}

public callforinterview(applicants_id)
{
this.myVar = true; 
this.userinterview = {"employer_id":this.employer_id,"name": this.employer_name,"applicant_id":[applicants_id],"job_id":this.id,"status":'3',"module":'1',"date":$("#date"+applicants_id).val(),"msg": $("#msg"+applicants_id).val(),"venue":$("#location"+applicants_id).val()};
this._JobServices.callforinterview(this.userinterview).subscribe(res => 
{     
        this.jobapplyUser();
        this.myVar = false; 
});
}

public sendoffer(uid)
{
this.myVar = true; 
var offer = {"emp_id":this.employer_id,"applicant_id":uid,"job_id":this.id,"salary":$("#Salary"+uid).val(),"joining_date":$("#Join_date"+uid).val()}; 
this._JobServices.JobOffer(offer).subscribe(res => 
{ 
    this.jobapplyUser();
    this.myVar = false; 
});
}

public findAge(birthdate)
{
   if(birthdate)
   {
    var date1 = new Date(birthdate);
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    this.age = Math.ceil((timeDiff / (1000 * 3600 * 24))/365);
   }
   else
   {
    this.age = "";
   }
}

getOrgDetails()
{
   this._accountService.getOrgDetails(this.employer_id).subscribe(data => 
    { 
        this.result = data.data;
    //alert(JSON.stringify(this.result));
  });
}
openJobEdit(id)
{
      var nid = btoa(id);
      this._router.navigate(["/editJob",nid]);
}

publish(jobid:any,job_title:any)
{
  var jid = btoa(jobid);
  this._router.navigate(["/cost",jid,job_title]);
}
}