import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*************adding ag grid **********/
import {Grid} from 'ag-grid';
import {FormsModule} from '@angular/forms';
import 'ag-grid-enterprise';
import {AgGridModule} from 'ag-grid-angular/main';
import { AppComponent } from './app.component';
import { MaydatatableComponent } from './maydatatable/maydatatable.component';


@NgModule({
  declarations: [
    AppComponent,
    MaydatatableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
