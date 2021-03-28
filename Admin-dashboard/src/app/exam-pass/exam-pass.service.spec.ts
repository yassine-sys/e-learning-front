import { TestBed } from '@angular/core/testing';

import { ExamPassService } from './exam-pass.service';

describe('ExamPassService', () => {
  let service: ExamPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
