import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import QuizService from '../shared/api/quiz.service';
import Quiz from '../shared/models/Quiz'

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.css']
})
export class QuizEditComponent implements OnInit, OnDestroy {

  quiz: Quiz = new Quiz();
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const QuizID = params['QuizID'];
      if (QuizID) {
        this.quizService.get(QuizID).subscribe((sugarLevel: any) => {
          if (sugarLevel) {
            this.quiz = this.quiz;
            this.quiz.Title = new Date(
              this.quiz.Title
            ).toISOString();
          } else {
            console.log(
              `Quiz with id '${QuizID}' not found, returning to list`
            );
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/quiz-list']);
  }
  save(form: any) {
    this.quizService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
  remove(id: number) {
    this.quizService.remove(id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }


}
