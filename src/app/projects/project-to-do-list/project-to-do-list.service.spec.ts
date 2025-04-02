import { TestBed } from '@angular/core/testing';

import { ProjectToDoListService } from './project-to-do-list.service';

describe('ProjectToDoListService', () => {
  let service: ProjectToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectToDoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
