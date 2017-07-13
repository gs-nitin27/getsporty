import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';

import { loginServices } from '../../services/login.services';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


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
// public jsondata = <any>[];

 constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute){}
 
 ngOnInit()
{ 
  this.profile();
 }

profile()
   {
       this._accountService.profiledata(this.userid).subscribe(data => { 
       this.Users = data ;
       });
       }

    //getdata() : void {
   // this.route.params
     // .switchMap((params: Params) => this._accountService.getHero(+params['id']))
     // .subscribe(res => this.Users = res);
     // }   

  



}