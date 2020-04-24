import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessUnitService } from 'app/business-unit/business-unit.service';
import { DepartmentService } from './department.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Department } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public BusinessUnitId;
  constructor(private route:ActivatedRoute,private businessunitservice:BusinessUnitService,
    private departmentservice:DepartmentService,private http:HttpClient,private router: Router) { }
    department:Department;
    departement:any=[];
    departments:string[];
  ngOnInit(): void {
    this.BusinessUnitId=this.route.snapshot.paramMap.get('id');
    console.log(this.BusinessUnitId)
    this.resetForm();
    this.departmentlist()
  }

  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.department={
      DepartmentID:0,
      Name:'',
      Description:'',
      BusinessUnitId:this.BusinessUnitId
    }
  }

  onSubmit(form:NgForm){
    this.departmentservice.addDepartment(form.value).subscribe((res:any)=>{
      this.department=res;
      this.department.BusinessUnitId=this.BusinessUnitId
      this.resetForm(form);
      this.departmentlist();

    })

  }

  departmentlist(){
    this.http.get('https://localhost:44306/api/DepartmentByBusinessUnit/'+this.BusinessUnitId).subscribe(
      data=>{
        this.departments=data as string [];
        console.log(data)

      }
    );
  }

  onEdit(DepartmentID:any,department:Department,BusinessUnitId:any){
    this.departmentservice.onEdit(DepartmentID,department,BusinessUnitId).subscribe(res=>{
      this.department.BusinessUnitId=this.BusinessUnitId
      this.department.DepartmentID=department.DepartmentID
      this.department.Name=department.Name
      this.department.Description=department.Description
      res=this.department
      console.log(res)
      this.departmentlist();


    })
  }

  onDelete(DepartmentID:any){
    this.departmentservice.onDelete(DepartmentID).subscribe(res=>
      {
        this.departement=res;
        this.departmentlist();

      }
      )  
  }

  onSelect(department){
    this.router.navigate(['/department',department.DepartmentID])



}



}
