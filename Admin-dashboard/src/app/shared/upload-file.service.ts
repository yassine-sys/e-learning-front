import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

 // formData : File;
 public ApiURL = 'https://localhost:44306/api';

  
  constructor(private http:HttpClient) { }
  postFile(fileToUpload: File, title: string, description: string){
    const endpoint= this.ApiURL+'/UploadFile';
    const formData: FormData=new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);
    formData.append('FileTitle',title);
    formData.append('FileDescription',description);
    return this.http.post(endpoint,formData);
  }
  getFileByID(id) {
    return this.http.get(this.ApiURL + '/Files/' +id);
  }
  getFileList(){
    return this.http.get(this.ApiURL + '/Files');
  }
}
