import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { GridComponent } from './grid/grid.component';
import { GridOpComponent } from './grid-op/grid-op.component';
import { ItemObjectComponent } from './item-object/item-object.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridTrackByComponent } from './grid-track-by/grid-track-by.component';
import { GridTrackByOpComponent } from './grid-track-by-op/grid-track-by-op.component';
import { ItemOpComponent } from './item-op/item-op.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditItemOpComponent } from './edit-item-op/edit-item-op.component';
import { GridOpAnnotationComponent } from './grid-op-annotation/grid-op-annotation.component';
import { GridOpAnnotationCheckComponent } from './grid-op-annotation-check/grid-op-annotation-check.component';
import { SomeComponent } from './some/some.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    GridComponent,
    GridOpComponent,
    ItemObjectComponent,
    DashboardComponent,
    GridTrackByComponent,
    GridTrackByOpComponent,
    ItemOpComponent,
    EditItemComponent,
    EditItemOpComponent,
    GridOpAnnotationComponent,
    GridOpAnnotationCheckComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
