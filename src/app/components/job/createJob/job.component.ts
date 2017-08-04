import { JobModule } from '../../model/job.model';
import { JobServices } from '../../services/job.services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers : [JobServices] 
})
export class JobComponent implements OnInit {

myVar: boolean;
public edited : boolean;
public datafailure : boolean;
public notresponse : boolean;

public userid :string;
public image : string;
public sports : any[];

constructor(private _JobServices : JobServices, private _http : Http, private router : Router) 
{
     this.Job = new JobModule(); 
}
   @Input() Job: JobModule;

  ngOnInit() {
  this.myVar = false;
  this.Job.userid =  localStorage.getItem('currentUserid');
  this.Job.id = "0";
  this.Sportlist();  
  }


CreateJob(job) : void
{
     this._JobServices.CreatJob(job).subscribe( 
     data=>{ 
                if(data != "0")
                {
                this.myVar = false;
                this.router.navigate(["/viewjob",data]); 
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
    this._JobServices.Sportlist().subscribe(data => { this.sports = data; console.log(this.sports)
      })
  }

}
