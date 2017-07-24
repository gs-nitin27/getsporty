import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from  '../../services/createEvent.services';
import {ActivatedRoute} from '@angular/router';


 

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewEvent.component.html',
  styleUrls: ['./viewEvent.component.css'],
  providers:[createEventServices]
})
export class ViewEventComponent implements OnInit {

 @Input() event: CreateEvent;

    public Event : CreateEvent[];
    //public viewEvent : CreateEvent;

     viewEvent: CreateEvent = new CreateEvent();

    public userid = localStorage.getItem('currentUserid');
    id: any;
    otherdetails1 : any[];
    ticket_details1 : any[];
    term_cond1 : any[];


  
constructor(private _eventservices : createEventServices, private _activatedRoute: ActivatedRoute) 
{
}

ngOnInit() {
this._activatedRoute.params.subscribe(params => {
            this.id = +params['id']; 
  });

  this.editEvent();
  }




editEvent()
{
   //alert(this.id); 
   //alert(btoa(this.id));
   //alert(atob("NTA="));

   let otherdetails = [];
   let ticket_details = [];
   let term_cond = [];


this._eventservices.getEventDetails(this.id).subscribe(res => 
{

    


    for(let key in res)
    {
     if(key == 'ticket_detail')
     {
       // alert("ticketdetails");
         ticket_details.push(res[key]);
         res['ticket_detail'] = "";
     }
     else if(key == 'terms_cond1')
     {
        term_cond.push(res[key]);
        res['terms_cond1'] = "";
     }
     else
     {
        

        otherdetails.push(res);
     } 

    } 

    this.viewEvent = res ;
    this.term_cond1 = term_cond; 
    this.ticket_details1 = ticket_details
    this.otherdetails1 = otherdetails;
    //alert(JSON.stringify(this.viewEvent));



    });
   
}

Create(eventt): void  { 

 alert(JSON.stringify(eventt));
}

}
