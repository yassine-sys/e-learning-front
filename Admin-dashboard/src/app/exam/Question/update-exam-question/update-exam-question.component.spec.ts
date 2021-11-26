import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateExamQuestionComponent } from './update-exam-question.component';

describe('UpdateExamQuestionComponent', () => {
  let component: UpdateExamQuestionComponent;
  let fixture: ComponentFixture<UpdateExamQuestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExamQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
