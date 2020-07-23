import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Quiz from 'app/shared/models/Quiz';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizlisted',
  templateUrl: './quizlisted.component.html',
  styleUrls: ['./quizlisted.component.css']
})
export class QuizlistedComponent implements OnInit {

  quize:Quiz
  quizes:any=[];

  public CourseID

  constructor( private route: ActivatedRoute,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit() {
    this.CourseID=this.route.snapshot.paramMap.get('id');

    this.list()
  }
  quizlist(CourseID:any): Observable<Array<Quiz>>{
    return this.http.get<Array<Quiz>>('https://localhost:44352/api/quiz/quizbycourse/'+CourseID)

  }
  list(){
    this.quizlist(this.CourseID).subscribe((data: any) => {
      this.quizes=data
      console.log(data);
    });

  }
  onSelect(quize){
    this.router.navigate(['/myquiz',quize.Id])

  }

}
