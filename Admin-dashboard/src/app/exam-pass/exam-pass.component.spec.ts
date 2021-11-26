import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamPassComponent } from './exam-pass.component';

describe('ExamPassComponent', () => {
  let component: ExamPassComponent;
  let fixture: ComponentFixture<ExamPassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
