import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { OrgModel } from '../../model/org.model';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;

@Component({
	 selector : 'app-org',
	 templateUrl : './org.component.html',
	 styleUrls : ['./org.component.css'],
})

export class OrgComponent implements OnInit
{
  org : OrgModel = new OrgModel();
  res : any;


  constructor(private _accountService: loginServices,private router: Router) {}

	ngOnInit()
	{
        
	}

	orgregister(org:any)
	{
		alert(JSON.stringify(org));

     this._accountService.orgAdd(org).subscribe(data => this.res = data );

	}	
}