import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;

@Component({
	 selector : 'app-editprofile',
	 templateUrl : './editProfile.component.html',
	 styleUrls : ['./editProfile.component.css'],
})
export class EditProfileComponent implements OnInit
{

@Input() userdata: User;
user : User = new User();
headerdetails : User = new User();
public userid  = localStorage.getItem('currentUserid');
public prof_id = localStorage.getItem('prof_id');
formalEducation = [];
otherCertification  = [];
sportEducation  = [];
experienceAsPlayer = [];
workExperience = [];

constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute){}
ngOnInit()
{ 
  this.profile();
}

profile()
{
this._accountService.profiledata(this.userid,this.prof_id).then((result) =>
{
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
           }else if(key1 == "sportEducation")
           {
             this.sportEducationdata(result[key][key1]);
           }else if(key1 == "experienceAsPlayer")
           {
              this.experienceAsPlayerdata(result[key][key1]);
           }else if(key1 == "workExperience")
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


Create(user)
{
	alert(JSON.stringify(user));
}
}