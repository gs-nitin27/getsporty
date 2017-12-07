import { Component,OnInit,Input,Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { OrgModel } from '../../model/org.model';
import { JobModule } from '../../model/job.model';
import { JobServices } from '../../services/job.services';
import { loginServices } from '../../services/login.services';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;

@Component({
	 selector : 'app-cost',
	 templateUrl : './Cost.component.html',
     styleUrls : ['./Cost.component.css'],
     providers : [JobServices]
})
export class CostComponent implements OnInit
{

    ngOnInit(){}
}