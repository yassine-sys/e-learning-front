import { TestBed } from '@angular/core/testing';

import { OptionexamService } from './optionexam.service';

describe('OptionexamService', () => {
  let service: OptionexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
