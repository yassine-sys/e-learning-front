import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'app/shared/upload-file.service';

declare var $: any;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileUrl: string="/assets/img/1.png";
  fileToUpload: File= null;

  constructor(private fileService: UploadFileService) { }

  ngOnInit(): void {
  }

  handleFileInput(file: FileList)
  {
    this.fileToUpload=file.item(0);
    var reader = new FileReader();
    reader.onload=(event: any)=>
    {
      this.fileUrl= event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  
  OnSubmit(f:any){
    this.fileService.postFile(this.fileToUpload).subscribe(
      data=>{
        f.value=null;
        this.fileUrl= "/assets/img/1.png";
      }
    );

  }

  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "File added with success"

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

}
