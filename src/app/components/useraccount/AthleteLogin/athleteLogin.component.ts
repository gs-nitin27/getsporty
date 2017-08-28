import { Component, OnInit,ViewChild ,OnDestroy } from '@angular/core';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { AuthService } from "angular2-social-login";


@Component({
  selector: 'app-athletelogin',
  templateUrl: './athleteLogin.component.html',
  styleUrls: ['./athleteLogin.component.css'],
})

export class AthleteLoginComponent implements OnDestroy {

  @ViewChild(FBVideoComponent) video: FBVideoComponent;
  public user;
  sub: any;
  public myVar : boolean;
  
constructor(public _auth: AuthService,private fb: FacebookService , private _loginServices:loginServices, private router:Router)
{ 

console.log('Initializing Facebook');

    fb.init({
      appId: '1417736098274297',
      version: 'v2.8'
    });

}
  
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {

    //alert(JSON.stringify(data));
    this.user=data;
    this._loginServices.Sociallogin(this.user).subscribe( 
   (data) => 
   { 
   if(data != null){ 
                let users = data;
                if (users) {
                    localStorage.clear();
                    localStorage.setItem('currentUser',data.name);
                    localStorage.setItem('currentUserid',data.userId);
                    localStorage.setItem('user_image',data.user_image);
                    localStorage.setItem('prof_id' , data.prof_id);
                    }
                      this.router.navigate(["/athletedashboard"]);
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

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}