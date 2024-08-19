import { TestBed } from '@angular/core/testing';

import { MyphotoService } from './myphoto.service';

describe('MyphotoService', () => {
  let service: MyphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
