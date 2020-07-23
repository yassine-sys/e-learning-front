import { TestBed } from '@angular/core/testing';

import { QuestionExamenService } from './question-examen.service';

describe('QuestionExamenService', () => {
  let service: QuestionExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
