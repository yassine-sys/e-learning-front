import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import user from 'app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'https://localhost:44306';
  constructor(private http:HttpClient) { }

registerUser(user:User){
  const body:User = {
    Id:user.Id,
    Username: user.Username,
    Password: user.Password,
    ConfirmPassword:user.ConfirmPassword,
    Email: user.Email,
    FirstName: user.FirstName,
    LastName: user.LastName,

    DepartmentID:user.DepartmentID,

  }
 

  return this.http.post(this.rootUrl + '/api/Account/Register', body);
}

onDelete(Id:string){
  return this.http.delete('https://localhost:44306/api/Account/user/'+Id);
}
UserByDepartment(DepartmentID){
  return this.http.get('https://localhost:44306/api/UserByDepartment/'+DepartmentID)
}
getAllRoles() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/roles/GetAllRoles', { headers: reqHeader });
}
}
