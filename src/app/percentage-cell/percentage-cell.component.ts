import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-cell',
  templateUrl: './percentage-cell.component.html',
  styleUrls: ['./percentage-cell.component.css']
})
export class PercentageCellComponent implements OnInit {
  private params: any;
  private value: any;
  private styles: any;

  // called on init
  agInit(params: any): void {
    this.params = params;
    this.value = this.params.value;

    this.styles = {
      width: this.value + "%",
      backgroundColor: '#00b894'
    };
    if (this.value<= 30) {
      //mark police cells as red
      this.styles.backgroundColor = '#d63031';
    } else if (this.value > 30 && this.value <= 60)   {
       this.styles.backgroundColor = "#fdcb6e" ;
    }else{
       this.styles.backgroundColor ="#00b894" ;
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
