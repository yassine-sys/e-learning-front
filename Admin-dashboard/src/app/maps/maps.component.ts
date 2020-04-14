import { Component, ViewChild, ElementRef } from '@angular/core';

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  currentTime: number;
  Progress: number;
  Duration: number;
  public player: any;
  

  constructor() { }

  name = "Angular";

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
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
