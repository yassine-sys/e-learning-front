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
  currentTime: number

  constructor() { }

  name = "Angular";

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;

  setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
    console.log(data.target.currentTime);
    console.log('Progress=' + ((this.currentTime / data.target.duration)*100) + '%');
  }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
 

}
