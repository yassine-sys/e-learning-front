import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexamresultsComponent } from './viewexamresults.component';

describe('ViewexamresultsComponent', () => {
  let component: ViewexamresultsComponent;
  let fixture: ComponentFixture<ViewexamresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewexamresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexamresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
