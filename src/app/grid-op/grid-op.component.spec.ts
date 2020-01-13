import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOpComponent } from './grid-op.component';

describe('GridOpComponent', () => {
  let component: GridOpComponent;
  let fixture: ComponentFixture<GridOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
