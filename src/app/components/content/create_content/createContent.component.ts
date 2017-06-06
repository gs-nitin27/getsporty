import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CreateContent } from '../../model/createContent.module';
import { createContentServices } from '../../services/createContent.services';



@Component({
  selector: 'app-createcontent',
  templateUrl: './createContent.component.html',
  providers:[createContentServices]
})
export class CreateContentComponent implements OnInit {

  constructor(private _contents: createContentServices,private router: Router) { }
  @Input() contents: CreateContent;
  responseStatus:Object= [];
  ngOnInit() {
  
    this.contents = new CreateContent(); 
  }

  Create()
  {    
          
           this._contents.saveContent(this.contents).subscribe(
           (data) => { 
             this.router.navigate(["/contentview"]);
             },
           (err) => alert("Hi")
        ); 
  }
}
