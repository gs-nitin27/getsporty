import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from  '../../services/createEvent.services';
import { JobModule } from '../../model/job.model';
import { OrgModel } from '../../model/org.model';
import { JobServices } from '../../services/job.services';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';
import { NotificationService } from '../../services/notification.service';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';

declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [createEventServices,JobServices]
})
export class HomeComponent implements OnInit 
{
    form: FormGroup;
    private formSumitAttempt: boolean;
    
    today: number = Date.now();
    org : OrgModel = new OrgModel();
    currentDate = new Date();
    public imageurl : any;
    public test = new Date(this.currentDate).getHours();
    public Event : CreateEvent[];
    public Job : JobModule[];
    public userid = localStorage.getItem('currentUserid');
    publis : any;
    res : any;
    result : any;

constructor(private formBuilder: FormBuilder,private _accountService: loginServices,private _router :Router,private _eventservices : createEventServices , private _jobservices : JobServices,@Inject(APP_CONFIG) private _config: IAppConfig,private _notificationService :NotificationService) 
{ 
    this.imageurl = _config.dir_url; 
    this._notificationService.popToastSuccess('Welcome', '');
}

ngOnInit() 
{
   this.getEventList();
   this.getJobList();   
   this.getOrgDetails();
   this.org.userid = this.userid;

    this.form = this.formBuilder.group({
    userid : this.userid,
    org_name:  [null, Validators.required],
    about: [null,Validators.required],
    email: [null, [Validators.required, Validators.email]],
    address1:  [null, Validators.required],
    address2:  [null, Validators.required],
    city:  [null, Validators.required],
    state:  [null, Validators.required],
    pin:  [null, Validators.required],
    mobile:  [null, Validators.required]
});
}
getJobList()
{
  this._jobservices.getJobList(this.userid).subscribe(res => { this.Job = res;});
}
getEventList()
{
	this._eventservices.getEventList(this.userid).subscribe(res => { this.Event = res;});
}
viewjob()
{
  this._router.navigate(["/editJob",25]);
}
publish(jobid:any,publish:any)
{
  this._jobservices.publish(jobid , publish).subscribe(res => { this.publis = res; this.getJobList();  });
}
hello(end_date)
{
  var eventStartTime = new Date(this.currentDate);
  var eventEndTime = new Date(end_date);
  var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
  if(duration >0 )
  {
  return true;
  }
  else
  {
  return false;
  }
}

orgregister(org:any)
{
  this._accountService.orgAdd(org).subscribe(data => { this.res = data;
  $('#myModal').modal('toggle');
  this.getOrgDetails();
  });
}

getOrgDetails()
{
  this._accountService.getOrgDetails(this.userid).subscribe(data => { this.result = data;
   // alert(JSON.stringify(this.result));
   
   if(!this.result)
   {
    $('#myModal').modal('toggle');
   }
   
  
  });
}

isFieldValid(field: string) 
{
  return (
    (!this.form.get(field).valid && this.form.get(field).touched) ||
    (this.form.get(field).untouched && this.formSumitAttempt)
  );
}

displayFieldCss(field: string) 
{
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}

onSubmit() 
{
  this.formSumitAttempt = true;
  if (this.form.valid) 
  {
  this._accountService.orgAdd(this.form.value).subscribe(data => { this.res = data;
  $('#myModal').modal('toggle');
  this.getOrgDetails();
  });
   // alert(JSON.stringify(this.form.value));
  }
}

reset() 
{
  this.form.reset();
  this.formSumitAttempt = false;
}
}
