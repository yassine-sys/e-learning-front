import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  public ApiURL = 'https://localhost:44306/api';
  
  constructor(private http: HttpClient) { }

  postSection(formData) {
    return this.http.post(this.ApiURL+ '/Sections', formData);
  }

  putSection(formData) {
    return this.http.put(this.ApiURL + '/Sections/' + formData, formData);
  }

  deleteSection(id) {
    return this.http.delete(this.ApiURL + '/Sections/' + id);
  }

  getSectionsList() {
    return this.http.get(this.ApiURL + '/Sections');
  }


  getSectionsByChapterID(chapterid) {
    return this.http.get(this.ApiURL + '/Section/Chapter/'+ chapterid);
  }







}
