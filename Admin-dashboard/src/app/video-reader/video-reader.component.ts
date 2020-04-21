
import { Component, ViewChild, ElementRef } from'@angular/core';
import { NgxExtendedPdfViewerModule } from'ngx-extended-pdf-viewer';
import { ParagraphService } from 'app/shared/paragraph.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
 
declare const google:any ;
 
interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
selector:'app-video-reader',
templateUrl:'./video-reader.component.html',
styleUrls: ['./video-reader.component.css'],
providers: [NgxExtendedPdfViewerModule]
 
})
export class VideoReaderComponent{
 
pdfSrc = "assets/example.pdf";  /* PDF*/
//fileSrc="assets/WhatisASPNETWebAPI.mp4"

 
currentTime: number;
Progress: number;
Duration: number;
publicplayer: any;
pdfContent: SafeUrl;
 

 
constructor(private paragraphService:ParagraphService,private sanitizer: DomSanitizer) { }

ngOnInit(): void {
  

  this.paragraphService.getFile().subscribe((blob: any) => 
  { let objectURL = 'data:Video/mp4;base64,' + blob;
    
  this.pdfContent=this.sanitizer.bypassSecurityTrustResourceUrl(objectURL);


});

}
 
name = "Angular";
 
  @ViewChild("videoPlayer", { static:false }) videoplayer: ElementRef;
isPlay: boolean = false;
 
setCurrentTime(data) {
this.currentTime = data.target.currentTime;
console.log('current Time=' + this.currentTime);
this.Duration = data.target.duration;
this.Progress=((this.currentTime / this.Duration)*100);
console.log('Progress=' + this.Progress + '%');
console.log('----------------------');
return this.currentTime;
  }
 
setProgress(data) {
this.Duration = data.target.duration;
this.Progress=((this.currentTime / this.Duration)*100);
console.log('Progress=' + this.Progress + '%');
return this.Progress;
  }
 

 
toggleVideo(event: any) {
this.videoplayer.nativeElement.play();
  }

 
}

