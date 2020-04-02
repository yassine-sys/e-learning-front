import { Component, OnInit } from '@angular/core';
import QuizService from '../shared/api/quiz.service';
import Quiz from '../shared/models/Quiz'



@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizs: Array<Quiz>;
  constructor(private QuizService: QuizService) { }

  ngOnInit() {
    this.QuizService.getAll().subscribe(data => {
      this.quizs = data;
    });
  }

}
