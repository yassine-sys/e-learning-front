import { Component, OnInit } from '@angular/core';
import Exam from 'app/shared/models/Exam';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'app/shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';


@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  
  public errorMessage: string = '';
  public exam: Exam;
  public examForm: FormGroup;
  private dialogConfig;
  Examid : string = this.activeRoute.snapshot.paramMap.get('ExamID');

/*  public myexam  : any = {
    ExamID : this.Examid
 }
  public message = [this.myexam] ;*/



  constructor(private repository: RepositoryService, 
              private router: Router,
              private activeRoute: ActivatedRoute,
              private dialog: MatDialog,
              ) { }

  ngOnInit() {

        
    /*this.repository.SendMessage.subscribe( data => 
      { data = this.message[0];
        console.log('examid',data); 
       });

    this.repository.SendMessage.next(this.message);     */

      
    this.examForm = new FormGroup({
      CourseID:  new FormControl(''),
      Title: new FormControl('', [Validators.required, Validators.maxLength(60)])

    });
   
    this.getExamById();
  }

  private getExamById() {       
      let ExamByIdUrl: string = `api/Exams/${this.Examid}`;   
      this.repository.getData(ExamByIdUrl)
        .subscribe(res => {
          this.exam = res as Exam;
          this.examForm.patchValue(this.exam);
         
  })
}

public validateControl(controlName: string) {
  if (this.examForm.controls[controlName].invalid && this.examForm.controls[controlName].touched)
    return true;
 
  return false;
}
 
public hasError(controlName: string, errorName: string) {
  if (this.examForm.controls[controlName].hasError(errorName))
    return true; 

  return false;
}

 
public redirectToExamsList(){
  this.router.navigate([`/exam-dashboard`]);
}

public updateExam(examFormValue) {
  if (this.examForm.valid) {
    this.executeExamUpdate(examFormValue);
  }
}
 
private executeExamUpdate(examFormValue) {

 // this.exam.CourseID = examFormValue.CourseID;
  this.exam.Title = examFormValue.Title;

  let apiUrl = `api/Exams/${this.Examid}`;
  this.repository.update(apiUrl, this.exam)
    .subscribe(res => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
dialogRef.afterClosed()
.subscribe(result => {
  this.router.navigate([`/exam/${this.Examid}/question-list`]);   
});
}) }

}
