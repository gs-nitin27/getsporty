import { Component,OnInit,Input,Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { OrgModel } from '../../model/org.model';
import { JobModule } from '../../model/job.model';
import { CostModule } from '../../model/cost.model';
import { JobServices } from '../../services/job.services';
import { loginServices } from '../../services/login.services';
import { CostServices } from '../../services/cost.services';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';

import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;

@Component({
	 selector : 'app-cost',
	 templateUrl : './Cost.component.html',
     styleUrls : ['./Cost.component.css'],
     providers : [CostServices]
})
export class CostComponent implements OnInit
{
  costvalue : CostModule = new CostModule();
  public plan:any;
  public plancost:number;
  public gst:number;
  public total:number;
  public id:any;
  public tempUrl:any;
  public result : any;

constructor(private _costservice : CostServices, private _activatedRoute :ActivatedRoute) 
{
    this._activatedRoute.params.subscribe(params => 
        {
           this.tempUrl = params['j_id']; 
           this.id = atob(this.tempUrl);
        });
 }
ngOnInit()
{
  this.paymentPlan();
}

paymentPlan()
{
var tdata ;
this._costservice.PaymentPlan().subscribe(data => 
{ 
   this.plan = data; 
   
   //console.log(this.plan);
   for(let pplan in data)
   {
      tdata = data[pplan]['amount'];
   }
   this.onChange(tdata);

});
} 

onChange(amount)
{
    this.plancost  = amount;
    this.gst  = 200;
    var tot = +this.gst + +amount;
    this.total  =  tot;
}
payment(total_amount)
{
    this.costvalue.userid = localStorage.getItem('currentUserid');
	this.costvalue.invoice_id = "GSJ/1/32/030118";
    this.costvalue.user_item = "job"
	this.costvalue.module = "i"
	this.costvalue.amount = total_amount;
    this.costvalue.transaction_id = "123645479dasf";

//alert(JSON.stringify(this.costvalue));

this._costservice.payment(this.costvalue).subscribe(res => this.result =res);
    
}
}