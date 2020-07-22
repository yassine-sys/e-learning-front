import { Component, OnInit } from '@angular/core';
import Question from 'app/shared/models/Question';
import { RepositoryService } from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import Quiz from 'app/shared/models/Quiz';
import { QuestionService } from './question.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  constructor(private repository: RepositoryService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private questionservice:QuestionService,
    private http:HttpClient) { }
    types = ["Single choice", "Multichoice"];
    public questionForm: FormGroup;
    private dialogConfig;
    //id : string = this.activeRoute.snapshot.paramMap.get('QuizID');
    public question = new Question();
    ques:Question
    questions:any=[];
    public QuizID;
    

 /* quizz : any = {
    //  QuizID : this.id
   }
    public tab : any = [this.quizz];*/


  ngOnInit() {
         this.QuizID=this.route.snapshot.paramMap.get('id');
         this.resetForm()
         this.list()
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

  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.question={
      QuesID:0,
      QuesText:'',
      types:''

    }
  }

  onSubmit(form:NgForm,QuizID:any){
    this.questionservice.addQuestion(form.value,this.QuizID).subscribe((res:any)=>{
      this.ques=res;
      
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list();

    })

  }

  questionlist(QuizID:any): Observable<Array<Question>>{
    return this.http.get<Array<Question>>('https://localhost:44352/api/question/GetQuestionsByQuiz/'+QuizID);

  }
  list(){
    this.questionlist(this.QuizID).subscribe((data: any) => {
      this.questions=data
      console.log(data);
    });

  }

  onDelete(QuesID:any){
    this.questionservice.onDelete(QuesID).subscribe(res=>
      {
        
        this.questions=res;
       // let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        this.list();

      }
      )  
  }

  isShow=true;
  id:number;
  toggledisplay(id){
    this.isShow=!this.isShow;
    this.id=id;
  }
  onSelect(ques){
    this.router.navigate(['/question',ques.Id])

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
    // this.question.Quizzes = this.tab;
    this.repository.postAllQuizQuestions(this.question)
      .subscribe(res => {       
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
          .subscribe(result => {
        //    this.router.navigate([`quiz/${this.id}/question-list`]);           
      },
      (error => {
        this.location.back();
      })
    )
  });
 
    }

  }