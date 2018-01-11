import { Component,OnInit,Input,Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { OrgModel } from '../../../model/org.model';
import { JobModule } from '../../../model/job.model';
import { JobServices } from '../../../services/job.services';
import { loginServices } from '../../../services/login.services';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';
import { CostServices } from '../../../services/cost.services';
import { CostModule } from '../../../model/cost.model';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;

@Component({
	 selector : 'app-jobdashboard',
	 templateUrl : './jobDashboard.component.html',
     styleUrls : ['./jobDashboard.component.css'],
     providers : [JobServices,CostServices]
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
response : any;
myVar:boolean;
invoicedata : CostModule = new CostModule();

constructor(private _costservice : CostServices,private _router :Router, private _jobservices : JobServices,@Inject(APP_CONFIG) private _config: IAppConfig) 
{
  this.imageurl = _config.dir_url; 
}
ngOnInit()
{
  this.getJobList();
  this.myVar=true;
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
    this.myVar=false;
    //alert(JSON.stringify(this.activejob));
});
}
openJobView(id)
{
  var nid = btoa(id);
  this._router.navigate(["/viewjob",nid]);
}
publish(jobid:any,publish:any,job_title:any)
{
  // alert(job_title);
  this.myVar=true;
  if(publish == 1)
  {
    var jid = btoa(jobid);
    this._router.navigate(["/cost",jid,job_title]);
  }
  else
  {
    this._jobservices.publish(jobid , publish).subscribe(res => 
    { 
    this.publis = res;
    this.getJobList();
    });
  }

  
  //  this._jobservices.publish(jobid , publish).subscribe(res => 
  //   { 
  //   this.publis = res;
  //   if(publish == 1)
  //   {
  //   this.billingdata(jobid);  
  //   }  
  //   else
  //   {
  //   this.getJobList();    
  //   }  
  //   });
}
billingdata(jobid)
{

  var monthNames = ["Jan", "Feb", "Mar","Apr", "May", "June", "July","Aug", "Sept", "Oct","Nov", "Dec"];
  var newdate =  new Date(); 
  var day = newdate.getDate();
  var monthIndex = newdate.getMonth()+1;
  var monthInd = newdate.getMonth();
  var year = newdate.getFullYear().toString().substr(-2);
  var invoice = "GSJ/1/" + jobid + "/"+day+monthIndex+year;
  var invoice_date = day + '-' + monthNames[monthInd] + '-' + year;
  this.invoicedata.userid =this.userid;
  this.invoicedata.invoice_id=invoice;
  this.invoicedata.user_item=jobid; 
  this.invoicedata.module="1"; 
  this.invoicedata.amount="2000"; 
  this.invoicedata.billing_status="1"; 
  this.invoicedata.transaction_id="0D034569918";
  this.invoicedata.date = invoice_date;
  this._costservice.payment(this.invoicedata).subscribe( res =>
  { 
    this.response = res;
    this.getJobList();  
  });
}
}