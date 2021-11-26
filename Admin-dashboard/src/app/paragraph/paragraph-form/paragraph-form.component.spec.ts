import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParagraphFormComponent } from './paragraph-form.component';

describe('ParagraphFormComponent', () => {
  let component: ParagraphFormComponent;
  let fixture: ComponentFixture<ParagraphFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
