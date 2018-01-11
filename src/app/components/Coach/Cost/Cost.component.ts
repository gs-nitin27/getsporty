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
     providers : [CostServices,JobServices]
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
  public publis: any;
  myVar:boolean;
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
  jtitle:any;
  duration : any;


constructor(private _router : Router, private _jobservices : JobServices,private _costservice : CostServices, private _activatedRoute :ActivatedRoute) 
{
    this._activatedRoute.params.subscribe(params => 
        {
           this.tempUrl = params['j_id']; 
           this.jtitle = params['title'];
           this.id = atob(this.tempUrl);
        });
        
 }
ngOnInit()
{
  this.myVar=true;
  this.paymentPlan();
  this.hashdata.furl = "http://localhost/PayUMoney-PHP-Module-master/failure.php";
  this.hashdata.surl = "http://localhost/PayUMoney-PHP-Module-master/success.php";
}

paymentPlan()
{
var tdata ;
var tplan;
this._costservice.PaymentPlan().subscribe(data => 
{ 
   this.plan = data;
   for(let pplan in data)
   {
      tdata = data[pplan]['amount'];
      tplan = data[pplan]['duration'];
   }
   this.myVar=false;
   this.onChange(tdata,tplan);

});
} 

onChange(amount,period)
{
    this.plancost  = amount;
    this.gst  = 200;
    var tot = +this.gst + +amount;
    this.total  =  tot;
    this.duration = period;
    this.hashdata.amount =  this.total;

}
payment(total_amount)
{
      
   // alert(this.duration);
    
    // this.costvalue.userid = localStorage.getItem('currentUserid');
	// this.costvalue.invoice_id = "GSJ/1/32/030118";
    // this.costvalue.user_item = "job"
	// this.costvalue.module = "i"
	// this.costvalue.amount = total_amount;
    // this.costvalue.transaction_id = "123645479dasf";

   //alert(JSON.stringify(this.costvalue));
   this.myVar=true;
 
   var monthNames = ["Jan", "Feb", "Mar","Apr", "May", "June", "July","Aug", "Sept", "Oct","Nov", "Dec"];
   var newdate =  new Date(); 
   var day = newdate.getDate();
   var monthIndex = newdate.getMonth()+1;
   var monthInd = newdate.getMonth();
   var year = newdate.getFullYear().toString().substr(-2);
   var invoice = "GSJ/1/" + this.id + "/"+day+monthIndex+year;
   var invoice_date = day + '-' + monthNames[monthInd] + '-' + year;
   this.costvalue.userid =localStorage.getItem('currentUserid');
   this.costvalue.invoice_id=invoice;
   this.costvalue.user_item=this.id; 
   this.costvalue.module="1"; 
   this.costvalue.amount=total_amount; 
   this.costvalue.billing_status="1"; 
   this.costvalue.transaction_id="0D034569918";
   this.costvalue.date = invoice_date;
   this.costvalue.title = this.jtitle;
   this.costvalue.duration = this.duration;
   this._costservice.payment(this.costvalue).subscribe( res =>
   { 
     this.result = res;
   //  this.getJobList();  
   this.jobpublish(this.id)
   });



// this._costservice.payment(this.costvalue).subscribe(res => this.result =res);
    
}

jobpublish(jobid)
{
 this._jobservices.publish(jobid ,"1").subscribe(res => 
    { 
    this.publis = res;
    //alert(this.publis);
    if( this.publis == "1")
    { 
        this._router.navigate(["/jobdashboard"]);
    } 
    
    this.myVar=false;
 
    });
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