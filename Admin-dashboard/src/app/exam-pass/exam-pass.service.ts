import { Injectable } from '@angular/core';
import Result from 'app/shared/models/Result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamPassService {
  result:Result
  readonly rootUrl = 'https://localhost:44352';
  constructor(private http: HttpClient) { }
  public ExamID
  addResult(result:Result,ExamID:any){
    const body={
      id:result.ResID,
      score:result.Score
    }
    return this.http.post(this.rootUrl+'/api/examResult/'+ExamID,body)
  }
}
