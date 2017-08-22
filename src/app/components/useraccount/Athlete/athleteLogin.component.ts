import { Component, OnInit,ViewChild  } from '@angular/core';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { OnDestroy } from '@angular/core';
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
constructor(public _auth: AuthService,private fb: FacebookService)
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
        alert(JSON.stringify(data));this.user=data;}
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



  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        alert(JSON.stringify(res));
      })
      .catch(this.handleError);
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        alert(JSON.stringify(res));
      })
      .catch(this.handleError);

  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }


  /**
   * Get the user's profile
   */
  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
       alert(JSON.stringify(res));
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }


  /**
   * Get the users friends
   */
  getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }

  



  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }

}