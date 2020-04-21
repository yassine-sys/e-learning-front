import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamOptionComponent } from './create-exam-option.component';

describe('CreateExamOptionComponent', () => {
  let component: CreateExamOptionComponent;
  let fixture: ComponentFixture<CreateExamOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExamOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
