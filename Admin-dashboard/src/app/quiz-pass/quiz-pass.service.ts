import { Injectable } from '@angular/core';
import Quiz from 'app/shared/models/Quiz';
import { HttpClient } from '@angular/common/http';
import Result from 'app/shared/models/Result';

@Injectable({
  providedIn: 'root'
})
export class QuizPassService {
result:Result
readonly rootUrl = 'https://localhost:44352';

  constructor(private http: HttpClient) { }
  public QuizID
  addResult(result:Result,QuizID:any){
    const body={
      id:result.ResID,
      score:result.Score
    }
    return this.http.post(this.rootUrl+'/api/quizResult/'+QuizID,body)
  }
}
