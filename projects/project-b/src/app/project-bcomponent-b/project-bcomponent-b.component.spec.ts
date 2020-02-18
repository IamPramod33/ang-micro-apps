import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBComponentBComponent } from './project-bcomponent-b.component';

describe('ProjectBComponentBComponent', () => {
  let component: ProjectBComponentBComponent;
  let fixture: ComponentFixture<ProjectBComponentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBComponentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
