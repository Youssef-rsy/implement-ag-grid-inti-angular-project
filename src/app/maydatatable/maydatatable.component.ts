import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi, GridOptions} from "ag-grid/main";
import "ag-grid-enterprise";
@Component({
  selector: 'grd',
  templateUrl: './maydatatable.component.html',
  styleUrls: ['./maydatatable.component.css']
})
export class MaydatatableComponent implements OnInit {
  private gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];

  private api: GridApi;
  private columnApi: ColumnApi;

  constructor() {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this
      },
      onGridReady:(params)=>{
        this.api = params.api;
        this.columnApi = params.columnApi;
        console.log("grid is ready");
      },
      enableColResize: true
    };
    this.rowData = this.row;
    this.columnDefs = this.col;

  }




  col = new Array(

    {headerName: "Name", field: "name", width: 150, filter: 'text'},
    {headerName: "Country", field: "country", width: 150, filter: 'text'},
    {headerName: "Age", field: "age", width: 150, filter: 'numericColumn'},
    {headerName: "Score", field: "score", width: 150, filter: 'numericColumn' , cellStyle: (params)=>{
        if (params.value<= 30) {
          //mark police cells as red
          return {color: 'white', backgroundColor: '#d63031'};
        } else if (params.value > 30 && params.value <= 60)   {
            return {color: 'white', backgroundColor: "#fdcb6e"};
        }else{
          return {color: 'white', backgroundColor: "#00b894"};
        }
      }},
    {headerName:"Productive" ,children: [
        {headerName: "Tortal", field: "total", width: 150, filter: 'text' ,  columnGroupShow: "close"},
        {headerName: "Number 1", field: "Number 1", width: 150, filter: 'text' ,  columnGroupShow: "open"},
        {headerName: "Number 2", field: "Number 2", width: 150, filter: 'text' ,  columnGroupShow: "open"}
      ]}
   );


  row= new Array( { "name":"rossamy youssef" , "country":"morroco" , "age":"23" , "score":"90"},
    { "name":"oussama fouade" , "country":"morroco" , "age":"24" , "score":"80"},
    { "name":"chouaib bouzagaren" , "country":"morroco" , "age":"24" , "score":"75"},
    { "name":"chouaib rikzi" , "country":"morroco" , "age":"24" , "score":"56"},
    { "name":"hamza saber" , "country":"morroco" , "age":"23" , "score":"39"},
    { "name": "saber fakharany" , "country":"morroco" , "age":"23" , "score":"54"},
    { "name":"abdelhakim hadi" , "country":"morroco" , "age":"23" , "score":"94"},
    { "name":"youssef jaroune" , "country":"morroco" , "age":"23" , "score":"10"},
    { "name":"simo rosssamy" , "country":"morroco" , "age":"23" , "score":"66"});


  ngOnInit() {}


}

/*
  private createColumnDefs() {
    const columnDefs = [
      {
        headerName: '#',
        width: 30,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true
      },
      {
        headerName: 'Employee',
        children: [
          {
            headerName: "Name",
            field: "name",
            width: 150,
            pinned: true
          },
          {
            headerName: "Country",
            field: "country",
            width: 150,
            // an example of using a non-React cell renderer
            //cellRenderer: countryCellRenderer,
            pinned: true,
            filter: 'set',
            filterParams: {
              //cellRenderer: countryCellRenderer,
              cellHeight: 20
            },
            cellEditor: 'agRichSelect',
            cellEditorParams: {
              values: ["Argentina", "Brazil", "Colombia", "France", "Germany", "Greece", "Iceland", "Ireland",
                "Italy", "Malta", "Portugal", "Norway", "Peru", "Spain", "Sweden", "United Kingdom",
                "Uruguay", "Venezuela", "Belgium", "Luxembourg"],
              //cellRenderer: countryCellRenderer,
            },
            editable: true
          },
          {
            headerName: "Date of Birth",
            field: "dob",
            width: 110,
            pinned: true,
          /*  cellRenderer: function (params) {
              return pad(params.value.getDate(), 2) + '/' +
                pad(params.value.getMonth() + 1, 2) + '/' +
                params.value.getFullYear();
            },
            filter: 'date',
            columnGroupShow: 'open'
        /*  }
        ]
      },
      {
        headerName: 'Contact',
        children: [
          {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
          {headerName: "Landline", field: "landline", width: 150, filter: 'text'},
          {headerName: "Address", field: "address", width: 500, filter: 'text'}
        ]
      }
    ];

    return columnDefs;
  }
}
*/

