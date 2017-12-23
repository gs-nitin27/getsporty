import { Injectable, Inject } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'
import { User } from  '../model/login.model';
import { Observable, BehaviorSubject, Subject } from "rxjs/Rx";
import { AuthInfo, AuthInfoResponce } from "../../globalUserInfo";
import { GlobalEventsManager } from '../../globalEventManager';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service'
import { xhrHeaders } from "./xhr-headers";
// import { LoginResponse } from '../model/loginResponce';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';


/**
 * Account service class , which deals with all the http operation and make 
 * server side connection to access data from server side 
 */
@Injectable()
export class AccountService {

    static UNKNOWN_USER = new AuthInfo(new AuthInfoResponce(null, null, null, null));
    public  baseUrl: string;
    authInfo$: BehaviorSubject < AuthInfo > = new BehaviorSubject < AuthInfo > (AccountService.UNKNOWN_USER);

    public responce: any;
    /**
     * @param  {Http} private_http
     * @param  {GlobalEventsManager} private_globalEventsManager
     * @param  {Router} private_router
     * @param  {NotificationService} private_notificationService
     * @param  {IAppConfig} private_config
     */
    constructor(private _http: Http,
        private _globalEventsManager: GlobalEventsManager,
        private _router: Router,
        private _notificationService: NotificationService,
        @Inject(APP_CONFIG) private _config: IAppConfig) {
          this.baseUrl = this._config.apBaseUrl;  
        }

    /**
     * funtion to login in application 
     * @param  {Login} login
     * @returns void
     */
    public login(login: User) : void {
      

      //this._http.post(this.baseUrl + "/user_access_controller.php?act=gs_login",user).map((res => res.json()));

     // let url = this.baseUrl + "/angularapi.php?act=angulartest" + "&email=" + login['email'] + "&password=" + login['password'];
        this._http.post(this.baseUrl + "/user_access_controller.php?act=gs_login",login).map((res => res.json()))
            .subscribe(
                (data) => { 
                  alert(JSON.stringify(data.data));  
                  this.afterLoginResponce(data.data)
                
                }, (err) => console.log("Error" + err),
            );
    }
    
   /**
    * funtion to remove all the session data when user press back button of browser , and reach to login screen
    * @returns void
    */
   public clearDataOnBackMovement()  : void {
        this.authInfo$.next(AccountService.UNKNOWN_USER);
        this._globalEventsManager.showNavBar.emit(false);
    }
    
    /**
     * function to logout user , and remove its data from current session
     * @returns void
     */
    public logOut()  : void {
        this.authInfo$.next(AccountService.UNKNOWN_USER);
        this._globalEventsManager.showNavBar.emit(false);
        this._router.navigate(['/login']);
    }

   /**
    * function to process login responce if login is successfull
    * @param  {LoginResponse} loginResponce
    * @returns void
    */ 
   public afterLoginResponce(loginResponce: User)  : void {


        // This is observable after responce , I am saving user responce in authinfo 
        const subject = new Subject < any > ();
        this._globalEventsManager.showNavBar.emit(true);
        const authInfo = this.setGlobalDataInAuthInfo(loginResponce);

        this.authInfo$.next(authInfo);
        subject.next(authInfo);
        subject.complete();

        alert(JSON.stringify(authInfo));  

        this._router.navigate(['/home']);
       // this._notificationService.popToastSuccess('Welcome', 'User has authenticated to use this site');
    }

    /**
     * function to add login responce in AutuInfo , which is accessable in global manner
     * @param  {LoginResponse} loginResponce
     * @returns AuthInfo
     */ 

   public setGlobalDataInAuthInfo(loginResponce: User): AuthInfo {
        return new AuthInfo(new AuthInfoResponce(
            loginResponce.name,
            loginResponce.userid,
            loginResponce.prof_id,
            loginResponce.user_image
        ));
    }
}