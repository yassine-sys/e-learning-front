import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {RepositoryService} from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import Exam from 'app/shared/models/Exam';

@Component({
  selector: 'app-users-exams',
  templateUrl: './users-exams.component.html',
  styleUrls: ['./users-exams.component.css']
})
export class UsersExamsComponent implements OnInit {

 
 
  public displayedColumns = ['Title', 'exam', 'course'];
  public dataSource = new MatTableDataSource<Exam>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;

  constructor(private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  userId : string = this.activeRoute.snapshot.paramMap.get('Id');


  ngOnInit() { 
    this.repository.getExamByUserID(this.userId).subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    });
  }


public redirectToExamPage (id : any) {
let exampage: string = `exam/${id}/question-list`; 
this.router.navigate([exampage]);
}

public redirectToCoursePage (id : any) {
let coursepage: string = `/chapters-list/${id}`;
this.router.navigate([coursepage]);
}

public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}


}
