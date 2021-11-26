import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersExamsComponent } from './users-exams.component';

describe('UsersExamsComponent', () => {
  let component: UsersExamsComponent;
  let fixture: ComponentFixture<UsersExamsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
