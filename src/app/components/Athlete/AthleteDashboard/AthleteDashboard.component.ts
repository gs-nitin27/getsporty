import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { Class } from '../../model/class.model';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';

declare var $:any;
 
@Component({
	selector:'app-athletedashboard',
	templateUrl: './AthleteDashboard.component.html',
	styleUrls:['./AthleteDashboard.component.css'],
})
export class AthleteDashboardComponent implements OnInit
{
public myVar : boolean;
public joined : boolean;
public notresponse : boolean;
public user_id : any;
public prof_id : any;
public classlist : any;
user : User = new User();
headerdetails : User = new User();
bio : User = new User();
BestResults = [];
Award = [];
LatestResult = [];

classdata : Class = new Class();

constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private _activatedRoute: ActivatedRoute){}

ngOnInit()
{
  this.prof_id = localStorage.getItem('prof_id');
  this.user_id = localStorage.getItem('currentUserid');
	this.getUserData();
  this.getClassList();
}

getUserData()
{
 this._accountService.profiledata(this.user_id,this.prof_id).then((result) => 
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



}