import { Injectable, Inject } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {xhrHeaders} from "./xhr-headers";



@Injectable()
export class Globledataservices {
public showMenu : boolean;
public username  = localStorage.getItem('currentUser');
public userid  = localStorage.getItem('currentUserid');

constructor() 
    {

      if(this.userid) 
       {
          this.showMenu = true;
       }
      else
      {
       this.showMenu = false;
       }


    }

}

 