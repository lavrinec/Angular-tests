import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOpAnnotationComponent } from './grid-op-annotation.component';

describe('GridOpAnnotationComponent', () => {
  let component: GridOpAnnotationComponent;
  let fixture: ComponentFixture<GridOpAnnotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOpAnnotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOpAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
