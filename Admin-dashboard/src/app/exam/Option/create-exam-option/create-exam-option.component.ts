import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {RepositoryService} from 'app/shared/api/repository.service';
import Option from 'app/shared/models/Option';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-exam-option',
  templateUrl: './create-exam-option.component.html',
  styleUrls: ['./create-exam-option.component.css']
})
export class CreateExamOptionComponent implements OnInit {

  constructor(private repository: RepositoryService,
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }
    values = [true, false];
    public optionForm: FormGroup;
    private dialogConfig;
    id : string = this.activeRoute.snapshot.paramMap.get('QuesID');
    public option = new Option();

    public myquestion  : any = {
      QuesID : this.id }
  
    public tab = [this.myquestion] ;


  ngOnInit() {

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

  public hasError = (controlName: string, errorName: string) =>{
    return this.optionForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.router.navigate(['../exam/Option/option-list']);

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
     this.option.Questions = this.tab;
     let apiurl ='api/Options'
     this.repository.create(apiurl,this.option)
      .subscribe(res => {       
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate([`exam/${this.id}/option-list`]);           
      },
      (error => {
        this.location.back();
      })
    )
  });
 
    }

  }
