import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../../shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import Question from 'app/shared/models/Question';


@Component({
  selector: 'app-delete-exam-question',
  templateUrl: './delete-exam-question.component.html',
  styleUrls: ['./delete-exam-question.component.css']
})
export class DeleteExamQuestionComponent implements OnInit {
  public errorMessage: string = '';
  public question: Question;
  private routeSub: Subscription;
  private dialogConfig;
  id : string = this.activeRoute.snapshot.paramMap.get('QuesID');
  ExamId : string = this.activeRoute.snapshot.paramMap.get('ExamID');


  constructor(private repository: RepositoryService, 
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit()  {

    console.log(this.id);
    console.log(this.ExamId);

        this.getQuestionById();
        this.dialogConfig = {
          height: '200px',
          width: '400px',
          disableClose: true,
          data: { }
        }
  }

  
  private getQuestionById() {

    let questionByIdUrl: string = `api/Questions/${this.id}`;
   
    this.repository.getData(questionByIdUrl)
      .subscribe(res => {
        this.question = res as Question;
      })
  }


  public redirectToQuestionsList() {
    this.router.navigate([`exam/${this.ExamId}/question-list`]);
  }


  public deleteQuestion( ) {
    let deleteUrl: string = `api/Questions/${this.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
    .subscribe(result => {
      this.router.navigate([`exam/${this.ExamId}/question-list`]);

    });
      })
  }

}
