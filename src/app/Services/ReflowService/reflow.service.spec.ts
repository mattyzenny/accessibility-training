import { TestBed } from '@angular/core/testing';

import { ReflowService } from './reflow.service';

describe('ReflowService', () => {
  let service: ReflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
