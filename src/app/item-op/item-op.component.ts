import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-op',
  templateUrl: '../item/item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemOpComponent implements OnInit, DoCheck {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('Item do check', this.item);
  }

}
