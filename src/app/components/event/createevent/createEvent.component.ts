import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from '../../services/createEvent.services';




@Component({
  selector: 'app-createevent',
  templateUrl: './createEvent.component.html',
  providers:[createEventServices]
})
export class CreateEventComponent implements OnInit {

sports: any[];
sportslist: Object = {};

  constructor(private _event: createEventServices,private router: Router) { }
  @Input() events: CreateEvent;
  responseStatus:Object= [];
  ngOnInit() {
    this.Sportlist();
    this.events = new CreateEvent(); 
  }

  Create()
  {    
          
           this._event.saveEvent(this.events).subscribe(
           (data) => { 
             this.router.navigate(["/contentview"]);
             },
           (err) => alert("Hi")
        ); 
  }


   Sportlist() {
    this._event.Sportlist()
      .subscribe(data => {
        this.sports = data;
        console.log(this.sports)
      })
  }
}
