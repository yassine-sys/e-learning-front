import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from '../../../shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import Quiz from '../../../shared/models/Quiz'
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-update',
  templateUrl: './quiz-update.component.html',
  styleUrls: ['./quiz-update.component.css']
})
export class QuizUpdateComponent implements OnInit {

  public errorMessage: string = '';
  public quiz: Quiz;
  public quizForm: FormGroup;
  private dialogConfig;
  
  id : string = this.activeRoute.snapshot.paramMap.get('QuizID');

  data : any;
  /*public message = [this.quizz] ;
  public quizz  : any = {
    QuizID : this.id
 }*/

  constructor(private repository: RepositoryService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private dialog: MatDialog,
              ) { }

  ngOnInit() {
    
    /*this.repository.SendMessage.subscribe( data => 
      { data = this.message[0];
        console.log('quizid',data); 
       });
      
    this.repository.SendMessage.next(this.message);     */

    this.quizForm = new FormGroup({
      QuizID:  new FormControl('', [Validators.required]),
      CourseID:  new FormControl('', [Validators.required]),
      Title: new FormControl('', [Validators.required, Validators.maxLength(60)])          
    });



    this.getQuizById();
  }

  private getQuizById() {
        
      let QuizByIdUrl: string = `api/Quizs/${this.id}`;   
      this.repository.getData(QuizByIdUrl)
        .subscribe(res => {
          this.quiz = res as Quiz;
          this.quizForm.patchValue(this.quiz);
         
  })
}

updatedata(newdata :any) {
  this.repository.changeMessage(newdata);
  //console.log('hello',newdata);
}


public validateControl(controlName: string) {
  if (this.quizForm.controls[controlName].invalid && this.quizForm.controls[controlName].touched)
    return true;
 
  return false;
}
 
public hasError(controlName: string, errorName: string) {
  if (this.quizForm.controls[controlName].hasError(errorName))
    return true; 

  return false;
}

 
public redirectToQuizzesList(){
  this.router.navigate(['/quiz-dashboard']);
}

public updateQuiz(quizFormValue) {
  if (this.quizForm.valid) {
    this.executeQuizUpdate(quizFormValue);
  }
}
 
private executeQuizUpdate(quizFormValue) {

  this.quiz.Title = quizFormValue.Title;
  this.quiz.CourseID= quizFormValue.CourseID;

  let apiUrl = `api/Quizs/${this.id}`;
  this.repository.update(apiUrl, this.quiz)
    .subscribe(res => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
dialogRef.afterClosed()
.subscribe(result => {
     this.router.navigate([`/quiz/${this.id}/question-list`]);
   
});
}) }

}