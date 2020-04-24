import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  department:Department;
  readonly rootUrl = 'https://localhost:44306';
  constructor(private http: HttpClient) { }

  addDepartment(department:Department){
    const body:Department={
      DepartmentID:department.DepartmentID,
      Name:department.Name,
      Description:department.Description,
      BusinessUnitId:department.BusinessUnitId
    }
    return this.http.post(this.rootUrl + '/api/Departments', body);

  }

  onDelete(DepartmentID:any){
    
    
    return this.http.delete('https://localhost:44306/api/Departments/'+DepartmentID);
  }

  
  onEdit(DepartmentID:any,department:Department,BusinessUnitId:any){
    
    return this.http.put('https://localhost:44306/api/Departments/'+department.DepartmentID,department);

  }
  departmentlist(){
    return this.http.get('https://localhost:44306/api/Departments')
  }
  departmentbyid(id){
    return this.http.get('https://localhost:44306/api/Departments/'+id)

  }
  departmentbubusinessunitid(BusinessUnitId){
    return this.http.get('https://localhost:44306/api/DepartmentByBusinessUnit/'+BusinessUnitId)
  }


  

}


