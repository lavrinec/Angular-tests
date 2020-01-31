import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit, OnDestroy {
  private _item;
  @Input() set item(item) {
    this._item = item;
    this.form.setValue(this.item);
  }
  get item() {
    return this._item;
  }
  @Output() itemChange;
  form: FormGroup;
  private onDestroy$ = new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      company: ['', Validators.compose([Validators.required])],
      contact: '',
    });
    this.itemChange = this.form.valueChanges;
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
