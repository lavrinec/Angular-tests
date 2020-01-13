import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemObjectComponent } from './item-object.component';

describe('ItemObjectComponent', () => {
  let component: ItemObjectComponent;
  let fixture: ComponentFixture<ItemObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
