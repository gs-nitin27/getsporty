import { Injectable, Inject } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http'
import {Observable, BehaviorSubject, Subject} from "rxjs/Rx";
import { Router, ActivatedRoute } from '@angular/router';
import {xhrHeaders} from "./xhr-headers";
import { contentModel } from  '../model/viewContent.model';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';
/**
 * contentModel service class , which deals with all the http operation and make 
 * server side connection to access data from server side 
 */
@Injectable()
export class viewContentServices {
     public baseUrl: string;
   
    /**
     * @param  {Http} private_http
     * @param  {IAppConfig} private_config
     */
    constructor(private _http: Http,
                 @Inject(APP_CONFIG) private _config: IAppConfig) {
                      this.baseUrl = this._config.viewcontenturl;
                 }
 
    /**
     * function to get Mytimesheet data by its id
     * @param  {number} id
     * @returns Observable
     */
     public  loadcontentModel(id: number) : Observable<any>  {
        return this._http.get(this.baseUrl)
            .map(res => < contentModel[] > res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}



