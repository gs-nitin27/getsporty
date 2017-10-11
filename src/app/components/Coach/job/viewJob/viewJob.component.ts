import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { JobModule } from '../../../model/job.model';
import { JobServices } from '../../../services/job.services';
import {ActivatedRoute} from '@angular/router';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';

@Component({
	selector: 'app-viewjob',
    templateUrl: './viewJob.component.html',
    styleUrls: ['./viewJob.component.css'],
    providers:[JobServices]
})


export class ViewJob implements OnInit
{
Job: JobModule = new JobModule();
// userList : JobModule = new JobModule();
userList : any;
id : any;
public imageurl : string;
constructor(private _activatedRoute :ActivatedRoute,private _JobServices : JobServices,@Inject(APP_CONFIG) private _config: IAppConfig)
{
   this.imageurl = _config.dir_url;
}

ngOnInit()
{
this._activatedRoute.params.subscribe(params => { this.id = +params['id']; });
this.getJobdetails();
this.jobapplyUser();

}

getJobdetails()
{
    this._JobServices.getJobdetails(this.id).subscribe(res => { this.Job = res; });
}

jobapplyUser()
{
   this._JobServices.jobapplyUser(this.id).subscribe(res => {this.userList = res ; });

}

}