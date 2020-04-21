import { Component, OnInit, ViewChild } from '@angular/core';
import Question from 'app/shared/models/Question';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {RepositoryService} from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exam-question-list',
  templateUrl: './exam-question-list.component.html',
  styleUrls: ['./exam-question-list.component.css']
})
export class ExamQuestionListComponent implements OnInit {


  public displayedColumns = ['QuesText', 'types', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Question>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;

  constructor(private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  id : string = this.activeRoute.snapshot.paramMap.get('ExamID');


  ngOnInit() {
   
    this.repository.getQuestionsByExamID(this.id).subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    })
  }


public redirectToUpdatePage (id : any) {
let updateUrl: string = `exam/${this.id}/update/${id}`; 
this.router.navigate([updateUrl]);
}

public redirectToDeletePage (id : any) {
let deleteUrl: string = `exam/${this.id}/delete/${id}`;
this.router.navigate([deleteUrl]);
}

public redirectToCreateQuestion() {

let cearteQuestionUrl: string = `exam/create-question/${this.id}`;
this.router.navigate([cearteQuestionUrl]);
}

public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}



}
