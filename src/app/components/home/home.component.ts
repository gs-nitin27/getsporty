import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateEvent } from '../model/createEvent.module';
import { createEventServices } from  '../services/createEvent.services';
import { JobModule } from '../model/job.model';
import { JobServices } from '../services/job.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [createEventServices,JobServices]
})
export class HomeComponent implements OnInit {

    public Event : CreateEvent[];
    public Job : JobModule[];
    public userid = localStorage.getItem('currentUserid');

  constructor(private _router :Router,private _eventservices : createEventServices , private _jobservices : JobServices) { }

ngOnInit() 
{
   this.getEventList();
   this.getJobList();   
}

getJobList()
{
   this._jobservices.getJobList(this.userid).subscribe(res => { this.Job = res;});
}

getEventList()
{
	this._eventservices.getEventList(this.userid).subscribe(res => { this.Event = res;});
}

viewjob()
{
this._router.navigate(["/editJob",25]);
}

}
