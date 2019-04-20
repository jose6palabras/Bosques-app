import { TestBed } from '@angular/core/testing';

import { DataHomeService } from './data-home.service';

describe('DataHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHomeService = TestBed.get(DataHomeService);
    expect(service).toBeTruthy();
  });
});
