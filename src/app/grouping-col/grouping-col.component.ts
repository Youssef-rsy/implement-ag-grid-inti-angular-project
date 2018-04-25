import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-grouping-col',
  templateUrl: './grouping-col.component.html',
  styleUrls: ['./grouping-col.component.css']
})
export class GroupingColComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private autoGroupColumnDef;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        aggFunc: "sum",
        enableValue: true,
        allowedAggFuncs: ["sum", "min", "max"]
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        aggFunc: "min",
        enableValue: true
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        aggFunc: "max",
        enableValue: true
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        aggFunc: "avg",
        enableValue: true
      },
      {
        headerName: "Age",
        field: "age",
        width: 90
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        rowGroup: true
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110
      }
    ];
    this.autoGroupColumnDef = {
      headerName: "Athlete",
      field: "athlete",
      width: 200,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        footerValueGetter: '"Total (" + x + ")"',
        padding: 5
      }
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }
  ngOnInit(){
  }

}
