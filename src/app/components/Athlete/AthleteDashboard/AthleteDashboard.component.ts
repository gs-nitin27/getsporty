import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
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



  public prof_id = localStorage.getItem('prof_id');
  public user_id = localStorage.getItem('currentUserid');
  public name     = localStorage.getItem('currentUser');
  public image    = localStorage.getItem('user_image');
  public contact  = localStorage.getItem('contact_no');
  public email  = localStorage.getItem('email');

AthleteUser : User = new User();

public classlist : any;
user : User = new User();
headerdetails : User = new User();
bio : User = new User();
BestResults = [];
Award = [];
LatestResult = [];

classdata : Class = new Class();

constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private _activatedRoute: ActivatedRoute,@Inject(APP_CONFIG) private _config: IAppConfig)
{
  
  this.imageurl = _config.dir_url;

  //alert(this.name);
  //this.getUserData();
}

ngOnInit()
{
  this.getClassList();
  this.AthletedashboardData();
}

AthletedashboardData()
{
  this._accountService.AthletedashboardData(this.user_id).subscribe(result => this.AthleteUser = result );
}

getUserData()
{
 this._accountService.profiledata(this.user_id,this.prof_id).subscribe((result) => 
 { 
     for(let key in result)
     {
       if(key == 'Achivement')
       {
        for(let inner in result[key])
        {
         if(inner == 'awards')
          {
            this.awards(result[key][inner]);
          }
         else if(inner == 'bestResult') 
         {
           this.bestResult(result[key][inner]);
         }
         }
       }
       else if(key == 'Bio')
       {
           this.bio = result[key];
       }
       else if(key == 'Header')
       {
        this.headerdetails = result[key];
       }
       else if (key =='LatestResults')
       {
           this.latestResults(result[key]);
       }
       else if(key == 'user')
       {
              this.user =  result[key];
        
       }
       else 
       {

       }
     }
  });
}

latestResults(latestResults_data)
{
  if(latestResults_data)
  {
  var latestResults_lenght = latestResults_data.length;
  for(var j = 0; j<latestResults_lenght ; j++)
  {
    this.LatestResult.push(latestResults_data[j]);
  }
  }

}
awards(award_data)
{
   if(award_data)
   {
      var award_length = award_data.length;
      for(var k=0 ; k<award_length;k++)
      {
       this.Award.push(award_data[k]);
      } 
   }  

}
bestResult(bestResult_data)
{
	if(bestResult_data)
	{
      var bestResult_length =bestResult_data.length; 
      for(var i = 0 ; i<bestResult_length;i++)
      {
        this.BestResults.push(bestResult_data[i]);
      }
	}
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
     this.classdata.user_info = this.user;
     this.classdata.deviceType = "2";

     //alert(JSON.stringify(this.classdata));

      this._accountService.JoinClass(this.classdata).subscribe((result) => 
      { 
       
      //alert(result); 
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
      }


      });

	}
}

getClassList()
{
  this._accountService.getClassList(this.user_id).subscribe((res) => 
  {
  if(res.status == "1")
  {
     this.classlist = res.data;
  }

  });

}


errorHandler(event,image:string) {
   event.target.src = this.imageurl + "profile/" + image;
 }

}