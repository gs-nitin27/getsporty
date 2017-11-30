
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { Injectable, Inject , OnInit, Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

public users: User = new User();
sports :any;
prof_list :any;
status : any;
visible : boolean;
constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute){}
ngOnInit() 
{  
    this.professionList();
    this.Sportlist();    
}
Sportlist() 
{
  this._accountService.Sportlist().subscribe(data => { this.sports = data;});
}
professionList()
{
this._accountService.professionList().subscribe(data => { this.prof_list = data;})
}
register(users:any)
{
  this.visible = false;
  this._accountService.Registration(users).subscribe(data => {    
    if(JSON.stringify(data.status) =="0")
    {
      this.visible =true;
      this.status = "You are already Registerd";
    }else if(JSON.stringify(data.status) =="1")
    {
      this.visible =true;
      this.status = "  A Mail is sent To your Registerd mail"; 
    }else
    {
      this.visible =true;
      this.status = "Error in Registration"; 
    }
  });
}
}
