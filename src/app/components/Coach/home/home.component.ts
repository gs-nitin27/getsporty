import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from  '../../services/createEvent.services';
import { JobModule } from '../../model/job.model';
import { JobServices } from '../../services/job.services';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig }  from '../../../app.iconfig';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [createEventServices,JobServices]
})
export class HomeComponent implements OnInit {

    today: number = Date.now();
    currentDate = new Date();
    public imageurl : any;
    public test = new Date(this.currentDate).getHours();
    
    public Event : CreateEvent[];
    public Job : JobModule[];
    public userid = localStorage.getItem('currentUserid');
    

  constructor(private _router :Router,private _eventservices : createEventServices , private _jobservices : JobServices,@Inject(APP_CONFIG) private _config: IAppConfig) 
  { 
    this.imageurl = _config.dir_url; 
  }

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

hello(end_date)
{

  var eventStartTime = new Date(this.currentDate);
  var eventEndTime = new Date(end_date);
  var duration = eventEndTime.valueOf() - eventStartTime.valueOf();

  if(duration >0 )
  {
  return true;
  }
  else
  {
  return false;
  }
   
}
}
