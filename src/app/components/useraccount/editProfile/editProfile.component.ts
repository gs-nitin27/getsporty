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
public  myVar : boolean;
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
final:any;
dt:any;
dt0:any;
dt1:any;
datesplit : any;
mergedata : any;
formalEducations :any;
cheaktype : boolean;
dateToClass : any;

constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute){}
ngOnInit()
{ 
  this.profile();
}

profile()
{
this._accountService.profiledata(this.userid,this.prof_id).subscribe((result) =>
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


AddEducationdata()
{
this.formalEducation.push({'degree':'','organisation':'','stream':'','dateFrom':'','dateTo':'','tilldate':''});  
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
else
{
  this.formalEducation.push({'degree':'','organisation':'','stream':'','dateFrom':'','dateTo':'','tilldate':''});  
}
}

addSportEdu()
{
  this.sportEducation.push({'degree':'','organisation':'','stream':'','dateFrom':'','dateTo':'','tilldate':''});
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
  else
  {
    this.sportEducation.push({'degree':'','organisation':'','stream':'','dateFrom':'','dateTo':'','tilldate':''});
  }
}

addotherCerti()
{
  this.otherCertification.push({'degree':'','organisation':'','stream':'','dateFrom':'','dateTo':'','tilldate':''});

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
  }else
  {
    this.otherCertification.push({'degree':'','organisation':'','stream':'','dateFrom':'','dateTo':'','tilldate':''});
  }
}

AddWorkExp()
{
  this.workExperience.push({'designation':'','organisationName':'','description':'','dateFrom':'','dateTo':''});
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
  }else{
    this.workExperience.push({'designation':'','organisationName':'','description':'','dateFrom':'','dateTo':''});
  }
}

experience_as_Player()
{
  this.experienceAsPlayer.push({'designation':'','organisationName':'','description':'','dateFrom':'','dateTo':''});
}
experienceAsPlayerdata(exp_data)
{
   if(exp_data != " ")
   {
      var exp_length = exp_data.length;
      for(var k=0 ; k<exp_length;k++)
      {
       this.experienceAsPlayer.push(exp_data[k]);
      } 
   }  
   else
   { 
    this.experienceAsPlayer.push({'designation':'','organisationName':'','description':'','dateFrom':'','dateTo':''});
   }
}

splitdate(date_split)
{
 this.dt = date_split.split("to");
 this.dt0 = this.dt[0];
 this.dt1 = this.dt[1];
}

mergedate($event) {
   var split = $event.target.id.split("-");
   if(split[0] == 'fe')
   {
    var first = $("#fe-from-"+split[2]).val();
    var second = $("#fe-to-"+split[2]).val();
    var add_date = first+" to "+second;
    (<HTMLInputElement>document.getElementById("cd"+split[2])).value = add_date;
   }else if(split[0] == 'se')
   {
    var first = $("#se-from-"+split[2]).val();
    var second = $("#se-to-"+split[2]).val();
    var add_date = first+" to "+second;
    (<HTMLInputElement>document.getElementById("se"+split[2])).value = add_date; 

   }
   else if(split[0] == 'oc')
   {
    var first = $("#oc-from-"+split[2]).val();
    var second = $("#oc-to-"+split[2]).val();
    var add_date = first+" to "+second;
    (<HTMLInputElement>document.getElementById("oc"+split[2])).value = add_date;

   }

}

ischeakboxcheak(tilldate_cheak)
{
  if(tilldate_cheak == 1)
  {
    this.cheaktype = true;
    this.dateToClass = 'collapse';
  }
  else
  {
    this.cheaktype = false;
   this.dateToClass = 'collapse in';
  }
}

Create(user)
{
  this.myVar = true;
  var Formaledu_ln = this.formalEducation.length;

  for(var i=0;i<Formaledu_ln;i++)
  {
    if($("#formaledu_cheak"+i).is(':checked'))
    {
      this.formalEducation[i].dateTo = 'Till Date';
      var tilldate = '1';
    }
    else
    {
     var tilldate = '0';
    }
  }

  var otherC_len = this.otherCertification.length;
  for(var j=0;j<otherC_len;j++)
  {
    if($("#otheredu_cheak"+j).is(':checked'))
    {
      this.otherCertification[j].dateTo = 'Till Date';
      var tilldate = '1';
    }
    else
    {
     var tilldate = '0';
    }
  }

  var sportedu_len = this.sportEducation.length;
  for(var k=0;k<sportedu_len;k++)
  {
    if($("#sportedu_cheak"+k).is(':checked'))
    {
      this.sportEducation[k].dateTo = 'Till Date';
      var tilldate = '1';
    }
    else
    {
     var tilldate = '0';
    }
  }

  //alert(JSON.stringify(this.sportEducation));
  //console.log(JSON.stringify(this.formalEducation));


   this.final ={'userid': this.userid, 'prof_id' : this.prof_id,'profiledata': {'Education' : {'formalEducation': this.formalEducation,'otherCertification': this.otherCertification ,'sportEducation':this.sportEducation},'Experience':{'experienceAsPlayer':this.experienceAsPlayer , 'workExperience':this.workExperience },'HeaderDetails':this.headerdetails}};

   // alert(JSON.stringify(this.final));
  // console.log(JSON.stringify(this.final));

    this._accountService.updateProfileData(this.final).subscribe( res => 
    {
    this.myVar = false;
    });
  
}
}