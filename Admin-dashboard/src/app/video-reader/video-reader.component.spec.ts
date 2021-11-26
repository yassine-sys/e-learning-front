import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoReaderComponent } from './video-reader.component';

describe('VideoReaderComponent', () => {
  let component: VideoReaderComponent;
  let fixture: ComponentFixture<VideoReaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
