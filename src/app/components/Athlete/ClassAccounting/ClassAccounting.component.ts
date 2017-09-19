import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { Class } from '../../model/class.model'; 
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';
import { loginServices } from '../../services/login.services';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;
 

@Component({
	 selector : 'app-classccounting',
	 templateUrl : './ClassAccounting.component.html',
	 styleUrls : ['./ClassAccounting.component.css'],
})
export class ClassAccounting implements OnInit
{

public classfeeList : any;
public classlist : any;
public user_id : any;
public id : any;

classdata : Class = new Class();

constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private _activatedRoute: ActivatedRoute,@Inject(APP_CONFIG) private _config: IAppConfig)
{
	this.user_id = localStorage.getItem('currentUserid');
}

ngOnInit()
{
   this._activatedRoute.params.subscribe(params => {
            this.id = +params['id']; 
  });



    this.GetClassData();	
    this.GetClassFeeList();
}

GetClassData()
{ 
  this._accountService.classdata(this.id,this.user_id).subscribe(result => this.classdata = result);	 
}

GetClassFeeList()
{
  this._accountService.getClassFeeList(this.id,this.user_id).subscribe(result => this.classfeeList = result);
}


}