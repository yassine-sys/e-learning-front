import { Component, OnInit } from '@angular/core';
import Quiz from 'app/shared/models/Quiz';
import {RepositoryService} from '../../../shared/api/repository.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import Question from 'app/shared/models/Question';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
 
//declare var $: any;

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  public quizForm: FormGroup;
  private dialogConfig;


  constructor(private repository: RepositoryService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.quizForm = new FormGroup({
      Title: new FormControl('', [Validators.required, Validators.maxLength(60)]),  
    });
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.quizForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
 
  public createQuiz = (quizFormValue) => {
    if (this.quizForm.valid) {
      this.executeQuizCreation(quizFormValue);
    }
  }

 
  private executeQuizCreation = (quizFormValue) => {
    let quiz: Quiz = {
      QuizID: quizFormValue.QuizID,
      Title: quizFormValue.Title      
    } 
    let PostQuizUrl : string = `api/Quizs`
    this.repository.create(PostQuizUrl,quiz)
    .subscribe(res => {
    
    let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
   // this.router.navigate([`/quiz/quiz-question/${res.QuizID}`]);
    console.log(quiz.Title);
    //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
        //console.log(quiz.QuizID);   
      });

    }
    
    )
  }
  
}
