import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	 selector : 'app-profile',
	 templateUrl : './profile.component.html',
	 styleUrls : ['./profile.component.css'],
})
export class ProfileComponent implements OnInit
{
public userid  = localStorage.getItem('currentUserid');
ngOnInit()
{
	
}
}