import { TestBed } from '@angular/core/testing';

import { StudentIdCardsService } from './student-id-cards.service';

describe('StudentIdCardsService', () => {
  let service: StudentIdCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentIdCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
