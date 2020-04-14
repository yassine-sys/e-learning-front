import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  MatButtonModule
} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';



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

import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizEditComponent } from './quiz-edit/quiz-edit.component';
import QuizService from './shared/api/quiz.service';
import { UploadFileService } from './shared/upload-file.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { VideoReaderComponent } from './video-reader/video-reader.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



const appRoutes: Routes = [
  { path: '', redirectTo: '/sugarlevel-list', pathMatch: 'full' },
  {
    path: 'quiz-list',
    component: QuizListComponent
  },
  {
    path: 'quiz-add',
    component: QuizEditComponent
  },
  {
    path: 'quiz-edit/:QuizID',
    component: QuizEditComponent
  }
];
@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule.forRoot(appRoutes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,  
    AppRoutingModule,
    YouTubePlayerModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    QuizListComponent,
    QuizEditComponent,
    FileUploadComponent,
    VideoReaderComponent

  ],
  providers: [
    QuizService,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
