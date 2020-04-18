import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ResultComponent } from './result/result.component';
import {QuizListComponent} from './quiz/Quiz/quiz-dashboard/quiz-list.component';
import { CreateQuizComponent } from './quiz/Quiz/create-quiz/create-quiz.component';
import { CreateQuestionComponent } from './quiz/Question/create-question/create-question.component';
import { QuizUpdateComponent } from './quiz/Quiz/quiz-update/quiz-update.component';
import { QuizDeleteComponent } from './quiz/Quiz/quiz-delete/quiz-delete.component';
import { QuestionUpdateComponent } from './quiz/Question/question-update/question-update.component';
import { QuestionListComponent } from './quiz/Question/question-list/question-list.component';
import { QuestionDeleteComponent } from './quiz/Question/question-delete/question-delete.component';
import { OptionDeleteComponent } from './quiz/Option/option-delete/option-delete.component';
import { CreateOptionComponent } from './quiz/Option/create-option/create-option.component';
import { OptionUpdateComponent } from './quiz/Option/option-update/option-update.component';
import { OptionListComponent } from './quiz/Option/option-list/option-list.component';
import { CreateExamComponent } from './exam/Exam/create-exam/create-exam.component';
import { UpdateExamComponent } from './exam/Exam/update-exam/update-exam.component';
import { DeleteExamComponent } from './exam/Exam/delete-exam/delete-exam.component';
import { ExamListComponent } from './exam/Exam/exam-list/exam-list.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
 },{
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
 },{

  path: 'quiz-dashboard',
  component: QuizListComponent
},{
    path: 'create-quiz',
    component: CreateQuizComponent
},{ 
  path: 'delete/:QuizID', 
  component: QuizDeleteComponent
},{ 
  path: 'update/:QuizID', 
  component: QuizUpdateComponent
},{ 
  path: 'exam-dashboard', 
  component: ExamListComponent
},{
  path: 'create-exam',
  component: CreateExamComponent
},{ 
  path: 'update/:ExamID', 
  component: UpdateExamComponent
},{
  path: 'delete/:ExamID',
  component: DeleteExamComponent
},{
  path: 'create-question/:QuizID',
  component: CreateQuestionComponent
},{
  path: 'create-question/:ExamID',
  component: CreateQuestionComponent
},{ 
  path: 'update/:QuizID/question-list', 
  component: QuestionListComponent
},{ 
  path: 'update/:ExamID/question-list', 
  component: QuestionListComponent
},{ 
  path: 'update/:ExamID/update/:QuesID', 
  component: QuestionUpdateComponent
},{ 
  path: 'update/:QuizID/update/:QuesID', 
  component: QuestionUpdateComponent
},{ 
  path: 'delete/:QuizID/delete/:QuesID', 
  component: QuestionDeleteComponent
},{ 
  path: 'delete/:ExamID/delete/:QuesID', 
  component: QuestionDeleteComponent
},{
  path: 'create-option/:QuesID', 
  component: CreateOptionComponent
},{
  path: 'option/delete/:QuesID/delete/:OpID', 
  component: OptionDeleteComponent
},{  
  path: 'option/update/:QuesID/update/:OpID', 
  component: OptionUpdateComponent
},{  
  path: 'update/:QuesID/option-list', 
  component: OptionListComponent}
]}]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
