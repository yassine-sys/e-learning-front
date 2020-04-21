import { Component, OnInit } from '@angular/core';
import Quiz from 'app/shared/models/Quiz';
import { RepositoryService } from '../../../shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';

 

@Component({
  selector: 'app-quiz-delete',
  templateUrl: './quiz-delete.component.html',
  styleUrls: ['./quiz-delete.component.css']
})
export class QuizDeleteComponent implements OnInit {

  public errorMessage: string = '';
  public quiz: Quiz;
  private routeSub: Subscription;
  private dialogConfig;
  id : string = this.activeRoute.snapshot.paramMap.get('QuizID');


  constructor(private repository: RepositoryService, 
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.routeSub = this.activeRoute.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['QuizID']) //log the value of id
    });
        this.getQuizById();
        this.dialogConfig = {
          height: '200px',
          width: '400px',
          disableClose: true,
          data: { }
        }
  }

  private getQuizById() {

    let quizByIdUrl: string = `api/Quizs/${this.id}`;
   
    this.repository.getData(quizByIdUrl)
      .subscribe(res => {
        this.quiz = res as Quiz;
      })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
   
  public redirectToQuizzesList() {
    this.router.navigate(['/quiz-dashboard']);
  }

  public deleteQuiz( ) {
    let deleteUrl: string = `api/Quizs/${this.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
    .subscribe(result => {
      this.router.navigate(['/quiz-dashboard']);

    });
      })
  }

}
