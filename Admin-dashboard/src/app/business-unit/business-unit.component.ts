import { Component, OnInit } from '@angular/core';
import { BusinessUnit } from './business-unit.model';
import { BusinessUnitService } from './business-unit.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent implements OnInit {
  businessunit:BusinessUnit;
  constructor(private businessunitservice:BusinessUnitService,private http:HttpClient,private router: Router) { }
  businessunits:string[];

  business_unit:any=[];
  ngOnInit(): void {
    this.resetForm();
    this.businessunitlist();
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
      this.resetForm(form);
      this.businessunitlist();


    })
  }

  businessunitlist(){
    this.http.get('https://localhost:44306/api/BusinessUnits').subscribe(
      data=>{
        this.businessunits=data as string [];
        
      }
      
    );
  }

  onDelete(BusinessUnitId:any){
    this.businessunitservice.onDelete(BusinessUnitId).subscribe(res=>
      {
        this.business_unit=res;
        this.businessunitlist();

        
      }
      )  
  }

  onUpdate(BusinessUnitId:any,businessunit:BusinessUnit){
    this.businessunitservice.onUpdate(BusinessUnitId,businessunit).subscribe(res=>{
      this.businessunit.BusinessUnitId=businessunit.BusinessUnitId
      this.businessunit.Name=businessunit.Name
      this.businessunit.Description=businessunit.Description
      res=this.businessunit
      console.log(res)
      this.businessunitlist()
    })
  }
  onSelect(businessunit){
    this.router.navigate(['/business-unit',businessunit.BusinessUnitId])

  }


}
