import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';
declare var $:any;
@Component({
	 selector : 'app-AllProfile',
	 templateUrl : './Viewprofile.component.html',
	 styleUrls : ['./Viewprofile.component.css'],
})
export class AllProfileComponent implements OnInit
{
@Input() userdata: User;
user : User = new User();
headerdetails : User = new User();
// public userid  = localStorage.getItem('currentUserid');
// public prof_id = localStorage.getItem('prof_id');
formalEducation = [];
otherCertification  = [];
sportEducation  = [];
experienceAsPlayer = [];
workExperience = [];
public imageurl : any;
public user_id : any;
public profid : any;


athuser : User = new User();
athheaderdetails : User = new User();
bio : User = new User();
BestResults = [];
Award = [];
LatestResult = [];

constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute,@Inject(APP_CONFIG) private _config: IAppConfig)
{
this.imageurl = _config.dir_url;
}
ngOnInit()
{ 

    this.route.params.subscribe(params => {
        this.user_id = +params['id']; 
        this.profid = +params['prof_id']; 
        // this.myVar = false;
});

 



  this.profile();
}
profile()
{
this._accountService.profiledata(this.user_id,this.profid).subscribe((result) =>
{

 //alert(JSON.stringify(result));
 
if(this.profid == 1)
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
       this.athheaderdetails = result[key];
      }
      else if (key =='LatestResults')
      {
          this.latestResults(result[key]);
      }
      else if(key == 'user')
      {
             this.athuser =  result[key];
      }
      else 
      {
      }
    }

}else{
for(let key in result)
 {
  if(key == "user")
  {
    this.user = result[key];
  }
  else if(key == "HeaderDetails")
  {
     this.headerdetails = result[key];
  }
  else
  {
  if(result.hasOwnProperty(key))
  {
    for(let key1 in result[key])
      {
       if(result[key].hasOwnProperty(key1))
        { 
           if(key1 =="formalEducation")
           {
              this.formalEducationdata(result[key][key1]); 
           }
           else if(key1== "otherCertification")
           {
              this.otherCertificationdata(result[key][key1]);
           }
           else if(key1 == "sportEducation")
           {
             this.sportEducationdata(result[key][key1]);
           }
           else if(key1 == "experienceAsPlayer")
           {
              this.experienceAsPlayerdata(result[key][key1]);
           }
           else if(key1 == "workExperience")
           {
               this.workExperiencedata(result[key][key1]);
           }
           else
           {
                 //alert(JSON.stringify(result[key]));
           }
       }     
     }    
}
}
} 
} 
});
}

formalEducationdata(formal_data)
{
if(formal_data)
{
  var formal_lenght = formal_data.length;
  for(var i = 0; i< formal_lenght ; i++)
  {
    this.formalEducation.push(formal_data[i]);
  }
}
}
sportEducationdata(sport_data)
{ 
  if(sport_data)
  {
  var sport_lenght = sport_data.length;
  for(var j = 0; j<sport_lenght ; j++)
  {
    this.sportEducation.push(sport_data[j]);
  }
  }
}
otherCertificationdata(other_data)
{
  if(other_data)
  {
  var other_length = other_data.length;
  for(var i = 0 ; i <other_length ; i++)
  {
    this.otherCertification.push(other_data[i]);
  }
  }
}
workExperiencedata(work_data)
{
  if(work_data)
  {
    var work_length = work_data.length;
    for(var i = 0 ; i<work_length;i++)
    {
     this.workExperience.push(work_data[i]);
    }
  }
}

experienceAsPlayerdata(exp_data)
{
  if(exp_data)
  {
    var exp_length = exp_data.length;
    for(var i =0 ; i<exp_length ; i++)
    {
     this.experienceAsPlayer.push(exp_data[i]);
    }
  }
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