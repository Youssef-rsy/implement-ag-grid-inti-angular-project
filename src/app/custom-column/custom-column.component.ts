import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main";
import "ag-grid-enterprise";
import { PercentageCellComponent } from './../percentage-cell/percentage-cell.component';

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

  public defaultColDef;
  private autoGroupColumnDef;

  private api: GridApi;
  private columnApi: ColumnApi;
  ngOnInit(){
    console.log("hello world!");
  }
  cellstlgx3 = (params)=>{
    if (params.value< 0) {
      //mark police cells as red
      return {color: '#d63031'};
    } else if (params.value > 0 ){
      return {color: '#00b894'};
    }
  };
  totalcellstl = (params)=>{
    if (params.value<= 30) {
      //mark police cells as red
      return {color: 'white', backgroundColor: '#d63031'};
    } else if (params.value > 30 && params.value <= 60)   {
      return {color: 'white', backgroundColor: "#fdcb6e" ,  };
    }else{
      return {color: 'white', backgroundColor: "#00b894" ,};
    }
  };
  constructor() {

    this.defaultColDef = { width: 120 };
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
      {headerName: "", field: "" , children:[
          {headerName: "Dep", field: "dep" ,  width: 150, pinned: true},
          {headerName: "Secteur", field: "secteur" ,  width: 150, pinned: true },
        ]},

      {headerName: "Groupe A", field: "groupea" ,columnGroupShow: "close", children:[
          {headerName: "Groupe A1", field: "groupea1" ,columnGroupShow: "open", children:[
              {headerName: "Groupe A11", field: "groupea11" ,columnGroupShow: "open",headerClass: "resizable-header"},
              {headerName: "Groupe A12", field: "groupea12" ,columnGroupShow: "open"},
              {headerName: "Groupe_A13", field: "groupea13" ,columnGroupShow: "open",colId: "g1",cellStyle:this.cellstlgx3,
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                  return (params.data.groupea12 - params.data.groupea11);
                }},
            ]},
          {headerName: "Groupe A2", field: "groupea2" ,columnGroupShow: "open", children:[
              {headerName: "Groupe A21", field: "groupea21" ,columnGroupShow: "open" },
              {headerName: "Groupe A22", field: "groupea22",columnGroupShow: "open",},
              {headerName: "Groupe A23", field: "groupea23" ,columnGroupShow: "open",colId: "g2",cellStyle:this.cellstlgx3,
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                return (params.data.groupea22 - params.data.groupea21);
              }}
            ]},
          {headerName: "Total", field: "groupea3" , children:[
              {headerName: "total Ax1", field: "groupea31",colId: "a11&a12",
                cellClass: "number-cell",
                valueGetter: function totalaX1(params) {
                  return (params.data.groupea11 + params.data.groupea21);
                } },
              {headerName: "Groupe Ax2", field: "groupea32" ,colId: "a12&a22",
                cellClass: "number-cell",
                valueGetter: function totalaX2(params) {
                  return (params.data.groupea12 + params.data.groupea22);
                }},
              {headerName: "Group Ax3", field: "groupea33" ,colId: "a13&a23",cellStyle:this.cellstlgx3 ,
                cellClass: "number-cell",
                valueGetter: function totalaX3(params) {

                 return params.getValue("g1")+params.getValue("g2") ;
              }},
              {headerName: "%", field: "%" ,colId: "totoalligne", cellRendererFramework: PercentageCellComponent,
                cellClass: "number-cell",
                valueGetter: function pourcentage(params) {
                  return (params.getValue("a13&23")%params.getValue("a11&a12"))+100;
                }}
            ]},
        ]},
      {headerName: "", field: ""},
      {headerName: "Groupe A", field: "groupea" ,columnGroupShow: "close",  children:[
          {headerName: "Groupe A1", field: "groupea1" ,columnGroupShow: "open", children:[
              {headerName: "Groupe A11", field: "groupea11" ,columnGroupShow: "open",headerClass: "resizable-header"},
              {headerName: "Groupe A12", field: "groupea12" ,columnGroupShow: "open"},
              {headerName: "Groupe_A13", field: "groupea13" ,columnGroupShow: "open",colId: "g1",cellStyle:this.cellstlgx3,
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                  return (params.data.groupea12 - params.data.groupea11);
                }},
            ]},
          {headerName: "Groupe A2", field: "groupea2" ,columnGroupShow: "open", children:[
              {headerName: "Groupe A21", field: "groupea21" ,columnGroupShow: "open" },
              {headerName: "Groupe A22", field: "groupea22",columnGroupShow: "open",},
              {headerName: "Groupe A23", field: "groupea23" ,columnGroupShow: "open",colId: "g2",cellStyle:this.cellstlgx3,
                cellClass: "number-cell",
                valueGetter: function aPlusBValueGetter(params) {
                  return (params.data.groupea22 - params.data.groupea21);
                }}
            ]},
          {headerName: "Total", field: "groupea3" , children:[
              {headerName: "total Ax1", field: "groupea31",colId: "a11&a12",
                cellClass: "number-cell",
                valueGetter: function totalaX1(params) {
                  return (params.data.groupea11 + params.data.groupea21);
                } },
              {headerName: "Groupe Ax2", field: "groupea32" ,colId: "a12&a22",
                cellClass: "number-cell",
                valueGetter: function totalaX2(params) {
                  return (params.data.groupea12 + params.data.groupea22);
                }},
              {headerName: "Group Ax3", field: "groupea33" ,colId: "a13&a23",cellStyle:this.cellstlgx3 ,
                cellClass: "number-cell",
                valueGetter: function totalaX3(params) {

                  return params.getValue("g1")+params.getValue("g2") ;
                }},
              {headerName: "%", field: "%" ,colId: "totoalligne", cellRendererFramework: PercentageCellComponent,
                cellClass: "number-cell",
                valueGetter: function pourcentage(params) {
                  return (params.getValue("a13&23")%params.getValue("a11&a12"))+100;
                }}
            ]},
        ]},




  ];


    this.rowData = [
      {groupea11: 0.0,groupea12:0.0 ,groupea21:0.4 ,groupea22:49.6 ,groupea23:1 ,groupea31:1 , groupea32:1 , groupea33:1 },
      {groupea11: 0.5,groupea12:0.0 ,groupea21:0.0 ,groupea22:0.0 ,groupea23:1 ,groupea31: 1, groupea32: 1, groupea33: 1},
      {groupea11: 34.3,groupea12:67.7  ,groupea21:190.0 ,groupea22:118.4 ,groupea23:1 ,groupea31: 1, groupea32: 1, groupea33: 1},
      {groupea11: 34.1,groupea12:46.2 ,groupea21:7.3 ,groupea22:4.4 ,groupea23: 1,groupea31:1 , groupea32: 1, groupea33: 1}

    ];

  }






}
