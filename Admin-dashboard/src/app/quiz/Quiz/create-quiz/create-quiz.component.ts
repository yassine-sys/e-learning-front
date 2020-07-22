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
import { QuizService } from './quiz.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
//declare var $: any;

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  public quizForm: FormGroup;
  private dialogConfig;
  public CourseID
  quiz=new Quiz;
  quize:Quiz
  quizes:any=[];

 // id : string = this.activeRoute.snapshot.paramMap.get('CourseID');

  constructor(private repository: RepositoryService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private quizservice:QuizService
    ,private http:HttpClient) { }

  ngOnInit() {
    this.CourseID=this.route.snapshot.paramMap.get('id');
    this.resetForm();
    this.list();

    this.quizForm = new FormGroup({
      CourseID: new FormControl('', [Validators.required]),
      Title: new FormControl('', [Validators.required, Validators.maxLength(60)])
    });

    
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }

  }

  isShow=true;
    id:number;
    toggledisplay(id){
      this.isShow=!this.isShow;
      this.id=id;
    }

  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.quiz={
      QuizID:0,
      Title:''

    }
  }

  onSubmit(form:NgForm,CourseID:any){
    this.quizservice.addQuiz(form.value,this.CourseID).subscribe((res:any)=>{
      this.quize=res;
      
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list();

    })

  }

  quizlist(CourseID:any): Observable<Array<Quiz>>{
    return this.http.get<Array<Quiz>>('https://localhost:44352/api/quiz/quizbycourse/'+CourseID)

  }
  list(){
    this.quizlist(this.CourseID).subscribe((data: any) => {
      this.quizes=data
      console.log(data);
    });

  }

  onDelete(QuizID:any){
    this.quizservice.onDelete(QuizID).subscribe(res=>
      {
        
        this.quizes=res;
       // let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        this.list();

      }
      )  
  }

  onSelect(quize){
    this.router.navigate(['/quiz',quize.Id])

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
      //CourseID: quizFormValue.CourseID,
      Title: quizFormValue.Title      
    } 
    let PostQuizUrl : string = `api/quiz`
    this.repository.create(PostQuizUrl,quiz)
    .subscribe(res => {
    
    let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
   
      this.router.navigate(['/quiz-dashboard']);
   
    //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
        //console.log(quiz.QuizID);   
      });

    })
  }
  
}
