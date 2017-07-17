import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../model/login.model';
import { loginServices } from '../../services/login.services';
import { FormBuilder,FormControl, FormGroup,  ReactiveFormsModule, FormArray, Validators  } from '@angular/forms';
declare var $:any;
 

@Component({
	 selector : 'app-profile',
	 templateUrl : './profile.component.html',
	 styleUrls : ['./profile.component.css'],
})
export class ProfileComponent implements OnInit
{

  @Input() userdata: User;

public userid  = localStorage.getItem('currentUserid');

public termForm: FormGroup;
termCondition = ['formalEducation'];



terms_cond : Object = {};
public Users: User;
public newdata: User;
testing : any[];
inner1 : any[];
outer1: any[];
formalEducation1 : any[];
otherCertification1 : any[];
sportEducation1 : any[];
experienceAsPlayer1 :any[];
workExperience1 : any[];  
//a: User;

 constructor(private fb: FormBuilder,private _accountService: loginServices,private _router: Router,private route: ActivatedRoute){}
 ngOnInit()
{ 
  this.profile();
 // this.getprofiledata();
  this.newtesting();
  
  
      this.termForm = this.fb.group({
            myArray: this.fb.array([
                this.fb.group({  
                   formalEducation: this.fb.group({
                            degree:[''],
                            organisation:[''],
                            stream:[''],
                            from:[''],
                            to:[''],
                            
                     
                    })
                }), 

            ]),
             myArray1: this.fb.array([
                this.fb.group({  
                   formalEducation: this.fb.group({
                            degree:[''],
                            organisation:[''],
                            stream:[''],
                            from:[''],
                            to:[''],
                            
                     
                    })
                }), 

            ])
        });
  
  }

 newtesting()
 {
 this._accountService.send_request(this.userid).then((result) =>
  {  
//       this.a=result;
    
let formalEducation = [];
let otherCertification = [];
let sportEducation = [];
let experienceAsPlayer = [];
let workExperience = [];       
let keys = [];
let outer = [];
let inner = []; 
for(let key in result){
    if(result.hasOwnProperty(key)){
      for(let key1 in result[key]){
      if(result[key].hasOwnProperty(key1))
      { 
           if(key1 =="formalEducation")
           {
               formalEducation.push(result[key][key1]);
           }
           else if(key1== "otherCertification")
           {
              otherCertification.push(result[key][key1]);
           }else if(key1 == "sportEducation")
           {
               sportEducation.push(result[key][key1]);
           }else if(key1 == "experienceAsPlayer")
           {
               experienceAsPlayer.push(result[key][key1]);
           }else if(key1 == "workExperience")
           {
               workExperience.push(result[key][key1]);
           }
       }     
     }    
}
}  
   this.workExperience1 = workExperience;
   this.experienceAsPlayer1 = experienceAsPlayer;
   this.sportEducation1  = sportEducation;
   this.otherCertification1 = otherCertification; 
   this.formalEducation1 = formalEducation ;
    
//    this.inner1 = inner;
//    this.outer1 = outer;
   //alert("formalEducation1" + JSON.stringify(this.formalEducation1));
//    alert("inner"+JSON.stringify( this.outer1));
  //this.testing = keys;
  //alert(JSON.stringify(this.testing));
  }
  );

 }

profile()
{
       this._accountService.profiledata(this.userid).subscribe(data => { 
       this.Users = data ;
       });


}

getprofiledata()
{
   this._accountService.getprofiledata(this.userid).subscribe(data => 
   {
    this.newdata = data ;


    //alert(JSON.stringify(this.newdata));
     

   });


}  

     inittermArray(nameObj:any) {
      return  this.fb.group({
                [nameObj]: this.fb.group({
                            degree:[''],
                            organisation:[''],
                            stream:[''],
                            from:[''],
                            to:[''],
                          
                    })
                })  
    }

 addtermArray(newTerm:string) {
        const control = <FormArray>this.termForm.controls['myArray'];
        this.termCondition.push(newTerm);
        control.push(this.inittermArray(newTerm));    
    }


  removeterm(i: number) {
       const control = <FormArray>this.termForm.controls['myArray'];
       control.removeAt(i);
       this.termCondition.splice(i,1);
    }

cheakjson()
{
    var inputValue = (<HTMLInputElement>document.getElementById("formalEdu")).value;
    alert(inputValue);
}

  



}