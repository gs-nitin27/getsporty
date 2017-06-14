import { Component, OnInit } from '@angular/core';
import { User } from '../model/login.model';
import { loginServices } from '../services/login.services';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    public loginModel: User = new User();
    public form: FormGroup;

  ngOnInit() 
  {
        
  }

    


 constructor(private fb: FormBuilder,
        private _accountService: loginServices,
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
        var formData = this.form.value;
        this._accountService.login(formData);
    }

    logout() :void {

    localStorage.clear();
    }





}
