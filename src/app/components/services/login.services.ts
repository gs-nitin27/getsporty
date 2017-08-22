import { Injectable, Inject } from '@angular/core';
import { HttpModule, Http,Response,Headers,RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subject} from "rxjs/Rx";
import 'rxjs/Rx'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { User } from '../model/login.model';
import { xhrHeaders} from "./xhr-headers";
import { CreateEvent } from  '../model/createEvent.module';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';



@Injectable()
export class loginServices {
    public baseUrl: string;
    public sportlistUrl : string;
    public loginurl     : string;

constructor(private _http: Http,
                 @Inject(APP_CONFIG) private _config: IAppConfig,private router: Router) {

 

                      this.baseUrl = this._config.apBaseUrl;
                     

                 }
saveEvent(events:CreateEvent) {
       return this._http.post(this.baseUrl + "/angularapi.php?act=createevent", events, xhrHeaders).map(res =>  res.json()).share();      
    }

 Sportlist() {
    return this._http.get(this.baseUrl + "/angularapi.php?act=sportlisting")
      .map(res => res.json())
  }

public login(login: User) {
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers });
        let url = this.baseUrl + "/angularapi.php?act=angulartest" + "&email=" + login['email'] + "&password=" + login['password'];
       return this._http.get(url,options).map((res => res.json()))
         ;
    }

profiledata(id: String , prof_id :string) 
{       
   return this._http.get(this.baseUrl + '/angularapi.php?act=getUserProfile&userid='+id+'&prof_id='+prof_id)
        .toPromise()
        .then( res => res.json().data);

}




public Sociallogin(login: User) 
{
    return this._http.post(this.baseUrl + "/angularapi.php?act=socialLogin",login,xhrHeaders).map((res => res.json()));
 }




}

