import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'app/shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Option from 'app/shared/models/Option';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';


@Component({
  selector: 'app-option-update',
  templateUrl: './option-update.component.html',
  styleUrls: ['./option-update.component.css']
})
export class OptionUpdateComponent implements OnInit {


  public errorMessage: string = '';
  public option: Option;
  public optionForm: FormGroup;
  private dialogConfig;
  id : string = this.activeRoute.snapshot.paramMap.get('OpID');
  QuesID : string = this.activeRoute.snapshot.paramMap.get('QuesID');

  values = [true, false];

  constructor(private repository: RepositoryService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private dialog: MatDialog,
              ) { }


  ngOnInit() {

    this.optionForm = new FormGroup({
      QuesID: new FormControl('', [Validators.required]),
      OpID: new FormControl('', [Validators.required]),
      OptionText: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      values: new FormControl(this.values, [Validators.required])
     
    });
   
    this.getOptionById();
  }

  private getOptionById() {
    //let questionsByQuizIDUrl: string = `api/Questions/Quizs/${this.id}`;   

        
      let OptionByIdUrl: string = `api/Options/${this.id}`;   
      this.repository.getData(OptionByIdUrl)
        .subscribe(res => {
          this.option = res as Option;
          this.optionForm.patchValue(this.option);
         
  })
}

public validateControl(controlName: string) {
  if (this.optionForm.controls[controlName].invalid && this.optionForm.controls[controlName].touched)
    return true;
 
  return false;
}
 
public hasError(controlName: string, errorName: string) {
  if (this.optionForm.controls[controlName].hasError(errorName))
    return true; 

  return false;
}

 
public redirectToOptionsList(){
  this.router.navigate([`/update/${this.QuesID}/option-list`]);
}

public updateOption(optionFormValue) {
  if (this.optionForm.valid) {
    this.executeOptionUpdate(optionFormValue);
  }
}
 
private executeOptionUpdate(optionFormValue) {

  this.option.QuesID = optionFormValue.QuesID;
  this.option.OptionText = optionFormValue.OptionText;
  this.option.values = optionFormValue.values;

  let apiUrl = `api/Options/${this.id}`;
  this.repository.update(apiUrl, this.option)
    .subscribe(res => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
dialogRef.afterClosed()
.subscribe(result => {
  this.router.navigate([`/update/${this.QuesID}/option-list`]);
   
});
}) 
}}
