import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOpComponent } from './item-op.component';

describe('ItemOpComponent', () => {
  let component: ItemOpComponent;
  let fixture: ComponentFixture<ItemOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
