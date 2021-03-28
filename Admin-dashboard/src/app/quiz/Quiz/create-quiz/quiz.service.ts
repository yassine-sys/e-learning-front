import { Injectable } from '@angular/core';
import Quiz from 'app/shared/models/Quiz';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
quiz:Quiz;
readonly rootUrl = 'https://localhost:44352';
  constructor(private http: HttpClient) { }
  public CourseID;

  addQuiz(quiz:Quiz,CourseID:any){
    const body={
      quizID:quiz.QuizID,
      Title:quiz.Title
    }
    return this.http.post(this.rootUrl+'/api/quiz/'+CourseID,body);

  }
  quizbycourseid(CourseID){
    return this.http.get(this.rootUrl+'api/quiz/quizbycourse/'+CourseID);
  }

  onDelete(QuizID:any){
    
    
    return this.http.delete('https://localhost:44352/api/quiz/'+QuizID);
  }
  getallquizzes(){
    return this.http.get(this.rootUrl+'/api/quiz')
  }
  getquizbuid(QuizID:any){
    return this.http.get('https://localhost:44352/api/quiz/'+QuizID);

  }
}
