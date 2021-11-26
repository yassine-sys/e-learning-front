import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'app/results/result.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewexamresults',
  templateUrl: './viewexamresults.component.html',
  styleUrls: ['./viewexamresults.component.scss']
})
export class ViewexamresultsComponent implements OnInit {
public ExamID
result:Result;
  results:any=[];
  constructor(private route:ActivatedRoute,
    private http:HttpClient) { }

  ngOnInit() {
    this.ExamID=this.route.snapshot.paramMap.get('id');
console.log(this.ExamID)
this.list()

  }
  score(ExamID:any): Observable<Array<Result>>{
    return this.http.get<Array<Result>>('https://localhost:44352/api/examResult/ResultByExam/'+ExamID)
  }
  list(){
    this.score(this.ExamID).subscribe((data: any) => {
      this.result=data
      console.log(data);
    });
  }

}
