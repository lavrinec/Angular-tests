import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-item-op',
  templateUrl: '../edit-item/edit-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditItemOpComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
