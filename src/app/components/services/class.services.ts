import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {xhrHeaders} from "./xhr-headers";
import { Class } from  '../model/class.model';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';

@Injectable()
export class Classdata
{
    baseUrl : any;
constructor(private _http : Http , @Inject(APP_CONFIG) private _config: IAppConfig) {
    this.baseUrl = this._config.apBaseUrl;
}

getDietPlan(userid:any,userType : any)
{
   return this._http.get(this.baseUrl + "/dietPlanController.php?act=list_diet_plan&userid=" + userid + "&usertype="+userType).map(res =>  res.json()); 	
}

}