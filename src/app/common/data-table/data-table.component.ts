import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../interfaces/option.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() inputVal: Option[];
  public sendingSum: number;

  constructor() {
    this.sendingSum = 0;
  }

  ngOnInit() {
    this.getSum();
  }

  /**
   * Find the total checked rows of the data table.
   */
  public getSum() {
    let sum = 0;
    for (const entry of this.inputVal) {
      if (entry.use) {
        sum++;
      }
    }
    this.sendingSum = sum;
  }

  /**
   * Removes all selected rows from the data table.
   */
  public removeSelectedRows() {
    const data: Option[] = [];
    this.inputVal.forEach((entry: Option) => {
      if (entry.use) {
        data.push(entry);
      }
    });
    this.inputVal = [ ...data ];
  }

  /**
   * Adds a new row to the data table.
   */
  public addRow() {
    this.inputVal = [ ...this.inputVal, { use: false, key: '', value: '' } ];
  }

}
