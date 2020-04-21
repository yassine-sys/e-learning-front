import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamOptionListComponent } from './exam-option-list.component';

describe('ExamOptionListComponent', () => {
  let component: ExamOptionListComponent;
  let fixture: ComponentFixture<ExamOptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamOptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
