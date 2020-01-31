import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-track-by',
  templateUrl: '../grid/grid.component.html',
})
export class GridTrackByComponent implements OnInit {
  @Input() array: any[];
  @Input() randomInput: boolean;
  public type = 'Track By';
  public trackBy = true;

  constructor() {}

  ngOnInit() {}

  trackByFn(index, item) {
    console.log('tbf', index);
    return item.company; // or item.id
  }
}
