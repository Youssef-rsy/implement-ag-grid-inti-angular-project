import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main";
import "ag-grid-enterprise";

@Component({
  selector: 'app-custom-column',
  templateUrl: './custom-column.component.html',
  styleUrls: ['./custom-column.component.css']
})
export class CustomColumnComponent implements OnInit {
  // HI THERE
  private gridOption:GridOptions ;
  public rowData: any[];
  public columnDefs: any[];

  private api: GridApi;
  private columnApi: ColumnApi;


  constructor() {
    this.gridOption = <GridOptions>{
      context: {
        componentParent: this
      },
    onGridReady:(params)=>{
      this.api = params.api;
      this.columnApi = params.columnApi;
      }
    };

    this.columnDefs = [
      /*{headerName: "", field: "" , children:[
          {headerName: "Dep", field: "dep"  },
          {headerName: "Secteur", field: "secteur" },
        ]},
*/
      {headerName: "Groupe A", field: "groupea" , children:[
          {headerName: "Groupe A1", field: "groupea1" , children:[
              {headerName: "Groupe A11", field: "groupea11"  },
              {headerName: "Groupe A12", field: "groupea12" },
              {headerName: "Groupe A13", field: "groupea13" ,colId: "a11&a12",
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                  return (params.data.groupea12 - params.data.groupea11);
                }},
            ]},
          {headerName: "Groupe A2", field: "groupea2" , children:[
              {headerName: "Groupe A21", field: "groupea21" },
              {headerName: "Groupe A22", field: "groupea22" },
              {headerName: "Groupe A23", field: "groupea23" ,colId: "a21&a22",
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                return (params.data.groupea22 - params.data.groupea21);
              }}
            ]},
          {headerName: "Total", field: "groupea3" , children:[
              {headerName: "total Ax&", field: "groupea31",colId: "a11&a12",
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                  return (params.data.groupea11 + params.data.groupea21);
                } },
              {headerName: "Groupe Ax2", field: "groupea32" ,colId: "a12&a22",
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                  return (params.data.groupea12 + params.data.groupea22);
                }},
              {headerName: "%", field: "groupea33" ,colId: "totoalligne",
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                return (params.data.groupea31 / params.data.groupea32);
              }},
            ]},
        ]},

    ];


    this.rowData = [
      {groupea11: 0.0,groupea12:0.0 ,groupea21:0.4 ,groupea22:49.6 ,groupea23:1 ,groupea31:1 , groupea32:1 , groupea33:1 },
      {groupea11: 0.5,groupea12:0.0 ,groupea21:0.0 ,groupea22:0.0 ,groupea23:1 ,groupea31: 1, groupea32: 1, groupea33: 1},
      {groupea11: 34.3,groupea12:67.7  ,groupea21:190.0 ,groupea22:118.4 ,groupea23:1 ,groupea31: 1, groupea32: 1, groupea33: 1},
      {groupea11: 34.1,groupea12:46.2 ,groupea21:7.3 ,groupea22:4.4 ,groupea23: 1,groupea31:1 , groupea32: 1, groupea33: 1}

    ]

  }

  ngOnInit() {
  }



}
