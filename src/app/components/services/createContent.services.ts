import { Injectable } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {xhrHeaders} from "./xhr-headers";
import { CreateContent } from  '../model/createContent.module';
@Injectable()
export class createContentServices {
    http: Http;
  

    posts_Url: string = 'http://localhost/testingapp/angularapi.php?act=createcontent';
    constructor(public _http: Http) {
       this.http = _http;
    }
    saveContent(contents:CreateContent) {
       return this._http.post(this.posts_Url, contents, xhrHeaders).map(res =>  res.json()).share(); 	    
    }
}

