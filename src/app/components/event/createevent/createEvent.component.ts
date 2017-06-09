
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


import { CreateEvent } from '../../model/createEvent.module';
import { createEventServices } from '../../services/createEvent.services';

@Injectable()

@Component({
  selector: 'app-createevent',
  templateUrl: './createEvent.component.html',
  providers:[createEventServices]
})
export class CreateEventComponent implements OnInit {

public myForm: FormGroup;
myGroupName = ['term'];
sports: any[];
sportslist: Object = {};
image :string;
ticket :Object = {};



  constructor(private _event: createEventServices,private router: Router,private http: Http,private _fb: FormBuilder) { }
  @Input() events: CreateEvent;
  responseStatus:Object= [];
  ngOnInit() {

    this.Sportlist();
    this.events = new CreateEvent();
    this.myForm = this._fb.group({
         
            myArray: this._fb.array([
                this._fb.group({  
                   term: this._fb.group({
                            TName:  [''],
                            Price:  [''],
                            Number: [''],
                     
                    })
                }), 

            ])
        }); 
  }

  Create()
  {       
          

     var inputValue = (<HTMLInputElement>document.getElementById("myValue")).value;
     this.events.ticket = inputValue;

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


}
