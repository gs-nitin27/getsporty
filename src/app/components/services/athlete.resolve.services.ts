import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import {ActivatedRoute,Router,ActivatedRouteSnapshot} from '@angular/router';
import { loginServices } from './login.services';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {xhrHeaders} from "./xhr-headers";
import { Class } from  '../model/class.model';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';

@Injectable()
export class AtheleteDataView 
{

    constructor(private router: Router,private _loginServices : loginServices) { }
    resolve(route: ActivatedRouteSnapshot){

        let id = +route.params['id'];
        return this._loginServices.AthletedashboardData("192").subscribe(hero => {
            if (hero) {
                return hero;
            } else { // id not found
                this.router.navigate(['/dashboard']);
                return false;
            }
        });
    }
}