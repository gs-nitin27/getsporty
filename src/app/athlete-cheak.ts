import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { Profiledata } from './components/model/profile.model';


@Injectable()
export class AthleteCheak implements CanActivate {
 constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
                if (localStorage.getItem('prof_id') == "1") 
        {
            return true;
        }
       
        this._router.navigate(['/login']);
        return false;              
    }
}