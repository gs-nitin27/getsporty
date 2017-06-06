import { Component, OnInit } from '@angular/core';
import { contentModel } from '../../model/viewContent.model';
import { viewContentServices } from '../../services/viewContent.services';




@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewContent.component.html'
})
export class viewContentComponent implements OnInit {
     public Contents: contentModel[];
    


    constructor(private _viewContentServices: viewContentServices) {}

    ngOnInit() {

        this._viewContentServices.loadcontentModel(1).subscribe(res => this.Contents = res);
    }
    
}
