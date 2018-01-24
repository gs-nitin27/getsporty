import { Injectable, Inject } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http'
import {Observable, BehaviorSubject, Subject} from "rxjs/Rx";
import { Router, ActivatedRoute } from '@angular/router';
import {xhrHeaders} from "./xhr-headers";
import 'rxjs/Rx'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { JobModule } from '../model/job.model';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';

@Injectable()
export class CostServices 
{
   public baseurl : string;
   public sportlistUrl : string;

constructor(private _http: Http,@Inject(APP_CONFIG) private _config: IAppConfig ,private router: Router)
{
  this.baseurl = this._config.apBaseUrl;
  this.sportlistUrl = this._config.apBaseUrl + "/angularapi.php?act=sportlisting";
}
PaymentPlan() 
{
    return this._http.get(this.baseurl + "/paymentController.php?act=paymentPlan").map(res => res.json());
}
payment(amount)
{
    return this._http.post(this.baseurl + "/paymentController.php?act=payment",amount).map(res => res.json());
}
createHash(data)
{
    return this._http.post(this.baseurl + "/paymentController.php?act=creatHash",data).map(res => res.json());
}
pay(data)
{
  return this._http.post("https://test.payu.in/_payment",data);
}
useremaildata(userid)
{
 return this._http.get(this.baseurl + "/paymentController.php?act=useremaildata&userid="+userid).map(res => res.json());
}

getTransactionList(userid)
{
 return this._http.get(this.baseurl + "/paymentController.php?act=getTransactionList&userid="+userid).map(res=>res.json());
}
getInvoiceData(invoiceid)
{
    return this._http.get(this.baseurl + "/paymentController.php?act=getInvoiceData&invoiceid="+ invoiceid).map( res =>res.json());
}
}