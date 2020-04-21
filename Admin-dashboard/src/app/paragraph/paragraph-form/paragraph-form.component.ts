import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParagraphService } from 'app/shared/paragraph.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UploadFileService } from 'app/shared/upload-file.service';
import { FileATT } from 'app/shared/models/file';
declare var $: any;

@Component({
  selector: 'app-paragraph-form',
  templateUrl: './paragraph-form.component.html',
  styleUrls: ['./paragraph-form.component.css']
})
export class ParagraphFormComponent implements OnInit {
  sectionID="";
  FilesList= [];
  pdfList:Array<FileATT> =[];
  videoList:Array<FileATT> =[];
  paragraphform = new FormGroup({
    title: new FormControl(''),
    Description: new FormControl(''),
    SectionID: new FormControl(''),
    Video: new FormControl(''),
    Pdf: new FormControl(''),
  
  })
  constructor(private paragraphService:ParagraphService,private route: ActivatedRoute,private uploadFileService: UploadFileService) { }
  showNotification(from,align){
    const type = ['','info','success','primary'];
  
    const color = Math.floor((Math.random() * 4) + 1);
  
    $.notify({
        icon: "notifications",
        message: "Chapter added with success :D"
  
    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }


  ngOnInit(): void {
    this.sectionID = this.route.snapshot.paramMap.get('id');
    console.log(this.sectionID);
    this.uploadFileService.getFileList()
    .subscribe(
    res=>{ this.FilesList = res as [];
      this.FilesList.forEach(file =>{
        console.log(file);
      
      let fileObj = new FileATT();
      fileObj.FileID = file.FileID;
      fileObj.FileName = file.FileName;
      fileObj.FileDescription = file.FileDescription;
      fileObj.FileDuration = file.FileDuration;
      if (file.FileName.indexOf(".mp4") !== -1) {
        this.videoList.push(fileObj);
      }
      else if (file.FileName.indexOf(".pdf") !== -1) {
        
        this.pdfList.push(fileObj);
      }
    
    });
    console.log("ggg");
  });
}


  onSubmit(){
    
    console.log(this.paragraphform.value);
     this.paragraphService.postParagraph(this.paragraphform.value).subscribe(
      res => {
        console.log(res);
        
      })
      this.paragraphform.reset();
      
     }


}
