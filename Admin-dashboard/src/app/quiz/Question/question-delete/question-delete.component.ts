import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from 'app/shared/api/repository.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import Question from 'app/shared/models/Question';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';


@Component({
  selector: 'app-question-delete',
  templateUrl: './question-delete.component.html',
  styleUrls: ['./question-delete.component.css']
})
export class QuestionDeleteComponent implements OnInit {

  public errorMessage: string = '';
  public question: Question;
  private routeSub: Subscription;
  private dialogConfig;
  id : string = this.activeRoute.snapshot.paramMap.get('QuesID');
  QuizId : string = this.activeRoute.snapshot.paramMap.get('QuizID');
  title : string = this.activeRoute.snapshot.paramMap.get('Title');
  CId : string = this.activeRoute.snapshot.paramMap.get('CourseID');

  constructor(private repository: RepositoryService, 
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit()  {

    console.log(this.id);
    console.log(this.QuizId);

   /* this.routeSub = this.activeRoute.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['QuesID']) //log the value of id
    });*/
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
    this.router.navigate([`quiz/${this.QuizId}/${this.title}/${this.CId}/question-list`]);
  }


  public deleteQuestion( ) {
    let deleteUrl: string = `api/Questions/${this.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
    .subscribe(result => {
      this.router.navigate([`quiz/${this.QuizId}/question-list`]);

    });
      })
  }

}
