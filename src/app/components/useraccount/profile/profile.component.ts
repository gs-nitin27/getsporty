import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';

import { loginServices } from '../../services/login.services';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
declare var $:any;
 

@Component({
	 selector : 'app-profile',
	 templateUrl : './profile.component.html',
	 styleUrls : ['./profile.component.css'],
})
export class ProfileComponent implements OnInit
{

  @Input() userdata: User;

public userid  = localStorage.getItem('currentUserid');

 public Users: User;
 public newdata: User;

  a: User;

 constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute){}
 ngOnInit()
{ 
  this.profile();
 // this.getprofiledata();
  this.newtesting();
  }

 newtesting()
 {
 this._accountService.send_request(this.userid).then((result) =>
  {  
       this.a=result;
       
       //var count = 0;
    //for (var i in result) {
  // if (result.hasOwnProperty(i)) count++;
//}

let keys = []; 
for(let key in result){
   if(result.hasOwnProperty(key)){  
  for(let key1 in result[key]){
   if(result[key].hasOwnProperty(key1))
   {
       keys.push(result[key][key1]);
   }     
   }    
}
}
  alert(JSON.stringify(keys));
  }
  );

 }

profile()
{
       this._accountService.profiledata(this.userid).subscribe(data => { 
       this.Users = data ;
       });


}

getprofiledata()
{
   this._accountService.getprofiledata(this.userid).subscribe(data => 
   {
    this.newdata = data ;


    alert(JSON.stringify(this.newdata));
     

   });


}  



  



}