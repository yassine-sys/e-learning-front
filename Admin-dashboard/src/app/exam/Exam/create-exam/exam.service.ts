import { Injectable } from '@angular/core';
import Exam from 'app/shared/models/Exam';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
exam:Exam
readonly rootUrl = 'https://localhost:44352';

  constructor(private http: HttpClient) { }
  public CourseID;
  addExam(exam:Exam,CourseID:any){
    const body={
      ExamID:exam.ExamID,
      Title:exam.Title
    }
    return this.http.post(this.rootUrl+'/api/exam/'+CourseID,body);
  }

  onDelete(ExamID:any){
    
    
    return this.http.delete('https://localhost:44352/api/exam/'+ExamID);
  }
  exambyid(ExamID:any){
    return this.http.get('https://localhost:44352/api/exam/'+ExamID);

  }
}
