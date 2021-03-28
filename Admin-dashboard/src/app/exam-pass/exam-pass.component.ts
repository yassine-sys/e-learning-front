import { Component, OnInit } from '@angular/core';
import { Questions } from 'app/quiz-pass/questions.model';
import { Options } from 'app/quiz-pass/options.model';
import { Examen } from './examen.model';
import Result from 'app/shared/models/Result';
import { ExamConfig } from './ExamConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExamService } from 'app/exam/Exam/create-exam/exam.service';
import { QuestionService } from 'app/quiz/Question/create-question/question.service';
import { OptionService } from 'app/quiz/Option/create-option/option.service';
import { QuestionExamenService } from 'app/exam/Question/question-examen.service';
import { QuestionexamService } from 'app/exam/Question/create-exam-question/questionexam.service';
import { ExamPassService } from './exam-pass.service';

@Component({
  selector: 'app-exam-pass',
  templateUrl: './exam-pass.component.html',
  styleUrls: ['./exam-pass.component.css']
})
export class ExamPassComponent implements OnInit {
  public ExamID
  public QuesID;
  public userId
  Questions: Questions[];
  count : number = 0;
 Options:Options[]
   quizes: any[];
   exam: Examen = new Examen();
   option: Options = new Options()
   op:any[]
   score : number;
   result : Result = new Result();
   mode = 'exam';
   config: ExamConfig = {
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
    private examservice: ExamService,
    private questionservice: QuestionService,
    private questionexamservice:QuestionexamService,
    private optionservice: OptionService,
    private exampass:ExamPassService) { }

  ngOnInit() {
    this.ExamID=this.route.snapshot.paramMap.get('id');
    this.examservice.exambyid(this.ExamID).subscribe((data:any)=>{
      this.exam=data;
      this.questionexamservice.questionlist(this.ExamID).subscribe((data:any)=>{
        this.pager.count=data.length;
        this.exam.Questions=data;
        console.log(this.exam.Questions)
        this.exam.Questions.slice(this.pager.index,this.pager.index+ this.pager.size);
        for (let index=0;index<this.exam.Questions.length;index++){
          this.QuesID=data[index].Id;
          this.optionservice.optionlist(this.QuesID).subscribe((data:any)=>{
            this.exam.Questions[index].Options=data;

          })
        }
      })
    })
  }
  get filteredQuestions() {
    return (this.exam.Questions) ?
      this.exam.Questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
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
      this.mode = 'exam';
    }
  }
  isAnswered(index) {
    return this.exam.Questions[index].Options.find(x => x.selected) ? 'Answered' : 'Not Answered';
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

    for (let index = 0; index < this.exam.Questions.length; index++) 
    {
      console.log(this.isCorrect(this.exam.Questions[index]));
      if (this.isCorrect(this.exam.Questions[index]) === 'correct') {correctCount++};
   }
   this.score = Math.round((correctCount / this.exam.Questions.length) *100);
   this.result.Score = this.score;
   this.result.ExamID = this.ExamID;
   this.result.userId = this.userId;
   this.result.Count = this.count;
   this.result.time = time;
   this.exampass.addResult(this.result,this.ExamID).subscribe((data:any)=>{
     this.result=data
   })


this.mode='result'
}
}
