import { Component, OnInit } from '@angular/core';
import Question from 'app/shared/models/Question';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'app/shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.css']
})
export class QuestionUpdateComponent implements OnInit {

  public errorMessage: string = '';
  public question: Question;
  public questionForm: FormGroup;
  private dialogConfig;
  id : string = this.activeRoute.snapshot.paramMap.get('QuesID');
  QuizId : string = this.activeRoute.snapshot.paramMap.get('QuizID');
  types = ["Single choice", "Multichoice"];
  

  constructor(private repository: RepositoryService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private dialog: MatDialog,
              ) { }

  ngOnInit() {
 
    this.questionForm = new FormGroup({
      QuesText: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      types: new FormControl(this.types)

     
    });
   
    this.getQuestionById();
  }

  private getQuestionById() {
     
      let QuestionByIdUrl: string = `api/Questions/${this.id}`;   
      this.repository.getData(QuestionByIdUrl)
        .subscribe(res => {
          this.question = res as Question;
          this.questionForm.patchValue(this.question);
         
  })
}

public validateControl(controlName: string) {
  if (this.questionForm.controls[controlName].invalid && this.questionForm.controls[controlName].touched)
    return true;
 
  return false;
}
 
public hasError(controlName: string, errorName: string) {
  if (this.questionForm.controls[controlName].hasError(errorName))
    return true; 

  return false;
}

 
public redirectToQuestionsList(){
  this.router.navigate([`/quiz/update/${this.QuizId}/question-list`]);
}

public updateQuestion(questionFormValue) {
  if (this.questionForm.valid) {
    this.executeQuestionUpdate(questionFormValue);
  }
}
 
private executeQuestionUpdate(questionFormValue) {

  this.question.QuesText = questionFormValue.QuesText;
  this.question.types = questionFormValue.types;

  let apiUrl = `api/Questions/${this.id}`;
  this.repository.update(apiUrl, this.question)
    .subscribe(res => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
dialogRef.afterClosed()
.subscribe(result => {
  
  this.router.navigate([`/quiz/${this.id}/option-list`]);
   
});
}) }

}
