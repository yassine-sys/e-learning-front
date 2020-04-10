import { Component, ViewChild, ElementRef } from '@angular/core';

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-video-reader',
  templateUrl: './video-reader.component.html',
  styleUrls: ['./video-reader.component.css']
})
export class VideoReaderComponent {

  currentTime: number

  constructor() { }

  name = "Angular";

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;

  setCurrentTime(data) {
    //this.currentTime = data.target.currentTime;
    console.log(data.target.currentTime);
  }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }


}
