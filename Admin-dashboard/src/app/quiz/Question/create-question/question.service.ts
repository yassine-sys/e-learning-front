import { Injectable } from '@angular/core';
import Question from 'app/shared/models/Question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
question:Question;
readonly rootUrl = 'https://localhost:44352';


  constructor(private http: HttpClient) { }
  public QuizID;
  addQuestion(question:Question,QuizID:any){
    const body={
      QuesID:question.QuesID,
      QuesText:question.QuesText,
      types:question.types
    }
    return this.http.post(this.rootUrl+'/api/question/'+QuizID,body);
  }
  onDelete(QuesID:any){
    
    
    return this.http.delete('https://localhost:44352/api/question/'+QuesID);
  }
}
