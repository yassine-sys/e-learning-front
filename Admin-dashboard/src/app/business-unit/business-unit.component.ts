import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessUnit } from './business-unit.model';
import { BusinessUnitService } from './business-unit.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent implements OnInit {
  private dialogConfig;

  businessunit:BusinessUnit;
  constructor(private businessunitservice:BusinessUnitService
    ,private http:HttpClient
    ,private router: Router
    ,private dialog: MatDialog) { }
  businessunits:any;

  business_unit:any=[];
  displayedColumns: string[] = ['BusinessUnitId', 'Name', 'Description','onDelete','onUpdate','onSelect'];
  dataSource = new MatTableDataSource<BusinessUnit>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {
    this.resetForm();
    this.businessunitlist().subscribe((data: any) => {
      this.dataSource.data = data as BusinessUnit[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
    this.list()
  }
  list(){
    this.businessunitlist().subscribe((data: any) => {
      this.dataSource.data = data as BusinessUnit[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });

  }

  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.businessunit={
      BusinessUnitId:0,
      Name:'',
      Description:''
    }
  }

  onSubmit(form:NgForm){
    this.businessunitservice.addBusinessunit(form.value).subscribe((res:any)=>{
      this.businessunit=res;
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list()


    })
   // this.router.navigate(['/business-unit-list'])

  }

  businessunitlist(): Observable<Array<BusinessUnit>>{
   return this.http.get<Array<BusinessUnit>>('https://localhost:44306/api/BusinessUnits')
     /* res=>{
        this.businessunits=res as string [];
        
        
      }
    
      
    );*/
  }

  onDelete(BusinessUnitId:any){
    this.businessunitservice.onDelete(BusinessUnitId).subscribe(res=>
      {
        this.business_unit=res;
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        this.list();

        
      }
      )  
  }

  onUpdate(BusinessUnitId:any,businessunit:BusinessUnit){
    this.businessunitservice.onUpdate(BusinessUnitId,businessunit).subscribe(res=>{
      this.businessunit.BusinessUnitId=businessunit.BusinessUnitId
      this.businessunit.Name=businessunit.Name
      this.businessunit.Description=businessunit.Description
      res=this.businessunit

      console.log(res);
      this.list()


    })


  }
  onSelect(businessunit){
    this.router.navigate(['/business-unit',businessunit.BusinessUnitId])

  }


}
