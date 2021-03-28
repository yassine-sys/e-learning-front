import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Question from 'app/shared/models/Question';
import Quiz from 'app/shared/models/Quiz';
import { QuizConfig } from './QuizConfig';
import { QuizService } from 'app/quiz/Quiz/create-quiz/quiz.service';
import { QuestionService } from 'app/quiz/Question/create-question/question.service';
import { OptionService } from 'app/quiz/Option/create-option/option.service';
import Option from 'app/shared/models/Option';
import { Questions } from './questions.model';
import { Quizzes } from './quizzes.model';
import { Options } from './options.model';
import Result from 'app/shared/models/Result';
import { QuizPassService } from './quiz-pass.service';
import { NgForm } from '@angular/forms';
import { RepositoryService } from 'app/shared/api/repository.service';

@Component({
  selector: 'app-quiz-pass',
  templateUrl: './quiz-pass.component.html',
  styleUrls: ['./quiz-pass.component.css']
})
export class QuizPassComponent implements OnInit {
  //[x: string]: any;
  public QuizID
  public QuesID;
  public userId
  //questions: any[];
 // ques:any[]
 Questions: Questions[];
 count : number = 0;
Options:Options[]
  quizes: any[];
  quiz: Quizzes = new Quizzes();
  option: Options = new Options()
  op:any[]
  score : number;
  result : Result = new Result();
  res :any;

  mode = 'quiz';
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': true,  // if true, it will move to next question automatically when answered.
    'duration': 300,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': true,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';
  displayquestions : Questions[];
  displayoptions:Options[]


  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private quizservice: QuizService,
    private questionservice: QuestionService,
    private optionservice: OptionService,
    private quizpass:QuizPassService) {
        
      
     }

    
  ngOnInit() {
    this.QuizID = this.route.snapshot.paramMap.get('id');
    this.quizservice.getquizbuid(this.QuizID).subscribe((res : any) => {
      
     
      
      this.quiz = res;
      this.questionservice.questionlist(this.QuizID).subscribe((data: any) => {
        this.pager.count = data.length;
        this.quiz.Questions = data;
        console.log("questions",this.quiz.Questions);
        this.quiz.Questions.slice(this.pager.index, this.pager.index + this.pager.size);
         for (let index = 0; index < this.quiz.Questions.length; index++) 
          {     
           this.QuesID = data[index].Id;
           console.log("questionid", this.QuesID );
          this.optionservice.optionlist(this.QuesID).subscribe((data: any) => {
            this.quiz.Questions[index].Options = data;
            console.log("option",data);
            console.log(this.quiz);

          })
        }

      })


    });
    
  }
  get filteredQuestions() {
    return (this.quiz.Questions) ?
      this.quiz.Questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Questions, option: Options) {
    
    if (question.types === "Single choice") {
      question.Options.forEach((x) => { if (x.OpID !== option.OpID) x.selected = false;  
      });
    }
   else if(question.types === "Multichoice")  {
    question.Options.forEach((x) => { 
    if(x.OpID !== option.OpID){
     x.selected === false ? x.selected = false : x.selected = true;
   }
  });
 }
   
    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(index) {
    return this.quiz.Questions[index].Options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Questions) {
    return question.Options.every(x => x.selected === x.values) ? 'correct' : 'wrong';
  };

  onSubmit() {

    this.count ++ ;
    console.log(this.count);
    let time = new Date();
    console.log(time);

    let correctCount: number=0;

    for (let index = 0; index < this.quiz.Questions.length; index++) 
    {
      console.log(this.isCorrect(this.quiz.Questions[index]));
      if (this.isCorrect(this.quiz.Questions[index]) === 'correct') {correctCount++};
   }

  console.log(correctCount);
  this.score = Math.round((correctCount / this.quiz.Questions.length) *100);
   this.result.Score = this.score;
   this.result.QuizID = this.QuizID;
   this.result.userId = this.userId;
   this.result.Count = this.count;
   this.result.time = time;
   /*let resultapi = 'https://localhost:44352/api/quizResult';
   this.repository.create(resultapi, this.result).subscribe(data =>
     {
       this.res = data;
     });*/
     this.quizpass.addResult(this.result,this.QuizID).subscribe((data:any)=>{
       this.result=data
     })
     

   this.mode = 'result';
    
  }
  
}
