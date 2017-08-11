import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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
public viewevent : boolean;
public createtournament : boolean;
public viewtournament : boolean;
public showMenu : boolean;
public username  = localStorage.getItem('currentUser');
public userid  = localStorage.getItem('currentUserid');
public user_image  = localStorage.getItem('user_image');

 ngOnInit() {
  }

constructor(private router: Router)
{

if(this.router.url === "/home")
{
  this.mycreatonshow = true;
}
else if(this.router.url === "/createevent")
{
  this.createevent = true;
}
else if(this.router.url === "/viewEvent")
{
  this.viewevent = true;
}
else if(this.router.url === "/job")
{
  this.createjob = true;
}
else if(this.router.url === "/viewjob")
{
  this.viewjob = true;
}
//else if(this.router.url === "/home")
//{
//  this.mycreatonshow = false;
//}
//else if(this.router.url === "/home")
//{
 // this.mycreatonshow = false;
//}
//else if(this.router.url === "/home")
//{
  //this.mycreatonshow = false;
//}

 if(this.userid) 
 {

    this.showMenu = true;
 }
 else
{
    this.showMenu = false;
    this.router.navigate(["/login"]);

}
        
}

 logout() :void {
    localStorage.clear();
    
    this.router.navigate(["/login"]);
    }

 // gotoDetail(): void {
 // alert(this.userid);
//  this.router.navigate(['/profile', this.userid]);
 // }

  
}
