import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { Class } from '../../model/class.model';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';


declare var $:any;
 

@Component({
	selector:'app-athleteheader',
	templateUrl: './athleteHeader.component.html',
	styleUrls:['./athleteHeader.component.css'],
})
export class AthleteHeaderComponent implements OnInit
{

constructor(private _router: Router,private _activatedRoute: ActivatedRoute){}

ngOnInit()
{
	
}

logout()
{
    localStorage.clear();
	//this._router.navigate(["/login"]);
	
	window.location.replace('/login');

}
}