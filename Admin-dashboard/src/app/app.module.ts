import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  MatButtonModule
} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { HttpClientModule } from '@angular/common/http';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
<<<<<<< HEAD
import { UploadFileComponent } from './upload-file/upload-file.component';
import { QuizListComponent } from './quiz/Quiz/quiz-dashboard/quiz-list.component';
import { ResultComponent } from './result/result.component';
import { CreateQuizComponent } from './quiz/Quiz/create-quiz/create-quiz.component';
import { CreateQuestionComponent } from './quiz/Question/create-question/create-question.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { from } from 'rxjs';
import{ MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SuccessDialogComponent } from './shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './shared/dialogs/error-dialog/error-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { QuizUpdateComponent } from './quiz/Quiz/quiz-update/quiz-update.component';
import { EnvironmentUrlService } from './shared/api/environment-url.service';
import * as bootstrap from 'bootstrap';
import { RepositoryService } from './shared/api/repository.service';
import { QuizDeleteComponent } from './quiz/Quiz/quiz-delete/quiz-delete.component';
import { QuestionListComponent } from './quiz/Question/question-list/question-list.component';
import { QuestionUpdateComponent } from './quiz/Question/question-update/question-update.component';
import { QuestionDeleteComponent } from './quiz/Question/question-delete/question-delete.component';
import { OptionDeleteComponent } from './quiz/Option/option-delete/option-delete.component';
import { OptionUpdateComponent } from './quiz/Option/option-update/option-update.component';
import { CreateOptionComponent } from './quiz/Option/create-option/create-option.component';
import { OptionListComponent } from './quiz/Option/option-list/option-list.component';
import { ExamListComponent } from './exam/Exam/exam-list/exam-list.component';
import { CreateExamComponent } from './exam/Exam/create-exam/create-exam.component';
import { UpdateExamComponent } from './exam/Exam/update-exam/update-exam.component';
import { DeleteExamComponent } from './exam/Exam/delete-exam/delete-exam.component';
=======

import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizEditComponent } from './quiz-edit/quiz-edit.component';
import QuizService from './shared/api/quiz.service';
import { CoursesListComponent } from './course/courses-list/courses-list.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { SafeUrl } from '@angular/platform-browser';
import { ChaptersListComponent } from './chapter/chapters-list/chapters-list.component';
import { ChapterFormComponent } from './chapter/chapter-form/chapter-form.component';
import { SectionsListComponent } from './section/sections-list/sections-list.component';
import { SectionFormComponent } from './section/section-form/section-form.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { UploadFileService } from './shared/upload-file.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoReaderComponent } from './video-reader/video-reader.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


>>>>>>> 35f786a2d1b0f5930e6c90b6610d5eb4f03e7d87

const appRoutes: Routes = [
 {
    path: 'quiz-dashboard',
    component: QuizListComponent
<<<<<<< HEAD
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
    path: 'update/:ResID/:ExamID', 
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
=======
  },
  {
    path: 'quiz-add',
    component: QuizEditComponent
  },
  {
    path: 'quiz-edit/:QuizID',
    component: QuizEditComponent
  }
  

>>>>>>> 35f786a2d1b0f5930e6c90b6610d5eb4f03e7d87
];

@NgModule({
  imports: [
<<<<<<< HEAD
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSortModule,
    MatDialogModule,
=======
    NgxExtendedPdfViewerModule,
>>>>>>> 35f786a2d1b0f5930e6c90b6610d5eb4f03e7d87
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    //MatIconModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,  
<<<<<<< HEAD
    AppRoutingModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),

=======
    AppRoutingModule
    
>>>>>>> 35f786a2d1b0f5930e6c90b6610d5eb4f03e7d87
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    QuizListComponent,
<<<<<<< HEAD
    ResultComponent,
    CreateQuizComponent,
    CreateQuestionComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    QuizUpdateComponent,
    QuizDeleteComponent,
    QuestionListComponent,
    QuestionUpdateComponent,
    QuestionDeleteComponent,
    CreateOptionComponent,
    OptionDeleteComponent,
    OptionUpdateComponent,
    OptionListComponent,
    ExamListComponent,
    CreateExamComponent,
    UpdateExamComponent,
    DeleteExamComponent
  ],
  providers: [ EnvironmentUrlService, 
              RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class Quiz {}
export class Question {}
export class Exam {}
export class Result {}
export class Option {}
=======
    QuizEditComponent,
    CoursesListComponent,
    CourseFormComponent,
    ChaptersListComponent,
    ChapterFormComponent,
    SectionsListComponent,
    SectionFormComponent,
    EditCourseComponent,
    VideoReaderComponent,
    FileUploadComponent,

  ],
  providers: [
    QuizService,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 35f786a2d1b0f5930e6c90b6610d5eb4f03e7d87

