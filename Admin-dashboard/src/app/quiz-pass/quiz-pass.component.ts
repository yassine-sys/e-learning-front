import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-pass',
  templateUrl: './quiz-pass.component.html',
  styleUrls: ['./quiz-pass.component.css']
})
export class QuizPassComponent implements OnInit {
public QuizID
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient) { }

  ngOnInit() {
    this.QuizID=this.route.snapshot.paramMap.get('id');
  }
  

}
