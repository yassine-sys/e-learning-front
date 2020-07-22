import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   router:Router

    ngOnInit(){
      
    }

   

    Logout() {
        localStorage.removeItem('userToken');
        console.log("user loggout out");
        this.router.navigate(['/login']);
      }

   
}
