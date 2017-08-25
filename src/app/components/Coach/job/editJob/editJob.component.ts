import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { JobModule } from '../../../model/job.model';
import { JobServices } from '../../../services/job.services';
import {ActivatedRoute,Router} from '@angular/router';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';



@Component({
  selector: 'app-editjob',
  templateUrl: './editJob.component.html',
  styleUrls: ['./editJob.component.css'],
  providers:[JobServices]
})
export class EditJobComponent implements OnInit {
myVar: boolean;
public edited : boolean;
public datafailure : boolean;
public notresponse : boolean;
public imageurl : string;
Job: JobModule = new JobModule();
id : any;

constructor(private _activatedRoute :ActivatedRoute,private _JobServices : JobServices,private router : Router,@Inject(APP_CONFIG) private _config: IAppConfig)
{
	this.imageurl = _config.dir_url;
}

ngOnInit()
{
this._activatedRoute.params.subscribe(params => {
            this.id = +params['id']; 
            this.myVar = false;
  });
	this.getJobdetails();
}

getJobdetails()
{
    this._JobServices.getJobdetails(this.id).subscribe(res => { this.Job = res; });
}

CreateJob(job) : void
{
    this.myVar = true;
	 this._JobServices.CreatJob(job).subscribe( 
   data=>{ 
                if(data != "0")
                {
                this.myVar = false;
                this.router.navigate(["/viewjob" ,data]); 
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
           // this.uploadimage(btoa(binaryString));

     this._JobServices.uploadimage(btoa(binaryString)).subscribe( data => {
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
} );      
   
    }



}