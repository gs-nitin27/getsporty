import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

public showMenu : boolean;
public username  = localStorage.getItem('currentUser');
public userid  = localStorage.getItem('currentUserid');

 ngOnInit() {
  }

constructor(private router: Router){
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
