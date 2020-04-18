import { Component, OnInit } from '@angular/core';
import Question from 'app/shared/models/Question';
import { RepositoryService } from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
 
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

    public questionForm: FormGroup;
    private dialogConfig;
    id : string = this.activeRoute.snapshot.paramMap.get('QuizID');
  
   
    private routeSub: Subscription;
    
  ngOnInit() {
    console.log(this.id);
 
    this.questionForm = new FormGroup({
      QuizID: new FormControl('', [Validators.required]),
      QuesText: new FormControl('', [Validators.required, Validators.maxLength(60)])
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
    let question: Question = {
      QuesID: questionFormValue.QuesID,
      QuizID: questionFormValue.QuizID,
      QuesText: questionFormValue.QuesText

    }

    let apiUrl = `api/Questions`;

    this.repository.create(apiUrl,question)
      .subscribe(res => {
        
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate([`update/${this.id}/question-list`]);

      },
      (error => {
        this.location.back();
      })
    )
  })
 
}

}