import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Quiz from '../models/Quiz'

@Injectable()

export default class QuizService {

    public API = 'http://localhost:44306/api';
    public QUIZ_API = `${this.API}/Quizs`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<Array<Quiz>> {
        return this.http.get<Array<Quiz>>(this.QUIZ_API);
      }

    get(QuizID: string) {
        return this.http.get(`${this.QUIZ_API}/${QuizID}`);
      }   

    save(quiz: Quiz): Observable<Quiz> {
        let result: Observable<Quiz>;
        if (quiz.QuizID) {
          result = this.http.put<Quiz>(
            `${this.QUIZ_API}/${quiz.QuizID}`,
            quiz
          );
        } else {
          result = this.http.post<Quiz>(this.QUIZ_API, quiz);
        }
        return result;
      }

    
      remove(QuizID: number) {
        return this.http.delete(`${this.QUIZ_API}/${QuizID.toString()}`);
      }





}