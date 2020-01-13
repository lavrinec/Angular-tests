import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() array: any[];
  @Input() randomInput: boolean;

  public type = 'Default';

  constructor() { }

  ngOnInit() {
  }

}
