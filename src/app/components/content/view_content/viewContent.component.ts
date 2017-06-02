import { Component, OnInit } from '@angular/core';
import { contentModel } from '../../model/viewContent.model';
import { viewContentServices } from '../../services/viewContent.services';
/**
 * view Content component class , contains all the functionality related to my view content  operations 
 */
@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewContent.component.html'
})
export class viewContentComponent implements OnInit {
     public Contents: contentModel[];
    
    /**  
     * @param  {viewContentServices} private_myTimeSheetService
     */
    constructor(private _viewContentServices: viewContentServices) {}

    ngOnInit() {
        // On initialization of page pass 1 , so it shows Monday data
        this._viewContentServices.loadcontentModel(1).subscribe(res => this.Contents = res);
    }
    
    /**
     * Funtion to get content data
     * @param  {number} 
     * @returns void
     */
    getContentDataId(id: number) : void {
        this._viewContentServices.loadcontentModel(id).subscribe(res => this.Contents = res);
    }
    /**
     * Function to edit selected title by its title id 
     * @param  {number} id
     * @returns void
     */
    editContent(id: number) : void  {
        alert("Your title id is :-" + id + "   Please do what you want");
    }
}
