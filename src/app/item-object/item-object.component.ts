import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-object',
  templateUrl: './item-object.component.html',
  styleUrls: ['./item-object.component.css']
})
export class ItemObjectComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
