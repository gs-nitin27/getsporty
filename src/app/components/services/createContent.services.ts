import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {xhrHeaders} from "./xhr-headers";
import { CreateContent } from  '../model/createContent.module';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';



@Injectable()
export class createContentServices {
    public baseUrl: string;

constructor(private _http: Http,
                 @Inject(APP_CONFIG) private _config: IAppConfig) {
                      this.baseUrl = this._config.createcontenturl;
                 }
    saveContent(contents:CreateContent) {
       return this._http.post(this.baseUrl, contents, xhrHeaders).map(res =>  res.json()).share(); 	    
    }
}

