import { Injectable } from '@angular/core';
import { BusinessUnit } from './business-unit.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessUnitService {
  businessunit:BusinessUnit;
  readonly rootUrl = 'https://localhost:44352';
  constructor(private http: HttpClient) { }

  addBusinessunit(businessunit:BusinessUnit){
    const body:BusinessUnit={
      Id:businessunit.Id,
      Name:businessunit.Name,
      Description:businessunit.Description
    }
    return this.http.post(this.rootUrl + '/api/businessUnit', body);
  }

  onDelete(BusinessUnitId:any){
    
    
    return this.http.delete('https://localhost:44352/api/businessUnit/'+BusinessUnitId);
  }
  onUpdate(BusinessUnitId:any,businessunit:BusinessUnit){

  return this.http.put('https://localhost:44352/api/businessUnit/'+businessunit.Id,businessunit);

  
}



}
