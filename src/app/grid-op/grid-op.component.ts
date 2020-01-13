import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-op',
  templateUrl: '../grid/grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridOpComponent implements OnInit {

  @Input() array: any[];
  @Input() randomInput: boolean;
  public type = 'OnPush';

  constructor() { }

  ngOnInit() {
  }

}
