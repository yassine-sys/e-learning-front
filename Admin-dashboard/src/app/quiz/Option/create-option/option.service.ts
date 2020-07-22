import { Injectable } from '@angular/core';
import Option from 'app/shared/models/Option';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
option:Option
readonly rootUrl = 'https://localhost:44352';

  constructor(private http: HttpClient) { }
  public QuesId;
  addOption(option:Option,QuesId:any){
    const body={
      OpID:option.OpID,
      OptionText:option.OptionText,
      values:option.values
    }
    return this.http.post(this.rootUrl+'/api/option/'+QuesId,body);
  }
  onDelete(OpID:any){
    
    
    return this.http.delete('https://localhost:44352/api/option/'+OpID);
  }

}
