import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {
  public ApiURL = 'https://localhost:44306/api';

  constructor(private http: HttpClient) { }
  postParagraph(formData) {
    return this.http.post(this.ApiURL+ '/Paragraphs', formData);
  }

  putParagraph(formData) {
    return this.http.put(this.ApiURL + '/Paragraphs/' + formData, formData);
  }

  deleteParagraph(id) {
    return this.http.delete(this.ApiURL + '/Paragraphs/' + id);
  }

  getParagraphList() {
    return this.http.get(this.ApiURL + '/Paragraphs');
  }


  getParagraphsBySectionID(sectionid) {
    return this.http.get(this.ApiURL + '/Paragraph/Section/'+ sectionid);
  }

  getFile(){
    return this.http.get(this.ApiURL+ '/GetPdfFile' );
  }





}
