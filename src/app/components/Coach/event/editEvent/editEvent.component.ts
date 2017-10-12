import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { CreateEvent } from '../../../model/createEvent.module';
import { createEventServices } from  '../../../services/createEvent.services';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';

declare var $:any;
@Component({
  selector: 'app-editevent',
  templateUrl: './editEvent.component.html',
  styleUrls: ['./editEvent.component.css'],
  providers:[createEventServices]
})

export class EditEventComponent implements OnInit {
	
@Input() event: CreateEvent;
myVar : boolean;
public edited : boolean;
public datafailure : boolean;
public notresponse : boolean;
public Event : CreateEvent[];
public termCondition = [];
public eligibility = [];
public ticket = [];

viewEvent: CreateEvent = new CreateEvent();
public userid = localStorage.getItem('currentUserid');
public imageurl : string;
id: any;
sports: any[];

constructor(private _eventservices : createEventServices, private _activatedRoute: ActivatedRoute,private router: Router,@Inject(APP_CONFIG) private _config: IAppConfig) 
{
  this.imageurl = _config.dir_url;


}
ngOnInit() 
{
this._activatedRoute.params.subscribe(params => { this.id = +params['id'];});
this.editEvent();
this.Sportlist();
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
     else if(key == 'eligibility1')
     {
       this.Eligibility(res[key]);
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
this.myVar = true;
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

var eligib = (<HTMLInputElement>document.getElementById("eligi_value")).value;
if(eligib)
{

	this.viewEvent.eligibility1 =  eligib;
}else
{
	this.viewEvent.eligibility1 =  JSON.stringify(this.eligibility);
}

// alert(this.viewEvent.eligibility1);

var startdate = (<HTMLInputElement>document.getElementById("startD")).value;
var enddate = (<HTMLInputElement>document.getElementById("endD")).value;

this.viewEvent.start_date = startdate;
this.viewEvent.end_date = enddate;

this._eventservices.saveEvent(event).subscribe(
                data => 
                { 
                if(data != "0")
                {
                this.myVar = false;
                this.router.navigate(["/viewEvent",data]); 
                }else
                {
                this.myVar = false;
                this.datafailure = true;
                setTimeout(function(){
                this.datafailure=false;
                }.bind(this),3000);
                }
                },
                err => 
                {
                this.myVar = false;
                this.datafailure = true;
                setTimeout(function(){
                this.datafailure=false;
                }.bind(this),3000);
                }
                );
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

addNewEligibility()
{
  this.eligibility.push({"criteria" :''})
}

Eligibility(eligibility)
{
  if(eligibility)
  {
    var edata = JSON.parse(eligibility);
    var elength = edata.length;
    for(var k = 0 ; k<elength;k++)
    {
      this.eligibility.push(edata[k]);
    }
  }
  else
  {
   this.eligibility.push({"criteria":''});
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
  handleFileSelect(evt){

      this.myVar = true;
      var files = evt.target.files;
      var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
       
    }
  }

Sportlist() {
    this._eventservices.Sportlist().subscribe(data => { this.sports = data; console.log(this.sports)
      })
}

_handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
           // this._event.uploadimage(btoa(binaryString));
  this._eventservices.uploadimage(btoa(binaryString)).subscribe( data => { this.viewEvent.image = data;
  this.myVar = false; }
    ) 
} 
}