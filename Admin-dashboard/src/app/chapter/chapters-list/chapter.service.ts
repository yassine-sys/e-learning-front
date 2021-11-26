import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chapter:Chapter
  readonly rootUrl = 'https://localhost:44352';
  constructor(private http: HttpClient) { }
  public CourseId;


  addChapter(chapter:Chapter,CourseId:any){
    const body:Chapter={
      Id:chapter.Id,
      title:chapter.title,
      Description:chapter.Description
    }
    return this.http.post(this.rootUrl + '/api/chapter/'+CourseId, body);
  }

  onDelete(ChapterId:any){
    
    
    return this.http.delete('https://localhost:44352/api/chapter/'+ChapterId);
  }
}
