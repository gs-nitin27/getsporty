import { Component,OnInit,Input,Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { OrgModel } from '../../../model/org.model';
import { JobModule } from '../../../model/job.model';
import { JobServices } from '../../../services/job.services';
import { loginServices } from '../../../services/login.services';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;

@Component({
	 selector : 'app-jobdashboard',
	 templateUrl : './jobDashboard.component.html',
     styleUrls : ['./jobDashboard.component.css'],
     providers : [JobServices]
})
export class JobDashboard implements OnInit
{
org : OrgModel = new OrgModel();
public userid = localStorage.getItem('currentUserid');
public Job : JobModule[];
publis : any;
public imageurl : any;
activejob = [];
cloasedjob = [];
savedjob = [];
constructor(private _router :Router, private _jobservices : JobServices,@Inject(APP_CONFIG) private _config: IAppConfig) 
{
  this.imageurl = _config.dir_url; 
}
ngOnInit()
{
  this.getJobList();
}
getJobList()
{
 this._jobservices.getJobList(this.userid).subscribe(res => { 
    this.Job = res;
    this.activejob = [];
    this.savedjob = [];
    for(var i=0; i<this.Job.length;i++)
    {
      if(this.Job[i]['publish'] == '1') 
      {
        this.activejob.push(this.Job[i]);
      }
      else{
        this.savedjob.push(this.Job[i]);
      }
    }
    //alert(JSON.stringify(this.activejob));
});
}

publish(jobid:any,publish:any)
{
  this._router.navigate(["/cost"]);
  // this._jobservices.publish(jobid , publish).subscribe(res => { this.publis = res; this.getJobList();  });
}
}