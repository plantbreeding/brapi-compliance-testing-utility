import { TestBed, inject } from '@angular/core/testing';

import { TestAccessService } from './test-access.service';

describe('TestAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestAccessService]
    });
  });

  it('should be created', inject([TestAccessService], (service: TestAccessService) => {
    expect(service).toBeTruthy();
  }));
});
