import { TestBed } from '@angular/core/testing';

import { ExampleTableService } from './example-table.service';

describe('ExampleTableService', () => {
  let service: ExampleTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
