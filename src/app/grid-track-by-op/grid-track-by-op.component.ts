import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-track-by-op',
  templateUrl: '../grid/grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridTrackByOpComponent implements OnInit {

  @Input() array: any[];
  @Input() randomInput: boolean;
  public type = 'Track By On Push';
  public trackBy = true;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    console.log('tbfop', index)
    return index; // or item.id
  }

}
