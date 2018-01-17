import { JobModule } from '../../../model/job.model';
import { JobServices } from '../../../services/job.services';
import { loginServices } from '../../../services/login.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, Inject , OnInit, Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';
declare var $ : any;


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers : [JobServices] 
})
export class JobComponent implements OnInit 
{

form: FormGroup;
private formSumitAttempt: boolean; 
myVar: boolean;
public edited : boolean;
public datafailure : boolean;
public notresponse : boolean;
public imageurl : string;
public userid :string;
public image : string;
public orgDetails : any;
public user_id = localStorage.getItem('currentUserid');
public sports : any[];

constructor(private formBuilder: FormBuilder,private _accountService :loginServices,private _JobServices : JobServices, private _http : Http, private router : Router,@Inject(APP_CONFIG) private _config: IAppConfig) 
{
     this.Job = new JobModule(); 
     this.imageurl = _config.dir_url;
}
   @Input() Job: JobModule;

  ngOnInit() {
  this.myVar = false;
  this.Job.userid =  this.user_id;
  this.Job.id = "0";
  this.Sportlist();  
  this.getOrgDetails();


    this.form = this.formBuilder.group({
    userid : this.userid,
    org_name:  [null, Validators.required],
    about: [null,Validators.required],
    email: [null, [Validators.required, Validators.email]],
    address1:  [null, Validators.required],
    address2:  [null, Validators.required],
    city:  [null, Validators.required],
    state:  [null, Validators.required],
    pin:  [null, Validators.required],
    mobile:  [null, Validators.required]
});



  }


CreateJob(job) : void
{
     this.Job.organisation_name    =  $("#org_name").val();
     this.Job.about                =  $("#about").val();
     this.Job.org_address1         =  $("#address1").val();
     this.Job.org_address2         =  $("#address2").val();
     this.Job.org_city             =  $("#city").val();
     this.Job.org_state            =  $("#state").val();
     this.Job.contact              =  $("#mobilenumber").val();
     this.Job.org_pin              =  $("#pin").val();
     this.Job.email                =  $("#email").val();

     this._JobServices.CreatJob(job).subscribe( 
     data=>{ 
                if(data != "0")
                {
                this.myVar = false;
                var nid = btoa(data);
                this.router.navigate(["/viewjob",nid]); 
                }else
                {
                this.myVar = false;
                this.datafailure = true;
                setTimeout(function(){
                this.datafailure=false;
                }.bind(this),3000);
                }
                },err =>  
                { 
                this.myVar = false;
                this.datafailure = true;
                setTimeout(function(){
                this.datafailure=false;
                }.bind(this),3000);
                });


}

handleFileSelect(evt){
      this.myVar = true;
      var files = evt.target.files;
      var file = files[0];
       if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }



_handleReaderLoaded(readerEvt) {

  var binaryString = readerEvt.target.result;
  this._JobServices.uploadimage(btoa(binaryString)).subscribe( data =>
    {
        // alert(data);
        this.myVar = false;
        if(data != "Null")
        {
        this.Job.image = data
        this.edited = true;
           setTimeout(function() {
           this.edited = false;
           }.bind(this), 3000);
        }else
        {
        this.notresponse = true;
        this.Job.image ="";
          setTimeout(function(){
          this.notresponse = false;
        }.bind(this),3000);
}
} 
    );       
   
    }

 Sportlist() {
    this._JobServices.Sportlist().subscribe(data => { this.sports = data;
      })
  }

  getOrgDetails()
  {
     this._accountService.getOrgDetails(this.user_id).subscribe(data => { this.orgDetails = data;
      // console.log(JSON.stringify(this.orgDetails));
    });
  }


next(tabname1,tabname2)
{
  // $("#tabs").tabs();

  $('.nav-tabs > .active').next('li').find('a').trigger('click');
  //alert(tabname);
  $("#"+tabname1).addClass("active");
  $("#"+tabname2).removeClass('active');
	// $("#tabs").tabs("option", "active", 2);
}  
}
