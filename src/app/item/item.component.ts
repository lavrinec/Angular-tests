import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit, OnDestroy, OnChanges {

  @Input() item;

  constructor() { }

  ngOnInit() {
    console.log('IC on init');
  }

  ngOnDestroy(): void {
    console.log('IC on destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('IC on changes', changes);
  }

}
