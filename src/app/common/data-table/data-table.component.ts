import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../interfaces/option.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() inputVal: Option[];

  constructor() { }

  ngOnInit() {
  }

}
