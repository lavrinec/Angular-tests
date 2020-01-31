import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private defaultItem = { company: 'Bla bla', contact: 'Blu blu' };
  private _items = [
    { company: 'Init 1', contact: 'Init' },
    { company: 'Init 2', contact: 'Init' },
    { company: 'Init 3', contact: 'Init' },
    this.defaultItem,
  ];
  get items() {
    console.log('Get');
    return this._items;
  }
  set items(items) {
    this._items = items;
  }
  public counter = 0;
  public random = true;
  public inside = false;

  constructor() {}

  ngOnInit() {}

  add() {
    this.items.push({ company: 'A' + ++this.counter, contact: 'B' + this.counter });
  }

  remove(first: boolean = false) {
    if (first) {
      return this.items.shift();
    } else {
      return this.items.pop();
    }
  }

  update(replace: boolean) {
    const position = Number(replace);
    if (this.items[position]) {
      if (replace) {
        this.items[position] = { company: 'Total change', contact: 'B' + Date.now() };
      } else {
        this.items[position].company = 'Value change';
        this.items[position].contact = 'B' + Date.now();
      }
    }
  }

  changeRef() {
    this.items = JSON.parse(JSON.stringify(this.items));
    // this.items[0].company = 'LOL';
    delete this.items[3];
    this.defaultItem.company = 'AAA';
    this.items[3] = this.defaultItem;
    // this.items = [...this.items];
  }

  itemChange(item: any, index: number) {
    console.log(item);
    this.items = [...this.items];
    this.items[index] = item;
  }
}
