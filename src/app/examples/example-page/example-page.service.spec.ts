import { TestBed } from '@angular/core/testing';

import { ExamplePageService } from './example-page.service';

describe('ExamplePageService', () => {
  let service: ExamplePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
