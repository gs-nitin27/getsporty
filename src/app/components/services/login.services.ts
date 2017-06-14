import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { User } from '../model/login.model';
import {xhrHeaders} from "./xhr-headers";
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
                      this.baseUrl = this._config.createeventurl;
                      this.sportlistUrl = this._config.sportlist;
                      this.loginurl    = this._config.loginUrl;

                 }
    saveEvent(events:CreateEvent) {
       return this._http.post(this.baseUrl, events, xhrHeaders).map(res =>  res.json()).share();      
    }

 Sportlist() {
    return this._http.get(this.sportlistUrl)
      .map(res => res.json())
  }

  public login(login: User) : void {
        let url = this.loginurl + "&email=" + login['email'] + "&password=" + login['password'];
        this._http.get(url).map((res => res.json()))
            .subscribe(
                (data) => { if(data != null){ 
                let user = data;
                if (user) {
                    localStorage.clear();
                    localStorage.setItem('currentUser',data.customer);
                    localStorage.setItem('currentUserid',data.userId);

                    }


                         this.router.navigate(["/contentview"]);
                         }
                         else
                         {
                           this.router.navigate(["/login"]);
                         }
             }, (err) => console.log("Error" + err),
            );
    }

}

