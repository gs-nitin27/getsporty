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
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';
import { contentModel } from  '../model/viewContent.model';



@Injectable()
export class viewContentServices {
     public baseUrl: string;


    constructor(private _http: Http,
                 @Inject(APP_CONFIG) private _config: IAppConfig) {
                      this.baseUrl = this._config.apBaseUrl;
                 }

     public  loadcontentModel(id: string) : Observable<any>  {
        return this._http.get(this.baseUrl + "/angularapi.php?act=contentangularlex" + "&userid="+id)
            .map(res => < contentModel[] > res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}



