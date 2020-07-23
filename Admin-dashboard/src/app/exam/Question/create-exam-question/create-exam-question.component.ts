import { Component, OnInit } from '@angular/core';
import Question from 'app/shared/models/Question';
import { RepositoryService } from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { QuestionExamenService } from '../question-examen.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-exam-question',
  templateUrl: './create-exam-question.component.html',
  styleUrls: ['./create-exam-question.component.css']
})
export class CreateExamQuestionComponent implements OnInit {
  constructor(private repository: RepositoryService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private questionexamservice:QuestionExamenService,
    private http:HttpClient) { }

    public questionForm: FormGroup;
    private dialogConfig;
    public ExamID
   // id : string = this.activeRoute.snapshot.paramMap.get('ExamID');
    public question= new Question();
    ques:Question
    questions:any=[];
    types = ["Single choice", "Multichoice"];
    /*exam : any = {
      ExamID : this.id
   }
    public tab : any = [this.exam];*/

      
  ngOnInit() {
    this.ExamID=this.route.snapshot.paramMap.get('id');
    this.list()
    this.resetForm()

    /*this.repository.SendMessage.subscribe((data:any) => 
    { console.log('message',data[0]);
      this.question.Exams = data;
 
    });*/
 
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
  onSubmit(form:NgForm,ExamID:any){
    this.questionexamservice.addQuestion(form.value,this.ExamID).subscribe((res:any)=>{
      this.ques=res;
      
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list();

    })

  }
  questionlist(ExamID:any): Observable<Array<Question>>{
    return this.http.get<Array<Question>>('https://localhost:44352/api/question/GetQuestionsByExam/'+ExamID);

  }
  list(){
    this.questionlist(this.ExamID).subscribe((data: any) => {
      this.questions=data
      console.log(data);
    });

  }
  onDelete(QuesID:any){
    this.questionexamservice.onDelete(QuesID).subscribe(res=>
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
    this.router.navigate(['/question-exam',ques.Id])

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.questionForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.router.navigate(['../Exam/exam-list']);

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
     // this.question.Exams = this.tab;


    this.repository.postAllExamQuestions(this.question)
      .subscribe(res => {       
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
          .subscribe(result => {
         //   this.router.navigate([`/exam/${this.id}/question-list`]);
      },
      (error => {
        this.location.back();
      })
      )
    });
   
      }
  
    }