import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuizlistedComponent } from './quizlisted.component';

describe('QuizlistedComponent', () => {
  let component: QuizlistedComponent;
  let fixture: ComponentFixture<QuizlistedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizlistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
