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
    ItemOpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
