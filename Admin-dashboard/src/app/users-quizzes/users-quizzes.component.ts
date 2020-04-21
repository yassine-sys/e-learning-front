import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {RepositoryService} from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import Quiz from 'app/shared/models/Quiz';
@Component({
  selector: 'app-users-quizzes',
  templateUrl: './users-quizzes.component.html',
  styleUrls: ['./users-quizzes.component.css']
})
export class UsersQuizzesComponent implements OnInit {

 
  public displayedColumns = ['Title', 'quiz', 'course'];
  public dataSource = new MatTableDataSource<Quiz>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;

  constructor(private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  userId : string = this.activeRoute.snapshot.paramMap.get('Id');


  ngOnInit() { 
    this.repository.getQuizzesByUserId(this.userId).subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    });
  }


public redirectToQuizPage (id : any) {
let updateUrl: string = `quiz/${id}/question-list`; 
this.router.navigate([updateUrl]);
}

public redirectToCoursePage (id : any) {
let deleteUrl: string = `/chapters-list/${id}`;
this.router.navigate([deleteUrl]);
}

public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}


}
