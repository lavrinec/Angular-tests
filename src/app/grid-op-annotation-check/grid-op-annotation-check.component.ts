import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit} from '@angular/core';
import {ArrayCheck} from '../core/ArrayCheck';

@Component({
  selector: 'app-grid-op-annotation-check',
  templateUrl: '../grid/grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
@ArrayCheck(['array'])
export class GridOpAnnotationCheckComponent implements OnInit, DoCheck {

  @Input() array: any[];
  @Input() randomInput: boolean;
  public type = 'OnPush with annotation and DoCheck';

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('original');
  }

}
