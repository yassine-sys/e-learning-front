import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamQuestionComponent } from './update-exam-question.component';

describe('UpdateExamQuestionComponent', () => {
  let component: UpdateExamQuestionComponent;
  let fixture: ComponentFixture<UpdateExamQuestionComponent>;

  beforeEach(async(() => {
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
