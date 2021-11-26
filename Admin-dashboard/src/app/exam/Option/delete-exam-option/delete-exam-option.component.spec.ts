import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteExamOptionComponent } from './delete-exam-option.component';

describe('DeleteExamOptionComponent', () => {
  let component: DeleteExamOptionComponent;
  let fixture: ComponentFixture<DeleteExamOptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExamOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExamOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
