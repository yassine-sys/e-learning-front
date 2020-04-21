import { Component, OnInit } from '@angular/core';
import Question from 'app/shared/models/Question';
import { RepositoryService } from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import Quiz from 'app/shared/models/Quiz';
 
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  constructor(private repository: RepositoryService,
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }
    types = ["Single choice", "Multichoice"];
    public questionForm: FormGroup;
    private dialogConfig;
    id : string = this.activeRoute.snapshot.paramMap.get('QuizID');
    public question = new Question();
    

  quizz : any = {
      QuizID : this.id
   }
    public tab : any = [this.quizz];


  ngOnInit() {
         
    /*this.repository.SendMessage.subscribe((data:any) => 
    { console.log('message',data[0]); 
      this.question.Quizzes = data;}); */
    
     this.questionForm = new FormGroup({
      QuesText: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      types: new FormControl(this.types)

    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.questionForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.router.navigate(['../quiz/quiz-dashboard']);

  }
 
  public createQuestion = (questionFormValue) => {
    if (this.questionForm.valid) {
      this.executeQuestionCreation(questionFormValue);
    }
  }
 
  private executeQuestionCreation = (questionFormValue) => {    

     this.question.QuesID= questionFormValue.QuesID;
     this.question.types= questionFormValue.types;
     this.question.QuesText= questionFormValue.QuesText;
     this.question.Quizzes = this.tab;
    this.repository.postAllQuizQuestions(this.question)
      .subscribe(res => {       
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate([`quiz/${this.id}/question-list`]);           
      },
      (error => {
        this.location.back();
      })
    )
  });
 
    }

  }