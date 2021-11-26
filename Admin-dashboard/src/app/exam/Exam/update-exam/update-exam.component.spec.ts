import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateExamComponent } from './update-exam.component';

describe('UpdateExamComponent', () => {
  let component: UpdateExamComponent;
  let fixture: ComponentFixture<UpdateExamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
