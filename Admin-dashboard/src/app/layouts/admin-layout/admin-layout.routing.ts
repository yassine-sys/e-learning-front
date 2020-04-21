import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {CoursesListComponent} from '../../course/courses-list/courses-list.component';
import { CourseFormComponent } from '../../course/course-form/course-form.component';
import { EditCourseComponent } from '../../course/edit-course/edit-course.component';
import { ChaptersListComponent } from 'app/chapter/chapters-list/chapters-list.component';
import { ChapterFormComponent } from 'app/chapter/chapter-form/chapter-form.component';
import {SectionsListComponent} from 'app/section/sections-list/sections-list.component';
import {SectionFormComponent} from 'app/section/section-form/section-form.component';
import { VideoReaderComponent } from 'app/video-reader/video-reader.component';
<<<<<<< HEAD
import { FileUploadComponent } from 'app/file-upload/file-upload.component';
import { QuizListComponent } from 'app/quiz/Quiz/quiz-dashboard/quiz-list.component';
import { CreateQuizComponent } from 'app/quiz/Quiz/create-quiz/create-quiz.component';
import { QuizDeleteComponent } from 'app/quiz/Quiz/quiz-delete/quiz-delete.component';
import { QuizUpdateComponent } from 'app/quiz/Quiz/quiz-update/quiz-update.component';
import { ExamListComponent } from 'app/exam/Exam/exam-list/exam-list.component';
import { CreateExamComponent } from 'app/exam/Exam/create-exam/create-exam.component';
import { UpdateExamComponent } from 'app/exam/Exam/update-exam/update-exam.component';
import { DeleteExamComponent } from 'app/exam/Exam/delete-exam/delete-exam.component';
import { CreateQuestionComponent } from 'app/quiz/Question/create-question/create-question.component';
import { QuestionListComponent } from 'app/quiz/Question/question-list/question-list.component';
import { QuestionUpdateComponent } from 'app/quiz/Question/question-update/question-update.component';
import { QuestionDeleteComponent } from 'app/quiz/Question/question-delete/question-delete.component';
import { CreateOptionComponent } from 'app/quiz/Option/create-option/create-option.component';
import { OptionDeleteComponent } from 'app/quiz/Option/option-delete/option-delete.component';
import { OptionUpdateComponent } from 'app/quiz/Option/option-update/option-update.component';
import { OptionListComponent } from 'app/quiz/Option/option-list/option-list.component';
=======
import { ParagraphsListComponent } from '../../paragraph/paragraphs-list/paragraphs-list.component';
import { ParagraphFormComponent } from '../../paragraph/paragraph-form/paragraph-form.component';
import {FileUploadComponent} from '../../file-upload/file-upload.component';
>>>>>>> 357537d85ada69ac4905a7638c1fc7ecd646b320


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'file-upload',     component: FileUploadComponent },
    { path: 'video-reader',     component: VideoReaderComponent },
    { path: 'courses-list',   component: CoursesListComponent },
    {path: 'course-form',     component:CourseFormComponent},
    {path: 'edit-course/:id',     component:EditCourseComponent},
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path: 'chapters-list/:id',   component:ChaptersListComponent},
    {path: 'chapter-form/:id',    component:ChapterFormComponent},
    {path: 'sections-list/:id',   component:SectionsListComponent},
    {path: 'section-form/:id',   component:SectionFormComponent},
<<<<<<< HEAD
    { path: 'file-upload',   component:FileUploadComponent},
    { path: 'video-reader',   component:VideoReaderComponent},
    {
        path: 'quiz-dashboard',
        component: QuizListComponent
      },{
          path: 'create-quiz/:CourseID',
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
        path: 'create-exam/:CourseID',
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
    {path: 'paragraphs-list/:id',   component:ParagraphsListComponent},
    {path: 'paragraph-form/:id',   component:ParagraphFormComponent},
>>>>>>> 357537d85ada69ac4905a7638c1fc7ecd646b320
];
