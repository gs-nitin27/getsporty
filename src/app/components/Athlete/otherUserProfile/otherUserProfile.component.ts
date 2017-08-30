import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;
 

@Component({
	 selector : 'app-otherprofile',
	 templateUrl : './otherUserProfile.component.html',
	 styleUrls : ['./otherUserProfile.component.css'],
})
export class OtherUserProfileComponent implements OnInit
{

public  myVar : boolean;
public user_id : any;
public prof_id : any;
user : User = new User();
headerdetails : User = new User();
bio : User = new User();
BestResults = [];
Award = [];
LatestResult = [];
final : any;

Achivement : any;


 
constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private _activatedRoute: ActivatedRoute)
{
  

}

ngOnInit()
{
//this._activatedRoute.params.subscribe(params => { this.user_id = +params['id']; this.prof_id = //+params['prof_id']});	

	// alert(this.prof_id);

  this.prof_id = localStorage.getItem('prof_id');
  this.user_id = localStorage.getItem('currentUserid');

	this.getUserData();
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

addLatestResult()
{
  this.LatestResult.push({'dateOfCompetation':'','detail':'','nameOfCompetation':'','opponent':'','result':'','round':'','score':''});
}

latestResults(latestResults_data)
{
  if(latestResults_data != " ")
  {
  var latestResults_lenght = latestResults_data.length;
  for(var j = 0; j<latestResults_lenght ; j++)
  {
    this.LatestResult.push(latestResults_data[j]);
  }
  }
  else
  {
     this.LatestResult.push({'dateOfCompetation':'','detail':'','nameOfCompetation':'','opponent':'','result':'','round':'','score':''});
  }
}
addAwards()
{
  this.Award.push({'date':'','description':'','nameOfAward':''});
}

awards(award_data)
{
   if(award_data != " ")
   {
      var award_length = award_data.length;
      for(var k=0 ; k<award_length;k++)
      {
       this.Award.push(award_data[k]);
      } 
   }  
   else
   { 
    this.Award.push({'date':'','description':'','nameOfAward':''});
   }
}
addBestResult()
{
  this.BestResults.push({'date':'','nameComptation':'','result':'','rounds':''});
}
bestResult(bestResult_data)
{
	if(bestResult_data != " ")
	{
      var bestResult_length =bestResult_data.length; 
      for(var i = 0 ; i<bestResult_length;i++)
      {
        this.BestResults.push(bestResult_data[i]);
      }
	}
  else
  {
   this.BestResults.push({'date':'','nameComptation':'','result':'','rounds':''});
  }
}

Submit()
{  
   this.myVar = true;
  this.final ={'userid': this.user_id, 'prof_id' : this.prof_id,'profiledata': {'Achivement' : {'awards':this.Award,'bestResult': this.BestResults},'Bio': this.bio,'Header':this.headerdetails,'LatestResults' : this.LatestResult}};

 // console.log(JSON.stringify(this.final));

  this._accountService.updateProfileData(this.final).subscribe( res => 
  {

  this.myVar = false;

  });
}

}