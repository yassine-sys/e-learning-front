import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  readonly rootUrl = 'https://localhost:44352';

  constructor(private http:HttpClient) { }
  registerUser(user:User/*,roles:string[]*/){
    const body:User = {
      Id:user.Id,
     // Username: user.Username,
      Password: user.Password,
      ConfirmPassword:user.ConfirmPassword,
      Email: user.Email,
     // FirstName: user.FirstName,
     // LastName: user.LastName,
  
     // DepartmentID:user.DepartmentID,
  
      //Roles : roles
  
    }
   
  
    return this.http.post(this.rootUrl + '/api/Account/Register', body);
  }
  
}
