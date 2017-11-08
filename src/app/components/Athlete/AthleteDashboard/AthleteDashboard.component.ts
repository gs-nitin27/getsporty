import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { NotificationService } from '../../services/notification.service'
import { loginServices } from '../../services/login.services';
import { Class } from '../../model/class.model';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
 
declare var $:any;    

@Component({
	selector:'app-athletedashboard',
	templateUrl: './AthleteDashboard.component.html',
	styleUrls:['./AthleteDashboard.component.css'],
  providers : [loginServices]
})
export class AthleteDashboardComponent implements OnInit
{
public src : string;
public imageurl : any;
public myVar : boolean;
public joined : boolean;
public notresponse : boolean;
public cheakpayment : any;
public feepin : any ;
email : any;
contact_no : any;
public user_id : any;
public prof_id :any;
AthleteUser : User = new User();
public classlist : any;
user : User = new User();
classdata : Class = new Class();
testdata : any;

constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private _activatedRoute: ActivatedRoute,@Inject(APP_CONFIG) private _config: IAppConfig, private _notificationService :NotificationService)
{
  this.user_id = localStorage.getItem('currentUserid');
  this.prof_id = localStorage.getItem('prof_id');
  this.imageurl = _config.dir_url;
  this._notificationService.popToastSuccess('Welcome', 'Hello Athlete ');
}

ngOnInit()
{
  this.myVar= false;
  this.AthletedashboardData();
}

AthletedashboardData()
{
  this._accountService.AthletedashboardData(this.user_id).subscribe( 
  result => { 
    // alert(JSON.stringify(result));
  this.AthleteUser = result; 
  this.email = result.email;
  this.contact_no =result.contact_no;
  this.getClassList();

});
}
payment(Classid: string)
{
  this.cheakpayment = Classid;
}

proceed(classdetailsdata:User)
{
   // this._accountService.inventory(this.user_id).subscribe( result => this.feepin = result);
}
GeneratePdf() 
{
    var d = new Date();
    var m = ("0" + (d.getMonth() + 1)).slice(-2);
    var y = d.getFullYear().toString().substr(-2);
    var invoice = 'DHS/' + m + y + '/' + this.user_id ;
    var url = 'http://getsporty.in/html_pdf/invoice.php?invoiceid='+invoice;
  //  alert(invoice);
    window.open(url, '_blank');
}

JoinClass()
{
	if(!this.classdata.student_code)
	{
	  alert("Please Enter Class Code");
	}
	else
	{
     this.myVar = true;
     this.classdata.user_info = this.AthleteUser;
     this.classdata.deviceType = "2";
      this._accountService.JoinClass(this.classdata).subscribe((result) => 
      { 
      if(result.status == "1")
      {
        this.myVar = false;
        this.joined = true;
        setTimeout(function() {
        this.joined = false;
        }.bind(this), 3000);
        this._router.navigate(['/AthleteDashboardComponent']);
      }
      else
      {
        this.myVar = false;
        this.notresponse = true;
        setTimeout(function() {
        this.notresponse = false;
        }.bind(this), 3000);
        this._notificationService.popToastError('Ohh', 'Worng Class Code ');
      }
      });
	}
}

getClassList()
{
  this._accountService.getClassList(this.user_id,this.email,this.contact_no).subscribe((res) => 
  {
  if(res.status == "1")
  {
     this.classlist = res.data;
     this.myVar= true;
  }
  });
}

editProfile()
{
var  data =  this._accountService.Athleteprofiledata(this.user_id,this.prof_id);
 if(data)
 {
 this._router.navigate(['./userProfile']);
 }  
}

errorHandler(event,image:string) 
{
   event.target.src = this.imageurl + "profile/" + image;
 }
}