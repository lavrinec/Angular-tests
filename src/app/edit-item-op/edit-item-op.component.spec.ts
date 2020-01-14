import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemOpComponent } from './edit-item-op.component';

describe('EditItemOpComponent', () => {
  let component: EditItemOpComponent;
  let fixture: ComponentFixture<EditItemOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
