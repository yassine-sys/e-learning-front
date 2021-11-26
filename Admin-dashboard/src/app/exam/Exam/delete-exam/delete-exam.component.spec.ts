import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteExamComponent } from './delete-exam.component';

describe('DeleteExamComponent', () => {
  let component: DeleteExamComponent;
  let fixture: ComponentFixture<DeleteExamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
