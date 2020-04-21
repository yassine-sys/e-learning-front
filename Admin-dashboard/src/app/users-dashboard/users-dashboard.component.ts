import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {RepositoryService} from 'app/shared/api/repository.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {  Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import user from 'app/shared/models/user';
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  public displayedColumns = ['UserName', 'Email', 'Quizzes', 'Exams'];
  public dataSource = new MatTableDataSource<user>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;
  constructor(private repository: RepositoryService,
              private router: Router) { }
         
  ngOnInit() {
    
      this.repository.getAllUsers().subscribe((data: any) => {
      this.dataSource.data = data as user[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });

    }

public redirectToQuizzesPage (id : any) {
  
  let quizzesUrl: string = `user-quizzes/${id}`;
  this.router.navigate([quizzesUrl]);
 }
  
public redirectToExamsPage (id : any) {
  let examsUrl: string = `user-exams/${id}`;
  this.router.navigate([examsUrl]);
  }
  
public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
