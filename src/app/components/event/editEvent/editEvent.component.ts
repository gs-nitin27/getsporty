import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from  '../../services/createEvent.services';
import { ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-editevent',
  templateUrl: './editEvent.component.html',
  styleUrls: ['./editEvent.component.css'],
  providers:[createEventServices]
})

export class EditEventComponent implements OnInit {
	
 @Input() event: CreateEvent;

public Event : CreateEvent[];
    //public viewEvent : CreateEvent;
public termCondition = [];
public ticket = [];
viewEvent: CreateEvent = new CreateEvent();

public userid = localStorage.getItem('currentUserid');
id: any;
//otherdetails1 : any[];
//ticket_details1 : any[];
//term_cond1 : any[];
//testtt  : any;


  
constructor(private _eventservices : createEventServices, private _activatedRoute: ActivatedRoute) 
{}

ngOnInit() 
{
this._activatedRoute.params.subscribe(params => { this.id = +params['id'];});
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
        //ticket_details.push(res[key]);

        //alert(res[key]);
        this.oldticket(res[key]);
     }
     else if(key == 'terms_cond1')
     {
        //term_cond.push(res[key]);
        this.oldtermcond(res[key]);
     }
     else
     {
        otherdetails.push(res);
     }
    } 
    this.viewEvent = res ;
   // this.term_cond1 = term_cond; 
   // this.ticket_details1 = ticket_details
   // this.otherdetails1 = otherdetails;
    });

   
}

Create(event): void  { 

 alert(JSON.stringify(event));
 this._eventservices.saveEvent(event);
}

addNewRow()
{
   this.termCondition.push({'term':''});
}

addNewticket()
{
	this.ticket.push({'ticket_name':'','ticket_price':'','number':''});
}

oldtermcond(term_cond)
{  
var data = JSON.parse(term_cond)
var lenght = data.length;
for(var i =0 ;i<lenght; i++)
{
  this.termCondition.push(data[i]);
}
}       

oldticket(ticket_data)
{
	var tdata = JSON.parse(ticket_data);
	var tlenght = tdata.length;
	for(var j =0 ;j<tlenght; j++)
    {
    this.ticket.push(tdata[j]);
    }
}  
}