import { Component, OnInit } from '@angular/core';
import Exam from 'app/shared/models/Exam';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-examlisted',
  templateUrl: './examlisted.component.html',
  styleUrls: ['./examlisted.component.css']
})
export class ExamlistedComponent implements OnInit {
exam:Exam
exams:any=[]
public CourseID
  constructor(private route: ActivatedRoute,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit() {
    this.CourseID=this.route.snapshot.paramMap.get('id');
this.list()
  }
  examlist(CourseID:any):Observable<Array<Exam>>{
    return this.http.get<Array<Exam>>('https://localhost:44352/api/exam/GetExamsByCourse/'+CourseID)
  }
  list(){
    this.examlist(this.CourseID).subscribe((data:any)=>{
      this.exams=data
    })
  }
  onSelect(exam){
    this.router.navigate(['/myexam',exam.Id])
  }

}
