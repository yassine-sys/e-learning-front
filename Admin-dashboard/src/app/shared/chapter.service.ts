import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  public ApiURL = 'https://localhost:44306/api';
  
  constructor(private http: HttpClient) { }

  postChapter(formData) {
    return this.http.post(this.ApiURL+ '/Chapters', formData);
  }

  putChapter(formData) {
    return this.http.put(this.ApiURL + '/Chapters/' + formData, formData);
  }

  deleteChapter(id) {
    return this.http.delete(this.ApiURL + '/Chapters/' + id);
  }

  getChaptersList() {
    return this.http.get(this.ApiURL + '/Chapters');
  }

  getChapterByID(id) {
    return this.http.get(this.ApiURL + '/Chapters/' +id);
  }


  getChaptersByCourseID(courseid) {
    return this.http.get(this.ApiURL + '/Chapter/Course/'+ courseid);
  }

 

}
