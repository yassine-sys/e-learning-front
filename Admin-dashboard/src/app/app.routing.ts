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
import { CreateExamQuestionComponent } from './exam/Question/create-exam-question/create-exam-question.component';
import { ExamQuestionListComponent } from './exam/Question/exam-question-list/exam-question-list.component';
import { UpdateExamQuestionComponent } from './exam/Question/update-exam-question/update-exam-question.component';
import { DeleteExamQuestionComponent } from './exam/Question/delete-exam-question/delete-exam-question.component';
import { CreateExamOptionComponent } from './exam/Option/create-exam-option/create-exam-option.component';
import { DeleteExamOptionComponent } from './exam/Option/delete-exam-option/delete-exam-option.component';
import { UpdateExamOptionComponent } from './exam/Option/update-exam-option/update-exam-option.component';
import { ExamOptionListComponent } from './exam/Option/exam-option-list/exam-option-list.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersQuizzesComponent } from './users-quizzes/users-quizzes.component';
import { UsersExamsComponent } from './users-exams/users-exams.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { DepartmentComponent } from './department/department.component';

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
    path: 'quiz-dashboard', component: QuizListComponent
},{
    path: 'create-quiz/:CourseID', component: CreateQuizComponent
},{ 
    path: 'quiz/delete/:QuizID', component: QuizDeleteComponent
},{ 
    path: 'quiz/update/:QuizID', component: QuizUpdateComponent
},{
    path: 'quiz/create-question/:QuizID',component: CreateQuestionComponent
},{ 
    path: 'quiz/:QuizID/update/:QuesID', component: QuestionUpdateComponent
},{ 
    path: 'quiz/:QuizID/delete/:QuesID', component: QuestionDeleteComponent
},{ 
    path: 'quiz/:QuizID/question-list', component: QuestionListComponent
},{
    path: 'exam-dashboard', component: ExamListComponent
},{   
    path: 'create-exam/:CourseID',component: CreateExamComponent
},{ 
    path: 'exam/update/:ExamID', component: UpdateExamComponent
},{
    path: 'exam/delete/:ExamID',component: DeleteExamComponent
},{ 
    path: 'exam/:ExamID/delete/:QuesID', component: DeleteExamQuestionComponent
},{
    path: 'exam/create-question/:ExamID', component: CreateExamQuestionComponent
},{ 
    path: 'exam/question-list',component: ExamQuestionListComponent
},{ 
    path: 'exam/:ExamID/update/:QuesID', component: UpdateExamQuestionComponent
},{
    path: 'quiz/create-option/:QuesID', component: CreateOptionComponent
},{
    path: 'quiz/option/:QuesID/delete/:OpID', component: OptionDeleteComponent
},{  
    path: 'quiz/option/:QuesID/update/:OpID', component: OptionUpdateComponent
},{  
    path: 'quiz/:QuesID/option-list', component: OptionListComponent
},{         
    path: 'exam/create-option/:QuesID', component: CreateExamOptionComponent
},{
    path: 'exam/option/:QuesID/delete/:OpID', component: DeleteExamOptionComponent
},{  
    path: 'exam/option/:QuesID/update/:OpID', component: UpdateExamOptionComponent
},{  
    path: 'exam/:QuesID/option-list', component: ExamOptionListComponent
},{  
    path: 'users-dashboard', component: UsersDashboardComponent
},{  
    path: 'user-quizzes/:Id', component: UsersQuizzesComponent
},{
    path: 'user-exams/:Id', component: UsersExamsComponent
},{
    path: 'business-unit', component: BusinessUnitComponent
},{
    path: 'department', component: DepartmentComponent
}
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
