import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersQuizzesComponent } from './users-quizzes.component';

describe('UsersQuizzesComponent', () => {
  let component: UsersQuizzesComponent;
  let fixture: ComponentFixture<UsersQuizzesComponent>;

  beforeEach(async(() => {
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
