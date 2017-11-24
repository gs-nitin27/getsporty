import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { CreateEvent } from '../../../model/createEvent.module';
import { createEventServices } from '../../../services/createEvent.services';

declare var $:any;
     

@Injectable()
@Component({
  selector: 'app-createevent',
  templateUrl: './createEvent.component.html',
  styleUrls: ['./createEvent.component.css'],
  providers:[createEventServices]
})
export class CreateEventComponent implements OnInit {

public ticketdetials = [{'ticket_name':'','ticket_price':'','number':''}];
public termCondition = [{'term':''}];
public myVar: boolean;
public edited : boolean;
public datafailure : boolean;
public notresponse : boolean;
public myForm: FormGroup;
sports: any[];
sportslist: Object = {};
image :string;
name : string;
ticket :Object = {};
terms_cond1 : Object = {};
id : any;


constructor(private _event: createEventServices,private router: Router,private http: Http,private _fb: FormBuilder ) { }
  @Input() events: CreateEvent;
  responseStatus:Object= [];
  ngOnInit() {
  this.myVar = false;
  this.Sportlist();
  this.events = new CreateEvent();
  this.events.id = "0";
  }
 

Create(events) : void  {

  this.myVar = true;   
  var inputValue = (<HTMLInputElement>document.getElementById("myValue")).value;
  this.events.ticket_detail = inputValue;
  this.events.userid =  localStorage.getItem('currentUserid'); 
  this.events.id = "0";
  var termvalue = (<HTMLInputElement>document.getElementById("terms_cond_value1")).value;
  this.events.terms_cond1 =  termvalue;
  var startdate = (<HTMLInputElement>document.getElementById("startD")).value;
  this.events.start_date = startdate;
  var enddate = (<HTMLInputElement>document.getElementById("endD")).value;
  this.events.end_date = enddate;
  //alert(JSON.stringify(this.events));
    this._event.saveEvent(this.events).subscribe(
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
                //alert("An Error Occured While Processing Your Request")
                }
                );
  }

Sportlist() {
  this._event.Sportlist().subscribe(data => { this.sports = data; console.log(this.sports)
    })
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

_handleReaderLoaded(readerEvt) 
{
var binaryString = readerEvt.target.result;
this._event.uploadimage(btoa(binaryString)).subscribe( data => 
{
this.myVar = false;
if(data != "Null")
{
this.events.image = data ;
this.edited = true;
   setTimeout(function() {
       this.edited = false;
   }.bind(this), 3000);
}else
{
  this.notresponse = true;
  this.events.image ="";
  setTimeout(function(){
   this.notresponse = false;
  }.bind(this),3000);
}
}
)    
}

//initArray(nameObj:any) {
 //     return  this._fb.group({  
    //            [nameObj]: this._fb.group({
    //                      TName: [''],
     //                     Price: [''],
      //                    Number: [''],
      //                  
       //             })
       //         })
   // }

// addArray(newName:string) {
//        const control = <FormArray>this.myForm.controls['myArray'];
//        this.myGroupName.push(newName);
//        control.push(this.initArray(newName));
//    }


//
//  removeDataKey(i: number) {
//       const control = <FormArray>this.myForm.controls['myArray'];
//       control.removeAt(i);
//       this.myGroupName.splice(i,1);
//    }



//     inittermArray(nameObj:any) {
//
//      return  this._fb.group({  
//                [nameObj]: this._fb.group({
//            
//                          term : [''],
//                          
//                    })
//                })  
//    }
//
// addtermArray(newTerm:string) {
//        const control = <FormArray>this.termForm.controls['myArray'];
//        this.termCondition.push(newTerm);
//        control.push(this.inittermArray(newTerm));
//
//           
//    }

//
//  removeterm(i: number) {
//       const control = <FormArray>this.termForm.controls['myArray'];
//       control.removeAt(i);
//       this.termCondition.splice(i,1);
//    }



addNewRow()
{
  this.termCondition.push({'term':''});
}
addNewticket()
{
  this.ticketdetials.push({'ticket_name':'','ticket_price':'','number':''});
}  
} 

 
