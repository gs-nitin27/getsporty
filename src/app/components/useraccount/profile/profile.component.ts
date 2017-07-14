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
 testing : any[];
 inner1 : any[];
 outer1: any[];
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
    
       
let keys = [];
let outer = [];
let inner = []; 
for(let key in result){
    if(result.hasOwnProperty(key)){
       
       //outer.push(result[key]);

         //alert(JSON.stringify(result[key]));  
      for(let key1 in result[key]){
       if(result[key].hasOwnProperty(key1))
      { 
          
          inner.push(result[key][key1]);
       // alert(result[key][key1]);
       //keys.push(result[key][key1]);
       }     
     }    
}
}  
    this.inner1 = inner;
    this.outer1 = outer;
    alert("outer" + JSON.stringify(this.inner1));
    alert("inner"+JSON.stringify( this.outer1));
  //this.testing = keys;
  //alert(JSON.stringify(this.testing));
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


    //alert(JSON.stringify(this.newdata));
     

   });


}  



  



}