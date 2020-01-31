import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOpAnnotationCheckComponent } from './grid-op-annotation-check.component';

describe('GridOpAnnotationCheckComponent', () => {
  let component: GridOpAnnotationCheckComponent;
  let fixture: ComponentFixture<GridOpAnnotationCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOpAnnotationCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOpAnnotationCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
