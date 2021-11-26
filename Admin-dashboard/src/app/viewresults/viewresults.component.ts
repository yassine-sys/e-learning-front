import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'app/results/result.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewresults',
  templateUrl: './viewresults.component.html',
  styleUrls: ['./viewresults.component.scss']
})
export class ViewresultsComponent implements OnInit {
public QuizID
result:Result;
  results:any=[];
  constructor(private route:ActivatedRoute,
    private http:HttpClient) { }

  ngOnInit() {
    this.QuizID=this.route.snapshot.paramMap.get('id');
console.log(this.QuizID)
this.list()
  }
  score(QuizID:any): Observable<Array<Result>>{
    return this.http.get<Array<Result>>('https://localhost:44352/api/quizResult/quizresultbyquiz/'+QuizID)
  }
  list(){
    this.score(this.QuizID).subscribe((data: any) => {
      this.result=data
      console.log(data);
    });

  }

}
