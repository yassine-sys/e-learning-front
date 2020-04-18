import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import Quiz from '../models/Quiz';
import Option from '../models/Option';
import { Observable } from 'rxjs';
import Question from '../models/Question';
import Exam from '../models/Exam';

@Injectable()
export class RepositoryService {

  public API = 'https://localhost:44306/api';
  public QUIZ_API = `${this.API}/Quizs`;
  public OPTION_API = `${this.API}/Options`;
  public QUESTION_API = `${this.API}/Questions`;
  public EXAM_API = `${this.API}/Exams`;

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body, this.generateHeaders());
  }

  public update(route: string, body){
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), body, this.generateHeaders());
  }

  public delete(route: string){
    return this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

  
  public getAllQuizzes(): Observable<Array<Quiz>> {
      return this.http.get<Array<Quiz>>(this.QUIZ_API);
    }

  public getQuizbyID(QuizID: string) {
      return this.http.get(`${this.QUIZ_API}/${QuizID}`);
    } 

  public getQuestionsByQuizID(QuizID: string): any {
      return this.http.get(`${this.API}/Questions/Quizs/${QuizID}`);
    }
    
   public getAllQuestions(): Observable<Array<Question>> {
      return this.http.get<Array<Question>>(this.QUESTION_API);
    }

  public getQuesbyID(QuesID: string) {
      return this.http.get(`${this.QUESTION_API}/${QuesID}`);
    }  
    
  public getOptionsByQuesID(QuesID: string): any {
      return this.http.get(`${this.API}/Options/Questions/${QuesID}`);
    } 


  public  getAllOptions(): Observable<Array<Option>> {
      return this.http.get<Array<Option>>(this.OPTION_API);
    }

  public getOptionByID(OpID: string) {
      return this.http.get(`${this.OPTION_API}/${OpID}`);
    }  
    
  public  getAllExams(): Observable<Array<Exam>> {
      return this.http.get<Array<Exam>>(this.EXAM_API);
    }

  public getExamByID(ExamID: string) {
      return this.http.get(`${this.EXAM_API}/${ExamID}`);
    }     

}