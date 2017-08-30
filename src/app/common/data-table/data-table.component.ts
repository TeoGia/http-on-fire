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
    for (const entry of this.inputVal) {
      if (entry.use) {
        this.sendingSum++;
      }
    }
  }

  /**
   * Gets the event from the checkbox selection and adds it or
   * subtracts it from the sending sum.
   * @param {boolean} checked
   */
  public getSum(checked: boolean) {
    if (checked) {
      this.sendingSum++;
    } else {
      this.sendingSum--;
    }
  }

  /**
   * Removes all selected rows from the data table.
   */
  public removeSelectedRows() {
    // TODO
  }

  /**
   * Adds a new row to the data table.
   */
  public addRow() {
    this.inputVal = [ ...this.inputVal, { use: false, key: '', value: '' } ];
  }

}
