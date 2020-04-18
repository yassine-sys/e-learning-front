import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'app/shared/api/repository.service';
import { MatDialog } from '@angular/material/dialog';
import { Route } from '@angular/compiler/src/core';
import { Location } from '@angular/common';
import Exam from 'app/shared/models/Exam';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  public examForm: FormGroup;
  private dialogConfig;

  constructor( private repository: RepositoryService,
               private dialog : MatDialog,
               private location : Location ) { }

  ngOnInit() {
    this.examForm = new FormGroup({
       Title : new FormControl('', [Validators.required, Validators.maxLength(60)])
    })

  this.dialogConfig = {
    height: '200px',
    width: '400px',
    disableClose: true,
    data: { }
  } }
  public hasError = (controlName: string, errorName: string) =>{
    return this.examForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
 
  public createExam = (examFormValue) => {
    if (this.examForm.valid) {
      this.executeExamCreation(examFormValue);
    }
  }

 
  private executeExamCreation = (examFormValue) => {
    let exam: Exam = {
      ExamID: examFormValue.ExamID,
      Title: examFormValue.Title      
    } 
    
    let postUrl: string = `api/Exams`;

    this.repository.create(postUrl, exam)
    .subscribe(res => {
    
    let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
   // this.router.navigate([`/quiz/quiz-question/${res.QuizID}`]);
    console.log(exam.Title);
    //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
        //console.log(quiz.QuizID);   
      });

    }
    
    )
  }


}
