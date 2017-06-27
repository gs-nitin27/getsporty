import { Component, OnInit } from '@angular/core';
import { contentModel } from '../../model/viewContent.model';
import { viewContentServices } from '../../services/viewContent.services';
import { Globledataservices } from '../../services/globaldata.services';




@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewContent.component.html'
})
export class viewContentComponent implements OnInit {
     public Contents: contentModel[];
     public username  = localStorage.getItem('currentUser');
     public userid  = localStorage.getItem('currentUserid');

    


    constructor(private _viewContentServices: viewContentServices) {}

    ngOnInit() 
         {
            this.viewcontent();
         }

   viewcontent()
   {

    this._viewContentServices.loadcontentModel(this.userid).subscribe(res => this.Contents = res);
   }
    


    editContent(contentid)
    {
      alert(contentid);
    }
    
}
