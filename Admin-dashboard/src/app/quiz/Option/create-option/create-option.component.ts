import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {RepositoryService} from 'app/shared/api/repository.service';
import Option from 'app/shared/models/Option';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { Location } from '@angular/common';
import { OptionService } from './option.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-option',
  templateUrl: './create-option.component.html',
  styleUrls: ['./create-option.component.css']
})



export class CreateOptionComponent implements OnInit {


    constructor(private repository: RepositoryService,
      private location: Location,
      private route: ActivatedRoute,
      private router: Router,
      private dialog: MatDialog,
      private optionservice:OptionService,
      private http:HttpClient) { }
      values = [true, false];
      public optionForm: FormGroup;
      private dialogConfig;
     // id : string = this.activeRoute.snapshot.paramMap.get('QuesID');
      public option = new Option();
      options:any=[];
      op:Option;

      /*public myquestion  : any = {
        QuesID : this.id }
    
      public tab = [this.myquestion] ;*/
  public QuesId;
  
    ngOnInit() {
      this.QuesId=this.route.snapshot.paramMap.get('id');
      this.list()
      this.resetForm()
      /*this.repository.SendMessage.subscribe((data:any) => 
      { console.log('message',data[0]);   
      this.option.Questions = data; });*/

       this.optionForm = new FormGroup({
        OptionText: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        values: new FormControl(this.values)
  
      });
  
      this.dialogConfig = {
        height: '200px',
        width: '400px',
        disableClose: true,
        data: { }
      }
    }
    resetForm(form?:NgForm){
      if (form!=null)
      form.reset();
      this.option={
        OpID:0,
        OptionText:'',
        values:''
  
      }
    }
    onSubmit(form:NgForm,QuesId:any){
      this.optionservice.addOption(form.value,this.QuesId).subscribe((res:any)=>{
        this.op=res;
        
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
  
        this.resetForm(form);
        this.list();
  
      })
  
    }
    optionlist(QuesId:any): Observable<Array<Option>>{
      return this.http.get<Array<Option>>('https://localhost:44352/api/option/OptionByQuestion/'+QuesId);
  
    }
    list(){
      this.optionlist(this.QuesId).subscribe((data: any) => {
        this.options=data
        console.log(data);
      });
  
    }
    onDelete(OpID:any){
      this.optionservice.onDelete(OpID).subscribe(res=>
        {
          
          this.options=res;
         // let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
  
          this.list();
  
        }
        )  
    }
    isShow=true;
    id:number;
    toggledisplay(id){
      this.isShow=!this.isShow;
      this.id=id;
    }
    public hasError = (controlName: string, errorName: string) =>{
      return this.optionForm.controls[controlName].hasError(errorName);
    }
   
    public onCancel = () => {
      this.router.navigate(['../quiz/Option/option-list']);
  
    }
   
    public createOption = (optionFormValue) => {
      if (this.optionForm.valid) {
        this.executeOptionCreation(optionFormValue);
      }
    }
   
    private executeOptionCreation = (optionFormValue) => {
  
       
       this.option.OpID= optionFormValue.QuesID;
       this.option.values= optionFormValue.values;
       this.option.OptionText= optionFormValue.OptionText;
      // this.option.Questions = this.tab;
       let apiurl ='api/Options'
       this.repository.create(apiurl,this.option)
        .subscribe(res => {       
          let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
           dialogRef.afterClosed()
            .subscribe(result => {
         //     this.router.navigate([`quiz/${this.id}/option-list`]);           
        },
        (error => {
          this.location.back();
        })
      )
    });
   
      }
  
    }