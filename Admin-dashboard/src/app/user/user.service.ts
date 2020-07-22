import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import user from 'app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

    DepartmentID:user.DepartmentID,

    //Roles : roles

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
userAuthentication(userName,password) {
  var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
}
getUserClaims(){
  return  this.http.get(this.rootUrl+'/api/Account/GetUserClaims');
 }
/* roleMatch(allowedRoles): boolean {
  var isMatch = false;
  var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
  allowedRoles.forEach(element => {
    if (userRoles.indexOf(element) > -1) {
      isMatch = true;
      return false;
    }
  });
  return isMatch;

}*/
}
