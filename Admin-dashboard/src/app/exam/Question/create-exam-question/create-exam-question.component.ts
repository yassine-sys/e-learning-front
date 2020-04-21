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
  selector: 'app-create-exam-question',
  templateUrl: './create-exam-question.component.html',
  styleUrls: ['./create-exam-question.component.css']
})
export class CreateExamQuestionComponent implements OnInit {
  constructor(private repository: RepositoryService,
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

    public questionForm: FormGroup;
    private dialogConfig;
    id : string = this.activeRoute.snapshot.paramMap.get('ExamID');
    public question= new Question();
    types = ["Single choice", "Multichoice"];
    exam : any = {
      ExamID : this.id
   }
    public tab : any = [this.exam];

      
  ngOnInit() {

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
      this.question.Exams = this.tab;


    this.repository.postAllExamQuestions(this.question)
      .subscribe(res => {       
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate([`/exam/${this.id}/question-list`]);
      },
      (error => {
        this.location.back();
      })
      )
    });
   
      }
  
    }