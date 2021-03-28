import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Question from 'app/shared/models/Question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionexamService {

  constructor(private http:HttpClient) { }
  questionlist(ExamID:any): Observable<Array<Question>>{
    return this.http.get<Array<Question>>('https://localhost:44352/api/question/GetQuestionsByExam/'+ExamID);

  }
}
