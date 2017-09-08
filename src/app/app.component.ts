import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute ,RouterOutlet } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
public showMenu : boolean;
public username  = localStorage.getItem('currentUser');
public userid  = localStorage.getItem('currentUserid');

ngOnInit() 
{	
	
}
    
constructor(private router: Router){
if(this.userid) 
{
    this.showMenu = true;
}
else
{
    this.showMenu = false;
}
        
}

 logout() :void {
    localStorage.clear();
    this.router.navigate(["main"]);
    }
}
