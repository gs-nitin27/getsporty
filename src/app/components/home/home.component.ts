import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateEvent } from '../model/createEvent.module';
import { createEventServices } from  '../services/createEvent.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [createEventServices]
})
export class HomeComponent implements OnInit {

    public Event : CreateEvent[];
    public userid = localStorage.getItem('currentUserid');

  constructor(private _router :Router,private _eventservices : createEventServices) { }

ngOnInit() 
{
   this.getEventList();
    
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
