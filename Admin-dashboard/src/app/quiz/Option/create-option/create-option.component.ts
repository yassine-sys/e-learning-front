import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {RepositoryService} from 'app/shared/api/repository.service';
import Option from 'app/shared/models/Option';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { Location } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-create-option',
  templateUrl: './create-option.component.html',
  styleUrls: ['./create-option.component.css']
})



export class CreateOptionComponent implements OnInit {


    values = [true, false];
   
  constructor(private repository: RepositoryService,
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

    public optionForm: FormGroup;
    private dialogConfig;
    id : string = this.activeRoute.snapshot.paramMap.get('QuesID');
    x = this.values.toString();
    i:any;

    private routeSub: Subscription;
    
  ngOnInit() {
    console.log(this.x);

    console.log(this.id);
    this.optionForm = new FormGroup({
      QuesID: new FormControl('', [Validators.required]),
      OptionText: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      //Index: new FormControl('', [Validators.required])
      values: new FormControl(this.values)

    });

    console.log(this.optionForm.value);

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
    this.router.navigate([`update/${this.id}/option-list`]);

  }

 
  public createOption = (optionFormValue) => {
    if (this.optionForm.valid) {
      this.executeOptionCreation(optionFormValue);
    }
  }
 
  private executeOptionCreation = (optionFormValue) => {
    let option: Option = {
      OpID: optionFormValue.OpID,
      QuesID: optionFormValue.QuesID,
      OptionText: optionFormValue.OptionText,
      values: optionFormValue.values
    }



    let apiUrl : string = `api/Options`;
    this.repository.create(apiUrl, option)
      .subscribe(res => {
        
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate([`update/${this.id}/option-list`]);

      },
      (error => {
        this.location.back();
      })
    )
  })
 
}

}
