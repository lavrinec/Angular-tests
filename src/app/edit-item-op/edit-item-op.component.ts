import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-edit-item-op',
  templateUrl: '../edit-item/edit-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditItemOpComponent implements OnInit, OnDestroy {

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

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   company: [this.item.company, Validators.compose([Validators.required])],
    //   contact: this.item.contact,
    // });
    // this.form.valueChanges
    //   .pipe(
    //     takeUntil(this.onDestroy$)
    //   )
    //   .subscribe(changes => {
    //     console.log(changes);
    //     this.itemChange.emit(changes);
    //   });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
