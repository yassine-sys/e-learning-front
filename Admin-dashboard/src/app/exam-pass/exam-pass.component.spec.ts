import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPassComponent } from './exam-pass.component';

describe('ExamPassComponent', () => {
  let component: ExamPassComponent;
  let fixture: ComponentFixture<ExamPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
