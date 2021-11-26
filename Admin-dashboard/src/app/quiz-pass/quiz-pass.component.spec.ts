import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuizPassComponent } from './quiz-pass.component';

describe('QuizPassComponent', () => {
  let component: QuizPassComponent;
  let fixture: ComponentFixture<QuizPassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
