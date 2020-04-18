import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionUpdateComponent } from './option-update.component';

describe('OptionUpdateComponent', () => {
  let component: OptionUpdateComponent;
  let fixture: ComponentFixture<OptionUpdateComponent>;

  beforeEach(async(() => {
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
