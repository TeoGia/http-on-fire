import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../interfaces/option.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() inputVal: Option[];
  @Output() inputChange: EventEmitter<Option[]>;

  public sendingSum: number;

  constructor() {
    this.sendingSum = 0;
    this.inputChange = new EventEmitter<Option[]>();
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
    this.inputChange.emit(this.inputVal);
  }

  /**
   * Adds a new row to the data table.
   */
  public addRow() {
    this.inputVal = [ ...this.inputVal, { use: true, key: '', value: '' } ];
    this.inputChange.emit(this.inputVal);
  }

}
