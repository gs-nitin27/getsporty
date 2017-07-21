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
	 alert(JSON.stringify(job));
	 this._JobServices.CreatJob(job);

}



}