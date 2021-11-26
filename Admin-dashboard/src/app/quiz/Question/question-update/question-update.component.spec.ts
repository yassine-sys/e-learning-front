import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionUpdateComponent } from './question-update.component';

describe('QuestionUpdateComponent', () => {
  let component: QuestionUpdateComponent;
  let fixture: ComponentFixture<QuestionUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
