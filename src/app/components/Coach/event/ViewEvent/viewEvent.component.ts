import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { CreateEvent } from '../../../model/createEvent.module';
import { createEventServices } from  '../../../services/createEvent.services';
import {ActivatedRoute} from '@angular/router';
import { APP_CONFIG } from '../../../../app.config';
import { IAppConfig }  from '../../../../app.iconfig';


 

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewEvent.component.html',
  styleUrls: ['./viewEvent.component.css'],
  providers:[createEventServices]
})
export class ViewEventComponent implements OnInit {

 @Input() event: CreateEvent;

    public Event : CreateEvent[];
    public termCondition = [];
    public eligibility1 = [];
    public ticket = [];
    public imageurl : string;
    public participantlist : any;


    viewEvent: CreateEvent = new CreateEvent();

    public userid = localStorage.getItem('currentUserid');
    id: any;
    otherdetails1 : any[];
    ticket_details1 : any[];
    term_cond1 : any[];


  
constructor(private _eventservices : createEventServices, private _activatedRoute: ActivatedRoute,@Inject(APP_CONFIG) private _config: IAppConfig) 
{
this.imageurl = _config.dir_url;
}

ngOnInit() {
this._activatedRoute.params.subscribe(params => {
            this.id = +params['id']; 
  });

  this.editEvent();
  this.participantList();
  }


participantList()
{
  this._eventservices.participantList(this.id).subscribe(res =>this.participantlist = res );
}

editEvent()
{
   //alert(this.id); 
   //alert(btoa(this.id));
   //alert(atob("NTA="));

   let otherdetails = [];
   let ticket_details = [];
   let term_cond = [];
   let eligibility1 = [];


this._eventservices.getEventDetails(this.id).subscribe(res => 
{
  for(let key in res)
  {
    if(key == 'ticket_detail')
     {
        this.ticketdetails(res[key]);
        res['ticket_detail'] = "";
     }
     else if(key == 'terms_cond1')
     {
      
        this.termcondition(res[key]);
        res['terms_cond1'] = "";
     }
     else if(key == 'eligibility1')
     {
        this.eligibility(res[key]);
        res['eligibility1']= " ";
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
    });
   
}


eligibility(eligibility)
{
  if(eligibility) 
  {
  var data = JSON.parse(eligibility);
  var lenght = data.length;
  for(var i =0 ;i<lenght; i++)
  {
    this.eligibility1.push(data[i]);
  }
  }
  else
  {
      this.eligibility1.push({'criteria':''});
  }
}



termcondition(term_cond)
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

ticketdetails(ticket_data)
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
