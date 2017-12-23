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
import { Class } from '../model/class.model';
import { xhrHeaders} from "./xhr-headers";
import { CreateEvent } from  '../model/createEvent.module';
import { APP_CONFIG } from '../../app.config';
import { IAppConfig }  from '../../app.iconfig';

@Injectable()
export class loginServices {
    public baseUrl: string;
    public userProfileData :any;
    public sportlistUrl : string;
    public loginurl     : string;

constructor(private _http: Http,@Inject(APP_CONFIG) private _config: IAppConfig,private router: Router) 
{
    this.baseUrl = this._config.apBaseUrl;                     
}
saveEvent(events:CreateEvent) {
       return this._http.post(this.baseUrl + "/angularapi.php?act=createevent", events).map(res =>  res.json());      
    }

Sportlist() {
    return this._http.get(this.baseUrl + "/angularapi.php?act=sportlisting")
      .map(res => res.json())
  }
 
professionList()
  {
   return this._http.get(this.baseUrl + "/getListingController.php?act=professionlisting")
   .map(res => res.json().data);
  }

public login(login: User) 
{
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers });
        let url = this.baseUrl + "/angularapi.php?act=angulartest" + "&email=" + login['email'] + "&password=" + login['password'];
       return this._http.get(url).map((res => res.json()));
}

public manageLogin(user:User)
{
  return this._http.post(this.baseUrl + "/user_access_controller.php?act=gs_login",user).map((res => res.json()));
  //return this._http.post(this.baseUrl + "/angularapi.php?act=manageLogin",user).map((res => res.json()));
}

public manageRegistration(user: any) 
{
 // alert(user);
  return this._http.post(this.baseUrl + "/user_access_controller.php?act=gs_signup",user).map((res => res.json()));  
}

public getEmailid(userid: any)
{
 return this._http.get(this.baseUrl + "/angularapi.php?act=getEmailid&userid="+userid).map((res)=>res.json().email);
}

Athleteprofiledata(id: String , prof_id :string)
{       
   this._http.get(this.baseUrl + '/angularapi.php?act=getUserProfile&userid='+id+'&prof_id='+prof_id).map( res => res.json().data).subscribe(
          (data) => {
            localStorage.setItem('prof_data',JSON.stringify(data));
            // this.userProfileData = data;
            //  this.athProfileData(data)
            // this.ViewProfileData();
          }, (err) => console.log("Error" + err),
      );
          return "1";
    }

profiledata(id: String , prof_id :string) : Observable<any>
{       
   return this._http.get(this.baseUrl + '/angularapi.php?act=getUserProfile&userid='+id+'&prof_id='+prof_id).map( res => <User[]>  res.json().data);
}

Socialloginpromise(login: User): Promise<any> 
{
  return this._http.post(this.baseUrl + "/angularapi.php?act=socialLogin",login).toPromise()
      .then(response => {
          return response.json();
      })
      .catch(err => err);
}

public Sociallogin(login: User) 
{
    return this._http.post(this.baseUrl + "/angularapi.php?act=socialLogin",login).map((res => res.json()));
}

public JoinClass(classdata:Class)
{
  return this._http.post(this.baseUrl + "/connect_user.php?act=add_joining_code", classdata)
            .map((res => res.json()));
}

getClassList(userid : string, email:string, contact_no:string)
{

  return this._http.get(this.baseUrl + "/connect_user.php?act=class_info&userid=" + userid + "&email="+email + "&contact_no="+contact_no).map((res => res.json()));

}

updateProfileData(proflie_json_data: string)
{
 return this._http.post(this.baseUrl + "/angularapi.php?act=profile_data_update",proflie_json_data).map((res => res.json()));
}

mobileVerify(mobileNo : any , user_id : string)
{
   return this._http.get(this.baseUrl + "/angularapi.php?act=mobileVerify&mobileNo=" + mobileNo + "&userid=" + user_id).map((res => res.json()));
}

OTPVerify(otpcode : any , user_id : string)
{
   return this._http.get(this.baseUrl + "/angularapi.php?act=OTPVerify&otpcode=" + otpcode + "&userid=" + user_id).map((res => res.json()));
}

public AthletedashboardData(userid : string) : Observable<any>
{
  return this._http.get(this.baseUrl + "/angularapi.php?act=AthletedashboardData&userid="+userid).map((res => <User[]> res.json()));
}

public inventory(userid : any)
{
   return userid;
   //return this._http.get(this.baseUrl + "/angularapi")

}

public classdata(classid:any , student_id:any)
{
  return this._http.get(this.baseUrl + "/accountingController.php?act=ViewClassData&classid="+classid+"&student_id="+student_id).map((res => res.json()));  
}

public getClassFeeList(classid:any , student_id:any)
{
  return this._http.get(this.baseUrl + "/accountingController.php?act=getClassFeeList&classid="+classid+"&student_id="+student_id).map((res => res.json()));
}

// athProfileData(profdata :any)
// {
  
// this.userProfileData = profdata;
// alert(JSON.stringify(this.userProfileData));
// }
ViewProfileData()
{
 // return this._http.get(this.baseUrl + '/angularapi.php?act=getUserProfile&userid='+id+'&prof_id='+prof_id).map( res => <User[]>  res.json().data);
  return  localStorage.getItem('prof_data');
}

Registration(user : any)
{
 
  return this._http.post(this.baseUrl + "/user_access_controller.php?act=gs_signup",user).map((res => res.json()));
    
//return this._http.post(this.baseUrl + "/angularapi.php?act=registration", user).map(res =>  res.json()); 
}

orgAdd(orgdata : any)
{
 return this._http.post(this.baseUrl + "/angularapi.php?act=addOrg",orgdata).map(res => res.json());
}
getOrgDetails(userid:any)
{
 return this._http.get(this.baseUrl + "/angularapi.php?act=getorgdetails&userid="+userid).map(res => res.json());
}

}

