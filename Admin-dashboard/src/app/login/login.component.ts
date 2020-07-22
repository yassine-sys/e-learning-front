import { Component, OnInit } from '@angular/core';
import { User } from 'app/user/user.model';
import { UserService } from 'app/user/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    


  }

  OnSubmit(userName,password){
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      console.log("test")

      localStorage.setItem('userToken',"data.access_token");
      //localStorage.setItem('userRoles',data.role);

      this.router.navigate(['/home']);
      console.log(data.access_token)
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }


}
