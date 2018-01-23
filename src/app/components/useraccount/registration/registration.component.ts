
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { Injectable, Inject , OnInit, Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AccountService } from '../../services/globaldata.services';


import { AuthInfoResponce } from "../../../globalUserInfo";
declare var google:any;
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent 
{
  form: FormGroup;
  private formSumitAttempt: boolean;

public users: User = new User();
sports :any;
prof_list :any;
status : any;
visible : boolean;
public userid  = localStorage.getItem('currentUserid');
// public userid : any;
public globaluserid : any;
public pdata :  User = new User();
public UserData = localStorage.getItem('UserData');

public email : any;
public emaildata : any;
public isDisabled : boolean;
public cheaksport : boolean;
public myVar : boolean;
public authInfoResponce: AuthInfoResponce;
loginType :any;
res : any;

constructor(private formBuilder: FormBuilder,private _globaldata: AccountService, private _activatedRoute :ActivatedRoute,private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute, private _notificationService :NotificationService)
{
  this._notificationService.popToastSuccess('Welcome', 'Please Fill All Details');
  this._globaldata.authInfo$.map(authInfo => authInfo.$authResponce).subscribe(userGlobalData => this.authInfoResponce = userGlobalData);

  this.form = this.formBuilder.group({
    userid : this.userid,
    name:  [null, Validators.required],
    phone_no: [null,Validators.required],
    email: [null, [Validators.required, Validators.email]],
    dob:  [null, Validators.required],
    profs:  [null, Validators.required],
    sport:  [null ],
    gender:  [null, Validators.required],
    location:  [null, Validators.required],
});
}
ngOnInit() 
{
     this.myVar= true;  

     this.form.patchValue({
      name:localStorage.getItem('provider_name'),
      email:localStorage.getItem('provider_email')
      // formControlName2: myValue2 (can be omitted)
    });

     this.users.name = localStorage.getItem('provider_name');
     this.users.email = localStorage.getItem('provider_email');

     if(this.users.email)
     {
       this.isDisabled = false;
     }
     else
     {
       this.isDisabled = true;
     }

     //alert(this.users.name);

     // let win = (window as any);
    // if(win.location.search !== '?loaded' ) {
    //     win.location.search = '?loaded';
    //     win.location.reload();
    // }
    // this._activatedRoute.params.subscribe(params => {
    //   this.userid = +params['userid']; 
     // alert(this.userid);
    

      // if(!this.userid)
      // {
      //   let win = (window as any);
      //   if(win.location.search !== '?loaded' ) {
      //       win.location.search = '?loaded';
      //       win.location.reload();
      //   }
      // }
// });
// google.maps.event.addDomListener(window, 'load', initialize);
   // this.getEmailid();  
    this.professionList();
    this.Sportlist();
    this.initialize();
}


initialize() {
  
   var options = {
    types: ['(cities)'],
    componentRestrictions: {country: "ind"}
   };
  
   var input = document.getElementById('location');
   var autocomplete = new google.maps.places.Autocomplete(input, options);
  }


// getEmailid()
// {
//   this._accountService.getEmailid(this.userid).subscribe(data => 
//     { 
//     this.users.userid = this.userid;  
//     this.users.email = data;
//     this.myVar= false;

//     if(this.users.email)
//     {
//       this.isDisabled = false;
//     }
//     else
//     {
//       this.isDisabled = true;
//     }
//   });
// }
Sportlist() 
{
  this._accountService.Sportlist().subscribe(data => {
    this.sports = data;
    this.myVar= false;
  });
}
professionList()
{
this._accountService.professionList().subscribe(data => { this.prof_list = data;})
}

cheakProf(profdata)
{
  if(profdata.id == "2" || profdata.id == "8")
  {
    this.cheaksport = true;
  }
  else
  {
    this.cheaksport = false;
  }
}

register(users:any)
{
  this.myVar= true; 
  this.users.userid = this.userid; 
  users.prof_id = users.profs.id;
  users.prof_name =  users.profs.profession;
  users.location = $("#location").val();
  users.device_id = "";
  users.app = "M";
  users.userType = "103";
  users.loginType = localStorage.getItem('provider');
  this.pdata.email = this.users.email;
  this.pdata.id = localStorage.getItem('provider_id');
  this.pdata.image =localStorage.getItem('provider_image');
  this.pdata.name =  this.users.name;
  users.data = this.pdata;
  if( users.profs.id == '2' || users.profs.id == '8')
  { 
  }
  else
  {
    users.sport = '';
  }
  this.visible = false;

if(!this.pdata.email)
{
  this.myVar= false; 
  this.visible =true;
  this.status = "Please Fill All Details";
}
 else
 {
  this._accountService.Registration(users).subscribe(data => {  

   //alert(JSON.stringify(data));

    if(JSON.stringify(data.status) =="0")
    {

      this.myVar= false; 
      this.visible =true;
      this.status = "Please Fill All Details";
    }else
    {
      localStorage.clear();
      localStorage.setItem('prof_id' , data.data.prof_id);
      localStorage.setItem('currentUser',data.data.name); 
      localStorage.setItem('currentUserid',data.data.userid);
      localStorage.setItem('user_image',data.data.user_image);
      localStorage.setItem('email',data.data.email);
      localStorage.setItem('phone',data.data.contact_no);

      this._router.navigate(["/home"]);
 
     }
  });
}
}

isFieldValid(field: string) 
{
  return (
    (!this.form.get(field).valid && this.form.get(field).touched) ||
    (this.form.get(field).untouched && this.formSumitAttempt)
  );
}

displayFieldCss(field: string) 
{
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}

onSubmit(users) 
{
  this.formSumitAttempt = true;
 // alert(JSON.stringify(this.form.value));
  

   if (this.form.valid) 
   {
    this.register(users);
  //  this._accountService.orgAdd(this.form.value).subscribe(data => { this.res = data;
  //  $('#myModal').modal('toggle');
  //  });
  //   alert(JSON.stringify(this.form.value));
   }
}

reset() 
{
  this.form.reset();
  this.formSumitAttempt = false;
}
}
