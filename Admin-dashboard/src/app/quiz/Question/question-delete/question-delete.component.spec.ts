import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionDeleteComponent } from './question-delete.component';

describe('QuestionDeleteComponent', () => {
  let component: QuestionDeleteComponent;
  let fixture: ComponentFixture<QuestionDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
