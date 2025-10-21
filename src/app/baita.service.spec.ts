import { TestBed } from '@angular/core/testing';

import { BaitaService } from './baita.service';

describe('BaitaService', () => {
  let service: BaitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
