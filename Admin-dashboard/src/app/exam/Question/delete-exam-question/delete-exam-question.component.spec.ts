import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteExamQuestionComponent } from './delete-exam-question.component';

describe('DeleteExamQuestionComponent', () => {
  let component: DeleteExamQuestionComponent;
  let fixture: ComponentFixture<DeleteExamQuestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExamQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExamQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
