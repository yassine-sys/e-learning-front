import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExamOptionComponent } from './delete-exam-option.component';

describe('DeleteExamOptionComponent', () => {
  let component: DeleteExamOptionComponent;
  let fixture: ComponentFixture<DeleteExamOptionComponent>;

  beforeEach(async(() => {
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
