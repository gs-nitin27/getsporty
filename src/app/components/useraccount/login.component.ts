import { User } from '../model/login.model';
import { loginServices } from '../services/login.services';
import { Injectable, Inject , OnInit, Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

public invalid : boolean;
public myVar : boolean;
public loginModel: User = new User();
public form: FormGroup;
public userid  = localStorage.getItem('currentUserid');

ngOnInit() 
{    
    this.myVar = false;
    if(this.userid)
    {
      this.router.navigate(["/home"]);
    }
}
 constructor(private fb: FormBuilder,
        private _accountService: loginServices,private router: Router
    ) {
        this.form = fb.group({
            email: [''],
            password: ['']
        });
    }

    /**
     * Login method, authenticates user is authorized or not
     * @returns void
     */
     
login() : void {
      this.myVar = true;
      var formData = this.form.value;
      this._accountService.login(formData).subscribe(
                (data) => { if(data != null)
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
                      this.router.navigate(["/home"]);
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
