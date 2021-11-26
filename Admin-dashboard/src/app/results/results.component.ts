import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Examen } from 'app/exam-pass/examen.model';
import Quiz from 'app/shared/models/Quiz';
import { Observable } from 'rxjs';
import { Result } from './result.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  quize:Quiz
  quizes:any=[];
  result:Result;
  results:any=[];
  exam:Examen
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit() {
    this.list()
    this.list1()
    this.list2()
  }
  quizlist():Observable<Array<Quiz>>{
    return this.http.get<Array<Quiz>>('https://localhost:44352/api/quiz')
    
  }

  examlist():Observable<Array<Examen>>{
    return this.http.get<Array<Examen>>('https://localhost:44352/api/exam')
    
  }

  list2(){
    this.examlist().subscribe((data: any) => {
      this.exam=data
      console.log(data);
    });
  }

  list(){
    this.quizlist().subscribe((data: any) => {
      this.quize=data
      console.log(data);
    });
  }
  resultlist():Observable<Array<Result>>{
    return this.http.get<Array<Result>>('https://localhost:44352/api/quizResult')
  }
  list1(){
    this.resultlist().subscribe((data: any) => {
      this.result=data
      console.log(data);
    });
  }

  onSelect(quize){
    this.router.navigate(['/results',quize.Id])

  }

  onSelected(exam){
    this.router.navigate(['/resultsexam',exam.Id])

  }


}
