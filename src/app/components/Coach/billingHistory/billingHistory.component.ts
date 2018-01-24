import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { CostModule } from '../../model/cost.model';
import { CostServices } from '../../services/cost.services';
import { loginServices } from '../../services/login.services';
import {ActivatedRoute,Router} from '@angular/router';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';
declare var $:any;

@Component({
	selector: 'app-billingHistory',
    templateUrl: './billingHistory.component.html',
    styleUrls: ['./billingHistory.component.css'],
    providers:[CostServices]
})

export class BillingHistory implements OnInit
{
 userid = localStorage.getItem('currentUserid');
 username = localStorage.getItem('currentUser');
 email = localStorage.getItem('email');
 phone = localStorage.getItem('phone');

 TransactionList : any;
 InvoiceData : any;
 

constructor(private _costServices: CostServices , private router: Router) 
{ 
//alert(this.userid);
}
ngOnInit()
{
    this.getTransactionList();
    
}

getTransactionList()
{
    this._costServices.getTransactionList(this.userid).subscribe( res => {this.TransactionList = res;
    
  //   alert(JSON.stringify(this.TransactionList));

    });
}

invoicedata(invoiceid)
{
  
  this._costServices.getInvoiceData(invoiceid).subscribe( res => { this.InvoiceData = res;
  
   // alert(JSON.stringify(this.InvoiceData));
 
});
    
}
}