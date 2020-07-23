import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { RepositoryService } from 'app/shared/api/repository.service';
import { MatDialog } from '@angular/material/dialog';
import { Route } from '@angular/compiler/src/core';
import { Location } from '@angular/common';
import Exam from 'app/shared/models/Exam';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from './exam.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  public examForm: FormGroup;
  private dialogConfig;
public CourseID
  constructor( private repository: RepositoryService,
               private dialog : MatDialog,
               private location : Location,
               private route:ActivatedRoute,
               private examservice:ExamService,
               private http:HttpClient,
               private router: Router) { }
               exam:Exam
               exams:any=[]
               examen=new Exam

  ngOnInit() {
    this.CourseID=this.route.snapshot.paramMap.get('id');
    this.list()
    this.resetForm()
    this.examForm = new FormGroup({
       CourseID : new FormControl(''),
       Title : new FormControl('', [Validators.required, Validators.maxLength(60)])
    })

  this.dialogConfig = {
    height: '200px',
    width: '400px',
    disableClose: true,
    data: { }
  } }

  isShow=true;
  id:number;
  toggledisplay(id){
    this.isShow=!this.isShow;
    this.id=id;
  }

  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.exam={
      ExamID:0,
      Title:''
      
    }
  }
  onSubmit(form:NgForm,CourseID:any){
    this.examservice.addExam(form.value,this.CourseID).subscribe((res:any)=>{
      this.exam=res;
      
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list();

    })

  }
  examlist(CourseID:any): Observable<Array<Exam>>{
    return this.http.get<Array<Exam>>('https://localhost:44352/api/exam/GetExamsByCourse/'+CourseID)

  }
  list(){
    this.examlist(this.CourseID).subscribe((data: any) => {
      this.exams=data
      console.log(data);
    });

  }
  onDelete(ExamID:any){
    
    this.examservice.onDelete(ExamID).subscribe(res=>{
      this.exams=res
      this.list()
    })
    
  }
  onSelect(exam){
    this.router.navigate(['/exam',exam.Id])
  }

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
      //CourseID: examFormValue.CourseID,
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
