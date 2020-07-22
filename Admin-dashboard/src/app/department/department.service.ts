import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { HttpClient } from '@angular/common/http';
import { BusinessUnit } from 'app/business-unit/business-unit.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  department:Department;
  readonly rootUrl = 'https://localhost:44352';
  constructor(private http: HttpClient) { }
  public BusinessUnitId;

  addDepartment(department:Department,BusinessUnitId:any){
    const body={
      DepartmentID:department.DepartmentID,
      Name:department.Name,
      Description:department.Description,
      
      

    }
    return this.http.post(this.rootUrl + '/api/department/'+BusinessUnitId, body);

  }

  onDelete(DepartmentID:any){
    
    
    return this.http.delete('https://localhost:44352/api/department/'+DepartmentID);
  }

  
  onEdit(DepartmentID:any,department:Department,BusinessUnitId:any){
    
    return this.http.put('https://localhost:44352/api/Departments/'+department.DepartmentID,department);

  }
  departmentlist(){
    return this.http.get('https://localhost:44352/api/Departments')
  }
  departmentbyid(id){
    return this.http.get('https://localhost:44352/api/Departments/'+id)

  }
  departmentbubusinessunitid(BusinessUnitId){
    return this.http.get('https://localhost:44352/api/businessUnit/getDepartmentByBusinessUnit/'+BusinessUnitId)
  }


  

}


