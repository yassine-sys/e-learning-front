import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizlistedComponent } from './quizlisted.component';

describe('QuizlistedComponent', () => {
  let component: QuizlistedComponent;
  let fixture: ComponentFixture<QuizlistedComponent>;

  beforeEach(async(() => {
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
