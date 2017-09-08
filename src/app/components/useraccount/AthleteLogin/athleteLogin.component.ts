import { Component, OnInit,ViewChild ,OnDestroy } from '@angular/core';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { NotificationService } from '../../services/notification.service'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { AuthService } from "angular2-social-login";


declare var $ : any;

@Component({
  selector: 'app-athletelogin',
  templateUrl: './athleteLogin.component.html',
  styleUrls: ['./athleteLogin.component.css'],
})

export class AthleteLoginComponent implements OnDestroy {

  @ViewChild(FBVideoComponent) video: FBVideoComponent;
  public user;
  sub: any;
  public mobile : any;
  public user_id : any;
  public verifycode : any;
  public myVar : boolean;
  
constructor(public _auth: AuthService,private fb: FacebookService , private _loginServices:loginServices, private router:Router, private _notificationService :NotificationService)
{ 

console.log('Initializing Facebook');

    fb.init({
      appId: '1417736098274297',
      version: 'v2.8'
    });

}
  
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => 
      {
    this.user=data;
    this._loginServices.Sociallogin(this.user).subscribe( 
   (data) => 
   { 
   if(data != null){ 
                let users = data;
                if (users) 
                {
                    localStorage.clear();
                    localStorage.setItem('currentUser',data.Name);
                    localStorage.setItem('currentUserid',data.userId);
                    localStorage.setItem('user_image',data.user_image);
                    localStorage.setItem('prof_id' , data.prof_id);
                    localStorage.setItem('contact_no' , data.contact_no);
                    localStorage.setItem('email' , data.email);
                    this.user_id = data.userId;
                }
                    if(!data.contact_no)
                    {
                      $('#myModal').modal('show');
                    }
                    else
                    {
                      if(data.forget_code)
                      {
                       $('#myModal').modal('show');
                      }else
                      {

                          this.router.navigate(["/athletedashboard"]);
                      }
                    }
                    }
                  else
                    { 
                      this.myVar = false;
                      this.router.navigate(["/login"]);
                    }
             }, (err) => console.log("Error" + err),
            );
        }
    )
  }


logout()
{
      this._auth.logout().subscribe(
      (data)=>
      {
       console.log(data);this.user=null;
      }
    )
  }

mobileVerify()
{
  this._loginServices.mobileVerify(this.mobile,this.user_id).subscribe( res => 
  { 
      if(res)
      {
      $('#myModal').modal('hide');
      $('#VerifyMobile').modal('show');
      }
      else
      {
        $('#myModal').modal('show');
      }
  });
  }

OTPVerify()
{
  this._loginServices.OTPVerify(this.verifycode,this.user_id).subscribe( res => 
  { 
    if(res)
    {
       $('#myModal').modal('hide');
      $('#VerifyMobile').modal('hide');

      this.router.navigate(["/athletedashboard"]);
    }
    else
    {
      alert("Worng Otp Code");
      $('#myModal').modal('show');
    }
   });
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}