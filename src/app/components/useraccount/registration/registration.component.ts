
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { Injectable, Inject , OnInit, Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent 
{
public users: User = new User();
sports :any;
prof_list :any;
status : any;
visible : boolean;
public userid  = localStorage.getItem('currentUserid');
// public userid : any;
public email : any;
public emaildata : any;
public isDisabled : boolean;
public cheaksport : boolean;

constructor(private _activatedRoute :ActivatedRoute,private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute, private _notificationService :NotificationService)
{
  this._notificationService.popToastSuccess('Welcome', 'Please Fill All Details');
}
ngOnInit() 
{  
    // let win = (window as any);
    // if(win.location.search !== '?loaded' ) {
    //     win.location.search = '?loaded';
    //     win.location.reload();
    // }

    // this._activatedRoute.params.subscribe(params => {
    //   this.userid = +params['userid']; 
     // alert(this.userid);
    

      if(!this.userid)
      {
        let win = (window as any);
        if(win.location.search !== '?loaded' ) {
            win.location.search = '?loaded';
            win.location.reload();
        }
      }
// });

    this.getEmailid();  
    this.professionList();
    this.Sportlist();

}

getEmailid()
{
  this._accountService.getEmailid(this.userid).subscribe(data => 
    { 
    this.users.userid = this.userid;  
    this.users.email = data;

    if(this.users.email)
    {
      this.isDisabled = false;
    }
    else
    {
      this.isDisabled = true;
    }
  });
}
Sportlist() 
{
  this._accountService.Sportlist().subscribe(data => { this.sports = data;});
}
professionList()
{
this._accountService.professionList().subscribe(data => { this.prof_list = data;})
}

cheakProf(profdata)
{
  if(profdata.id == "2" || profdata.id == "8")
  {
    this.cheaksport = true;
  }
  else
  {
    this.cheaksport = false;
  }
}

register(users:any)
{
  users.prof_id = users.profs.id;
  users.prof_name =  users.profs.profession;

  if( users.profs.id == '2' || users.profs.id == '8')
  {
    
  }
  else
  {
    users.sport = '';
  }
  // alert(JSON.stringify(users));
  this.visible = false;
  this._accountService.Registration(users).subscribe(data => {  
    // alert(JSON.stringify(data));
    
    if(JSON.stringify(data.status) =="0")
    {
      // alert("asdfas");
      this.visible =true;
      this.status = "Please Fill All Details";
    }else
    {
      localStorage.setItem('prof_id' , data.data.prof_id);
      localStorage.setItem('currentUser',data.data.name); 
      this._router.navigate(["/home"]);
    // }else
    // {
    //   this.visible =true;
    //   this.status = "Error in Registration"; 
     }
  });
}
}
