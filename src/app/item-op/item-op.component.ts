import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-op',
  templateUrl: '../item/item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemOpComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
