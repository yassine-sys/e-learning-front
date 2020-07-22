import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessUnit } from './business-unit.model';
import { BusinessUnitService } from './business-unit.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'app/user/user.service';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.scss']
})
export class BusinessUnitComponent implements OnInit {
  private dialogConfig;
 // public BusinessUnitId;

  businessunit:BusinessUnit;
  test = new BusinessUnit();
  constructor(private businessunitservice:BusinessUnitService
    ,private http:HttpClient
    ,private router: Router
    ,private dialog: MatDialog
    , private userService: UserService,
    private route :ActivatedRoute) { }
  //c:any;
  //userClaims: any;

  business_unit:any=[];
  
  
  ngOnInit() {
    //this.BusinessUnitId=this.route.snapshot.paramMap.get('id');

    //this.userService.getUserClaims().subscribe((data: any) => {
     // this.userClaims = data;
//console.log(data)

//this.Id=this.userService.user.Id
//this.list()
    //}//);

   
    this.list()
  }
  list(){
    this.businessunitlist().subscribe((data: any) => {
      this.business_unit=data
      console.log(data);
    });

  }

  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.businessunit={
      Id:0,
      Name:'',
      Description:''
    }
  }

  onSubmit(form:NgForm){
    this.businessunitservice.addBusinessunit(form.value).subscribe((res:any)=>{
      this.businessunit=res;
      console.log("test");
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list()


    })
   // this.router.navigate(['/business-unit-list'])

  }

  businessunitlist(): Observable<Array<BusinessUnit>>{
   return this.http.get<Array<BusinessUnit>>('https://localhost:44352/api/businessUnit')
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
      this.businessunit.Id=businessunit.Id
      this.businessunit.Name=businessunit.Name
      this.businessunit.Description=businessunit.Description
      res=this.businessunit
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      console.log(res);
      this.list()


    })


  }
  onSelect(businessunit){
    this.router.navigate(['/business-unit',businessunit.Id])

  }
}
