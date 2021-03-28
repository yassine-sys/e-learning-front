import { TestBed } from '@angular/core/testing';

import { QuestionexamService } from './questionexam.service';

describe('QuestionexamService', () => {
  let service: QuestionexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
