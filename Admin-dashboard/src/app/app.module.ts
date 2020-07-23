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
import {YouTubePlayerModule} from '@angular/youtube-player';


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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
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

import { CoursesListComponent } from './course/courses-list/courses-list.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { SafeUrl } from '@angular/platform-browser';
import { ChaptersListComponent } from './chapter/chapters-list/chapters-list.component';
import { ChapterFormComponent } from './chapter/chapter-form/chapter-form.component';
import { SectionsListComponent } from './section/sections-list/sections-list.component';
import { SectionFormComponent } from './section/section-form/section-form.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { UploadFileService } from './shared/upload-file.service';
import { CourseService } from './shared/course.service';
import { SectionService } from './shared/section.service';
import { DepartmentService } from './shared/department.service';
import { ChapterService } from './shared/chapter.service';
import { ExamQuestionListComponent } from './exam/Question/exam-question-list/exam-question-list.component';
import { UpdateExamQuestionComponent } from './exam/Question/update-exam-question/update-exam-question.component';
import { DeleteExamQuestionComponent } from './exam/Question/delete-exam-question/delete-exam-question.component';
import { CreateExamQuestionComponent } from './exam/Question/create-exam-question/create-exam-question.component';
import { CreateExamOptionComponent } from './exam/Option/create-exam-option/create-exam-option.component';
import { DeleteExamOptionComponent } from './exam/Option/delete-exam-option/delete-exam-option.component';
import { UpdateExamOptionComponent } from './exam/Option/update-exam-option/update-exam-option.component';
import { ExamOptionListComponent } from './exam/Option/exam-option-list/exam-option-list.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersQuizzesComponent } from './users-quizzes/users-quizzes.component';
import { UsersExamsComponent } from './users-exams/users-exams.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import{VideoReaderComponent} from './video-reader/video-reader.component';
import { ParagraphsListComponent } from './paragraph/paragraphs-list/paragraphs-list.component';
import { ParagraphFormComponent } from './paragraph/paragraph-form/paragraph-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileUploadComponent} from './file-upload/file-upload.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { BusinessUnitService } from './business-unit/business-unit.service';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { MailComponent } from './mail/mail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupService } from './sign-up/signup.service';
import { QuizlistedComponent } from './quizlisted/quizlisted.component';
import { QuizPassComponent } from './quiz-pass/quiz-pass.component';



const appRoutes: Routes = [
{
    path: 'quiz-dashboard', component: QuizListComponent
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
    path: 'exam/:ExamID/question-list',component: ExamQuestionListComponent
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
},
{
    path: 'business-unit/:id', component: DepartmentComponent
},
{path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
{path: 'sign-up', component: SignUpComponent}



];

@NgModule({
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSortModule,
    MatDialogModule,
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
    AppRoutingModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    YouTubePlayerModule,
    PdfViewerModule,
    PdfJsViewerModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    QuizListComponent,
    QuizUpdateComponent,
    QuizDeleteComponent,
    CreateQuizComponent,
    QuestionListComponent,
    ResultComponent,
    QuestionUpdateComponent,
    CreateQuestionComponent,
    CreateQuestionComponent,
    OptionListComponent,
    OptionUpdateComponent,
    OptionDeleteComponent,
    CreateOptionComponent,
    ExamListComponent,
    CreateExamComponent,
    DeleteExamComponent,
    UpdateExamComponent,
    ResultComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    CoursesListComponent,
    CourseFormComponent,
    ChaptersListComponent,
    ChapterFormComponent,
    SectionsListComponent,
    SectionFormComponent,
    EditCourseComponent,
    VideoReaderComponent,
    ParagraphsListComponent,
    ParagraphFormComponent,
    FileUploadComponent,
    ExamQuestionListComponent,
    UpdateExamQuestionComponent,
    DeleteExamQuestionComponent,
    CreateExamQuestionComponent,
    CreateExamOptionComponent,
    DeleteExamOptionComponent,
    UpdateExamOptionComponent,
    ExamOptionListComponent,
    UsersDashboardComponent,
    UsersQuizzesComponent,
    UsersExamsComponent,
    BusinessUnitComponent,
    DepartmentComponent,
    UserComponent,
    UserListComponent,
   UserProfileComponent,
    MailComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    QuizListComponent,
    QuizlistedComponent,
    QuizPassComponent,
    

  ],
  providers: [
    
    UploadFileService, RepositoryService,CourseService, 
    SectionService, DepartmentService, ChapterService,EnvironmentUrlService,
    BusinessUnitService,DepartmentService,AuthGuard,SignupService,
    {
     provide : HTTP_INTERCEPTORS,
     useClass : AuthInterceptor,
     multi : true
   }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

