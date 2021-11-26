import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamlistedComponent } from './examlisted.component';

describe('ExamlistedComponent', () => {
  let component: ExamlistedComponent;
  let fixture: ComponentFixture<ExamlistedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamlistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
