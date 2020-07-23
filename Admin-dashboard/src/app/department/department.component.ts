import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessUnitService } from 'app/business-unit/business-unit.service';
import { DepartmentService } from './department.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Department } from './department.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'app/user/user.service';
import { BusinessUnit } from 'app/business-unit/business-unit.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  private dialogConfig;

  public BusinessUnitId;
  userClaims: any;
  constructor(private route:ActivatedRoute,private businessunitservice:BusinessUnitService,
    private departmentservice:DepartmentService,private http:HttpClient,private router: Router,private dialog: MatDialog, private userService: UserService) { }
    department:Department;
    departement:any=[];
    departments:any
    dep=new Department

   


  
  ngOnInit() {
    this.BusinessUnitId=this.route.snapshot.paramMap.get('id');
    console.log(this.BusinessUnitId)
    this.resetForm();
    this.list()
   // this.list();
   // this.userService.getUserClaims().subscribe((data: any) => {
     // this.userClaims = data;
    //})
 //   this.departmentservice.departmentbubusinessunitid(this.BusinessUnitId).subscribe((data:any)=>{
   //   this.departments=data;
     // console.log(data)
//})
  }
  isShow=true;
  id:number;
  toggledisplay(id){
    this.isShow=!this.isShow;
    this.id=id;
  }

 
  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.department={
      DepartmentID:0,
      Name:'',
      Description:'',
      
    }
  }

  onSubmit(form:NgForm,BusinessUnitId:any){
    this.departmentservice.addDepartment(form.value,this.BusinessUnitId).subscribe((res:any)=>{
      this.department=res;
      
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list();

    })

  }

 // departmentlist(): Observable<Array<Department>>{
  // return this.http.get<Array<Department>>('https://localhost:44306/api/DepartmentByBusinessUnit/'+this.BusinessUnitId)
     /* data=>{
        this.departments=data as string [];
        console.log(data)

      }
    );*/
  //}
 // list(){
   // this.departmentlist().subscribe((data: any) => {
     // this.dataSource.data = data as Department[];
     // this.dataSource.sort = this.sort;
     // this.dataSource.paginator = this.paginator;
     // console.log(data);
   // });

  //}

  onEdit(DepartmentID:any,department:Department,BusinessUnitId:any){
    this.departmentservice.onEdit(DepartmentID,department,BusinessUnitId).subscribe(res=>{
     // this.department.BusinessUnitId=this.BusinessUnitId
      this.department.DepartmentID=department.DepartmentID
      this.department.Name=department.Name
      this.department.Description=department.Description

      res=this.department
      console.log(res)
     // this.list();


    })
  }
  departmentlist(BusinessUnitId:any): Observable<Array<Department>>{
    return this.http.get<Array<Department>>('https://localhost:44352/api/businessUnit/getDepartmentByBusinessUnit/'+BusinessUnitId)

  }
  list(){
    this.departmentlist(this.BusinessUnitId).subscribe((data: any) => {
      this.departement=data
      console.log(data);
    });

  }
    

  onDelete(DepartmentID:any){
    this.departmentservice.onDelete(DepartmentID).subscribe(res=>
      {
        
        this.departement=res;
       // let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        this.list();

      }
      )  
  }

  onSelect(department){
    this.router.navigate(['/department',department.DepartmentID])



}

}
