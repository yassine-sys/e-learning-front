import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

 // formData : File;

  
  constructor(private http:HttpClient) { }
  postFile(fileToUpload: File){
    const endpoint= 'https://localhost:44306/api/UploadFile';
    const formData: FormData=new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    return this.http.post(endpoint,formData);
  }
}
