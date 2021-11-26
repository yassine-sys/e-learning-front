import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OptionUpdateComponent } from './option-update.component';

describe('OptionUpdateComponent', () => {
  let component: OptionUpdateComponent;
  let fixture: ComponentFixture<OptionUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
