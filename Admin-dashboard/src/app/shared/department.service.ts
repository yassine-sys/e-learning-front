import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public ApiURL = 'https://localhost:44306/api';


  constructor(private http: HttpClient) { }
  
  getDepartmentList(){ 
    return this.http.get(this.ApiURL + '/Departments');
  }

}
