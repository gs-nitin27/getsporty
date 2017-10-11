import { Injectable, Inject ,Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Classdata } from '../../services/class.services';
declare var $:any;  

@Component({
    selector : 'app-viewClass',
    templateUrl : './viewClass.component.html',
    styleUrls : ['./viewClass.component.css'],
})
export class viewClass implements OnInit 
{
userid : any;
result : any;
classid : any;
userType =  "L";
usertest : any;
onetest : any;
twotest : any;

constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private _Classdata :Classdata)
{ 
 this.userid = localStorage.getItem('currentUserid');
}
ngOnInit()
{
this._activatedRoute.params.subscribe(params => {this.classid = +params['classid'];});
//alert(this.classid);
this.getDietPlan();


$.fn.extend({
    treed: function (o) {
      
      var openedClass = 'glyphicon-minus-sign';
      var closedClass = 'glyphicon-plus-sign';
      
      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };
      
        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

$('#tree1').treed();

$('#tree2').treed({openedClass:'glyphicon-folder-open', closedClass:'glyphicon-folder-close'});

$('#tree3').treed({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});








 
}

getDietPlan()
{
    this._Classdata.getDietPlan(this.userid,this.userType).subscribe(res =>
        {
         this.result = res.data;

        var i = 0;
        let row ;
        var event_temp ;

        alert(JSON.stringify(this.result));

      $.each( this.result, function( key, value ) {
      
        if(typeof value  == "object") 
         {
            $.each( value, function( ky, val ) 
            {

           // alert('ky => '+ky);
            if(typeof val  == "object") 
            { 
            $.each( val, function( ky1, val1 ) 
            {
                alert('ky => '+ky1);

                if(typeof val  == "object") 
                {  
                    $.each( val1, function( ky2, val2 ) 
                    {  

                        var i=1;
                        $.each( val2, function( ky3, val3 ) 
                        {  
                          //  alert('ky => '+ky3);
                          //  alert('val => '+ JSON.stringify(val3));
                             
            event_temp +='<div class="col-md-4" ><div class="card" style="height:500px;" ><img class="img-fluid"  alt="img">asdfasdfasfasf<div class="card-block"><h4 class="card-title"></h4><span style="float:left;" class="label label-success"></span><span style="float:right;" class="label label-warning"></span><br><i class="fa fa-location-arrow" style="float: left;"  aria-hidden="true"></i><br><div><p class="card-text"></p></div><a href="" class="btn btn-primary" target="_blank">View</a></div></div></div>'; 
                        
                    $('#id3').append(event_temp) 

                
                    

                        });
                    });
                }  
            });
            } 
                // alert('ky => '+ky);
                // alert('val => '+val);

            });   
        } 
        });




         this.result.forEach(element => 
         {
          var test =[]
          
        

        if(typeof element  == "object") 
        {
          row = element[i]; 
           i= i+1;   

          // alert(Object.keys(row)[0]); 

          this.usertest =  this.generateArray(element);
          
          this.usertest.forEach(tryelement => 
            {
            if(typeof tryelement  == "object") 
            {
            this.onetest = this.generateArray(tryelement);

             this.onetest.forEach(twotest => 
            {
              //  alert(JSON.stringify(twotest));


            });
             }
        });
    }
           
       });

        //  for(var i in this.result)
        //  {
        //        alert(JSON.stringify(this.result[i]));
       
        //  }
         

            
    });

}


generateArray(obj){
    return Object.keys(obj).map((key)=>{ 

        // alert(JSON.stringify(obj[key])); 
        
        return obj[key]});
 }

}