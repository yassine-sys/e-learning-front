import { Component, OnInit } from '@angular/core';
import Option from 'app/shared/models/Option';
import { Subscription } from 'rxjs';
import { RepositoryService } from 'app/shared/api/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-delete-exam-option',
  templateUrl: './delete-exam-option.component.html',
  styleUrls: ['./delete-exam-option.component.css']
})
export class DeleteExamOptionComponent implements OnInit {

  public errorMessage: string = '';
  public option: Option;
  private routeSub: Subscription;
  private dialogConfig;
  id : string = this.activeRoute.snapshot.paramMap.get('OpID');
  QuesID : string = this.activeRoute.snapshot.paramMap.get('QuesID');

  constructor(private repository: RepositoryService, 
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit()  {

    console.log(this.id);
    console.log(this.QuesID);

        this.getOptionById();
        this.dialogConfig = {
          height: '200px',
          width: '400px',
          disableClose: true,
          data: { }
        }
  }

  
  private getOptionById() {

    let optionByIdUrl: string = `api/Options/${this.id}`;
   
    this.repository.getData(optionByIdUrl)
      .subscribe(res => {
        this.option = res as Option;
      })
  }


  public redirectToOptionsList() {
    this.router.navigate([`/exam/${this.QuesID}/option-list`]);
  }

  public deleteOption( ) {
    let deleteUrl: string = `api/Options/${this.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
    .subscribe(result => {
      this.router.navigate([`/exam/${this.QuesID}/option-list`]);

    });
      })
  }

}
