import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAComponentAComponent } from './project-a-component-a.component';

describe('ProjectAComponentAComponent', () => {
  let component: ProjectAComponentAComponent;
  let fixture: ComponentFixture<ProjectAComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAComponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
