import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuizDeleteComponent } from './quiz-delete.component';

describe('QuizDeleteComponent', () => {
  let component: QuizDeleteComponent;
  let fixture: ComponentFixture<QuizDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
