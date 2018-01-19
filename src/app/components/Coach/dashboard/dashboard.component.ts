import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "angular2-social-login";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
public mycreatonshow : boolean;
public createjob : boolean;
public viewjob : boolean;
public createevent : boolean;
public editevent : boolean;
public editjob : boolean;
public viewevent : boolean;
public createtournament : boolean;
public viewtournament : boolean;
public showMenu : boolean;
public username  = localStorage.getItem('currentUser');
public userid  = localStorage.getItem('currentUserid');
public user_image  = localStorage.getItem('user_image');
public prof_id = localStorage.getItem('prof_id')
public id : any;

ngOnInit() 
{
 
}

constructor(public _auth: AuthService,private router: Router, private _route: ActivatedRoute)
{

 //alert(this.prof_id);

this._route.params.subscribe(params => { this.id = +params['id'];});

if(this.router.url === "/home")
{
  this.mycreatonshow = true;
}
else if(this.router.url === "/createevent")
{
  this.createevent = true;
}
else if(this.router.url === "/viewEvent/"+this.id)
{
  this.viewevent = true;
}
else if(this.router.url === "/job")
{
  this.createjob = true;
}
else if(this.router.url === "/viewjob/"+this.id)
{
  this.viewjob = true;
}
else if(this.router.url === "/editEvent/"+this.id)
{
  this.editevent = true;
}
else if(this.router.url === "/editJob/"+this.id)
{
  this.editjob = true;
}
if(this.userid) 
{
     if(this.prof_id)
     {
     this.showMenu = true;
     }
     else
     {
       //this.showMenu = true;
       this.router.navigate(["/registration"]);
     }
}
else
{
    this.showMenu = false;
    this.router.navigate(["/login"]);
}      
}
logout() :void 
{
  localStorage.clear();
  this._auth.logout().subscribe(
    (data)=>
    {
    
      alert("hii");
    
    } 
  )

 
    this.router.navigate(["/login"]);
}

 // gotoDetail(): void {
 // alert(this.userid);
//  this.router.navigate(['/profile', this.userid]);
 // }

}
