import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Exam from 'app/shared/models/Exam';
import { RepositoryService } from 'app/shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-delete-exam',
  templateUrl: './delete-exam.component.html',
  styleUrls: ['./delete-exam.component.css']
})
export class DeleteExamComponent implements OnInit {

  public errorMessage: string = '';
  public exam: Exam;
  private routeSub: Subscription;
  private dialogConfig;
  id : string = this.activeRoute.snapshot.paramMap.get('ExamID');


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
        this.getExamById();
        this.dialogConfig = {
          height: '200px',
          width: '400px',
          disableClose: true,
          data: { }
        }
  }

  private getExamById() {

    let examByIdUrl: string = `api/Exams/${this.id}`;
   
    this.repository.getData(examByIdUrl)
      .subscribe(res => {
        this.exam = res as Exam;
      })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
   
  public redirectToExamsList() {
    this.router.navigate(['/exam-dashboard']);
  }

  public deleteExam( ) {
    let deleteUrl: string = `api/Exams/${this.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
    .subscribe(result => {
      this.router.navigate(['/exam-dashboard']);

    });
      })
  }

}
