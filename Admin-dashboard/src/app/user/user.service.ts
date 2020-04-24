import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'https://localhost:44306';
  constructor(private http:HttpClient) { }

registerUser(user:User){
  const body: User = {
    Id:user.Id,
    Username: user.Username,
    Password: user.Password,
    ConfirmPassword:user.ConfirmPassword,
    Email: user.Email,
    FirstName: user.FirstName,
    LastName: user.LastName,
    DepartmentID:user.DepartmentID
  }
  return this.http.post(this.rootUrl + '/api/Account/Register', body);
}

onDelete(Id:string){
  return this.http.delete('https://localhost:44306/api/Account/user/'+Id);
}
}
