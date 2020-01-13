import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTrackByOpComponent } from './grid-track-by-op.component';

describe('GridTrackByOpComponent', () => {
  let component: GridTrackByOpComponent;
  let fixture: ComponentFixture<GridTrackByOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTrackByOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTrackByOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
