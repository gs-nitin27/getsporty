import { Component} from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {




  constructor() { }

  ngOnInit() {

  $(document).ready(function() {
    $('select').material_select();
  });
 

 $('.datepicker').pickadate({   
            selectMonths: true, 
            selectYears: 100,
            format: 'dd/mm/yyyy',
            min: 0,
            max: true,
            closeOnSelect: true,
            closeOnClear: true,
        });
  }

}
