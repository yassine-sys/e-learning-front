import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionFormComponent } from './section-form.component';

describe('SectionFormComponent', () => {
  let component: SectionFormComponent;
  let fixture: ComponentFixture<SectionFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
