import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTrackByComponent } from './grid-track-by.component';

describe('GridTrackByComponent', () => {
  let component: GridTrackByComponent;
  let fixture: ComponentFixture<GridTrackByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
