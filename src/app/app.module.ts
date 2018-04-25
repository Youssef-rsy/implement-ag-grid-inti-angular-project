import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
/*************adding ag grid **********/
import 'ag-grid-enterprise';
import {AgGridModule} from 'ag-grid-angular/main';


import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MaydatatableComponent } from './maydatatable/maydatatable.component';
import { CustomColumnComponent } from './custom-column/custom-column.component';
import { PercentageCellComponent } from './percentage-cell/percentage-cell.component';
import { GroupingColComponent } from './grouping-col/grouping-col.component';


@NgModule({
  declarations: [
    AppComponent,
    MaydatatableComponent,
    CustomColumnComponent,
    PercentageCellComponent,
    GroupingColComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([PercentageCellComponent]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
