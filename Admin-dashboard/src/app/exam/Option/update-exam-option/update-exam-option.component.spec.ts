import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateExamOptionComponent } from './update-exam-option.component';

describe('UpdateExamOptionComponent', () => {
  let component: UpdateExamOptionComponent;
  let fixture: ComponentFixture<UpdateExamOptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExamOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
