import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamQuestionComponent } from './create-exam-question.component';

describe('CreateExamQuestionComponent', () => {
  let component: CreateExamQuestionComponent;
  let fixture: ComponentFixture<CreateExamQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExamQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
