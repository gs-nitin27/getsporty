import { Component, OnInit } from '@angular/core';
import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from  '../../services/createEvent.services';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[createEventServices]
})
export class EventComponent implements OnInit {

    public Event : CreateEvent[];
    public userid = localStorage.getItem('currentUserid');
    public para  : any;


  
constructor(private _eventservices : createEventServices, private _router : Router) { }

ngOnInit() 
{
   this.getCreateEventList();
}

getCreateEventList()
{
	  this._eventservices.getCreateEventList(this.userid).subscribe(res => { this.Event = res;});
}


editEvent(id : string)
{
  // alert(btoa(id));
 
  this.para = btoa(id);

   //alert(atob("NTA="));


    this._router.navigate(["/editEvent",id]);

}



}
