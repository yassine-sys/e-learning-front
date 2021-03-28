import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import Quiz from '../models/Quiz';
import Option from '../models/Option';
import { Observable, BehaviorSubject } from 'rxjs';
import Question from '../models/Question';
import Exam from '../models/Exam';
import user from '../models/user';

@Injectable()
export class RepositoryService {

  public API = 'https://localhost:44352/api';
  public QUIZ_API = `${this.API}/quiz`;
  public OPTION_API = `${this.API}/Options`;
  public QUESTION_API = `${this.API}/Questions`;
  public EXAM_API = `${this.API}/Exams`;
  public RESULT_API = `${this.API}/quizResult`;
  public COURSES_API = `${this.API}/Courses`;
  public USERS_API = `${this.API}/Account`;



  data = [{}] ;

  SendMessage: BehaviorSubject<any> = new BehaviorSubject([{}]);
  SendFile : BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  changeMessage(data: any) {
    this.SendMessage.next(data)
  }
  
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

  //Quiz

  public postAllQuizQuestions(question : Question) {
      return this.http.post(`${this.QUESTION_API}/Quiz`, question);
    }

  public getAllQuizzes(): Observable<Array<Quiz>> {
      return this.http.get<Array<Quiz>>(this.QUIZ_API);
    }

  public getQuizbyID(QuizID: string) {
      return this.http.get(`${this.QUIZ_API}/${QuizID}`);
    } 

    public getQuizzesByUserId(UserId: string): Observable<any> {
      return this.http.get(`${this.QUIZ_API}/User/${UserId}`);
    } 
    

  public getQuestionsByQuizID(QuizID: string): any {
      return this.http.get(`${this.QUIZ_API}/Questions/${QuizID}`);
    }

//Question
    
   public getAllQuestions(): Observable<Array<Question>> {
      return this.http.get<Array<Question>>(this.QUESTION_API);
    }

  public getQuesbyID(QuesID: string) {
      return this.http.get(`${this.QUESTION_API}/${QuesID}`);
    }  
  
    //Option
    
  public getOptionsByQuesID(QuesID: string): any {
      return this.http.get(`${this.OPTION_API}/Question/${QuesID}`);
    } 


  public  getAllOptions(): Observable<Array<Option>> {
      return this.http.get<Array<Option>>(this.OPTION_API);
    }

  public getOptionByID(OpID: string) {
      return this.http.get(`${this.OPTION_API}/${OpID}`);
    }  
    
    public postAllOptions(option : Option) {
      return this.http.post(`${this.OPTION_API}`, option);
    }

  //Exam

  public postAllExamQuestions(question : Question) {
    return this.http.post(`${this.QUESTION_API}/Exam`, question);
  }

   public  getAllExams(): Observable<Array<Exam>> {
      return this.http.get<Array<Exam>>(this.EXAM_API);
    }
 
   public getExamByUserID(UserId: string): Observable<any> {
      return this.http.get(`${this.EXAM_API}/User/${UserId}`);
    }
    
    public getExamByID(ExamID: string) {
      return this.http.get(`${this.EXAM_API}/${ExamID}`);
    }   

    public getQuestionsByExamID(ExamID: string): any {
      return this.http.get(`${this.EXAM_API}/Questions/${ExamID}`);
    }

  //Result
    
  public ExamResult(UserId : string, ExamID: number) {
      return this.http.get(`${this.RESULT_API}/${UserId}/${ExamID}`);
    } 
    
  //User

  
  public  getAllUsers(): Observable<Array<user>> {
    return this.http.get<Array<user>>(`${this.USERS_API}/users`);
  }

}