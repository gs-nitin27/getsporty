import { JobModule } from '../../model/job.model';
import { JobServices } from '../../services/job.services';


import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Injectable, Inject ,Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers : [JobServices] 
})
export class JobComponent implements OnInit {

public userid :string;
public image : string;
public sports : any[];

constructor(private _JobServices : JobServices, private _http : Http) 
{
     this.Job = new JobModule(); 

}

   @Input() Job: JobModule;

  ngOnInit() {

  this.Job.userid =  localStorage.getItem('currentUserid');
  this.Job.id = "0";
  this.Sportlist();
  
  
  }


CreateJob(job) : void
{
     this._JobServices.CreatJob(job);
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
            this._http.post('http://localhost/testingapp/angularapi.php?act=upload', binaryString)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => {
                this.Job.image = data;
                },
                error => console.log(error)
    ) }

 Sportlist() {
    this._JobServices.Sportlist().subscribe(data => { this.sports = data; console.log(this.sports)
      })
  }

}
