import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';
import { loginServices } from '../../services/login.services';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;
 

@Component({
	 selector : 'app-athleteprofileview',
	 templateUrl : './AthleteProfileView.component.html',
	 styleUrls : ['./AthleteProfileView.component.css'],
})
export class AthleteProfileViewComponent implements OnInit
{
public src : any;
public imageurl : any;
public user_id : any;
public prof_id : any;
user : User = new User();
headerdetails : User = new User();
bio : User = new User();
BestResults = [];
Award = [];
LatestResult = [];

 
constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private _activatedRoute: ActivatedRoute,@Inject(APP_CONFIG) private _config: IAppConfig)
{
  this.imageurl = _config.dir_url;

}

ngOnInit()
{
//this._activatedRoute.params.subscribe(params => { this.user_id = +params['id']; this.prof_id = //+params['prof_id']});	

  this.prof_id = localStorage.getItem('prof_id');
  this.user_id = localStorage.getItem('currentUserid');

	this.getUserData();
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

errorHandler(event,image:string) 
{
  event.target.src = this.imageurl + "/profile/" + image;
}

}