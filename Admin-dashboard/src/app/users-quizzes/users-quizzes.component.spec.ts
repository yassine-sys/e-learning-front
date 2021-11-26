import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersQuizzesComponent } from './users-quizzes.component';

describe('UsersQuizzesComponent', () => {
  let component: UsersQuizzesComponent;
  let fixture: ComponentFixture<UsersQuizzesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
