import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from  '../../services/createEvent.services';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
declare var timepicker: any;

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


constructor(private _eventservices : createEventServices, private _activatedRoute: ActivatedRoute) 
{}
ngOnInit() 
{
   $(function() {
   $( "#startD" ).datepicker();
   $( "#endD" ).datepicker();
   });

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
        this.oldticket(res[key]);    
     }
     else if(key == 'terms_cond1')
     {
        this.oldtermcond(res[key]);
     }
     else
     {
        otherdetails.push(res);
     }
       
    } 
    this.viewEvent = res;
    });

   
}

Create(event): void  { 

var inputValue = (<HTMLInputElement>document.getElementById("ticketdetails")).value;
if(inputValue)
{
	this.viewEvent.ticket_detail = inputValue;
}else
{
    this.viewEvent.ticket_detail =  JSON.stringify(this.ticket);

	//this.viewEvent.ticket_detail =  inputValue;
}


var termvalue = (<HTMLInputElement>document.getElementById("terms_cond_value")).value;

if(termvalue)
{
	this.viewEvent.terms_cond1 =  termvalue;
}else
{
	this.viewEvent.terms_cond1 =  JSON.stringify(this.termCondition);
}

var startdate = (<HTMLInputElement>document.getElementById("startD")).value;
var enddate = (<HTMLInputElement>document.getElementById("endD")).value;

this.viewEvent.start_date = startdate;
this.viewEvent.end_date = enddate;
//alert(JSON.stringify(event));

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

if(term_cond) 
{
var data = JSON.parse(term_cond);
var lenght = data.length;
for(var i =0 ;i<lenght; i++)
{
  this.termCondition.push(data[i]);
}
}
else
{
    this.termCondition.push({'term':''});
	
}  
}     

oldticket(ticket_data)
{
    if(ticket_data)
    {
	var tdata = JSON.parse(ticket_data);
	var tlenght = tdata.length;
	for(var j =0 ;j<tlenght; j++)
    {
    this.ticket.push(tdata[j]);
    }
    }else
    {
     this.ticket.push({'ticket_name':'','ticket_price':'','number':''});
    }
}  
}