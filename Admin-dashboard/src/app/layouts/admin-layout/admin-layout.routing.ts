import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
<<<<<<< HEAD
import {CoursesListComponent} from '../../course/courses-list/courses-list.component';
import { CourseFormComponent } from '../../course/course-form/course-form.component';
import { EditCourseComponent } from '../../course/edit-course/edit-course.component';
import { ChaptersListComponent } from 'app/chapter/chapters-list/chapters-list.component';
import { ChapterFormComponent } from 'app/chapter/chapter-form/chapter-form.component';
import {SectionsListComponent} from 'app/section/sections-list/sections-list.component';
import {SectionFormComponent} from 'app/section/section-form/section-form.component';

=======
import { FileUploadComponent } from 'app/file-upload/file-upload.component';
import { VideoReaderComponent } from 'app/video-reader/video-reader.component';
>>>>>>> 49ad2c0f82c7a40474c6dc018a2dfcbd671a14f0

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
    { path: 'courses-list',   component: CoursesListComponent },
    {path: 'course-form',     component:CourseFormComponent},
    {path: 'edit-course/:id',     component:EditCourseComponent},
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
<<<<<<< HEAD
    {path: 'chapters-list/:id',   component:ChaptersListComponent},
    {path: 'chapter-form/:id',    component:ChapterFormComponent},
    {path: 'sections-list/:id',   component:SectionsListComponent},
    {path: 'section-form/:id',   component:SectionFormComponent},
=======
    { path: 'file-upload',    component: FileUploadComponent },
    { path: 'video-reader',   component: VideoReaderComponent },
>>>>>>> 49ad2c0f82c7a40474c6dc018a2dfcbd671a14f0
];
