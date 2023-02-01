import { TestBed } from '@angular/core/testing';

import { UserQueryResearchService } from './user-query-research.service';

describe('UserQueryResearchService', () => {
  let service: UserQueryResearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserQueryResearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
