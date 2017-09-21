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


totalPay : number = 0;


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
  this._accountService.getClassFeeList(this.id,this.user_id).subscribe(result => 
 {
     this.classfeeList = result;

     for(let key in result)
     {
       if(result[key]['status'] == '0')
       {
       this.totalPay += Number(result[key]['payment_amount']);
       }
     }
  });
 }

 GeneratePdf()
{
    var d = new Date();
    var m = ("0" + (d.getMonth() + 1)).slice(-2);
    var y = d.getFullYear().toString().substr(-2);

    var invoice = 'DHS/' + m + y + '/' + this.user_id ;
    var url = 'http://getsporty.in/html_pdf/invoice.php?invoiceid='+invoice;
    
    alert(invoice);

     window.open(url, '_blank');
    
  
}



}