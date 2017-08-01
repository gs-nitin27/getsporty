import { Component, OnInit } from '@angular/core';
import { contentModel } from '../../model/viewContent.model';
import { viewContentServices } from '../../services/viewContent.services';
import { Globledataservices } from '../../services/globaldata.services';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
declare var $:any;
declare var timepicker: any;

@Component({
  selector: 'app-viewcontent',
  templateUrl: './viewContent.component.html',
  styleUrls:['./viewContent.component.css']
})
export class viewContentComponent implements OnInit {
     public Contents: contentModel[];
     public username  = localStorage.getItem('currentUser');
     public userid  = localStorage.getItem('currentUserid');


    constructor(private _viewContentServices: viewContentServices,private formBuilder: FormBuilder) {}
    ngOnInit() 
      {
          this.viewcontent();

  $(function() {
    $( "#startD" ).datepicker();
  });
      }

   viewcontent()
   {
    this._viewContentServices.loadcontentModel(this.userid).subscribe(res => this.Contents = res);
   }
    
    editContent(contentid)
    {
      alert(contentid);
    }
    
   //  public myForm: FormGroup;
     //  public invoiceItemsData = [{'item_id':'','qty':'','unit_price':'','total':''}] ;


      // addNewRow(){
         // this.invoiceItemsData.push({'item_id':'','qty':'','unit_price':'','total':''})
      //  }
}
