import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/video-reader', title: 'Video Reader',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/courses-list', title: 'Courses List',  icon:'reorder', class: '' },
    { path: '/icons', title: 'icons',  icon:'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/quiz-dashboard', title: 'Manage Quizzes',  icon:'library_books', class: '' },
    { path: '/exam-dashboard', title: 'Manage Exams',  icon:'content_paste', class: '' },
    { path: '/users-dashboard', title: 'Users Dashboard',  icon: 'dashboard', class: '' },
   // { path: '/video-reader', title: 'Video',  icon:'library_books', class: '' },
    { path: '/file-upload', title: 'file-upload',  icon:'library_books', class: '' },
    { path: '/business-unit', title: 'business unit',  icon: 'dashboard', class: '' },



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
