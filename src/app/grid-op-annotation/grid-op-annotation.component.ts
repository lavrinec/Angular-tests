import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ArrayCheck} from '../core/ArrayCheck';

@Component({
  selector: 'app-grid-op-annotation',
  templateUrl: '../grid/grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
@ArrayCheck(['array'])
export class GridOpAnnotationComponent implements OnInit {

  @Input() array: any[];
  @Input() randomInput: boolean;
  public type = 'OnPush with annotation';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
