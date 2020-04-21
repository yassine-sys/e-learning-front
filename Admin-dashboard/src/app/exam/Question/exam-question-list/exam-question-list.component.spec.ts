import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamQuestionListComponent } from './exam-question-list.component';

describe('ExamQuestionListComponent', () => {
  let component: ExamQuestionListComponent;
  let fixture: ComponentFixture<ExamQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
