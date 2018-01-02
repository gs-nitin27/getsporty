import { User } from '../model/login.model';
import { loginServices } from '../services/login.services';
import { AccountService } from '../services/globaldata.services';
import { Injectable,ViewChild, Inject , OnInit, Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

@ViewChild(FBVideoComponent) video: FBVideoComponent;
public invalid : boolean;
public myVar : boolean;
public loginModel: User = new User();
public form: FormGroup;
public result : any;
public userdata : User = new User();
public sub : any;
public id : any;
public email :any;
public resdata : any;
public msg : any;
//userdata : any;
public userid  = localStorage.getItem('currentUserid');

ngOnInit() 
{    
    this.myVar = false;
    if(this.userid)
    {
      this.router.navigate(["/profile"]);
    }
}

 constructor(private _As: AccountService,private fb: FormBuilder,private _accountService: loginServices,private router: Router
    ,public _auth: AuthService,private face: FacebookService) {
        this.form = fb.group({
            email: [''],
            password: ['']
        });
        //console.log('Initializing Facebook');
        face.init({
              appId: '196641097570680',
              version: 'v2.11'
            });
    }
    /**
     * Login method, authenticates user is authorized or not
     * @returns void
     */
signIn(provider){
        this.sub = this._auth.login(provider).subscribe(
          (data) => {
                 
                this.myVar = true;

                this.result=data;
                this.result.id             = this.result.uid;
                this.userdata.email        = this.result.email;
                this.userdata.password     = this.result.email;
                this.userdata.data         =  this.result;
                this.userdata.app          = "M";
                this.userdata.userType     = "103";
                this.userdata.device_id    = "";

                

                //alert(this.gd.shareObj['global']);
              
        if(this.result.provider == 'google')
        {
          this.userdata.loginType  = "2";
        }
        else
        {
          this.userdata.loginType  = "1";
        }

         
        
        //console.log(JSON.stringify(this.userdata));
        // this._As.login(this.userdata);

        this._accountService.manageLogin(this.userdata).subscribe(
        (data) => 
             {
            let user = data.data;
             if(data.data.userType != 104)
             {
            if (user) {
                localStorage.clear();
                localStorage.setItem('currentUser',data.data.name);
                localStorage.setItem('currentUserid',data.data.userid);
                localStorage.setItem('user_image',data.data.user_image);
                localStorage.setItem('prof_id',data.data.prof_id);

                if(!data.data.prof_id)
                {
                    localStorage.setItem('provider_id',this.result.uid);
                    localStorage.setItem('provider_email',this.result.email);
                    localStorage.setItem('provider_image',this.result.image);
                    localStorage.setItem('provider_name',this.result.name);
                    localStorage.setItem('provider',this.userdata.loginType);

                } 
                }
                if(data.status == "1")
                {
                    setTimeout((router: Router) => {
                        this.router.navigate(['/home']);
                    }, 1000);
                // alert(localStorage.getItem('UserData')); 
                // var udata = localStorage.getItem('UserData');
                //this._accountService.manageRegistration(udata).subscribe( (data) => this.resdata = data);         
                 }
                else
                {
                    setTimeout((router: Router) => {
                        this.router.navigate(['/registration']);
                        }, 1000);
                // if(data.first == "1")
                // {
                //     setTimeout((router: Router) => {
                //         this.router.navigate(['/registration']);
                //     }, 1000); 
                //      this.router.navigate(["/registration"]);
                // }else
                // {
                //     setTimeout((router: Router) => {
                //         this.router.navigate(['/home']);
                //     }, 1000);
                //      this.router.navigate(["/home"]);
                // }
                }
                // else 
                // { 
                //        this.myVar = false;
                //        this.invalid=true;
                //        //this.router.navigate(["/login"]);
                // }
            }else
            { 
                if(data.data.prof_id == 6)
                {
                   this.msg = "You are Already Register as Parent.";
                }else if(data.data.prof_id == 1)
                {
                    this.msg = "You are Already Register as Athlete.";
                }
                else{
                    this.msg = "You are Already Registered.";
                }
                this.myVar = false;
                this.invalid=true;
                //this.router.navigate(["/login"]);  
            }
        },(err) => console.log("Error" + err),
      );      
    })



}    
     
login() : void {
      this.myVar = true;
      var formData = this.form.value;
      this._accountService.login(formData).subscribe(
                (data) => { 
                    
                    if(data != null)
                { 
                    if(data == '0')
                    {
                        this.myVar = false;
                        this.invalid=true;  
                    }
                let user = data;
                if (user) {
                    localStorage.clear();
                    localStorage.setItem('currentUser',data.name);
                    localStorage.setItem('currentUserid',data.userId);
                    localStorage.setItem('user_image',data.user_image);
                    localStorage.setItem('prof_id' , data.prof_id);
                    }
                      this.router.navigate(["/profile"]);
                    }
                    else 
                    { 
                        this.myVar = false;
                        this.invalid=true;
                           //this.router.navigate(["/login"]);
                    }
             }, (err) => console.log("Error" + err),
            );

        

    }

logout() :void 
{
    localStorage.clear();
}






}
