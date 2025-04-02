import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectToDoListComponent } from './project-to-do-list.component';

describe('ProjectToDoListComponent', () => {
  let component: ProjectToDoListComponent;
  let fixture: ComponentFixture<ProjectToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectToDoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
