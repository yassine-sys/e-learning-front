import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Course} from 'app/shared/models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public ApiURL = 'https://localhost:44352/api';

  constructor(private http: HttpClient) { }

  postCourse(formData) {
    return this.http.post(this.ApiURL+ '/course', formData);
  }

  putCourse(id,formData) {
    return this.http.put(this.ApiURL + '/course/' + id, formData);
  }

  deleteCourse(id) {
    return this.http.delete(this.ApiURL + '/course/' + id);
  }

  getCoursesList() {
    return this.http.get(this.ApiURL + '/course');
  }
  getImage(id){
    return this.http.get(this.ApiURL+ '/course/GetImage/' +id);
  }
  postFile(formDataimg,fileToUpload:File) {
  
    const formData: FormData = new FormData();
    formData.append('OverViewVideo',fileToUpload,fileToUpload.name);
    formData.append('title', formDataimg.title);
    formData.append('Description', formDataimg.Description);
    formData.append('DepartmentID', formDataimg.DepartmentID);

    return this.http.post(this.ApiURL+ '/course/uploadimage', formData);
  }
  getCourseByID(id) {
    return this.http.get(this.ApiURL + '/course/' +id);
  }

}

