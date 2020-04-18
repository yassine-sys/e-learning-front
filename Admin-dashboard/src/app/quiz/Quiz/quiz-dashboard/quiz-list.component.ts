import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {RepositoryService} from 'app/shared/api/repository.service';
import Quiz from '../../../shared/models/Quiz'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {  Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public displayedColumns = ['Title', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Quiz>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;
  id : string = this.activeRoute.snapshot.paramMap.get('QuizID');

  constructor(private repository: RepositoryService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }
         
  ngOnInit() {

    //this.getAllQuizzes();
    
    this.repository.getAllQuizzes().subscribe((data: any) => {
      this.dataSource.data = data as Quiz[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });

    }

public redirectToUpdatePage (id : any) {
  
  let updateUrl: string = `/update/${id}`;
  this.router.navigate([updateUrl]);
 }
  
public redirectToDeletePage (id : any) {
  let deleteUrl: string = `/delete/${id}`;
  this.router.navigate([deleteUrl]);
  }
  
public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  public redirectToCreateQuiz() {
    
    this.router.navigate(['/create-quiz']);
  
  }

}
