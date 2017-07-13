
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from '../../services/createEvent.services';
declare var $:any;

@Injectable()

@Component({
  selector: 'app-createevent',
  templateUrl: './createEvent.component.html',
  providers:[createEventServices]
})
export class CreateEventComponent implements OnInit {

 
public myForm: FormGroup;
myGroupName = ['ticket'];

public termForm: FormGroup;
termCondition = ['term'];

sports: any[];
sportslist: Object = {};
image :string;
name : string;
ticket :Object = {};
terms_cond : Object = {};



  constructor(private _event: createEventServices,private router: Router,private http: Http,private _fb: FormBuilder) { 

    

  }
  @Input() events: CreateEvent;
  responseStatus:Object= [];
  ngOnInit() {

    $(document).ready(function() {
    $('select').material_select();
  });
 

 $('.datepicker').pickadate({   
            selectMonths: true, 
            selectYears: true,
            format: 'dd/mm/yyyy',
            min: true,
            max: false,
            closeOnSelect: true,
            closeOnClear: true,
        });

    this.Sportlist();
    this.events = new CreateEvent();

    this.myForm = this._fb.group({
            myArray: this._fb.array([
                this._fb.group({  
                   ticket: this._fb.group({
                            TName:[''],
                            Price:[''],
                            Number:[''],
                     
                    })
                }), 

            ])
        }); 



    this.termForm = this._fb.group({
            myArray: this._fb.array([
                this._fb.group({  
                   term: this._fb.group({
                            term:[''],
                            
                     
                    })
                }), 

            ])
        });
  }

  Create(events) : void  {     

    var inputValue = (<HTMLInputElement>document.getElementById("myValue")).value;
     this.events.ticket = inputValue;


    var inputTermValue = (<HTMLInputElement>document.getElementById("terms_cond_value")).value;
    this.events.terms_cond = inputTermValue;
    this.events.userid =  localStorage.getItem('currentUserid');

   

    this._event.saveEvent(this.events);

  }

   Sportlist() {
    this._event.Sportlist().subscribe(data => { this.sports = data; console.log(this.sports)
      })
  }

  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
       
    }
  }



  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.uploadimage(btoa(binaryString));
    }


    uploadimage(binaryString)
    {
            this.http.post('http://localhost/testingapp/angularapi.php?act=upload', binaryString)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => this.events.image = data,
                error => console.log(error)
    ) }


     initArray(nameObj:any) {

      return  this._fb.group({  
                [nameObj]: this._fb.group({
            
                          TName: [''],
                          Price: [''],
                          Number: [''],
                        
                    })
                })
      


    }

 addArray(newName:string) {
        const control = <FormArray>this.myForm.controls['myArray'];
        this.myGroupName.push(newName);
        control.push(this.initArray(newName));
    }



  removeDataKey(i: number) {
       const control = <FormArray>this.myForm.controls['myArray'];
       control.removeAt(i);
       this.myGroupName.splice(i,1);
    }



     inittermArray(nameObj:any) {

      return  this._fb.group({  
                [nameObj]: this._fb.group({
            
                          term : [''],
                          
                    })
                })  
    }

 addtermArray(newTerm:string) {
        const control = <FormArray>this.termForm.controls['myArray'];
        this.termCondition.push(newTerm);
        control.push(this.inittermArray(newTerm));

           
    }


  removeterm(i: number) {
       const control = <FormArray>this.termForm.controls['myArray'];
       control.removeAt(i);
       this.termCondition.splice(i,1);
    }

} 

 
