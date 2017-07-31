import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { JobModule } from '../../model/job.model';
import { JobServices } from '../../services/job.services';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-editjob',
  templateUrl: './editJob.component.html',
  styleUrls: ['./editJob.component.css'],
  providers:[JobServices]
})
export class EditJobComponent implements OnInit {
myVar: boolean;

//public job  : JobModule;

Job: JobModule = new JobModule();

id : any;

constructor(private _activatedRoute :ActivatedRoute,private _JobServices : JobServices)
{
	
}

ngOnInit()
{
this._activatedRoute.params.subscribe(params => {
            this.id = +params['id']; 
            this.myVar = false;
  });

	//alert(this.id);
	this.getJobdetails();
}

getJobdetails()
{
    this._JobServices.getJobdetails(this.id).subscribe(res => { this.Job = res; });
}

CreateJob(job) : void
{
    this.myVar = true;
	 //alert(JSON.stringify(job));
	 this._JobServices.CreatJob(job);

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

     this._JobServices.uploadimage(btoa(binaryString)).subscribe( data => { this.Job.image = data ;
     this.myVar = false; }
    )       
   
    }



}