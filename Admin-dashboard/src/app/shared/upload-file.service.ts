import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http:HttpClient) { }
  postFile(fileToUpload: File){
    const endpoint= '';
    const formData: FormData=new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    return this.http.post(endpoint,formData);
}
}
