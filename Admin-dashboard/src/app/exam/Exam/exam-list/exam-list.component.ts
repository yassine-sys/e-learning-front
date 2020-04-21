import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Exam from 'app/shared/models/Exam';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RepositoryService } from 'app/shared/api/repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

 
  public displayedColumns = ['Title', 'course', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Exam>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;
  id : string = this.activeRoute.snapshot.paramMap.get('CourseID');

  constructor(private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    
    this.repository.getAllExams().subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    })

  }

public redirectToUpdatePage (id : any, idc: any) {

let updateUrl: string = `exam/update/${id}`; 
this.router.navigate([updateUrl]);
}

public redirectToDeletePage (id : any) {
let deleteUrl: string = `exam/delete/${id}`;
this.router.navigate([deleteUrl]);
}

public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

public redirectToCoursePage (idc : any) {

  this.router.navigate([`/chapters-list/${idc}`]);
}




}
