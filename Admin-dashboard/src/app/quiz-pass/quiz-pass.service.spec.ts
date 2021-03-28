import { TestBed } from '@angular/core/testing';

import { QuizPassService } from './quiz-pass.service';

describe('QuizPassService', () => {
  let service: QuizPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
