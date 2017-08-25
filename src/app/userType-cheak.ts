
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { Profiledata } from './components/model/profile.model';


@Injectable()
export class Guard implements CanActivate {
 constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        if (localStorage.getItem('prof_id')  == "1") 
        {
            this._router.navigate(['/login']);
             return false;
           
        }
        else
        {
         return true;
        }              
    }
}