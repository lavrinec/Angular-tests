import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-item-object',
  templateUrl: './item-object.component.html',
  styleUrls: ['./item-object.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemObjectComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  @Input() item;

  constructor() { }

  ngOnInit() {
    console.log('IO on init');
  }

  ngOnDestroy(): void {
    console.log('IO on destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('IO on changes', changes);
  }

  ngDoCheck(): void {
    console.log('IO do check');
  }

  fun(){
    console.log('FUN', this.item.company);
    return this.item.company;
  }

}
