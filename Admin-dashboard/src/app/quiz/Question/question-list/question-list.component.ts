import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Question from 'app/shared/models/Question';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {RepositoryService} from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  
  public displayedColumns = ['QuesText', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Question>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;

  constructor(private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  id : string = this.activeRoute.snapshot.paramMap.get('QuizID');

  ngOnInit() {

    console.log(this.id);
    
    this.repository.getQuestionsByQuizID(this.id).subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    })

  }

public redirectToUpdatePage (id : any) {

let updateUrl: string = `update/${this.id}/update/${id}`; 
this.router.navigate([updateUrl]);
}

public redirectToDeletePage (id : any) {
let deleteUrl: string = `delete/${this.id}/delete/${id}`;
this.router.navigate([deleteUrl]);
}

public redirectToCreateQuestion() {

let cearteQuestionUrl: string = `create-question/${this.id}`;
this.router.navigate([cearteQuestionUrl]);


}


public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

}
