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
  hashdata : CostModule = new CostModule();
  public keydata : any;

  key : any;
  hash : any;
  txnid : any;
  amount : any;
  firstname : any;
  email : any;
  phone : any;
  productinfo : any;
  surl : any;
  furl : any;


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
  this.hashdata.furl = "http://localhost/PayUMoney-PHP-Module-master/failure.php";
  this.hashdata.surl = "http://localhost/PayUMoney-PHP-Module-master/success.php";
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
    this.hashdata.amount =  this.total;

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

createHash(data) 
{
  data.key    = "gtKFFx";
  this._costservice.createHash(data).subscribe( res => 
  { 
            this.keydata = res;
            data.hash   = res.hashkey;
            data.taxid  =  res.taxid;

           // alert(JSON.stringify(this.keydata));
            alert(JSON.stringify(data)); 
        // this._costservice.pay(data).subscribe( res => alert(res));   

       
        this.key = data.key;
        this.hash = res.hashkey; 
        this.txnid = res.taxid;
        this.amount = data.amount;
        this.firstname =data.firstname;
        this.email =data.email;
        this.phone =data.phone;
        this.productinfo = {"name" : 'hiii'};
        this.surl =data.surl;
        this.furl =data.furl;
        // this.key =data.key

        //   var data1 = eval(data);
        //   $.ajax({
        //     type: "POST",
        //     url: 'https://test.payu.in/_payment',
        //     data: data1,
        //     dataType: "jsonp",
        //     headers: {
        //         "Accept":"application/json"
        //     },
        //     error: function(xhr, status, error) {
        //         alert("failed");
        //         console.log("ajax failed: "+error);
        //         },
        //     success: function(result) 
        //         {
        //         console.log("niitn");
        //         }
        // });




                 
    }
    );
}



}