import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public items = [
    {company: 'Init 1', contact: 'Init'},
    {company: 'Init 2', contact: 'Init'},
    {company: 'Init 3', contact: 'Init'},
  ];
  public counter = 0;
  public random = true;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.items.push({company: 'A' + (++this.counter), contact: 'B' + this.counter});
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
        this.items[position] = {company: 'Total change', contact: 'B' + Date.now()};
      } else {
        this.items[position].company = 'Value change';
        this.items[position].contact = 'B' + Date.now();
      }
    }
  }

  changeRef() {
    this.items = [...this.items];
  }
}
