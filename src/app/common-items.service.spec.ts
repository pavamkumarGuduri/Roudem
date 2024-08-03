import { TestBed } from '@angular/core/testing';

import { CommonItemsService } from './common-items.service';

describe('CommonItemsService', () => {
  let service: CommonItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
