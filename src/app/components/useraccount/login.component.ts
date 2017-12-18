import { User } from '../model/login.model';
import { loginServices } from '../services/login.services';
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
public userdata :any;
public sub : any;
public id : any;
public email :any;
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
 constructor(private fb: FormBuilder,private _accountService: loginServices,private router: Router
    ,public _auth: AuthService,private face: FacebookService) {
        this.form = fb.group({
            email: [''],
            password: ['']
        });

        console.log('Initializing Facebook');
        
        face.init({
              appId: '1417736098274297',
              version: 'v2.8'
            });
    }

    /**
     * Login method, authenticates user is authorized or not
     * @returns void
     */

    signIn(provider){
        this.sub = this._auth.login(provider).subscribe(
          (data) => {
               this.result=data;
            //    this.userdata.email      = this.result.email;
            //    this.userdata.id         = this.result.id;
            //    this.userdata.password   = this.result.email;
            //    this.userdata.data       = data;
            //    this.userdata.app        = "M";
            //    this.userdata.loginType  = "2";


         alert(JSON.stringify(this.result));   

           this._accountService.manageLogin(this.result).subscribe(
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
                if(data.first == "1")
                {
                    setTimeout((router: Router) => {
                        this.router.navigate(['/registration']);
                    }, 1000); 
                    // this.router.navigate(["/registration"]);
                }else
                {
                    this.router.navigate(["/home"]);
                }
               
                }
                     else 
                     { 
                       this.myVar = false;
                       this.invalid=true;
                       //this.router.navigate(["/login"]);
                     }
         }, (err) => console.log("Error" + err),
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
